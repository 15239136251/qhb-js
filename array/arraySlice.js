/**
 * 描述 将数组分割为指定大小为一组，并返回新数组
 * @date 2022-06-15
 * @param {Array} array
 * @param {Number} size
 * @returns {Array}
 */
function arraySlice(array, size) {
  const num = Math.ceil(array.length / size, 10);
	let index = 0;
	let resIndex = 0;
	let result = [];
	while (index < num) {
		result[index] = array.slice(resIndex, size + resIndex);
		resIndex += size;
		index++;
	}
	return result;
}

module.exports = arraySlice;