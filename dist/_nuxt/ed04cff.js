(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{205:function(t,n,e){var content=e(285);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(109).default)("48517564",content,!0,{sourceMap:!1})},226:function(t,n,e){"use strict";var r={},o=e(77),c=e(110),f=e.n(c),l=e(330),component=Object(o.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("v-app",[n("Nuxt")],1)}),[],!1,null,null,null);n.a=component.exports;f()(component,{VApp:l.a})},234:function(t,n,e){e(235),t.exports=e(236)},284:function(t,n,e){"use strict";e(205)},285:function(t,n,e){var r=e(108)(!1);r.push([t.i,"h1[data-v-6ffeedc3]{font-size:20px}",""]),t.exports=r},290:function(t,n,e){"use strict";e.r(n),e.d(n,"state",(function(){return c})),e.d(n,"mutations",(function(){return f})),e.d(n,"actions",(function(){return l})),e.d(n,"accessorType",(function(){return d}));var r=e(9),o=(e(66),e(38),e(87)),c=function(){return{articles:[],contents:{}}},f=Object(o.d)(c,{setArticles:function(t,n){t.articles=n},setContents:function(t,n){t.contents=n}}),l=Object(o.a)({state:c,mutations:f},{getArticles:function(t){var n=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,n.$axios.$get("https://".concat(n.$config.SERVICE_DOMAIN,".microcms.io/api/v1/").concat(n.$config.END_POINT),{headers:{"X-MICROCMS-API-KEY":n.$config.API_KEY}}).then((function(t){r("setArticles",t.contents)}));case 3:case"end":return e.stop()}}),e)})))()},getContents:function(t,n){var e=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.commit,r.next=3,e.$axios.$get("https://".concat(e.$config.SERVICE_DOMAIN,".microcms.io/api/v1/").concat(e.$config.END_POINT,"/").concat(n),{headers:{"X-MICROCMS-API-KEY":e.$config.API_KEY}}).then((function(t){o("setContents",t)}));case 3:case"end":return r.stop()}}),r)})))()}}),d=Object(o.c)({state:c,mutations:f,actions:l})},60:function(t,n,e){"use strict";var r={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(e(284),e(77)),c=e(110),f=e.n(c),l=e(330),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"6ffeedc3",null);n.a=component.exports;f()(component,{VApp:l.a})}},[[234,9,4,10]]]);