const { NotImplementedError } = require('../extensions/index.js')

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
	let l = names.length
	let result = []
	for (let i = 0; i < l; i++) {
		if (!result.includes(names[i])) {
			result.push(names[i])
			continue
		}
		for (let n = 1; n < l; n++) {
			if (!result.includes(`${names[i]}(${n})`)) {
				result.push(`${names[i]}(${n})`)
				break
			}
		}
	}
	return result
}

module.exports = {
	renameFiles,
}
