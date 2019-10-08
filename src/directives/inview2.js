"use strict";
let inView = require("in-view");
let shortid = require("shortid");
/**
  * return boolen
    - check typeof object
**/
const isDefine = function(v) {
    return typeof v !== "undefined";
  },
  isString = function(v) {
    return typeof v === "string";
  },
  isNumber = function(v) {
    return typeof v === "number";
  },
  isFunc = function(v) {
    return typeof v === "function";
  },
  isArray = function(v) {
    return Array.isArray(v);
  },
  isObject = function(v) {
    return !isArray(v) && typeof v === "object";
  };

// new object function
// for unsupport classList
const nativeClasList = function(el) {
  let className = el.className;
  let listClass = className.split(" ");
  this.classList = listClass;
  this.el = el;
};
nativeClasList.prototype.get = function() {
  return this.classList;
};
nativeClasList.prototype.add = function(className) {
  let classList = this.classList;
  if (classList.indexOf(className) == -1) {
    classList.push(className);
    this.el.className = classList.join(" ");
  }
};

nativeClasList.prototype.remove = function(className) {
  let classList = this.classList;
  if (classList.indexOf(className) >= 0) {
    let index = classList.indexOf(className);
    classList.splice(index, 1);
    this.el.className = classList.join(" ");
  }
};
// define classList object
const _classList = function(el) {
  this.el = el;
  if (typeof el.classList !== "undefined") {
    // if classList support
    this.old = false;
  } else {
    // browser class unsupport classList
    this.classList = new nativeClasList(el);
    this.old = true;
  }
};
// add classList
_classList.prototype.add = function(className) {
  if (this.old) {
    this.classList.add(className);
    return;
  }
  if (!this.hasClass(className)) {
    this.el.classList.add(className);
  }
};
// remove classList
_classList.prototype.remove = function(className) {
  if (this.old) {
    this.classList.remove(className);
    return;
  }
  if (this.hasClass(className)) {
    this.el.classList.remove(className);
  }
};
// get Class List
_classList.prototype.get = function() {
  if (this.old) {
    return this.classList.get();
  }
  return this.el.classList;
};
_classList.prototype.hasClass = function(className) {
  let classNames = this.el.className;
  let listClass = classNames.split(" ");
  if (listClass.indexOf(className) >= 0) {
    return true;
  }
  return false;
};

const classList = function(el) {
  return new _classList(el);
};
/**
  * return boolen
    - check if key has in object
**/
const hasKey = function(obj, src) {
  let result = false;
  let key;
  for (key in obj) {
    if (obj.hasOwnProperty(key) && key === src) result = true;
  }
  return result;
};

/**
  * return number
    - counting key of object
**/
const objLength = function(v) {
  let result = 0;
  let key;
  for (key in v) {
    v.hasOwnProperty(key) && result++;
  }
  return result;
};
/**
  * return number
    - check element class
**/
const hasClass = function(el, check) {
  let cls = el.classList;
  let size = cls.length;
  let result = false;
  let i = 0;
  for (i; i < size; i++) {
    if (cls[i].toString() === check) result = true;
  }
  return result;
};
/**
  * return object{is → boolen, count → number}
    - check object has defined in array
**/
const hasObj_Array = function(v, search, val) {
  let defined = Object.create(null);
  defined.is = false;
  defined.count = 0;
  let length = v.length;
  let i;
  for (i = 0; i < length; i++) {
    if (isDefine(v[i][search])) {
      if (isDefine(val) && v[i][search] === val) {
        defined.is = true;
        defined.count += 1;
      }
    }
  }
  return defined;
};

// count* → number
let countEntered = 0;
let countExits = 0;

/**
  * return object{$enter → array, $exits → array, enter → string, exit → string, register → array, values → object{}}
    - create object
**/
let createEl = Object.create(null);
createEl.$enter = [];
createEl.$exits = [];
createEl.enter = "";
createEl.exit = "";
createEl.register = [];
createEl.values = {};

/**
  * (el → dom, classid → string)
    - add element has enter
**/
const _element_enter = function(el, classid) {
  createEl.enter = el;
  let cElm_exits = createEl.$exits.length;

  // remove element if has in createEl.$exits
  let i;
  if (cElm_exits > 0) {
    for (i = 0; i < cElm_exits; i++) {
      // make sure that element is exits
      if (
        isDefine(createEl.$exits[i]) &&
        isDefine(createEl.$exits[i].class) &&
        createEl.$exits[i].class === classid
      ) {
        createEl.$exits.splice(i, 1);
      }
    }
  }

  // push an element
  if (!hasObj_Array(createEl.$enter, "class", classid).is)
    createEl.$enter.push({ class: classid, el: el });
};

