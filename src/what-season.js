const { NotImplementedError } = require('../extensions/index.js')

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
	if (!date) return 'Unable to determine the time of year!'
	if (Object.getOwnPropertyNames(date).length > 0 || typeof date != 'object') {
		throw Error('Invalid date!')
	}
	const MONTHS = [
		'winter',
		'winter',
		'spring',
		'spring',
		'spring',
		'summer',
		'summer',
		'summer',
		'autumn',
		'autumn',
		'autumn',
		'winter',
	]
	let curMonth = date.getMonth()
	result = MONTHS[curMonth]
	return result
}

module.exports = {
	getSeason,
}
