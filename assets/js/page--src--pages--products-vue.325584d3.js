(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{273:function(t,e){},322:function(t,e,a){"use strict";var r=a(273),n=a.n(r);e.default=n.a},334:function(t,e,a){"use strict";a.r(e);a(0);var r=a(99),n=(a(101),a(65),a(66),a(67),a(30),a(68),a(14),a(69),a(150),a(100),a(35)),i=(a(151),a(7));function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(a,!0).forEach((function(e){Object(n.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var l={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},prevLabel:{type:String,default:"‹"},nextLabel:{type:String,default:"›"},lastLabel:{type:String,default:"»"},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(t,e){var a=e.props,n=e.data,s=e.parent,l=a.info,u=a.showLinks,p=a.showNavigation,d=a.ariaLabel,g=function(t,e){var a=t.currentPage,r=void 0===a?1:a,n=t.totalPages,i=void 0===n?1:n,s=Math.ceil(e/2),o=Math.floor(r-s),l=Math.floor(r+s);i<=e?(o=0,l=i):r<=s?(o=0,l=e):r+s>=i&&(o=i-e,l=i);for(var c=[],u=o+1;u<=l;u++)c.push(u);return{current:r,total:i,start:o,end:l,pages:c}}(l,a.range),f=g.current,v=g.total,b=g.pages,L=g.start,y=g.end,h=Object(i.b)(s.$route),m=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n;e===f&&(i=a.ariaCurrentLabel);var s={to:c(h,e),exact:!0};return a.activeLinkClass&&(s.activeClass=a.activeLinkClass),a.exactActiveLinkClass&&(s.exactActiveClass=a.exactActiveLinkClass),t(r.a,{class:a.linkClass,attrs:o({},s,{"aria-label":i.replace("%n",e),"aria-current":f===e})},[n])},P=u?b.map((function(t){return m(t,t,a.ariaLinkLabel)})):[];if(p){var O=a.firstLabel,w=a.prevLabel,C=a.nextLabel,k=a.lastLabel,j=a.ariaFirstLabel,S=a.ariaPrevLabel,_=a.ariaNextLabel,x=a.ariaLastLabel;f>1&&P.unshift(m(f-1,w,S)),L>0&&P.unshift(m(1,O,j)),f<v&&P.push(m(f+1,C,_)),y<v&&P.push(m(v,k,x))}return P.length<2?null:t("nav",o({},n,{attrs:{role:"navigation","aria-label":d}}),P)}};function c(t,e){var a=/\/$/.test(t)?"/":"";return e>1?Object(i.e)(t)+"/".concat(e).concat(a):t}a(102);var u={props:["product"]},p=a(29),d={components:{ProductList:Object(p.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product-list"},[a("hr",{staticClass:"line"}),a("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"date",domProps:{innerHTML:t._s(t.product.date)}}),a("g-image",{attrs:{src:t.product.image}}),a("h1",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"title",domProps:{innerHTML:t._s(t.product.title)}}),a("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"description",domProps:{innerHTML:t._s(t.product.description)}}),a("b",[t._v(" "+t._s(t.product.timeToRead)+" min read ")]),t._v("  \n  "),a("g-link",{staticClass:"read",attrs:{to:t.product.path}},[t._v("Read More...")])],1)}),[],!1,null,null,null).exports,Pager:l},metaInfo:{title:"Products"}},g=a(322),f=Object(p.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("h1",[this._v("Products")]),this._l(this.$page.allProduct.edges,(function(t){return e("ProductList",{key:t.node.id,attrs:{product:t.node}})})),e("Pager",{attrs:{info:this.$page.allProduct.pageInfo}})],2)}),[],!1,null,null,null);"function"==typeof g.default&&Object(g.default)(f);e.default=f.exports}}]);