/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* eslint-disable no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var defineProperty = require( '@stdlib/utils-define-property' );
var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils-define-nonenumerable-read-only-accessor' );
var isPositive = require( '@stdlib/assert-is-positive-number' ).isPrimitive;
var entropy = require( '@stdlib/stats-base-dists-poisson-entropy' );
var kurtosis = require( '@stdlib/stats-base-dists-poisson-kurtosis' );
var mean = require( '@stdlib/stats-base-dists-poisson-mean' );
var median = require( '@stdlib/stats-base-dists-poisson-median' );
var mode = require( '@stdlib/stats-base-dists-poisson-mode' );
var skewness = require( '@stdlib/stats-base-dists-poisson-skewness' );
var stdev = require( '@stdlib/stats-base-dists-poisson-stdev' );
var variance = require( '@stdlib/stats-base-dists-poisson-variance' );
var cdf = require( '@stdlib/stats-base-dists-poisson-cdf' );
var logpmf = require( '@stdlib/stats-base-dists-poisson-logpmf' );
var mgf = require( '@stdlib/stats-base-dists-poisson-mgf' );
var pmf = require( '@stdlib/stats-base-dists-poisson-pmf' );
var quantile = require( '@stdlib/stats-base-dists-poisson-quantile' );
var format = require( '@stdlib/string-format' );


// FUNCTIONS //

/**
* Evaluates the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated CDF
*/
function poissonCDF( x ) {
	return cdf( x, this.lambda );
}

/**
* Evaluates the natural logarithm of the probability mass function (PMF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logPMF
*/
function poissonLogPMF( x ) {
	return logpmf( x, this.lambda );
}

/**
* Evaluates the moment-generating function (MGF).
*
* @private
* @param {number} t - input value
* @returns {number} evaluated MGF
*/
function poissonMGF( t ) {
	return mgf( t, this.lambda );
}

/**
* Evaluates the probability mass function (PMF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated PMF
*/
function poissonPMF( x ) {
	return pmf( x, this.lambda );
}

/**
* Evaluates the quantile function.
*
* @private
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
*/
function poissonQuantile( p ) {
	return quantile( p, this.lambda );
}


// MAIN //

/**
* Poisson distribution constructor.
*
* @constructor
* @param {PositiveNumber} [lambda=1.0] - mean parameter
* @throws {TypeError} `lambda` must be a positive number
* @returns {Poisson} distribution instance
*
* @example
* var poisson = new Poisson( 1.0 );
*
* var y = poisson.cdf( 0.8 );
* // returns ~0.368
*
* var v = poisson.mode;
* // returns 1.0
*/
function Poisson() {
	var lambda;
	if ( !(this instanceof Poisson) ) {
		if ( arguments.length === 0 ) {
			return new Poisson();
		}
		return new Poisson( arguments[ 0 ] );
	}
	if ( arguments.length ) {
		lambda = arguments[ 0 ];
		if ( !isPositive( lambda ) ) {
			throw new TypeError( format( 'invalid argument. Mean parameter must be a positive number. Value: `%s`.', lambda ) );
		}
	} else {
		lambda = 1.0;
	}
	defineProperty( this, 'lambda', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return lambda;
		},
		'set': function set( value ) {
			if ( !isPositive( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a positive number. Value: `%s`.', value ) );
			}
			lambda = value;
		}
	});
	return this;
}

/**
* Poisson distribution differential entropy.
*
* @name entropy
* @memberof Poisson.prototype
* @type {number}
* @see [differential entropy]{@link https://en.wikipedia.org/wiki/Entropy_%28information_theory%29}
*
* @example
* var poisson = new Poisson( 4.0 );
*
* var v = poisson.entropy;
* // returns ~2.087
*/
setReadOnlyAccessor( Poisson.prototype, 'entropy', function get() {
	return entropy( this.lambda );
});

/**
* Poisson distribution excess kurtosis.
*
* @name kurtosis
* @memberof Poisson.prototype
* @type {number}
* @see [kurtosis]{@link https://en.wikipedia.org/wiki/Kurtosis}
*
* @example
* var poisson = new Poisson( 4.0 );
*
* var v = poisson.kurtosis;
* // returns 0.25
*/
setReadOnlyAccessor( Poisson.prototype, 'kurtosis', function get() {
	return kurtosis( this.lambda );
});

/**
* Poisson distribution expected value.
*
* @name mean
* @memberof Poisson.prototype
* @type {number}
* @see [expected value]{@link https://en.wikipedia.org/wiki/Expected_value}
*
* @example
* var poisson = new Poisson( 4.0 );
*
* var v = poisson.mean;
* // returns 4.0
*/
setReadOnlyAccessor( Poisson.prototype, 'mean', function get() {
	return mean( this.lambda );
});

