this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["products-by-attribute"]=function(t){function e(e){for(var n,i,a=e[0],u=e[1],s=e[2],b=0,d=[];b<a.length;b++)i=a[b],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);for(l&&l(e);d.length;)d.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,a=1;a<r.length;a++){var u=r[a];0!==o[u]&&(n=!1)}n&&(c.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={21:0},c=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var l=u;return c.push([577,2,0,1]),r()}({0:function(t,e){!function(){t.exports=this.wp.element}()},1:function(t,e){!function(){t.exports=this.wp.i18n}()},11:function(t,e){!function(){t.exports=this.React}()},12:function(t,e){!function(){t.exports=this.regeneratorRuntime}()},13:function(t,e){!function(){t.exports=this.moment}()},20:function(t,e){!function(){t.exports=this.wp.editor}()},21:function(t,e){!function(){t.exports=this.wp.compose}()},23:function(t,e){!function(){t.exports=this.wp.blocks}()},25:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(12),o=r.n(n),c=r(22),i=r.n(c),a=function(){var t=i()(o.a.mark((function t(e){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e.json){t.next=11;break}return t.prev=1,t.next=4,e.json();case 4:return r=t.sent,t.abrupt("return",{message:r.message,type:r.type||"api"});case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",{message:t.t0.message,type:"general"});case 11:return t.abrupt("return",{message:e.message,type:e.type||"general"});case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},26:function(t,e,r){"use strict";r.d(e,"g",(function(){return d})),r.d(e,"d",(function(){return p})),r.d(e,"e",(function(){return f})),r.d(e,"c",(function(){return g})),r.d(e,"b",(function(){return h})),r.d(e,"f",(function(){return m})),r.d(e,"a",(function(){return O})),r.d(e,"h",(function(){return y}));var n=r(6),o=r.n(n),c=r(9),i=r(7),a=r.n(i),u=r(5),s=r(4);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var d=function(t){var e=t.selected,r=void 0===e?[]:e,n=t.search,o=void 0===n?"":n,i=t.queryArgs,l=function(t){var e=t.selected,r=void 0===e?[]:e,n=t.search,o=void 0===n?"":n,i=t.queryArgs,a=void 0===i?[]:i,u={per_page:s.g?100:-1,catalog_visibility:"any",status:"publish",search:o,orderby:"title",order:"asc"},l=[Object(c.addQueryArgs)(s.d.products,b({},u,{},a))];return s.g&&r.length&&l.push(Object(c.addQueryArgs)(s.d.products,{catalog_visibility:"any",status:"publish",include:r})),l}({selected:r,search:o,queryArgs:void 0===i?[]:i});return Promise.all(l.map((function(t){return a()({path:t})}))).then((function(t){return Object(u.uniqBy)(Object(u.flatten)(t),"id").map((function(t){return b({},t,{parent:0})}))})).catch((function(t){throw t}))},p=function(t){return a()({path:"".concat(s.d.products,"/").concat(t)})},f=function(t){var e=t.selected,r=function(t){var e=t.selected,r=void 0===e?[]:e,n=t.search,o=[Object(c.addQueryArgs)("".concat(s.d.products,"/tags"),{per_page:s.h?100:-1,orderby:s.h?"count":"name",order:s.h?"desc":"asc",search:n})];return s.h&&r.length&&o.push(Object(c.addQueryArgs)("".concat(s.d.products,"/tags"),{include:r})),o}({selected:void 0===e?[]:e,search:t.search});return Promise.all(r.map((function(t){return a()({path:t})}))).then((function(t){return Object(u.uniqBy)(Object(u.flatten)(t),"id")}))},g=function(t){return a()({path:"".concat(s.d.categories,"/").concat(t)})},h=function(t){return a()({path:Object(c.addQueryArgs)("".concat(s.d.products,"/categories"),b({per_page:-1},t))})},m=function(t){return a()({path:Object(c.addQueryArgs)("".concat(s.d.products,"/").concat(t,"/variations"),{per_page:-1})})},O=function(){return a()({path:Object(c.addQueryArgs)("".concat(s.d.products,"/attributes"),{per_page:-1})})},y=function(t){return a()({path:Object(c.addQueryArgs)("".concat(s.d.products,"/attributes/").concat(t,"/terms"),{per_page:-1})})}},27:function(t,e){!function(){t.exports=this.wp.escapeHtml}()},28:function(t,e,r){"use strict";var n=r(0),o=r(1),c=(r(2),r(27));e.a=function(t){var e,r,i,a=t.error;return Object(n.createElement)("div",{className:"wc-block-error-message"},(r=(e=a).message,i=e.type,r?"general"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):"api"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned from the API","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):r:Object(o.__)("An unknown error occurred which prevented the block from being updated.","woo-gutenberg-products-block")))}},3:function(t,e){!function(){t.exports=this.wp.components}()},35:function(t,e){!function(){t.exports=this.wp.keycodes}()},4:function(t,e,r){"use strict";r.d(e,"n",(function(){return g})),r.d(e,"o",(function(){return h})),r.d(e,"i",(function(){return m})),r.d(e,"k",(function(){return O})),r.d(e,"a",(function(){return y})),r.d(e,"j",(function(){return j})),r.d(e,"m",(function(){return w})),r.d(e,"c",(function(){return v})),r.d(e,"l",(function(){return _})),r.d(e,"b",(function(){return k})),r.d(e,"g",(function(){return P})),r.d(e,"h",(function(){return E})),r.d(e,"e",(function(){return A})),r.d(e,"f",(function(){return S})),r.d(e,"p",(function(){return x})),r.d(e,"d",(function(){return L}));var n=r(6),o=r.n(n),c=r(7),i=r.n(c),a=r(37);function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l={adminUrl:"",countries:[],currency:{code:"USD",precision:2,symbol:"$",symbolPosition:"left",decimalSeparator:".",priceFormat:"%1$s%2$s",thousandSeparator:","},defaultDateRange:"period=month&compare=previous_year",locale:{siteLocale:"en_US",userLocale:"en_US",weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},orderStatuses:[],siteTitle:"",wcAssetUrl:""},b=s({},l,{},"object"===("undefined"==typeof wcSettings?"undefined":r.n(a)()(wcSettings))?wcSettings:{});function d(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return t},n=b.hasOwnProperty(t)?b[t]:e;return r(n,e)}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}b.currency=s({},l.currency,{},b.currency),b.locale=s({},l.locale,{},b.locale);var f=d("storeApiNonce");i.a.use((function(t,e){if(function(t){var e=t.url||t.path;return!(!e||!t.method||"GET"===t.method)&&null!==/wc\/store\//.exec(e)}(t)){var r=t.headers||{};t.headers=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},r,{"X-WC-Store-API-Nonce":f})}return e(t,e)})),i.a.setNonce=function(t){var e=null==t?void 0:t.get("X-WC-Store-API-Nonce");e&&(f=e)};d("currentUserIsAdmin",!1);var g=d("reviewRatingsEnabled",!0),h=d("showAvatars",!0),m=d("max_columns",6),O=d("min_columns",1),y=d("default_columns",3),j=d("max_rows",6),w=d("min_rows",1),v=d("default_rows",3),_=d("min_height",500),k=d("default_height",500),P=(d("placeholderImgSrc",""),d("thumbnail_size",300),d("isLargeCatalog")),E=d("limitTags"),A=(d("hasProducts",!0),d("hasTags",!0)),S=d("homeUrl",""),x=(d("couponsEnabled",!0),d("shippingEnabled",!0),d("displayShopPricesIncludingTax",!1),d("displayCartPricesIncludingTax",!1),d("productCount",0),d("attributes",[]),d("isShippingCalculatorEnabled",!0),d("isShippingCostHidden",!1),d("wcBlocksAssetUrl","")),C=(d("shippingCountries",{}),d("allowedCountries",{}),d("shippingStates",{}),d("allowedStates",{}),d("shippingMethodsExist",!1),{id:0,title:"",permalink:""}),D=d("storePages",{shop:C,cart:C,checkout:C,privacy:C,terms:C}),L=(D.shop.permalink,D.checkout.id,D.checkout.permalink,D.privacy.permalink,D.privacy.title,D.terms.permalink,D.terms.title,D.cart.id,D.cart.permalink,{root:"/wc/blocks",products:"".concat("/wc/blocks","/products"),categories:"".concat("/wc/blocks","/products/categories")})},43:function(t,e,r){"use strict";var n=r(6),o=r.n(n),c=r(0),i=r(1),a=(r(2),r(3));function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.a=function(t){var e=t.onChange,r=t.settings,n=r.button,o=r.price,u=r.rating,l=r.title;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(a.ToggleControl,{label:Object(i.__)("Product title","woo-gutenberg-products-block"),help:l?Object(i.__)("Product title is visible.","woo-gutenberg-products-block"):Object(i.__)("Product title is hidden.","woo-gutenberg-products-block"),checked:l,onChange:function(){return e(s({},r,{title:!l}))}}),Object(c.createElement)(a.ToggleControl,{label:Object(i.__)("Product price","woo-gutenberg-products-block"),help:o?Object(i.__)("Product price is visible.","woo-gutenberg-products-block"):Object(i.__)("Product price is hidden.","woo-gutenberg-products-block"),checked:o,onChange:function(){return e(s({},r,{price:!o}))}}),Object(c.createElement)(a.ToggleControl,{label:Object(i.__)("Product rating","woo-gutenberg-products-block"),help:u?Object(i.__)("Product rating is visible.","woo-gutenberg-products-block"):Object(i.__)("Product rating is hidden.","woo-gutenberg-products-block"),checked:u,onChange:function(){return e(s({},r,{rating:!u}))}}),Object(c.createElement)(a.ToggleControl,{label:Object(i.__)("Add to Cart button","woo-gutenberg-products-block"),help:n?Object(i.__)("Add to Cart button is visible.","woo-gutenberg-products-block"):Object(i.__)("Add to Cart button is hidden.","woo-gutenberg-products-block"),checked:n,onChange:function(){return e(s({},r,{button:!n}))}}))}},48:function(t,e){!function(){t.exports=this.ReactDOM}()},49:function(t,e,r){"use strict";var n=r(0),o=r(1),c=r(5),i=(r(2),r(3)),a=r(4);e.a=function(t){var e=t.columns,r=t.rows,u=t.setAttributes,s=t.alignButtons;return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(i.RangeControl,{label:Object(o.__)("Columns","woo-gutenberg-products-block"),value:e,onChange:function(t){var e=Object(c.clamp)(t,a.k,a.i);u({columns:Object(c.isNaN)(e)?"":e})},min:a.k,max:a.i}),Object(n.createElement)(i.RangeControl,{label:Object(o.__)("Rows","woo-gutenberg-products-block"),value:r,onChange:function(t){var e=Object(c.clamp)(t,a.m,a.j);u({rows:Object(c.isNaN)(e)?"":e})},min:a.m,max:a.j}),Object(n.createElement)(i.ToggleControl,{label:Object(o.__)("Align Last Block","woo-gutenberg-products-block"),help:s?Object(o.__)("The last inner block will be aligned vertically.","woo-gutenberg-products-block"):Object(o.__)("The last inner block will follow other content.","woo-gutenberg-products-block"),checked:s,onChange:function(){return u({alignButtons:!s})}}))}},5:function(t,e){!function(){t.exports=this.lodash}()},50:function(t,e,r){"use strict";r.d(e,"a",(function(){return b}));var n=r(0),o=r(8),c=r.n(o),i=r(66),a=r.n(i),u=r(4);function s(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(t,e)}(t))){var e=0,r=function(){};return{s:r,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,c=!0,i=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){i=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var b=function(t){return function(e){var r=e.attributes,o=r.align,i=r.contentVisibility,l=c()(o?"align".concat(o):"",{"is-hidden-title":!i.title,"is-hidden-price":!i.price,"is-hidden-rating":!i.rating,"is-hidden-button":!i.button});return Object(n.createElement)(n.RawHTML,{className:l},function(t,e){var r=t.attributes,n=r.attributes,o=r.attrOperator,c=r.categories,i=r.catOperator,l=r.orderby,b=r.products,d=r.columns||u.a,p=r.rows||u.c,f=new Map;switch(f.set("limit",p*d),f.set("columns",d),c&&c.length&&(f.set("category",c.join(",")),i&&"all"===i&&f.set("cat_operator","AND")),n&&n.length&&(f.set("terms",n.map((function(t){return t.id})).join(",")),f.set("attribute",n[0].attr_slug),o&&"all"===o&&f.set("terms_operator","AND")),l&&("price_desc"===l?(f.set("orderby","price"),f.set("order","DESC")):"price_asc"===l?(f.set("orderby","price"),f.set("order","ASC")):"date"===l?(f.set("orderby","date"),f.set("order","DESC")):f.set("orderby",l)),e){case"woocommerce/product-best-sellers":f.set("best_selling","1");break;case"woocommerce/product-top-rated":f.set("orderby","rating");break;case"woocommerce/product-on-sale":f.set("on_sale","1");break;case"woocommerce/product-new":f.set("orderby","date"),f.set("order","DESC");break;case"woocommerce/handpicked-products":if(!b.length)return"";f.set("ids",b.join(",")),f.set("limit",b.length);break;case"woocommerce/product-category":if(!c||!c.length)return"";break;case"woocommerce/products-by-attribute":if(!n||!n.length)return""}var g,h="[products",m=s(f);try{for(m.s();!(g=m.n()).done;){var O=a()(g.value,2);h+=" "+O[0]+'="'+O[1]+'"'}}catch(t){m.e(t)}finally{m.f()}return h+="]"}(e,t))}}},51:function(t,e){!function(){t.exports=this.wp.viewport}()},56:function(t,e){!function(){t.exports=this.wp.hooks}()},566:function(t,e,r){},577:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(1),c=r(62),i=r(602),a=Object(n.createElement)(i.a,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(n.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(n.createElement)("path",{d:"M2.53 19.65l1.34.56v-9.03l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61zm19.5-3.7L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6zm-9.2 3.8L7.87 7.79l7.35-3.04h.01l4.95 11.95-7.35 3.05z"}),Object(n.createElement)("circle",{cx:"11",cy:"9",r:"1"}),Object(n.createElement)("path",{d:"M5.88 19.75c0 1.1.9 2 2 2h1.45l-3.45-8.34v6.34z"})),u=r(23),s=r(4),l=(r(566),r(16)),b=r.n(l),d=r(17),p=r.n(d),f=r(18),g=r.n(f),h=r(19),m=r.n(h),O=r(10),y=r.n(O),j=r(20),w=r(3),v=(r(2),r(43)),_=r(49),k=r(83),P=r.n(k),E=r(15),A=r.n(E),S=r(5),x=r(29),C=r(12),D=r.n(C),L=r(22),T=r.n(L),M=r(6),B=r.n(M),N=r(14),R=r.n(N),I=r(21),U=r(26),z=r(25);function F(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function H(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?F(Object(r),!0).forEach((function(e){B()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function Q(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var V=Object(I.createHigherOrderComponent)((function(t){var e=function(e){g()(c,e);var r,o=(r=c,function(){var t,e=y()(r);if(Q()){var n=y()(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return m()(this,t)});function c(){var t;return b()(this,c),(t=o.apply(this,arguments)).state={attributes:[],error:null,expandedAttribute:null,loading:!1,termsList:{},termsLoading:!1},t.loadAttributes=t.loadAttributes.bind(R()(t)),t.onExpandAttribute=t.onExpandAttribute.bind(R()(t)),t.debouncedLoadTerms=Object(S.debounce)(t.loadTerms.bind(R()(t)),200),t}return p()(c,[{key:"componentDidMount",value:function(){this.loadAttributes()}},{key:"componentWillUnmount",value:function(){this.debouncedLoadTerms.cancel()}},{key:"componentDidUpdate",value:function(t,e){e.expandedAttribute!==this.state.expandedAttribute&&this.debouncedLoadTerms()}},{key:"loadAttributes",value:function(){var t=this,e=this.props.selected,r=this.state.expandedAttribute;this.setState({loading:!0}),Object(U.a)().then((function(n){n=n.map((function(t){return H({},t,{parent:0})}));var o=r;if(!r&&e.length>0){var c=n.find((function(t){return t.slug===e[0].attr_slug}));c&&(o=c.id)}t.setState({attributes:n,expandedAttribute:o,loading:!1,error:null})})).catch(function(){var e=T()(D.a.mark((function e(r){var n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.a)(r);case 2:n=e.sent,t.setState({attributes:[],expandedAttribute:null,loading:!1,error:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{key:"loadTerms",value:function(){var t=this,e=this.state,r=e.expandedAttribute,n=e.termsList;r&&(n[r]||this.setState({termsLoading:!0}),Object(U.h)(r).then((function(e){e=e.map((function(t){return H({},t,{parent:r,attr_slug:t.attribute.slug})})),t.setState((function(t){return{termsList:H({},t.termsList,B()({},r,e)),termsLoading:!1}}))})).catch(function(){var e=T()(D.a.mark((function e(r){var n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.a)(r);case 2:n=e.sent,t.setState({termsList:{},termsLoading:!1,error:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},{key:"onExpandAttribute",value:function(t){var e=this.state.expandedAttribute;this.setState({expandedAttribute:t===e?null:t})}},{key:"render",value:function(){var e=this.state,r=e.error,o=e.expandedAttribute,c=e.loading,i=e.attributes,a=e.termsList,u=e.termsLoading;return Object(n.createElement)(t,A()({},this.props,{attributes:i,error:r,expandedAttribute:o,onExpandAttribute:this.onExpandAttribute,isLoading:c,termsAreLoading:u,termsList:a}))}}]),c}(n.Component);return e.defaultProps={selected:[]},e}),"withAttributes"),W=r(28),q=(r(567),function(t){var e=t.attributes,r=t.error,c=t.expandedAttribute,i=t.onChange,a=t.onExpandAttribute,u=t.onOperatorChange,s=t.isLoading,l=t.operator,b=t.selected,d=t.termsAreLoading,p=t.termsList,f=function(t){return function(){i([]),a(t.id)}},g=p[c]||[],h=[].concat(P()(e),P()(g)),m={clear:Object(o.__)("Clear all product attributes","woo-gutenberg-products-block"),list:Object(o.__)("Product Attributes","woo-gutenberg-products-block"),noItems:Object(o.__)("Your store doesn't have any product attributes.","woo-gutenberg-products-block"),search:Object(o.__)("Search for product attributes","woo-gutenberg-products-block"),selected:function(t){return Object(o.sprintf)(Object(o._n)("%d attribute selected","%d attributes selected",t,"woo-gutenberg-products-block"),t)},updated:Object(o.__)("Product attribute search results updated.","woo-gutenberg-products-block")};return r?Object(n.createElement)(W.a,{error:r}):Object(n.createElement)(n.Fragment,null,Object(n.createElement)(x.a,{className:"woocommerce-product-attributes",list:h,isLoading:s,selected:b.map((function(t){var e=t.id;return Object(S.find)(h,{id:e})})).filter(Boolean),onChange:i,renderItem:function(t){var e=t.item,r=t.search,i=t.depth,a=void 0===i?0:i,u=["woocommerce-product-attributes__item","woocommerce-search-list__item"];return r.length&&u.push("is-searching"),0===a&&e.parent&&u.push("is-skip-level"),e.breadcrumbs.length?Object(n.createElement)(x.b,A()({className:u.join(" ")},t,{showCount:!0,"aria-label":"".concat(e.breadcrumbs[0],": ").concat(e.name)})):[Object(n.createElement)(x.b,A()({key:"attr-".concat(e.id)},t,{className:u.join(" "),isSelected:c===e.id,onSelect:f,isSingle:!0,disabled:"0"===e.count,"aria-expanded":c===e.id,"aria-label":Object(o.sprintf)(Object(o._n)("%s, has %d term","%s, has %d terms",e.count,"woo-gutenberg-products-block"),e.name,e.count)})),c===e.id&&d&&Object(n.createElement)("div",{key:"loading",className:"woocommerce-search-list__item woocommerce-product-attributes__itemdepth-1 is-loading is-not-active"},Object(n.createElement)(w.Spinner,null))]},messages:m,isHierarchical:!0}),!!u&&Object(n.createElement)("div",{className:b.length<2?"screen-reader-text":""},Object(n.createElement)(w.SelectControl,{className:"woocommerce-product-attributes__operator",label:Object(o.__)("Display products matching","woo-gutenberg-products-block"),help:Object(o.__)("Pick at least two attributes to use this setting.","woo-gutenberg-products-block"),value:l,onChange:u,options:[{label:Object(o.__)("Any selected attributes","woo-gutenberg-products-block"),value:"any"},{label:Object(o.__)("All selected attributes","woo-gutenberg-products-block"),value:"all"}]})))});q.defaultProps={operator:"any"};var $=V(q),G=r(64),J=r(99);function X(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var Y=function(t){g()(i,t);var e,r=(e=i,function(){var t,r=y()(e);if(X()){var n=y()(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return m()(this,t)});function i(){return b()(this,i),r.apply(this,arguments)}return p()(i,[{key:"getInspectorControls",value:function(){var t=this.props.setAttributes,e=this.props.attributes,r=e.attributes,c=e.attrOperator,i=e.columns,a=e.contentVisibility,u=e.orderby,s=e.rows,l=e.alignButtons;return Object(n.createElement)(j.InspectorControls,{key:"inspector"},Object(n.createElement)(w.PanelBody,{title:Object(o.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(n.createElement)(_.a,{columns:i,rows:s,alignButtons:l,setAttributes:t})),Object(n.createElement)(w.PanelBody,{title:Object(o.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},Object(n.createElement)(v.a,{settings:a,onChange:function(e){return t({contentVisibility:e})}})),Object(n.createElement)(w.PanelBody,{title:Object(o.__)("Filter by Product Attribute","woo-gutenberg-products-block"),initialOpen:!1},Object(n.createElement)($,{selected:r,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=e.map((function(t){return{id:t.id,attr_slug:t.attr_slug}}));t({attributes:r})},operator:c,onOperatorChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return t({attrOperator:e})}})),Object(n.createElement)(w.PanelBody,{title:Object(o.__)("Order By","woo-gutenberg-products-block"),initialOpen:!1},Object(n.createElement)(G.a,{setAttributes:t,value:u})))}},{key:"renderEditMode",value:function(){var t=this.props,e=t.debouncedSpeak,r=t.setAttributes,i=this.props.attributes;return Object(n.createElement)(w.Placeholder,{icon:Object(n.createElement)(c.a,{srcElement:a}),label:Object(o.__)("Products by Attribute","woo-gutenberg-products-block"),className:"wc-block-products-grid wc-block-products-by-attribute"},Object(o.__)("Display a grid of products from your selected attributes.","woo-gutenberg-products-block"),Object(n.createElement)("div",{className:"wc-block-products-by-attribute__selection"},Object(n.createElement)($,{selected:i.attributes,onChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=t.map((function(t){return{id:t.id,attr_slug:t.attr_slug}}));r({attributes:e})},operator:i.attrOperator,onOperatorChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return r({attrOperator:t})}}),Object(n.createElement)(w.Button,{isDefault:!0,onClick:function(){r({editMode:!1}),e(Object(o.__)("Showing Products by Attribute block preview.","woo-gutenberg-products-block"))}},Object(o.__)("Done","woo-gutenberg-products-block"))))}},{key:"render",value:function(){var t=this.props,e=t.attributes,r=t.name,c=t.setAttributes,i=e.editMode;return e.isPreview?J.a:Object(n.createElement)(n.Fragment,null,Object(n.createElement)(j.BlockControls,null,Object(n.createElement)(w.Toolbar,{controls:[{icon:"edit",title:Object(o.__)("Edit"),onClick:function(){return c({editMode:!i})},isActive:i}]})),this.getInspectorControls(),i?this.renderEditMode():Object(n.createElement)(w.Disabled,null,Object(n.createElement)(j.ServerSideRender,{block:r,attributes:e})))}}]),i}(n.Component),K=Object(w.withSpokenMessages)(Y),Z=r(50);Object(u.registerBlockType)("woocommerce/products-by-attribute",{title:Object(o.__)("Products by Attribute","woo-gutenberg-products-block"),icon:{src:Object(n.createElement)(c.a,{srcElement:a}),foreground:"#96588a"},category:"woocommerce",keywords:[Object(o.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(o.__)("Display a grid of products with selected attributes.","woo-gutenberg-products-block"),supports:{align:["wide","full"],html:!1},example:{attributes:{isPreview:!0}},attributes:{attributes:{type:"array",default:[]},attrOperator:{type:"string",default:"any"},columns:{type:"number",default:s.a},editMode:{type:"boolean",default:!0},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},orderby:{type:"string",default:"date"},rows:{type:"number",default:s.c},alignButtons:{type:"boolean",default:!1},isPreview:{type:"boolean",default:!1}},deprecated:[{attributes:{attributes:{type:"array",default:[]},attrOperator:{type:"string",default:"any"},columns:{type:"number",default:s.a},editMode:{type:"boolean",default:!0},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},orderby:{type:"string",default:"date"},rows:{type:"number",default:s.c}},save:Object(Z.a)("woocommerce/products-by-attribute")}],edit:function(t){return Object(n.createElement)(K,t)},save:function(){return null}})},60:function(t,e){!function(){t.exports=this.wp.htmlEntities}()},61:function(t,e){!function(){t.exports=this.wp.date}()},62:function(t,e,r){"use strict";var n=r(6),o=r.n(n),c=r(36),i=r.n(c),a=r(11);r(2);function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}e.a=function(t){var e=t.srcElement,r=t.size,n=void 0===r?24:r,c=i()(t,["srcElement","size"]);return Object(a.isValidElement)(e)&&Object(a.cloneElement)(e,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({width:n,height:n},c))}},64:function(t,e,r){"use strict";var n=r(0),o=r(1),c=r(3);r(2);e.a=function(t){var e=t.value,r=t.setAttributes;return Object(n.createElement)(c.SelectControl,{label:Object(o.__)("Order products by","woo-gutenberg-products-block"),value:e,options:[{label:Object(o.__)("Newness - newest first","woo-gutenberg-products-block"),value:"date"},{label:Object(o.__)("Price - low to high","woo-gutenberg-products-block"),value:"price_asc"},{label:Object(o.__)("Price - high to low","woo-gutenberg-products-block"),value:"price_desc"},{label:Object(o.__)("Rating - highest first","woo-gutenberg-products-block"),value:"rating"},{label:Object(o.__)("Sales - most first","woo-gutenberg-products-block"),value:"popularity"},{label:Object(o.__)("Title - alphabetical","woo-gutenberg-products-block"),value:"title"},{label:Object(o.__)("Menu Order","woo-gutenberg-products-block"),value:"menu_order"}],onChange:function(t){return r({orderby:t})}})}},7:function(t,e){!function(){t.exports=this.wp.apiFetch}()},70:function(t,e){!function(){t.exports=this.wp.dom}()},74:function(t,e){},75:function(t,e){},76:function(t,e){},78:function(t,e){},79:function(t,e){},9:function(t,e){!function(){t.exports=this.wp.url}()},99:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(0),o=r(4),c=Object(n.createElement)("img",{src:o.p+"img/grid.svg",alt:"Grid Preview",width:"230",height:"250",style:{width:"100%"}})}});