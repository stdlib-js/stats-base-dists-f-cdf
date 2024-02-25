<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Cumulative Distribution Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [F][f-distribution] distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [F][f-distribution] random variable is

<!-- <equation class="equation" label="eq:f_cdf" align="center" raw="F(x; d_1,d_2)=I_{\frac{d_1 x}{d_1 x + d_2}}\left (\tfrac{d_1}{2}, \tfrac{d_2}{2} \right)" alt="Cumulative distribution function for an F distribution."> -->

```math
F(x; d_1,d_2)=I_{\frac{d_1 x}{d_1 x + d_2}}\left (\tfrac{d_1}{2}, \tfrac{d_2}{2} \right)
```

<!-- <div class="equation" align="center" data-raw-text="F(x; d_1,d_2)=I_{\frac{d_1 x}{d_1 x + d_2}}\left (\tfrac{d_1}{2}, \tfrac{d_2}{2} \right)" data-equation="eq:f_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/f/cdf/docs/img/equation_f_cdf.svg" alt="Cumulative distribution function for an F distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `d1` is the numerator degrees of freedom, `d2` is the denominator degrees of freedom and `I_{x}(a,b)` is the [lower regularized incomplete beta function][@stdlib/math/base/special/betainc].

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-f-cdf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats-base-dists-f-cdf' );
```

#### cdf( x, d1, d2 )

Evaluates the [cumulative distribution function][cdf] (CDF) for a [F][f-distribution] distribution with parameters `d1` (numerator degrees of freedom) and `d2` (denominator degrees of freedom).

```javascript
var y = cdf( 2.0, 1.0, 1.0 );
// returns ~0.608

y = cdf( 2.0, 8.0, 4.0 );
// returns ~0.737

y = cdf( -Infinity, 4.0, 2.0 );
// returns 0.0

y = cdf( 0.0, 4.0, 4.0 );
// returns 0.0

y = cdf( +Infinity, 4.0, 2.0 );
// returns 1.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 1.0, 1.0 );
// returns NaN

y = cdf( 0.0, NaN, 1.0 );
// returns NaN

y = cdf( 0.0, 1.0, NaN );
// returns NaN
```

If provided `d1 <= 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, -1.0, 0.5 );
// returns NaN

y = cdf( 2.0, 0.0, 0.5 );
// returns NaN
```

If provided `d2 <= 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, 0.5, -1.0 );
// returns NaN

y = cdf( 2.0, 0.5, 0.0 );
// returns NaN
```

#### cdf.factory( d1, d2 )

Returns a function for evaluating the [cumulative distribution function][cdf] of a [F][f-distribution] distribution with parameters `d1` (numerator degrees of freedom) and `d2` (denominator degrees of freedom).

```javascript
var mycdf = cdf.factory( 10.0, 2.0 );

var y = mycdf( 10.0 );
// returns ~0.906

y = mycdf( 8.0 );
// returns ~0.884
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var cdf = require( '@stdlib/stats-base-dists-f-cdf' );

var d1;
var d2;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 10.0;
    d1 = randu() * 10.0;
    d2 = randu() * 10.0;
    y = cdf( x, d1, d2 );
    console.log( 'x: %d, d1: %d, d2: %d, F(x;d1,d2): %d', x.toFixed( 4 ), d1.toFixed( 4 ), d2.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-f-cdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-f-cdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-f-cdf/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/stats-base-dists-f-cdf/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-f-cdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-f-cdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-f-cdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-f-cdf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-f-cdf/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-f-cdf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-f-cdf/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-f-cdf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-f-cdf/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-f-cdf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-f-cdf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-f-cdf/main/LICENSE

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[f-distribution]: https://en.wikipedia.org/wiki/F_distribution

[@stdlib/math/base/special/betainc]: https://github.com/stdlib-js/math-base-special-betainc

</section>

<!-- /.links -->
