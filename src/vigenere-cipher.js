const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
	alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
	initialWord = ''
	constructor(isDirect = true) {
		this.isDirect = isDirect
	}
	encrypt(str, key, isDecrypt = false) {
		if (!str || !key) {
			throw new Error('Incorrect arguments!')
		}
		let keyCharPos = 0
		this.initialWord = str.toUpperCase()
		const keyword = key.toUpperCase().split('')
		const result = this.initialWord.split('').map((char, index) => {
			const sumOfIndexes =
				this.alphabet.indexOf(char) +
				this.alphabet.indexOf(keyword[keyCharPos % keyword.length])
			const difOfIndexes =
				this.alphabet.indexOf(char) -
				this.alphabet.indexOf(keyword[keyCharPos % keyword.length])
			if (this.alphabet.includes(char) && !isDecrypt) {
				keyCharPos++
				if (sumOfIndexes > 25) {
					return this.alphabet[sumOfIndexes - 26]
				} else {
					return this.alphabet[sumOfIndexes]
				}
			} else if (this.alphabet.includes(char) && isDecrypt) {
				keyCharPos++
				if (difOfIndexes < 0) {
					return this.alphabet[difOfIndexes + 26]
				} else {
					return this.alphabet[difOfIndexes]
				}
			} else {
				return char
			}
		})
		return this.isDirect ? result.join('') : result.reverse().join('')
	}
	decrypt(str, key) {
		if (!str || !key) {
			throw new Error('Incorrect arguments!')
		}
		return this.encrypt(str, key, true)
	}
}

module.exports = {
	VigenereCipheringMachine,
}
