(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{278:function(t,e,s){},279:function(t,e,s){},280:function(t,e){},327:function(t,e,s){"use strict";var i=s(278);s.n(i).a},328:function(t,e,s){"use strict";var i=s(279);s.n(i).a},329:function(t,e,s){"use strict";var i=s(280),n=s.n(i);e.default=n.a},332:function(t,e,s){"use strict";s.r(e);var i={props:["post"]},n=s(29),o=Object(n.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"post-list"},[s("hr",{staticClass:"line"}),s("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"date",domProps:{innerHTML:t._s(t.post.date)}}),s("h1",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"title",domProps:{innerHTML:t._s(t.post.title)}}),s("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"description",domProps:{innerHTML:t._s(t.post.description)}}),s("b",[t._v(" "+t._s(t.post.timeToRead)+" min read ")]),t._v("  \n  "),s("g-link",{staticClass:"read",attrs:{to:t.post.path}},[t._v("Read More...")])],1)}),[],!1,null,null,null).exports,a={components:{TinySlider:function(){return s.e(11).then(s.t.bind(null,330,7))}},props:["products"],mounted:function(){console.log(this.products)}},r=(s(327),{components:{PostList:o,Slide:Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("ClientOnly",[s("TinySlider",{attrs:{"mouse-drag":!0,loop:!0,items:"2",gutter:"20",rewind:!0,nav:!0}},t._l(t.products,(function(e){return s("div",{key:e.node.id},[t._v(t._s(e.node.title)+"\n        "),s("g-image",{attrs:{height:"300",fit:"contain",src:e.node.image}})],1)})),0)],1)],1)}),[],!1,null,null,null).exports},metaInfo:{title:"Hello, world!"}}),l=(s(328),s(329)),c=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("ClientOnly",[e("Slide",{attrs:{products:this.$page.allProduct.edges}})],1),e("h1",[this._v("Hello, world!")]),e("p",[this._v("\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores\n  ")]),this._l(this.$page.allPost.edges,(function(t){return e("PostList",{key:t.node.id,attrs:{post:t.node}})})),e("p",{staticClass:"home-links"},[e("a",{attrs:{href:"https://gridsome.org/docs",target:"_blank",rel:"noopener"}},[this._v("Gridsome Docs")])])],2)}),[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(c);e.default=c.exports}}]);