/**
* Poisson distribution median.
*
* @name median
* @memberof Poisson.prototype
* @type {number}
* @see [median]{@link https://en.wikipedia.org/wiki/Median}
*
* @example
* var poisson = new Poisson( 4.0 );
*
* var v = poisson.median;
* // returns 4.0
*/
setReadOnlyAccessor( Poisson.prototype, 'median', function get() {
	return median( this.lambda );
});

/**
* Poisson distribution mode.
*
* @name mode
* @memberof Poisson.prototype
* @type {number}
* @see [mode]{@link https://en.wikipedia.org/wiki/Mode_%28statistics%29}
*
* @example
* var poisson = new Poisson( 4.0 );
*
* var v = poisson.mode;
* // returns 4.0
*/
setReadOnlyAccessor( Poisson.prototype, 'mode', function get() {
	return mode( this.lambda );
});

/**
* Poisson distribution skewness.
*
* @name skewness
* @memberof Poisson.prototype
* @type {number}
* @see [skewness]{@link https://en.wikipedia.org/wiki/Skewness}
*
* @example
* var poisson = new Poisson( 4.0 );
*
* var v = poisson.skewness;
* // returns 0.5
*/
setReadOnlyAccessor( Poisson.prototype, 'skewness', function get() {
	return skewness( this.lambda );
});

/**
* Poisson distribution standard deviation.
*
* @name stdev
* @memberof Poisson.prototype
* @type {PositiveNumber}
* @see [standard deviation]{@link https://en.wikipedia.org/wiki/Standard_deviation}
*
* @example
* var poisson = new Poisson( 4.0 );
*
* var v = poisson.stdev;
* // returns 2.0
*/
setReadOnlyAccessor( Poisson.prototype, 'stdev', function get() {
	return stdev( this.lambda );
});

/**
* Poisson distribution variance.
*
* @name variance
* @memberof Poisson.prototype
* @type {PositiveNumber}
* @see [variance]{@link https://en.wikipedia.org/wiki/Variance}
*
* @example
* var poisson = new Poisson( 4.0 );
*
* var v = poisson.variance;
* // returns 4.0
*/
setReadOnlyAccessor( Poisson.prototype, 'variance', function get() {
	return variance( this.lambda );
});

/**
* Evaluates the cumulative distribution function (CDF).
*
* @name cdf
* @memberof Poisson.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated CDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var poisson = new Poisson( 2.0 );
*
* var v = poisson.cdf( 1.5 );
* // returns ~0.406
*/
setReadOnly( Poisson.prototype, 'cdf', poissonCDF );

/**
* Evaluates the natural logarithm of the probability mass function (PMF).
*
* @name logpmf
* @memberof Poisson.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logPMF
* @see [pmf]{@link https://en.wikipedia.org/wiki/Probability_mass_function}
*
* @example
* var poisson = new Poisson( 2.0 );
*
* var v = poisson.logpmf( 2.0 );
* // returns ~-1.307
*
* v = poisson.logpmf( 0.8 );
* // returns -Infinity
*/
setReadOnly( Poisson.prototype, 'logpmf', poissonLogPMF );

/**
* Evaluates the moment-generating function (MGF).
*
* @name mgf
* @memberof Poisson.prototype
* @type {Function}
* @param {number} t - input value
* @returns {number} evaluated MGF
* @see [mgf]{@link https://en.wikipedia.org/wiki/Moment-generating_function}
*
* @example
* var poisson = new Poisson( 2.0 );
*
* var v = poisson.mgf( 0.5 );
* // returns ~3.66
*/
setReadOnly( Poisson.prototype, 'mgf', poissonMGF );

/**
* Evaluates the probability mass function (PMF).
*
* @name pmf
* @memberof Poisson.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated PMF
* @see [pmf]{@link https://en.wikipedia.org/wiki/Probability_mass_function}
*
* @example
* var poisson = new Poisson( 2.0 );
*
* var v = poisson.pmf( 2.0 );
* // returns ~0.271
*
* v = poisson.pmf( 0.8 );
* // returns 0.0
*/
setReadOnly( Poisson.prototype, 'pmf', poissonPMF );

/**
* Evaluates the quantile function.
*
* @name quantile
* @memberof Poisson.prototype
* @type {Function}
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
* @see [quantile function]{@link https://en.wikipedia.org/wiki/Quantile_function}
*
* @example
* var poisson = new Poisson( 2.0 );
*
* var v = poisson.quantile( 0.5 );
* // returns 2.0
*/
setReadOnly( Poisson.prototype, 'quantile', poissonQuantile );


// EXPORTS //

module.exports = Poisson;
