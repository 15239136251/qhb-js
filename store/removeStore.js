/**
 * 描述 删除localStorage
 * @date 2023-03-30
 * @param {object} params {}
 * @param {string} params.name
 * @param {boolean | string} params.type
 * @returns {void}
 */
function removeStore(params = {}) {
  const { name, type } = params;
  if (type) {
    window.sessionStorage.removeItem(name);
  } else {
    window.localStorage.removeItem(name);
  }
}

module.exports = removeStore;