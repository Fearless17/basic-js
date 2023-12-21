const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
	let result = 0
	for (let ext = 0; ext < matrix.length; ext++) {
		for (let int = 0; int < matrix[ext].length; int++) {
			if (typeof matrix[ext - 1] == 'undefined' || matrix[ext - 1][int] != 0) {
				result += matrix[ext][int]
			}
		}
	}
	return result
}

module.exports = {
	getMatrixElementsSum,
}