/**
  * (el → dom, classid → string)
    - add element has exit
**/
const element_exit = function(el, classid) {
  createEl.exit = el;
  let cElm_enter = createEl.$enter.length;

  // remove element if has in createEl.$enter
  let i;
  if (cElm_enter > 0) {
    for (i = 0; i < cElm_enter; i++) {
      if (
        isDefine(createEl.$enter[i]) &&
        isDefine(createEl.$enter[i].class) &&
        createEl.$enter[i].class === classid
      ) {
        createEl.$enter.splice(i, 1);
      }
    }
  }

  // push an element
  if (!hasObj_Array(createEl.$exits, "class", classid).is)
    createEl.$exits.push({ class: classid, el: el });
};

/**
  * (rw → string)
  * return string
    - check and get class ID
**/
const obsclassreg = function(rw) {
  let result;
  let rgsize = createEl.register.length;
  let i;
  for (i = 0; i < rgsize; i++) {
    if (createEl.register[i].rawName === rw)
      result = createEl.register[i].classid;
  }
  return result;
};
/**
  * (css → string)
  * return string
    - create javascript stylesheet name
**/
const cssjs = function(css) {
  css = css.split("-");
  let result = css[0] === "float" ? "cssFloat" : css[0];
  let size = css.length;
  let i;
  for (i = 0; i < size; i++) {
    if (i > 0) result += css[i].charAt(0).toUpperCase() + css[i].substr(1);
  }
  return result;
};

/**
  * return object
    - define vue-inview object
**/
const vue_inview = function() {};

/**
  * (arg → string, classId → string, callback → function)
    - register inView handler
**/
const _$eventview = function(arg, classId, callback) {
  let view = inView("." + classId);
  arg === "on"
    ? view.on("enter", callback.enter).on("exit", callback.exit)
    : arg === "once"
    ? view.once("enter", callback.enter).once("exit", callback.exit)
    : console.warn("[in-view] event handler not found");
};

/**
  * ($m → object{*})
  * return string
    - convert modifiers object as string
**/
const object_modifiers = function($m) {
  let convert;
  let key;
  for (key in $m) {
    if ($m.hasOwnProperty(key) && $m[key] === true) {
      if (isDefine(convert)) convert += "." + key;
      else convert = key;
    }
  }
  return convert;
};

/**
  * (arg → string)
  * return string
    - check and get argument
**/
const $arg = function(arg) {
  let result;
  switch (arg) {
    case "on":
      result = arg;
      break;
    case "once":
      result = arg;
      break;
    case "class":
      result = arg;
      break;
    case "style":
      result = arg;
      break;
    case "enter":
      result = arg;
      break;
    case "leave":
      result = arg;
      break;
    case "animate":
      result = arg;
      break;
    case "parent":
      result = arg;
      break;
    default:
      console.warn("[in-view] argument ${arg} undefined");
  }
  return result;
};

/**
  * (bidd → object{arg → string, modifiers → array}, callback → function)
    - check and call callback action
**/
const defaultAction = function(bidd, callback) {
  if (!isDefine(bidd.arg)) callback();
  if (
    bidd.arg === "on" ||
    (bidd.arg === "once" && objLength(bidd.modifiers) === 0)
  )
    callback();
};

/**
  * (clss → string | object | array, el → dom)
    - add and remove class of element
**/
const object_class = function(clss, el) {
  if (isString(clss)) classList(el).add(clss);
  if (isObject(clss)) {
    let classArr = el.className.split(" ");
    let key;
    for (key in clss) {
      if (classArr.indexOf(key) && clss[key] === false)
        classList(el).remove(key);
      if (clss.hasOwnProperty(key) && clss[key] === true)
        classList(el).add(key);
    }
  }
  if (isArray(clss)) {
    let i;
    for (i = 0; i < clss.length; i++) {
      classList(el).add(clss[i]);
    }
  }
};

