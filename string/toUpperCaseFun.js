/**
 * 描述 根据符号将字符串分开，首字母大写拼接在一起
 * @date 2022-06-15
 * @param {String} string
 * @param {String} symbol
 * @returns {String}
 */
function toUpperCaseFun(string, symbol) {
  let newString = ''
	if (string.match(symbol)) {
		let arr = string.split(symbol)
		newString = arr[0]
		for (let i = 1; i < arr.length; i++) {
			newString += arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1)
		}
	} else {
		newString = string
	}
	return newString
}

module.exports = toUpperCaseFun;