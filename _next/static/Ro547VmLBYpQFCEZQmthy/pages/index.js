(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+iuc":function(e,t,n){n("wgeU"),n("FlQf"),n("bBy9"),n("B9jh"),n("dL40"),n("xvv9"),n("V+O7"),e.exports=n("WEpk").Set},"/0+H":function(e,t,n){"use strict";var r=n("hfKm"),a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};r(t,"__esModule",{value:!0});var o=a(n("q1tI")),i=n("lwAK");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery;return n||a&&(void 0!==o&&o)}t.isInAmpMode=u,t.useAmp=function(){return u(o.default.useContext(i.AmpStateContext))}},"0tVQ":function(e,t,n){n("FlQf"),n("VJsP"),e.exports=n("WEpk").Array.from},"2PDY":function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"8Kt/":function(e,t,n){"use strict";var r=n("ttDY"),a=n("hfKm"),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};a(t,"__esModule",{value:!0});var i=o(n("q1tI")),u=o(n("Xuae")),s=n("lwAK"),c=n("FYa8"),l=n("/0+H");function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=f;var p=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new r,t=new r,n=new r,a={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var u=o.key.slice(o.key.indexOf("$")+1);e.has(u)?i=!1:e.add(u)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var s=0,c=p.length;s<c;s++){var l=p[s];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var f=o.props[l],d=a[l]||new r;d.has(f)?i=!1:(d.add(f),a[l]=d)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return i.default.cloneElement(e,{key:n})}))}var v=u.default();function m(e){var t=e.children;return i.default.createElement(s.AmpStateContext.Consumer,null,(function(e){return i.default.createElement(c.HeadManagerContext.Consumer,null,(function(n){return i.default.createElement(v,{reduceComponentsToState:h,handleStateChange:n,inAmpMode:l.isInAmpMode(e)},t)}))}))}m.rewind=v.rewind,t.default=m},B9jh:function(e,t,n){"use strict";var r=n("Wu5q"),a=n("n3ko");e.exports=n("raTm")("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return r.def(a(this,"Set"),e=0===e?0:e,e)}},r)},IP1Z:function(e,t,n){"use strict";var r=n("2faE"),a=n("rr1i");e.exports=function(e,t,n){t in e?r.f(e,t,a(0,n)):e[t]=n}},PQJW:function(e,t,n){var r=n("d04V"),a=n("yLu3");e.exports=function(e){if(a(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return r(e)}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var r=n("q1tI"),a=n.n(r),o=n("8Kt/"),i=n.n(o),u=n("0Zsk"),s=a.a.createElement;function c(){return s(a.a.Fragment,null,s(i.a,null,s("title",null,"This is homepage title"),s("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Raleway"})),s("div",{className:"bgimg w3-display-container w3-animate-opacity w3-text-white"},s("div",{className:"w3-display-topleft w3-padding-large w3-xlarge"},"Logo"),s("div",{className:"w3-display-middle"},s("h1",{className:"w3-jumbo w3-animate-top"},"It's Here!"),s("hr",{className:"w3-border-grey"}),s("p",{className:"w3-large w3-center"},"Yes yes yes"),s(u.a,{href:"/cats"},s("a",null,"Test this SPA"))),s("div",{className:"w3-display-bottomleft w3-padding-large"},"Free template credits to ",s("a",{href:"https://www.w3schools.com/w3css/w3css_templates.asp",target:"_blank"},"W3 Schools"))))}},TbGu:function(e,t,n){var r=n("fGSI"),a=n("PQJW"),o=n("2PDY");e.exports=function(e){return r(e)||a(e)||o()}},"V+O7":function(e,t,n){n("aPfg")("Set")},VJsP:function(e,t,n){"use strict";var r=n("2GTP"),a=n("Y7ZC"),o=n("JB68"),i=n("sNwI"),u=n("NwJ3"),s=n("tEej"),c=n("IP1Z"),l=n("fNZA");a(a.S+a.F*!n("TuGD")((function(e){Array.from(e)})),"Array",{from:function(e){var t,n,a,f,d=o(e),p="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,m=void 0!==v,w=0,y=l(d);if(m&&(v=r(v,h>2?arguments[2]:void 0,2)),void 0==y||p==Array&&u(y))for(n=new p(t=s(d.length));t>w;w++)c(n,w,m?v(d[w],w):d[w]);else for(f=y.call(d),n=new p;!(a=f.next()).done;w++)c(n,w,m?i(f,v,[a.value,w],!0):a.value);return n.length=w,n}})},Xuae:function(e,t,n){"use strict";var r=n("/HRN"),a=n("ZDA2"),o=n("/+P4"),i=n("K47E"),u=n("WaGi"),s=n("N9n2"),c=n("TbGu"),l=n("ttDY");n("hfKm")(t,"__esModule",{value:!0});var f=n("q1tI"),d=!1;t.default=function(){var e,t=new l;function n(n){e=n.props.reduceComponentsToState(c(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(c){function l(e){var u;return r(this,l),u=a(this,o(l).call(this,e)),d&&(t.add(i(u)),n(i(u))),u}return s(l,c),u(l,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),u(l,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(f.Component)}},d04V:function(e,t,n){e.exports=n("0tVQ")},dL40:function(e,t,n){var r=n("Y7ZC");r(r.P+r.R,"Set",{toJSON:n("8iia")("Set")})},fGSI:function(e,t,n){var r=n("p0XB");e.exports=function(e){if(r(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},lwAK:function(e,t,n){"use strict";var r=n("hfKm"),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};r(t,"__esModule",{value:!0});var o=a(n("q1tI"));t.AmpStateContext=o.createContext({})},ttDY:function(e,t,n){e.exports=n("+iuc")},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},xvv9:function(e,t,n){n("cHUd")("Set")}},[["vlRD",0,1]]]);