/**
  * (css →  object | array, el → dom)
    - add and remove style of element
**/
const object_style = function(css, el) {
  let style = el.style;
  if (isObject(css)) {
    let key;
    for (key in css) {
      if (isDefine(style[cssjs(key)])) style[cssjs(key)] = css[key];
    }
  }
  if (isArray(css)) {
    let size = css.length;
    let i;
    for (i = 0; i < size; i++) {
      if (isDefine(style[cssjs(css[i])])) style[cssjs(css[i])] = "";
    }
  }
};

/**
  * (animateClass → array)
    - defined all animation
**/
let animateClass = [
  "bounce",
  "flash",
  "pulse",
  "rubberBand",
  "shake",
  "headShake",
  "swing",
  "tada",
  "wobble",
  "jello",
  "bounceIn",
  "bounceInDown",
  "bounceInLeft",
  "bounceInRight",
  "bounceInUp",
  "bounceOut",
  "bounceOutDown",
  "bounceOutLeft",
  "bounceOutRight",
  "bounceOutUp",
  "fadeIn",
  "fadeInDown",
  "fadeInDownBig",
  "fadeInLeft",
  "fadeInLeftBig",
  "fadeInRight",
  "fadeInRightBig",
  "fadeInUp",
  "fadeInUpBig",
  "fadeOut",
  "fadeOutDown",
  "fadeOutDownBig",
  "fadeOutLeft",
  "fadeOutLeftBig",
  "fadeOutRight",
  "fadeOutRightBig",
  "fadeOutUp",
  "fadeOutUpBig",
  "flipInX",
  "flipInY",
  "flipOutX",
  "flipOutY",
  "lightSpeedIn",
  "lightSpeedOut",
  "rotateIn",
  "rotateInDownLeft",
  "rotateInDownRight",
  "rotateInUpLeft",
  "rotateInUpRight",
  "rotateOut",
  "rotateOutDownLeft",
  "rotateOutDownRight",
  "rotateOutUpLeft",
  "rotateOutUpRight",
  "hinge",
  "jackInTheBox",
  "rollIn",
  "rollOut",
  "zoomIn",
  "zoomInDown",
  "zoomInLeft",
  "zoomInRight",
  "zoomInUp",
  "zoomOut",
  "zoomOutDown",
  "zoomOutLeft",
  "zoomOutRight",
  "zoomOutUp",
  "slideInDown",
  "slideInLeft",
  "slideInRight",
  "slideInUp",
  "slideOutDown",
  "slideOutLeft",
  "slideOutRight",
  "slideOutUp"
];

/**
  * (data → string)
    - generate inverse direction
**/
const animate_inverse = function(data) {
  let inverse = [["In", "Out"], ["X", "Y"], ["Down", "Up"], ["Left", "Right"]];
  let i = 0;
  let size = inverse.length;
  let result;
  for (i; i < size; i++) {
    let index = inverse[i];
    if (index.indexOf(data) >= 0) {
      let colm = index.indexOf(data);
      result = colm === 0 ? index[1] : index[0];
    }
  }
  return result;
};

/**
  * (an → string, type → string)
    - generate animation direction
**/
const animate_direction = function(an, type) {
  let data = an;
  let animate;
  let result;

  if (/^[a-z]+[A-Z][a-z]+$/.test(data)) {
    animate = data.match(/^([a-z]+)([A-Z][a-z]+)$/);
    if (type === "toggle" && isDefine(animate_inverse(animate[2]))) {
      result = animate[1] + animate_inverse(animate[2]);
    }
  }
  if (/^[a-z]+[A-Z][a-z]+[A-Z]$/.test(data)) {
    animate = data.match(/^([a-z]+)([A-Z][a-z]+)([A-Z])$/);
    if (type === "toggle" && isDefine(animate_inverse(animate[2]))) {
      result = animate[1] + animate_inverse(animate[2]) + animate[3];
    }
    if (type === "toggle.inverse" && isDefine(animate_inverse(animate[2]))) {
      let direct = isDefine(animate_inverse(animate[3]))
        ? animate_inverse(animate[3])
        : animate[3];
      result = animate[1] + animate_inverse(animate[2]) + direct;
    }
  }
  if (/^[a-z]+[A-Z][a-z]+[A-Z][a-z]+$/.test(data)) {
    animate = data.match(/^([a-z]+)([A-Z][a-z]+)([A-Z][a-z]+)$/);
    if (type === "toggle" && isDefine(animate_inverse(animate[2]))) {
      result = animate[1] + animate_inverse(animate[2]) + animate[3];
    }
    if (type === "toggle.inverse" && isDefine(animate_inverse(animate[2]))) {
      let direct = isDefine(animate_inverse(animate[3]))
        ? animate_inverse(animate[3])
        : animate[3];
      result = animate[1] + animate_inverse(animate[2]) + direct;
    }
  }
  if (/^[a-z]+[A-Z][a-z]+[A-Z][a-z]+[A-Z][a-z]+$/.test(data)) {
    animate = data.match(/^([a-z]+)([A-Z][a-z]+)([A-Z][a-z]+)([A-Z][a-z]+)$/);
    if (type === "toggle" && isDefine(animate_inverse(animate[2]))) {
      result = animate[1] + animate_inverse(animate[2]) + animate[3];
    }
    if (type === "toggle.inverse" && isDefine(animate_inverse(animate[2]))) {
      let direct = isDefine(animate_inverse(animate[3]))
        ? animate_inverse(animate[3])
        : animate[3] + isDefine(animate_inverse(animate[4]))
        ? animate_inverse(animate[4])
        : animate[4];
      result = animate[1] + animate_inverse(animate[2]) + direct;
    }
  }
  return result;
};

