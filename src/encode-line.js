const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
	let n = 1
	let l = str.length
	let result = ''
	for (let i = 0; i < l; i++) {
		if (str[i] == str[i + 1] && i < l) {
			n++
		} else if (n > 1) {
			result += n
			result += str[i]
			n = 1
		} else {
			result += str[i]
			n = 1
		}
	}
	return result
}

module.exports = {
	encodeLine,
}
