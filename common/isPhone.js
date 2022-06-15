/**
 * 描述 判断是否为电话号码
 * @date 2022-06-15
 * @param {String | Number} phone
 * @returns {Boolean}
 */
 function isPhone(phone) {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(phone);
}

module.exports = isPhone;