/**
 * 描述 根据传入的 key 来对数组对象进行去重
 * @date 2022-06-15
 * @param {Objcet[]} array
 * @param {String} key="id"
 * @returns {Objcet[]}
 */
function arrayFilterKey(array, key = "id") {
  let map = new Map();
	for (let item of array) {
		if (!map.has(item[key])) {
			map.set(item[key], item);
		}
	}
	return [...map.values()];
};

module.exports = arrayFilterKey;