const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function counter(part, result) {
	if (!result[part]) {
		result[part] = 1
	} else {
		result[part] += 1
	}
}
function getDNSStats(domains) {
	let result = {}
	for (let i = 0; i < domains.length; i++) {
		let arr = domains[i].split('.').reverse()
		for (let n = 0; n < arr.length; n++) {
			let part = `.${arr.slice(0, n + 1).join('.')}`
			counter(part, result)
		}
	}
	return result
}

module.exports = {
	getDNSStats,
}
