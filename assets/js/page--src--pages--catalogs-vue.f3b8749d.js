(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{246:function(t,a,e){"use strict";e(0);var r=e(102),n=(e(103),e(67),e(68),e(69),e(32),e(70),e(17),e(71),e(158),e(105),e(36)),i=(e(159),e(5));function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function s(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(e,!0).forEach((function(a){Object(n.a)(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(e).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}var o={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},prevLabel:{type:String,default:"‹"},nextLabel:{type:String,default:"›"},lastLabel:{type:String,default:"»"},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(t,a){var e=a.props,n=a.data,l=a.parent,o=e.info,u=e.showLinks,p=e.showNavigation,g=e.ariaLabel,f=function(t,a){var e=t.currentPage,r=void 0===e?1:e,n=t.totalPages,i=void 0===n?1:n,l=Math.ceil(a/2),s=Math.floor(r-l),o=Math.floor(r+l);i<=a?(s=0,o=i):r<=l?(s=0,o=a):r+l>=i&&(s=i-a,o=i);for(var c=[],u=s+1;u<=o;u++)c.push(u);return{current:r,total:i,start:s,end:o,pages:c}}(o,e.range),b=f.current,d=f.total,v=f.pages,L=f.start,h=f.end,y=Object(i.b)(l.$route),C=function(a){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n;a===b&&(i=e.ariaCurrentLabel);var l={to:c(y,a),exact:!0};return e.activeLinkClass&&(l.activeClass=e.activeLinkClass),e.exactActiveLinkClass&&(l.exactActiveClass=e.exactActiveLinkClass),t(r.a,{class:e.linkClass,attrs:s({},l,{"aria-label":i.replace("%n",a),"aria-current":b===a})},[n])},O=u?v.map((function(t){return C(t,t,e.ariaLinkLabel)})):[];if(p){var P=e.firstLabel,k=e.prevLabel,w=e.nextLabel,j=e.lastLabel,S=e.ariaFirstLabel,m=e.ariaPrevLabel,x=e.ariaNextLabel,_=e.ariaLastLabel;b>1&&O.unshift(C(b-1,k,m)),L>0&&O.unshift(C(1,P,S)),b<d&&O.push(C(b+1,w,x)),h<d&&O.push(C(d,j,_))}return O.length<2?null:t("nav",s({},n,{attrs:{role:"navigation","aria-label":g}}),O)}};function c(t,a){var e=/\/$/.test(t)?"/":"";return a>1?Object(i.e)(t)+"/".concat(a).concat(e):t}e(104);e.d(a,"a",(function(){return o}))},251:function(t,a){},266:function(t,a,e){"use strict";var r=e(251),n=e.n(r);a.default=n.a},279:function(t,a,e){"use strict";e.r(a);var r=e(246),n={props:["catalog"]},i=e(16),l={components:{CatalogList:Object(i.a)(n,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"catalog-list"},[a("hr",{staticClass:"line"}),a("h1",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"title",domProps:{innerHTML:this._s(this.catalog.title)}}),a("g-link",{staticClass:"read",attrs:{to:this.catalog.path}},[this._v("Read More...")])],1)}),[],!1,null,null,null).exports,Pager:r.a},metaInfo:{title:"Catalogs"}},s=e(266),o=Object(i.a)(l,(function(){var t=this.$createElement,a=this._self._c||t;return a("Layout",[a("h1",[this._v("Catalogs")]),this._l(this.$page.allCatalog.edges,(function(t){return a("CatalogList",{key:t.node.id,attrs:{catalog:t.node}})})),a("Pager",{attrs:{info:this.$page.allCatalog.pageInfo}})],2)}),[],!1,null,null,null);"function"==typeof s.default&&Object(s.default)(o);a.default=o.exports}}]);