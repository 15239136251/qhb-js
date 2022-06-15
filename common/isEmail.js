/**
 * 描述 判断是否为邮箱
 * @date 2022-06-15
 * @param {String} email
 * @returns {Boolean}
 */
function isEmail(email) {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(email);
}

module.exports = isEmail;