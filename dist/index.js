"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=a(function(O,c){
var f=require('@stdlib/math-base-special-betainc/dist'),i=require('@stdlib/math-base-assert-is-nan/dist'),y=require('@stdlib/constants-float64-pinf/dist');function l(e,r,t){return i(e)||i(r)||i(t)||r<=0||t<=0?NaN:e<=0?0:e===y?1:r*e>t?f(r*e/(t+r*e),r/2,t/2,!0,!1):f(t/(t+r*e),t/2,r/2,!0,!0)}c.exports=l
});var v=a(function(R,q){
var p=require('@stdlib/utils-constant-function/dist'),o=require('@stdlib/math-base-special-betainc/dist'),n=require('@stdlib/math-base-assert-is-nan/dist'),F=require('@stdlib/constants-float64-pinf/dist');function b(e,r){if(n(e)||n(r)||e<=0||r<=0)return p(NaN);return t;function t(u){return n(u)?NaN:u<=0?0:u===F?1:e*u>r?o(e*u/(r+e*u),e/2,r/2,!0,!1):o(r/(r+e*u),r/2,e/2,!0,!0)}}q.exports=b
});var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),N=s(),P=v();I(N,"factory",P);module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
