(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{257:function(t,e,n){},258:function(t,e,n){},259:function(t,e,n){},260:function(t,e){},261:function(t,e,n){"use strict";var s={props:["post"]},o=n(16),i=Object(o.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-list"},[n("hr",{staticClass:"line"}),n("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"date",domProps:{innerHTML:t._s(t.post.date)}}),n("h1",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"title",domProps:{innerHTML:t._s(t.post.title)}}),n("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"description",domProps:{innerHTML:t._s(t.post.description)}}),n("b",[t._v(" "+t._s(t.post.timeToRead)+" min read ")]),t._v("  \n  "),n("g-link",{staticClass:"read",attrs:{to:t.post.path}},[t._v("Read More...")])],1)}),[],!1,null,null,null);e.a=i.exports},272:function(t,e,n){"use strict";var s=n(257);n.n(s).a},273:function(t,e,n){"use strict";var s=n(258);n.n(s).a},274:function(t,e,n){"use strict";var s=n(259);n.n(s).a},275:function(t,e,n){"use strict";var s=n(260),o=n.n(s);e.default=o.a},277:function(t,e,n){"use strict";n.r(e);var s=n(261),o={components:{TinySlider:function(){return n.e(1).then(n.t.bind(null,276,7))}},props:["products"],mounted:function(){console.log(this.products)}},i=(n(272),n(16)),r=Object(i.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product-slider"},[n("ClientOnly",[n("TinySlider",{attrs:{"mouse-drag":!0,loop:!1,items:"4",gutter:"20",rewind:!0,nav:!0,controls:!1}},t._l(t.products,(function(e){return n("div",{key:e.node.id},[t._v(t._s(e.node.title)+"\n        "),n("g-image",{attrs:{height:"200",fit:"contain",src:e.node.image}})],1)})),0)],1)],1)}),[],!1,null,null,null).exports,a={components:{TinySlider:function(){return n.e(1).then(n.t.bind(null,276,7))}},props:["customers"],mounted:function(){console.log(this.customers)}},l=(n(273),Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("ClientOnly",[e("TinySlider",{attrs:{"mouse-drag":!0,loop:!0,items:"6",gutter:"20",rewind:!0,nav:!1}},this._l(this.customers,(function(t){return e("div",{key:t.node.id},[e("g-image",{directives:[{name:"tooltip",rawName:"v-tooltip.top-center",value:t.node.title,expression:"customer.node.title",modifiers:{"top-center":!0}}],attrs:{height:"300",fit:"contain",src:t.node.image}})],1)})),0)],1)],1)}),[],!1,null,null,null).exports),u=Object(i.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-5"},[n("h1",{staticClass:"text-lg font-bold"},[t._v("Welcome")]),n("p",[t._v("10 years in the market of promotional items teaching us plenty of lessons and also thousands of ups and downs.")]),n("p",[t._v("We follow the market, we listen to the market and sometimes we create the market for some products through our innovations and inventions.")]),n("p",[t._v("Being creative and producing promotional products that is useful in the daily life is our main goal. Understanding what clients need, matching-up their tight budget is also our preference.")]),n("p",[t._v("We are not only trading product but also we produce those products, to make promotional items to be affordable in every segments of businesses. Find out our massive range products and making a great sale out of your products!")]),n("p",[t._v("Regards,")]),n("p",[t._v("Rendy Renaldi B. Comm.")]),n("p",[t._v("Giftbox Promosindo")])])}],!1,null,null,null).exports,c={components:{PostList:s.a,Slide:r,CustomerSlide:l,About:u},metaInfo:{title:""},mounted:function(){}},d=(n(274),n(275)),m=Object(i.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("ClientOnly",[e("Slide",{attrs:{products:this.$page.allProduct.edges}})],1),e("About"),e("ClientOnly",[e("CustomerSlide",{attrs:{customers:this.$page.allCustomer.edges}})],1)],1)}),[],!1,null,null,null);"function"==typeof d.default&&Object(d.default)(m);e.default=m.exports}}]);