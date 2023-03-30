const validatenull = require('../common/validatenull');

/**
 * 描述 获取本地localStorage或sessionStorage
 * @date 2023-03-30
 * @param { object } params
 * @param { string } params.name
 * @param { boolean } params.debug
 * @returns {any}
 */
function getStore(params = {}) {
  const { name, debug } = params;
  let obj = {},
    content;
  obj = window.sessionStorage.getItem(name);
  if (validatenull(obj)) obj = window.localStorage.getItem(name);
  if (validatenull(obj)) return;
  try {
    obj = JSON.parse(obj);
  } catch {
    return obj;
  }
  if (debug) {
    return obj;
  }
  if (obj.dataType == "string") {
    content = obj.content;
  } else if (obj.dataType == "number") {
    content = Number(obj.content);
  } else if (obj.dataType == "boolean") {
    content = eval(obj.content);
  } else if (obj.dataType == "object") {
    content = obj.content;
  }
  return content;
}

module.exports = getStore;
