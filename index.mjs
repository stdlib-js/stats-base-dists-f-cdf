// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-betainc@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";var i=n,a=s,d=e;var m=r,o=n,f=s,l=e;var j=function(t,n,s){return a(t)||a(n)||a(s)||n<=0||s<=0?NaN:t<=0?0:t===d?1:n*t>s?i(n*t/(s+n*t),n/2,s/2,!0,!1):i(s/(s+n*t),s/2,n/2,!0,!0)},p=function(t,n){return f(t)||f(n)||t<=0||n<=0?m(NaN):function(s){if(f(s))return NaN;if(s<=0)return 0;if(s===l)return 1;if(t*s>n)return o(t*s/(n+t*s),t/2,n/2,!0,!1);return o(n/(n+t*s),n/2,t/2,!0,!0)}};t(j,"factory",p);var u=j;export{u as default,p as factory};
//# sourceMappingURL=index.mjs.map
