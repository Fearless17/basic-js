const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
	chain: [],
	getLength() {
		return this.chain.length
	},
	addLink(link) {
		this.chain.push(`( ${link !== null ? link.toString() : 'null'} )`)
		return this
	},
	err() {
		this.chain = []
		throw Error(`You can't remove incorrect link!`)
	},
	removeLink(position) {
		let pos = position - 1
		if (!Number.isInteger(pos) || !this.chain[pos]) {
			this.err()
		} else {
			this.chain.splice(pos, 1)
		}
		return this
	},
	reverseChain() {
		this.chain.reverse()
		return this
	},
	finishChain() {
		let result = this.chain.slice().join('~~')
		this.chain = []
		return result
	},
}

module.exports = {
	chainMaker,
}
