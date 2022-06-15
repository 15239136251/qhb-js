/**
 * 描述 是否手机号码
 * @date 2022-06-15
 * @param {String | Number} mobile
 * @returns {Boolean}
 */
function isMobile(mobile) {
  return /^1[0-9]{10}$/.test(mobile);
}

module.exports = isMobile;