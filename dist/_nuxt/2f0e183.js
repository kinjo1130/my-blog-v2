(window.webpackJsonp=window.webpackJsonp||[]).push([[7,5],{328:function(t,e,n){var content=n(332);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(108).default)("257af960",content,!0,{sourceMap:!1})},331:function(t,e,n){"use strict";n(328)},332:function(t,e,n){var o=n(107)(!1);o.push([t.i,"#text-decoration{text-decoration:none;color:#000}",""]),t.exports=o},336:function(t,e,n){"use strict";n.r(e);var o={},r=(n(331),n(71)),c=n(109),l=n.n(c),f=n(396),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{elevation:"0"}},[n("h2",[n("nuxt-link",{attrs:{to:"/",id:"text-decoration"}},[t._t("default")],2)],1)])}),[],!1,null,null,null);e.default=component.exports;l()(component,{VAppBar:f.a})},350:function(t,e,n){var content=n(385);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(108).default)("625bf64c",content,!0,{sourceMap:!1})},384:function(t,e,n){"use strict";n(350)},385:function(t,e,n){var o=n(107)(!1);o.push([t.i,"#fixSize img{max-width:100%;height:100%}",""]),t.exports=o},398:function(t,e,n){"use strict";n.r(e);n(39);var o={data:function(){return{contents:{}}},created:function(){var t=this;console.log(this.$route.params.slug);var e=this.$route.params.slug;this.$axios.$get("https://".concat(this.$config.SERVICE_DOMAIN,".microcms.io/api/v1/").concat(this.$config.END_POINT,"/").concat(e),{headers:{"X-MICROCMS-API-KEY":this.$config.API_KEY}}).then((function(e){console.log({res:e}),t.contents=e}))}},r=(n(384),n(71)),c=n(109),l=n.n(c),f=n(394),d=n(392),v=n(393),h=n(395),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header",[t._v("書き残しサイト")]),t._v(" "),n("v-flex",[n("v-container",[n("v-row",{staticClass:"d-flex justify-center"},[n("v-col",{attrs:{cols:"10"}},[n("div",{attrs:{id:"fixSize"},domProps:{innerHTML:t._s(t.contents.body)}})])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{Header:n(336).default}),l()(component,{VCol:f.a,VContainer:d.a,VFlex:v.a,VRow:h.a})}}]);