/**
  * (el →  dom, callback → function)
    - looping querySelectorAll
**/
const element_looping = function(el, callback) {
  let size = el.length;
  let i = 0;
  for (i; i < size; i++) {
    callback(el[i], i);
  }
};
/**
  * (cls → string | array, el → dom, mdf → string)
    - inview animation handler
**/
const object_animation = function(cls, el, mdf) {
  let display = el.getAttribute("animate-display");
  if (display !== null) {
    el.style.display = dispay;
  } else {
    let none = el.getAttribute("animate-display-none");
    if (none === null || none !== "false") {
      el.style.display = "block";
    }
  }
  if (isString(cls)) {
    if (isDefine(mdf)) {
      let inverseAnim = animate_direction(cls, mdf);
      if (isDefine(inverseAnim) && classList(el).hasClass(inverseAnim)) {
        let rmClass = {};
        rmClass[inverseAnim] = false;
        object_class(rmClass, el);
      }
    }
    let hasToggling = false;
    if (classList(el).hasClass(cls)) {
      hasToggling = true;
      let rmClass = {};
      rmClass[cls] = false;
      object_class(rmClass, el);
    }
    if (isDefine(mdf) && hasToggling) {
      let inverseAnim = animate_direction(cls, mdf);
      if (isDefine(inverseAnim)) {
        object_class(inverseAnim, el);
      }
    } else {
      let animate = !classList(el).hasClass("animated")
        ? ["animated", cls]
        : cls;
      object_class(animate, el);
    }
  }
  if (isArray(cls)) {
    let i = 0;
    let size = cls.length;
    let iClass;
    let animate;
    for (i; i < size; i++) {
      if (classList(el).hasClass(cls[i])) {
        let rmClass = {};
        rmClass[cls[i]] = false;
        iClass = i;
        object_class(rmClass, el);
      }
    }
    if (isDefine(mdf) && mdf === "toggle") {
      let getClass =
        isDefine(iClass) && size > 0 && iClass + 1 < size
          ? cls[iClass + 1]
          : cls[0];
      animate = !classList(el).hasClass("animated")
        ? ["animated", getClass]
        : getClass;
    } else {
      animate = !classList(el).hasClass("animated")
        ? cls.push("animated")
        : cls;
    }
    object_class(animate, el);
  }
};
/**
  * (el → dom)
    - check and get animation attribute
**/
const animate_attribute = function(el) {
  let normal = el.querySelectorAll("[animate]");
  let toggle = el.querySelectorAll("[animate-toggle]");
  let inverse = el.querySelectorAll("[animate-toggle-inverse]");
  if (normal !== null)
    element_looping(normal, function(els) {
      let attr = els.getAttribute("animate");
      object_animation(attr, els);
    });
  if (toggle !== null)
    element_looping(toggle, function(els) {
      let attr = els.getAttribute("animate-toggle");
      object_animation(attr, els, "toggle");
    });
  if (inverse !== null)
    element_looping(inverse, function(els) {
      let attr = els.getAttribute("animate-toggle-inverse");
      object_animation(attr, els, "toggle.inverse");
    });
};

