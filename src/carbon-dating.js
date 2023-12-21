const { NotImplementedError } = require('../extensions/index.js')

const MODERN_ACTIVITY = 15 // !!A0!!
const HALF_LIFE_PERIOD = 5730

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity !!A!! string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(A) {
	let sample = Number(A)
	let firstAction = MODERN_ACTIVITY / sample
	let k = 0.693 / HALF_LIFE_PERIOD
	let result = Math.ceil(Math.log(firstAction) / k)
	if (sample > 0 && typeof A === 'string' && result > 0) {
		return result
	} else {
		return false
	}
}

module.exports = {
	dateSample,
}
