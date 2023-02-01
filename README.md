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

# Poisson

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Poisson distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
Poisson = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-poisson-ctor@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var Poisson = require( 'path/to/vendor/umd/stats-base-dists-poisson-ctor/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-poisson-ctor@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.Poisson;
})();
</script>
```

#### Poisson( \[lambda] )

Returns an [Poisson][poisson-distribution] distribution object.

```javascript
var poisson = new Poisson();

var lambda = poisson.mean;
// returns 1.0
```

By default, `lambda = 1.0`. To create a distribution having a different mean parameter `lambda`, provide a parameter value.

```javascript
var poisson = new Poisson( 4.0 );

var lambda = poisson.mean;
// returns 4.0
```

* * *

## poisson

A [Poisson][poisson-distribution] distribution object has the following properties and methods...

### Writable Properties

#### poisson.lambda

Mean parameter of the distribution. `lambda` **must** be a positive number.

```javascript
var poisson = new Poisson( 2.0 );

var lambda = poisson.lambda;
// returns 2.0

poisson.lambda = 3.0;

lambda = poisson.lambda;
// returns 3.0
```

* * *

### Computed Properties

#### Poisson.prototype.entropy

Returns the [differential entropy][entropy].

```javascript
var poisson = new Poisson( 4.0 );

var entropy = poisson.entropy;
// returns ~2.087
```

#### Poisson.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var poisson = new Poisson( 4.0 );

var kurtosis = poisson.kurtosis;
// returns 0.25
```

#### Poisson.prototype.mean

Returns the [median][expected-value].

```javascript
var poisson = new Poisson( 4.0 );

var mu = poisson.mean;
// returns 4.0
```

#### Poisson.prototype.median

Returns the [median][median].

```javascript
var poisson = new Poisson( 4.0 );

var median = poisson.median;
// returns 4.0
```

#### Poisson.prototype.mode

Returns the [mode][mode].

```javascript
var poisson = new Poisson( 4.0 );

var mode = poisson.mode;
// returns 4.0
```

#### Poisson.prototype.skewness

Returns the [skewness][skewness].

```javascript
var poisson = new Poisson( 4.0 );

var skewness = poisson.skewness;
// returns 0.5
```

#### Poisson.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var poisson = new Poisson( 4.0 );

var s = poisson.stdev;
// returns 2.0
```

#### Poisson.prototype.variance

Returns the [variance][variance].

```javascript
var poisson = new Poisson( 4.0 );

var s2 = poisson.variance;
// returns 4.0
```

* * *

### Methods

#### Poisson.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var poisson = new Poisson( 2.0 );

var y = poisson.cdf( 0.5 );
// returns ~0.135
```

#### Poisson.prototype.logpmf( x )

Evaluates the natural logarithm of the [probability mass function][pmf] (PMF).

```javascript
var poisson = new Poisson( 2.0 );

var y = poisson.logpmf( 3.0 );
// returns ~-1.712

y = poisson.logpmf( 2.3 );
// returns -Infinity
```

#### Poisson.prototype.mgf( t )

Evaluates the [moment-generating function][mgf] (MGF).

```javascript
var poisson = new Poisson( 2.0 );

var y = poisson.mgf( 0.5 );
// returns ~3.66
```

#### Poisson.prototype.pmf( x )

Evaluates the [probability mass function][pmf] (PMF).

```javascript
var poisson = new Poisson( 2.0 );

var y = poisson.pmf( 3.0 );
// returns ~0.18

y = poisson.pmf( 2.3 );
// returns 0.0
```

#### Poisson.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var poisson = new Poisson( 2.0 );

var y = poisson.quantile( 0.5 );
// returns 2.0

y = poisson.quantile( 1.9 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-poisson-ctor@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var poisson = new Poisson( 2.0 );

var mu = poisson.mean;
// returns 2.0

var mode = poisson.mode;
// returns 2.0

var s2 = poisson.variance;
// returns 2.0

var y = poisson.cdf( 0.8 );
// returns ~0.135

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

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

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-poisson-ctor.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-poisson-ctor

[test-image]: https://github.com/stdlib-js/stats-base-dists-poisson-ctor/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-poisson-ctor/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-poisson-ctor/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-poisson-ctor?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-poisson-ctor.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-poisson-ctor/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-poisson-ctor/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-poisson-ctor/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-poisson-ctor/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-poisson-ctor/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-poisson-ctor/main/LICENSE

[poisson-distribution]: https://en.wikipedia.org/wiki/Poisson_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

[pmf]: https://en.wikipedia.org/wiki/Probability_mass_function

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[expected-value]: https://en.wikipedia.org/wiki/Expected_value

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

[median]: https://en.wikipedia.org/wiki/Median

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

[skewness]: https://en.wikipedia.org/wiki/Skewness

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->