/**
  * (parent → string, el → dom)
    - inview directive handler
**/
const object_parent = function(parent, el) {
  if (parent === "animate") animate_attribute(el);
};

/**
  * (el → dom, $bd → object{*})
    - inview directive handler
**/
const _$elinview = function(el, $bd) {
  // generate class indetities
  // add prefix , number can't been the first character in classname
  let classId = "inview-" + shortid.generate();
  let elSize = classList(el).get().length;

  // register class element
  classList(el).add(classId);
  createEl.register.push({ classid: classId, rawName: $bd.rawName });

  // if directive value not registed
  if (!hasKey(createEl.values, classId) && isDefine($bd.value))
    createEl.values[classId] = $bd.value;

  // register handler
  let regHdlr = !isDefine($bd.arg)
    ? "on"
    : isDefine($arg($bd.arg)) && $arg($bd.arg) === "once"
    ? "once"
    : isDefine($arg($bd.arg))
    ? "on"
    : "undefined";

  // create Object for handling element enter and exit
  let funcEvent = Object.create(null);

  // default event handler
  defaultAction($bd, function() {
    if (isDefine(createEl.values[classId]) && isFunc(createEl.values[classId]))
      createEl.values[classId](funcEvent);
  });
  let _$arg =
    (isDefine($arg($bd.arg)) && $arg($bd.arg) !== "on") ||
    $arg($bd.arg) === "once"
      ? $arg($bd.arg)
      : "undefined";
  _$eventview(regHdlr, classId, {
    enter: function(el) {
      let elvalue;
      // check the value of the directive has been registered
      if (hasKey(createEl.values, classId)) elvalue = createEl.values[classId];

      // for magic properties
      countEntered += 1;
      _element_enter(el, classId);
      // end magic properties

      if (
        _$arg !== "undefined" &&
        objLength($bd.modifiers) === 0 &&
        isDefine(elvalue)
      ) {
        _$arg === "class" && object_class(elvalue, el);
        _$arg === "style" && object_style(elvalue, el);
        _$arg === "animate" && object_animation(elvalue, el);
        _$arg === "parent" && object_parent(elvalue, el);
        if (_$arg === "enter")
          isFunc(elvalue)
            ? elvalue(el)
            : console.warn("[in-view:${$bd.expression}] invalid method");
      }

      if (
        _$arg === "on" ||
        (_$arg === "once" && objLength($bd.modifiers) > 0 && isDefine(elvalue))
      ) {
        // register modifiers
        let $mdf = object_modifiers($bd.modifiers);
        // modifiers enter
        if ($mdf === "enter")
          isFunc(elvalue)
            ? elvalue(el)
            : console.warn("[in-view:${$bd.expression}] invalid method");
        // modifiers class
        $mdf === "class" && object_class(elvalue, el);
        // modifiers style
        $mdf === "style" && object_style(elvalue, el);
        // modifiers animate
        $mdf === "animate" && object_animation(elvalue, el);
        // set parent arguments
        $mdf === "parent" && object_parent(elvalue, el);
      }

      isDefine(funcEvent.enter) && funcEvent.enter(el);
    },
    exit: function(el) {
      let elvalue;

      // check the value of the directive has been registered
      if (hasKey(createEl.values, classId)) elvalue = createEl.values[classId];
      // for magic properties
      countExits += 1;
      element_exit(el, classId);
      // end magic properties

      if (_$arg !== "undefined" && isDefine(elvalue)) {
        if (_$arg === "leave" && objLength($bd.modifiers) === 0)
          isFunc(elvalue)
            ? elvalue(el)
            : console.warn("[in-view:${$bd.expression}] invalid method");
        if (
          objLength($bd.modifiers) > 0 &&
          object_modifiers($bd.modifiers) === "leave"
        ) {
          _$arg === "class" && object_class(elvalue, el);
          _$arg === "style" && object_style(elvalue, el);
          _$arg === "animate" && object_animation(elvalue, el);
          _$arg === "parent" && object_parent(elvalue, el);
        }
        if (_$arg === "parent" && objLength($bd.modifiers) === 0) {
          object_parent(elvalue, el);
        }
      }

      // check if has modifiers
      if (
        _$arg === "on" ||
        (_$arg === "once" && objLength($bd.modifiers) > 0 && isDefine(elvalue))
      ) {
        // register modifiers
        let $mdf = object_modifiers($bd.modifiers);
        // modifiers leave
        if ($mdf === "leave")
          isFunc(elvalue)
            ? elvalue(el)
            : console.warn("[in-view:${$bd.expression}] invalid method");
        // leave : class modifiers
        $mdf === "class.leave" && object_class(elvalue, el);
        // leave : style modifiers
        $mdf === "style.leave" && object_style(elvalue, el);
        // leave : animate modifiers
        $mdf === "animate.leave" && object_animation(elvalue, el);
        // set parent arguments
        $mdf === "parent" && object_parent(elvalue, el);
      }
      isDefine(funcEvent.exit) && funcEvent.exit(el);
    }
  });
};

