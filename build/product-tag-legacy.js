this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-tag"]=function(t){function e(e){for(var n,i,s=e[0],a=e[1],u=e[2],b=0,d=[];b<s.length;b++)i=s[b],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);for(l&&l(e);d.length;)d.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,s=1;s<r.length;s++){var a=r[s];0!==o[a]&&(n=!1)}n&&(c.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={19:0},c=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],a=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=a;return c.push([583,2,0,1]),r()}({0:function(t,e){!function(){t.exports=this.wp.element}()},1:function(t,e){!function(){t.exports=this.wp.i18n}()},11:function(t,e){!function(){t.exports=this.React}()},13:function(t,e){!function(){t.exports=this.moment}()},20:function(t,e){!function(){t.exports=this.wp.editor}()},21:function(t,e){!function(){t.exports=this.wp.compose}()},23:function(t,e){!function(){t.exports=this.wp.blocks}()},26:function(t,e,r){"use strict";r.d(e,"g",(function(){return d})),r.d(e,"d",(function(){return p})),r.d(e,"e",(function(){return g})),r.d(e,"c",(function(){return f})),r.d(e,"b",(function(){return h})),r.d(e,"f",(function(){return O})),r.d(e,"a",(function(){return j})),r.d(e,"h",(function(){return m}));var n=r(6),o=r.n(n),c=r(9),i=r(7),s=r.n(i),a=r(5),u=r(4);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var d=function(t){var e=t.selected,r=void 0===e?[]:e,n=t.search,o=void 0===n?"":n,i=t.queryArgs,l=function(t){var e=t.selected,r=void 0===e?[]:e,n=t.search,o=void 0===n?"":n,i=t.queryArgs,s=void 0===i?[]:i,a={per_page:u.g?100:-1,catalog_visibility:"any",status:"publish",search:o,orderby:"title",order:"asc"},l=[Object(c.addQueryArgs)(u.d.products,b({},a,{},s))];return u.g&&r.length&&l.push(Object(c.addQueryArgs)(u.d.products,{catalog_visibility:"any",status:"publish",include:r})),l}({selected:r,search:o,queryArgs:void 0===i?[]:i});return Promise.all(l.map((function(t){return s()({path:t})}))).then((function(t){return Object(a.uniqBy)(Object(a.flatten)(t),"id").map((function(t){return b({},t,{parent:0})}))})).catch((function(t){throw t}))},p=function(t){return s()({path:"".concat(u.d.products,"/").concat(t)})},g=function(t){var e=t.selected,r=function(t){var e=t.selected,r=void 0===e?[]:e,n=t.search,o=[Object(c.addQueryArgs)("".concat(u.d.products,"/tags"),{per_page:u.h?100:-1,orderby:u.h?"count":"name",order:u.h?"desc":"asc",search:n})];return u.h&&r.length&&o.push(Object(c.addQueryArgs)("".concat(u.d.products,"/tags"),{include:r})),o}({selected:void 0===e?[]:e,search:t.search});return Promise.all(r.map((function(t){return s()({path:t})}))).then((function(t){return Object(a.uniqBy)(Object(a.flatten)(t),"id")}))},f=function(t){return s()({path:"".concat(u.d.categories,"/").concat(t)})},h=function(t){return s()({path:Object(c.addQueryArgs)("".concat(u.d.products,"/categories"),b({per_page:-1},t))})},O=function(t){return s()({path:Object(c.addQueryArgs)("".concat(u.d.products,"/").concat(t,"/variations"),{per_page:-1})})},j=function(){return s()({path:Object(c.addQueryArgs)("".concat(u.d.products,"/attributes"),{per_page:-1})})},m=function(t){return s()({path:Object(c.addQueryArgs)("".concat(u.d.products,"/attributes/").concat(t,"/terms"),{per_page:-1})})}},3:function(t,e){!function(){t.exports=this.wp.components}()},35:function(t,e){!function(){t.exports=this.wp.keycodes}()},4:function(t,e,r){"use strict";r.d(e,"n",(function(){return f})),r.d(e,"o",(function(){return h})),r.d(e,"i",(function(){return O})),r.d(e,"k",(function(){return j})),r.d(e,"a",(function(){return m})),r.d(e,"j",(function(){return y})),r.d(e,"m",(function(){return w})),r.d(e,"c",(function(){return v})),r.d(e,"l",(function(){return _})),r.d(e,"b",(function(){return k})),r.d(e,"g",(function(){return P})),r.d(e,"h",(function(){return E})),r.d(e,"e",(function(){return S})),r.d(e,"f",(function(){return C})),r.d(e,"p",(function(){return A})),r.d(e,"d",(function(){return T}));var n=r(6),o=r.n(n),c=r(7),i=r.n(c),s=r(37);function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l={adminUrl:"",countries:[],currency:{code:"USD",precision:2,symbol:"$",symbolPosition:"left",decimalSeparator:".",priceFormat:"%1$s%2$s",thousandSeparator:","},defaultDateRange:"period=month&compare=previous_year",locale:{siteLocale:"en_US",userLocale:"en_US",weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},orderStatuses:[],siteTitle:"",wcAssetUrl:""},b=u({},l,{},"object"===("undefined"==typeof wcSettings?"undefined":r.n(s)()(wcSettings))?wcSettings:{});function d(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return t},n=b.hasOwnProperty(t)?b[t]:e;return r(n,e)}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}b.currency=u({},l.currency,{},b.currency),b.locale=u({},l.locale,{},b.locale);var g=d("storeApiNonce");i.a.use((function(t,e){if(function(t){var e=t.url||t.path;return!(!e||!t.method||"GET"===t.method)&&null!==/wc\/store\//.exec(e)}(t)){var r=t.headers||{};t.headers=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},r,{"X-WC-Store-API-Nonce":g})}return e(t,e)})),i.a.setNonce=function(t){var e=null==t?void 0:t.get("X-WC-Store-API-Nonce");e&&(g=e)};d("currentUserIsAdmin",!1);var f=d("reviewRatingsEnabled",!0),h=d("showAvatars",!0),O=d("max_columns",6),j=d("min_columns",1),m=d("default_columns",3),y=d("max_rows",6),w=d("min_rows",1),v=d("default_rows",3),_=d("min_height",500),k=d("default_height",500),P=(d("placeholderImgSrc",""),d("thumbnail_size",300),d("isLargeCatalog")),E=d("limitTags"),S=(d("hasProducts",!0),d("hasTags",!0)),C=d("homeUrl",""),A=(d("couponsEnabled",!0),d("shippingEnabled",!0),d("displayShopPricesIncludingTax",!1),d("displayCartPricesIncludingTax",!1),d("productCount",0),d("attributes",[]),d("isShippingCalculatorEnabled",!0),d("isShippingCostHidden",!1),d("wcBlocksAssetUrl","")),x=(d("shippingCountries",{}),d("allowedCountries",{}),d("shippingStates",{}),d("allowedStates",{}),d("shippingMethodsExist",!1),{id:0,title:"",permalink:""}),D=d("storePages",{shop:x,cart:x,checkout:x,privacy:x,terms:x}),T=(D.shop.permalink,D.checkout.id,D.checkout.permalink,D.privacy.permalink,D.privacy.title,D.terms.permalink,D.terms.title,D.cart.id,D.cart.permalink,{root:"/wc/blocks",products:"".concat("/wc/blocks","/products"),categories:"".concat("/wc/blocks","/products/categories")})},43:function(t,e,r){"use strict";var n=r(6),o=r.n(n),c=r(0),i=r(1),s=(r(2),r(3));function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.a=function(t){var e=t.onChange,r=t.settings,n=r.button,o=r.price,a=r.rating,l=r.title;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(s.ToggleControl,{label:Object(i.__)("Product title","woo-gutenberg-products-block"),help:l?Object(i.__)("Product title is visible.","woo-gutenberg-products-block"):Object(i.__)("Product title is hidden.","woo-gutenberg-products-block"),checked:l,onChange:function(){return e(u({},r,{title:!l}))}}),Object(c.createElement)(s.ToggleControl,{label:Object(i.__)("Product price","woo-gutenberg-products-block"),help:o?Object(i.__)("Product price is visible.","woo-gutenberg-products-block"):Object(i.__)("Product price is hidden.","woo-gutenberg-products-block"),checked:o,onChange:function(){return e(u({},r,{price:!o}))}}),Object(c.createElement)(s.ToggleControl,{label:Object(i.__)("Product rating","woo-gutenberg-products-block"),help:a?Object(i.__)("Product rating is visible.","woo-gutenberg-products-block"):Object(i.__)("Product rating is hidden.","woo-gutenberg-products-block"),checked:a,onChange:function(){return e(u({},r,{rating:!a}))}}),Object(c.createElement)(s.ToggleControl,{label:Object(i.__)("Add to Cart button","woo-gutenberg-products-block"),help:n?Object(i.__)("Add to Cart button is visible.","woo-gutenberg-products-block"):Object(i.__)("Add to Cart button is hidden.","woo-gutenberg-products-block"),checked:n,onChange:function(){return e(u({},r,{button:!n}))}}))}},48:function(t,e){!function(){t.exports=this.ReactDOM}()},49:function(t,e,r){"use strict";var n=r(0),o=r(1),c=r(5),i=(r(2),r(3)),s=r(4);e.a=function(t){var e=t.columns,r=t.rows,a=t.setAttributes,u=t.alignButtons;return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(i.RangeControl,{label:Object(o.__)("Columns","woo-gutenberg-products-block"),value:e,onChange:function(t){var e=Object(c.clamp)(t,s.k,s.i);a({columns:Object(c.isNaN)(e)?"":e})},min:s.k,max:s.i}),Object(n.createElement)(i.RangeControl,{label:Object(o.__)("Rows","woo-gutenberg-products-block"),value:r,onChange:function(t){var e=Object(c.clamp)(t,s.m,s.j);a({rows:Object(c.isNaN)(e)?"":e})},min:s.m,max:s.j}),Object(n.createElement)(i.ToggleControl,{label:Object(o.__)("Align Last Block","woo-gutenberg-products-block"),help:u?Object(o.__)("The last inner block will be aligned vertically.","woo-gutenberg-products-block"):Object(o.__)("The last inner block will follow other content.","woo-gutenberg-products-block"),checked:u,onChange:function(){return a({alignButtons:!u})}}))}},5:function(t,e){!function(){t.exports=this.lodash}()},51:function(t,e){!function(){t.exports=this.wp.viewport}()},56:function(t,e){!function(){t.exports=this.wp.hooks}()},571:function(t,e,r){},583:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(1),c=r(23),i=r(4),s=r(62),a=r(602),u=Object(n.createElement)(a.a,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(n.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(n.createElement)("path",{d:"M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.97.89 1.66.89H22c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14z"}),Object(n.createElement)("circle",{cx:"9",cy:"12",r:"1.5"}),Object(n.createElement)("circle",{cx:"14",cy:"12",r:"1.5"}),Object(n.createElement)("circle",{cx:"19",cy:"12",r:"1.5"})),l=(r(571),r(6)),b=r.n(l),d=r(16),p=r.n(d),g=r(17),f=r.n(g),h=r(14),O=r.n(h),j=r(18),m=r.n(j),y=r(19),w=r.n(y),v=r(10),_=r.n(v),k=r(20),P=r(3),E=(r(2),r(43)),S=r(49),C=r(15),A=r.n(C),x=r(5),D=r(29),T=r(26);r(572);function B(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var N=function(t){m()(c,t);var e,r=(e=c,function(){var t,r=_()(e);if(B()){var n=_()(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return w()(this,t)});function c(){var t;return p()(this,c),(t=r.apply(this,arguments)).state={list:[],loading:!0},t.renderItem=t.renderItem.bind(O()(t)),t.debouncedOnSearch=Object(x.debounce)(t.onSearch.bind(O()(t)),400),t}return f()(c,[{key:"componentDidMount",value:function(){var t=this,e=this.props.selected;Object(T.e)({selected:e}).then((function(e){t.setState({list:e,loading:!1})})).catch((function(){t.setState({list:[],loading:!1})}))}},{key:"onSearch",value:function(t){var e=this,r=this.props.selected;this.setState({loading:!0}),Object(T.e)({selected:r,search:t}).then((function(t){e.setState({list:t,loading:!1})})).catch((function(){e.setState({list:[],loading:!1})}))}},{key:"renderItem",value:function(t){var e=t.item,r=t.search,c=t.depth,i=void 0===c?0:c,s=["woocommerce-product-tags__item"];r.length&&s.push("is-searching"),0===i&&0!==e.parent&&s.push("is-skip-level");var a=e.breadcrumbs.length?"".concat(e.breadcrumbs.join(", "),", ").concat(e.name):e.name;return Object(n.createElement)(D.b,A()({className:s.join(" ")},t,{showCount:!0,"aria-label":Object(o.sprintf)(Object(o._n)("%d product tagged as %s","%d products tagged as %s",e.count,"woo-gutenberg-products-block"),e.count,a)}))}},{key:"render",value:function(){var t=this.state,e=t.list,r=t.loading,c=this.props,s=c.onChange,a=c.onOperatorChange,u=c.operator,l=c.selected,b={clear:Object(o.__)("Clear all product tags","woo-gutenberg-products-block"),list:Object(o.__)("Product Tags","woo-gutenberg-products-block"),noItems:Object(o.__)("Your store doesn't have any product tags.","woo-gutenberg-products-block"),search:Object(o.__)("Search for product tags","woo-gutenberg-products-block"),selected:function(t){return Object(o.sprintf)(Object(o._n)("%d tag selected","%d tags selected",t,"woo-gutenberg-products-block"),t)},updated:Object(o.__)("Tag search results updated.","woo-gutenberg-products-block")};return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(D.a,{className:"woocommerce-product-tags",list:e,isLoading:r,selected:l.map((function(t){return Object(x.find)(e,{id:t})})).filter(Boolean),onChange:s,onSearch:i.h?this.debouncedOnSearch:null,renderItem:this.renderItem,messages:b,isHierarchical:!0}),!!a&&Object(n.createElement)("div",{className:l.length<2?"screen-reader-text":""},Object(n.createElement)(P.SelectControl,{className:"woocommerce-product-tags__operator",label:Object(o.__)("Display products matching","woo-gutenberg-products-block"),help:Object(o.__)("Pick at least two tags to use this setting.","woo-gutenberg-products-block"),value:u,onChange:a,options:[{label:Object(o.__)("Any selected tags","woo-gutenberg-products-block"),value:"any"},{label:Object(o.__)("All selected tags","woo-gutenberg-products-block"),value:"all"}]})))}}]),c}(n.Component);N.defaultProps={operator:"any"};var R=N,M=r(64),I=r(99);function V(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function F(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?V(Object(r),!0).forEach((function(e){b()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function L(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var Q=function(t){m()(c,t);var e,r=(e=c,function(){var t,r=_()(e);if(L()){var n=_()(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return w()(this,t)});function c(){var t;return p()(this,c),(t=r.apply(this,arguments)).state={changedAttributes:{},isEditing:!1},t.startEditing=t.startEditing.bind(O()(t)),t.stopEditing=t.stopEditing.bind(O()(t)),t.setChangedAttributes=t.setChangedAttributes.bind(O()(t)),t.save=t.save.bind(O()(t)),t}return f()(c,[{key:"componentDidMount",value:function(){this.props.attributes.tags.length||this.setState({isEditing:!0})}},{key:"startEditing",value:function(){this.setState({isEditing:!0,changedAttributes:{}})}},{key:"stopEditing",value:function(){this.setState({isEditing:!1,changedAttributes:{}})}},{key:"setChangedAttributes",value:function(t){this.setState((function(e){return{changedAttributes:F({},e.changedAttributes,{},t)}}))}},{key:"save",value:function(){var t=this.state.changedAttributes;(0,this.props.setAttributes)(t),this.stopEditing()}},{key:"getInspectorControls",value:function(){var t=this.props,e=t.attributes,r=t.setAttributes,c=this.state.isEditing,i=e.columns,s=e.tagOperator,a=e.contentVisibility,u=e.orderby,l=e.rows,b=e.alignButtons;return Object(n.createElement)(k.InspectorControls,{key:"inspector"},Object(n.createElement)(P.PanelBody,{title:Object(o.__)("Product Tag","woo-gutenberg-products-block"),initialOpen:!e.tags.length&&!c},Object(n.createElement)(R,{selected:e.tags,onChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=t.map((function(t){return t.id}));r({tags:e})},operator:s,onOperatorChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return r({tagOperator:t})}})),Object(n.createElement)(P.PanelBody,{title:Object(o.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(n.createElement)(S.a,{columns:i,rows:l,alignButtons:b,setAttributes:r})),Object(n.createElement)(P.PanelBody,{title:Object(o.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},Object(n.createElement)(E.a,{settings:a,onChange:function(t){return r({contentVisibility:t})}})),Object(n.createElement)(P.PanelBody,{title:Object(o.__)("Order By","woo-gutenberg-products-block"),initialOpen:!1},Object(n.createElement)(M.a,{setAttributes:r,value:u})))}},{key:"renderEditMode",value:function(){var t=this,e=this.props,r=e.attributes,c=e.debouncedSpeak,i=F({},r,{},this.state.changedAttributes);return Object(n.createElement)(P.Placeholder,{icon:Object(n.createElement)(s.a,{srcElement:u,className:"block-editor-block-icon"}),label:Object(o.__)("Products by Tag","woo-gutenberg-products-block"),className:"wc-block-products-grid wc-block-product-tag"},Object(o.__)("Display a grid of products from your selected tags.","woo-gutenberg-products-block"),Object(n.createElement)("div",{className:"wc-block-product-tag__selection"},Object(n.createElement)(R,{selected:i.tags,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=e.map((function(t){return t.id}));t.setChangedAttributes({tags:r})},operator:i.tagOperator,onOperatorChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return t.setChangedAttributes({tagOperator:e})}}),Object(n.createElement)(P.Button,{isDefault:!0,onClick:function(){t.save(),c(Object(o.__)("Showing Products by Tag block preview.","woo-gutenberg-products-block"))}},Object(o.__)("Done","woo-gutenberg-products-block")),Object(n.createElement)(P.Button,{className:"wc-block-product-tag__cancel-button",isTertiary:!0,onClick:function(){t.stopEditing(),c(Object(o.__)("Showing Products by Tag block preview.","woo-gutenberg-products-block"))}},Object(o.__)("Cancel","woo-gutenberg-products-block"))))}},{key:"renderViewMode",value:function(){var t=this.props,e=t.attributes,r=t.name,c=e.tags.length;return Object(n.createElement)(P.Disabled,null,c?Object(n.createElement)(k.ServerSideRender,{block:r,attributes:e}):Object(n.createElement)(P.Placeholder,{icon:Object(n.createElement)(s.a,{icon:u,className:"block-editor-block-icon"}),label:Object(o.__)("Products by Tag","woo-gutenberg-products-block"),className:"wc-block-products-grid wc-block-product-tag"},Object(o.__)("This block displays products from selected tags. Select at least one tag to display its products.","woo-gutenberg-products-block")))}},{key:"render",value:function(){var t=this,e=this.state.isEditing;return this.props.attributes.isPreview?I.a:Object(n.createElement)(n.Fragment,null,i.e?Object(n.createElement)(n.Fragment,null,Object(n.createElement)(k.BlockControls,null,Object(n.createElement)(P.Toolbar,{controls:[{icon:"edit",title:Object(o.__)("Edit"),onClick:function(){return e?t.stopEditing():t.startEditing()},isActive:e}]})),this.getInspectorControls(),e?this.renderEditMode():this.renderViewMode()):Object(n.createElement)(P.Placeholder,{icon:Object(n.createElement)(s.a,{icon:u,className:"block-editor-block-icon"}),label:Object(o.__)("Products by Tag","woo-gutenberg-products-block"),className:"wc-block-products-grid wc-block-product-tag"},Object(o.__)("This block displays products from selected tags. In order to preview this you'll first need to create a product and assign it some tags.","woo-gutenberg-products-block")))}}]),c}(n.Component),U=Object(P.withSpokenMessages)(Q);Object(c.registerBlockType)("woocommerce/product-tag",{title:Object(o.__)("Products by Tag","woo-gutenberg-products-block"),icon:{src:Object(n.createElement)(s.a,{srcElement:u}),foreground:"#96588a"},category:"woocommerce",keywords:[Object(o.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(o.__)("Display a grid of products with selected tags.","woo-gutenberg-products-block"),supports:{align:["wide","full"],html:!1},example:{attributes:{isPreview:!0}},attributes:{columns:{type:"number",default:i.a},rows:{type:"number",default:i.c},alignButtons:{type:"boolean",default:!1},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},tags:{type:"array",default:[]},tagOperator:{type:"string",default:"any"},orderby:{type:"string",default:"date"},isPreview:{type:"boolean",default:!1}},edit:function(t){return Object(n.createElement)(U,t)},save:function(){return null}})},60:function(t,e){!function(){t.exports=this.wp.htmlEntities}()},61:function(t,e){!function(){t.exports=this.wp.date}()},62:function(t,e,r){"use strict";var n=r(6),o=r.n(n),c=r(36),i=r.n(c),s=r(11);r(2);function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}e.a=function(t){var e=t.srcElement,r=t.size,n=void 0===r?24:r,c=i()(t,["srcElement","size"]);return Object(s.isValidElement)(e)&&Object(s.cloneElement)(e,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({width:n,height:n},c))}},64:function(t,e,r){"use strict";var n=r(0),o=r(1),c=r(3);r(2);e.a=function(t){var e=t.value,r=t.setAttributes;return Object(n.createElement)(c.SelectControl,{label:Object(o.__)("Order products by","woo-gutenberg-products-block"),value:e,options:[{label:Object(o.__)("Newness - newest first","woo-gutenberg-products-block"),value:"date"},{label:Object(o.__)("Price - low to high","woo-gutenberg-products-block"),value:"price_asc"},{label:Object(o.__)("Price - high to low","woo-gutenberg-products-block"),value:"price_desc"},{label:Object(o.__)("Rating - highest first","woo-gutenberg-products-block"),value:"rating"},{label:Object(o.__)("Sales - most first","woo-gutenberg-products-block"),value:"popularity"},{label:Object(o.__)("Title - alphabetical","woo-gutenberg-products-block"),value:"title"},{label:Object(o.__)("Menu Order","woo-gutenberg-products-block"),value:"menu_order"}],onChange:function(t){return r({orderby:t})}})}},7:function(t,e){!function(){t.exports=this.wp.apiFetch}()},70:function(t,e){!function(){t.exports=this.wp.dom}()},74:function(t,e){},75:function(t,e){},76:function(t,e){},78:function(t,e){},79:function(t,e){},9:function(t,e){!function(){t.exports=this.wp.url}()},99:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(0),o=r(4),c=Object(n.createElement)("img",{src:o.p+"img/grid.svg",alt:"Grid Preview",width:"230",height:"250",style:{width:"100%"}})}});