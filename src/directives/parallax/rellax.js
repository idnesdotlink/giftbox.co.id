const Rellax = function(el, options) {
  "use strict";

  let self = Object.create(Rellax.prototype);

  let posY = 0;
  let screenY = 0;
  let posX = 0;
  let screenX = 0;
  let blocks = [];
  let pause = true;

  // check what requestAnimationFrame to use, and if
  // it's not supported, use the onscroll event
  let loop =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    function(callback) {
      return setTimeout(callback, 1000 / 60);
    };

  // store the id for later use
  let loopId = null;

  // Test via a getter in the options object to see if the passive property is accessed
  let supportsPassive = false;
  try {
    let opts = Object.defineProperty({}, "passive", {
      // eslint-disable-next-line getter-return
      get: function() {
        supportsPassive = true;
      }
    });
    window.addEventListener("testPassive", null, opts);
    window.removeEventListener("testPassive", null, opts);
  } catch (e) {
    // console.log(e);
  }

  // check what cancelAnimation method to use
  let clearLoop =
    window.cancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    clearTimeout;

  // check which transform property to use
  let transformProp =
    window.transformProp ||
    (function() {
      let testEl = document.createElement("div");
      if (testEl.style.transform === null) {
        let vendors = ["Webkit", "Moz", "ms"];
        for (let vendor in vendors) {
          if (testEl.style[vendors[vendor] + "Transform"] !== undefined) {
            return vendors[vendor] + "Transform";
          }
        }
      }
      return "transform";
    })();

  // Default Settings
  self.options = {
    speed: -2,
    center: false,
    wrapper: null,
    relativeToWrapper: false,
    round: true,
    vertical: true,
    horizontal: false,
    callback: function() {}
  };

  // User defined options (might have more in the future)
  if (options) {
    Object.keys(options).forEach(function(key) {
      self.options[key] = options[key];
    });
  }

  // By default, rellax class
  if (!el) {
    el = ".rellax";
  }

  // check if el is a className or a node
  let elements = typeof el === "string" ? document.querySelectorAll(el) : [el];

  // Now query selector
  if (elements.length > 0) {
    self.elems = elements;
  }

  // The elements don't exist
  else {
    console.warn("Rellax: The elements you're trying to select don't exist.");
    return;
  }

  // Has a wrapper and it exists
  if (self.options.wrapper) {
    if (!self.options.wrapper.nodeType) {
      let wrapper = document.querySelector(self.options.wrapper);

      if (wrapper) {
        self.options.wrapper = wrapper;
      } else {
        console.warn("Rellax: The wrapper you're trying to use doesn't exist.");
        return;
      }
    }
  }

  // Get and cache initial position of all elements
  const cacheBlocks = function() {
    for (let i = 0; i < self.elems.length; i++) {
      let block = createBlock(self.elems[i]);
      blocks.push(block);
    }
  };

  // Let's kick this script off
  // Build array for cached element values
  const init = function() {
    for (let i = 0; i < blocks.length; i++) {
      self.elems[i].style.cssText = blocks[i].style;
    }

    blocks = [];

    screenY = window.innerHeight;
    screenX = window.innerWidth;
    setPosition();

    cacheBlocks();

    animate();

    // If paused, unpause and set listener for window resizing events
    if (pause) {
      window.addEventListener("resize", init);
      pause = false;
      // Start the loop
      update();
    }
  };

  // We want to cache the parallax blocks'
  // values: base, top, height, speed
  // el: is dom object, return: el cache values
  const createBlock = function(el) {
    let dataPercentage = el.getAttribute("data-rellax-percentage");
    let dataSpeed = el.getAttribute("data-rellax-speed");
    let dataZindex = el.getAttribute("data-rellax-zindex") || 0;
    let dataMin = el.getAttribute("data-rellax-min");
    let dataMax = el.getAttribute("data-rellax-max");

    // initializing at scrollY = 0 (top of browser), scrollX = 0 (left of browser)
    // ensures elements are positioned based on HTML layout.
    //
    // If the element has the percentage attribute, the posY and posX needs to be
    // the current scroll position's value, so that the elements are still positioned based on HTML layout
    let wrapperPosY = self.options.wrapper
      ? self.options.wrapper.scrollTop
      : window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    // If the option relativeToWrapper is true, use the wrappers offset to top, subtracted from the current page scroll.
    if (self.options.relativeToWrapper) {
      let scrollPosY =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      wrapperPosY = scrollPosY - self.options.wrapper.offsetTop;
    }
    let posY = self.options.vertical
      ? dataPercentage || self.options.center
        ? wrapperPosY
        : 0
      : 0;
    let posX = self.options.horizontal
      ? dataPercentage || self.options.center
        ? self.options.wrapper
          ? self.options.wrapper.scrollLeft
          : window.pageXOffset ||
            document.documentElement.scrollLeft ||
            document.body.scrollLeft
        : 0
      : 0;

    let blockTop = posY + el.getBoundingClientRect().top;
    let blockHeight = el.clientHeight || el.offsetHeight || el.scrollHeight;

    let blockLeft = posX + el.getBoundingClientRect().left;
    let blockWidth = el.clientWidth || el.offsetWidth || el.scrollWidth;

    // apparently parallax equation everyone uses
    let percentageY = dataPercentage
      ? dataPercentage
      : (posY - blockTop + screenY) / (blockHeight + screenY);
    let percentageX = dataPercentage
      ? dataPercentage
      : (posX - blockLeft + screenX) / (blockWidth + screenX);
    if (self.options.center) {
      percentageX = 0.5;
      percentageY = 0.5;
    }

    // Optional individual block speed as data attr, otherwise global speed
    let speed = dataSpeed ? dataSpeed : self.options.speed;

    let bases = updatePosition(percentageX, percentageY, speed);

    // ~~Store non-translate3d transforms~~
    // Store inline styles and extract transforms
    let style = el.style.cssText;
    let transform = "";

    // Check if there's an inline styled transform
    let searchResult = /transform\s*:/i.exec(style);
    if (searchResult) {
      // Get the index of the transform
      let index = searchResult.index;

      // Trim the style to the transform point and get the following semi-colon index
      let trimmedStyle = style.slice(index);
      let delimiter = trimmedStyle.indexOf(";");

      // Remove "transform" string and save the attribute
      if (delimiter) {
        transform = " " + trimmedStyle.slice(11, delimiter).replace(/\s/g, "");
      } else {
        transform = " " + trimmedStyle.slice(11).replace(/\s/g, "");
      }
    }

    return {
      baseX: bases.x,
      baseY: bases.y,
      top: blockTop,
      left: blockLeft,
      height: blockHeight,
      width: blockWidth,
      speed: speed,
      style: style,
      transform: transform,
      zindex: dataZindex,
      min: dataMin,
      max: dataMax
    };
  };

  // set scroll position (posY, posX)
  // side effect method is not ideal, but okay for now
  // returns true if the scroll changed, false if nothing happened
  const setPosition = function() {
    let oldY = posY;
    let oldX = posX;

    posY = self.options.wrapper
      ? self.options.wrapper.scrollTop
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollTop || window.pageYOffset;
    posX = self.options.wrapper
      ? self.options.wrapper.scrollLeft
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollLeft || window.pageXOffset;
    // If option relativeToWrapper is true, use relative wrapper value instead.
    if (self.options.relativeToWrapper) {
      let scrollPosY =
        (document.documentElement || document.body.parentNode || document.body)
          .scrollTop || window.pageYOffset;
      posY = scrollPosY - self.options.wrapper.offsetTop;
    }

    if (oldY != posY && self.options.vertical) {
      // scroll changed, return true
      return true;
    }

    if (oldX != posX && self.options.horizontal) {
      // scroll changed, return true
      return true;
    }

    // scroll did not change
    return false;
  };

  // Ahh a pure function, gets new transform value
  // based on scrollPosition and speed
  // Allow for decimal pixel values
  const updatePosition = function(percentageX, percentageY, speed) {
    let result = {};
    let valueX = speed * (100 * (1 - percentageX));
    let valueY = speed * (100 * (1 - percentageY));

    result.x = self.options.round
      ? Math.round(valueX)
      : Math.round(valueX * 100) / 100;
    result.y = self.options.round
      ? Math.round(valueY)
      : Math.round(valueY * 100) / 100;

    return result;
  };

  // Remove event listeners and loop again
  const deferredUpdate = function() {
    window.removeEventListener("resize", deferredUpdate);
    window.removeEventListener("orientationchange", deferredUpdate);
    (self.options.wrapper ? self.options.wrapper : window).removeEventListener(
      "scroll",
      deferredUpdate
    );
    (self.options.wrapper
      ? self.options.wrapper
      : document
    ).removeEventListener("touchmove", deferredUpdate);

    // loop again
    loopId = loop(update);
  };

  // Loop
  const update = function() {
    if (setPosition() && pause === false) {
      animate();

      // loop again
      loopId = loop(update);
    } else {
      loopId = null;

      // Don't animate until we get a position updating event
      window.addEventListener("resize", deferredUpdate);
      window.addEventListener("orientationchange", deferredUpdate);
      (self.options.wrapper ? self.options.wrapper : window).addEventListener(
        "scroll",
        deferredUpdate,
        supportsPassive ? { passive: true } : false
      );
      (self.options.wrapper ? self.options.wrapper : document).addEventListener(
        "touchmove",
        deferredUpdate,
        supportsPassive ? { passive: true } : false
      );
    }
  };

  // Transform3d on parallax element
  const animate = function() {
    let positions;
    for (let i = 0; i < self.elems.length; i++) {
      let percentageY =
        (posY - blocks[i].top + screenY) / (blocks[i].height + screenY);
      let percentageX =
        (posX - blocks[i].left + screenX) / (blocks[i].width + screenX);

      // Subtracting initialize value, so element stays in same spot as HTML
      positions = updatePosition(percentageX, percentageY, blocks[i].speed); // - blocks[i].baseX;
      let positionY = positions.y - blocks[i].baseY;
      let positionX = positions.x - blocks[i].baseX;

      // The next two "if" blocks go like this:
      // Check if a limit is defined (first "min", then "max");
      // Check if we need to change the Y or the X
      // (Currently working only if just one of the axes is enabled)
      // Then, check if the new position is inside the allowed limit
      // If so, use new position. If not, set position to limit.

      // Check if a min limit is defined
      if (blocks[i].min !== null) {
        if (self.options.vertical && !self.options.horizontal) {
          positionY = positionY <= blocks[i].min ? blocks[i].min : positionY;
        }
        if (self.options.horizontal && !self.options.vertical) {
          positionX = positionX <= blocks[i].min ? blocks[i].min : positionX;
        }
      }

      // Check if a max limit is defined
      if (blocks[i].max !== null) {
        if (self.options.vertical && !self.options.horizontal) {
          positionY = positionY >= blocks[i].max ? blocks[i].max : positionY;
        }
        if (self.options.horizontal && !self.options.vertical) {
          positionX = positionX >= blocks[i].max ? blocks[i].max : positionX;
        }
      }

      let zindex = blocks[i].zindex;

      // Move that element
      // (Set the new translation and append initial inline transforms.)
      let translate =
        "translate3d(" +
        (self.options.horizontal ? positionX : "0") +
        "px," +
        (self.options.vertical ? positionY : "0") +
        "px," +
        zindex +
        "px) " +
        blocks[i].transform;
      self.elems[i].style[transformProp] = translate;
    }
    self.options.callback(positions);
  };

  self.destroy = function() {
    for (let i = 0; i < self.elems.length; i++) {
      self.elems[i].style.cssText = blocks[i].style;
    }

    // Remove resize event listener if not pause, and pause
    if (!pause) {
      window.removeEventListener("resize", init);
      pause = true;
    }

    // Clear the animation loop to prevent possible memory leak
    clearLoop(loopId);
    loopId = null;
  };

  // Init
  init();

  // Allow to recalculate the initial values whenever we want
  self.refresh = init;

  return self;
};

export default Rellax;