/**
  * return object{ inserted → function(*), componentUpdated: function(*) }
    - directive object
**/
let _directObj = {
  inserted: function(el, $bd) {
    _$elinview(el, $bd);
  },
  componentUpdated: function(el, $bd) {
    let elSize = classList(el).get().length;
    let getclass;
    // check the class has been registered
    let i;
    for (i = 0; i < elSize; i++) {
      if (
        isDefine(obsclassreg($bd.rawName)) &&
        obsclassreg($bd.rawName) === classList(el).get()[i]
      )
        getclass = classList(el).get()[i];
    }
    if (isDefine(getclass) && isDefine($bd.value))
      createEl.values[getclass] = $bd.value;
  }
};

/**
  * (el → dom, att → string)
  * return boolen
    - check if has attribute
**/
const hasAtt = function(el, att) {
  let result = false;
  if (/^\.[\w]+/.test(att)) {
    let className = att.match(/^\.([\w]+)/)[1];
    let gClass = el.className.split(" ");
    if (gClass.indexOf(className) > -1) {
      result = true;
    }
  }
  if (/^\#[\w]+/.test(att)) {
    let idName = att.match(/^\#([\w]+)/)[1];
    if (el.hasAttribute("id") && el.getAttribute("id") === idName)
      result = true;
  }
  if (/^\[[\w]+=\"[\w]+\"\]$/.test(att)) {
    let attr = att.match(/^\[([\w]+)=\"([\w]+)\"\]$/);
    let attName = attr[1];
    let attval = attr[2];
    if (el.hasAttribute(attName) && el.getAttribute(attName) === attval)
      result = true;
  }
  if (/^\[[\w]+=\'[\w]+\'\]$/.test(att)) {
    let attr = att.match(/^\[([\w]+)=\'([\w]+)\'\]$/);
    let attName = attr[1];
    let attval = attr[2];
    if (el.hasAttribute(attName) && el.getAttribute(attName) === attval)
      result = true;
  }
  return result;
};

/**
  * (update → function)
    - life cycle update
**/
const updateLifeCycle = function(update) {
  let sync = function() {
    update();
    setTimeout(sync, 0);
  };
  sync();
};

/**
  * ($arg → string, $opt → object{ * })
    - check and send notification if component has enter or exit
**/
const _$inview = function($arg, $opt) {
  let lastEnter = 0;
  let lastExit = 0;
  updateLifeCycle(function() {
    if (isDefine($opt) && isObject($opt) && isString($arg)) {
      if (countEntered > lastEnter) {
        isDefine($opt.enter) &&
          hasAtt(createEl.enter, $arg) &&
          $opt.enter(createEl.enter);
        lastEnter = countEntered;
      }
      if (countExits > lastExit) {
        isDefine($opt.exit) &&
          hasAtt(createEl.exit, $arg) &&
          $opt.exit(createEl.exit);
        lastExit = countExits;
      }
    }
  });
};

/**
  * ($vm → vue Object)
    - set directive
**/
const _directive = function($vm) {
  $vm.directive("inview", _directObj);
};

/**
  * ($vm → vue Object)
    - set prototype
**/
const _$methods = function($vm) {
  $vm.prototype._$inview = _$inview;
};

const _install = function(Vue, Option) {
  if (isDefine(Option) && isObject(Option)) inView.offset(Option);
  _directive(Vue);
  _$methods(Vue);
};

vue_inview.install = _install;

vue_inview.threshold = function(c) {
  inView.threshold(c);
};

vue_inview.offset = function(c) {
  inView.offset(c);
};

module.exports = vue_inview;
