!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t),t.default=((e,t)=>{const r=new WeakMap,n=(e,o)=>{for(let t of Object.keys(e))"object"==typeof e[t]&&(e[t]=n(e[t],[...o,t]));let u=new Proxy(e,(e=>({set:(r,o,u,c)=>("object"==typeof u&&(u=n(u,[...e,o])),r[o]=u,t.setState({[o]:u}),!0)}))(o));return r.set(u,e),u};return n(e,[])})}]);