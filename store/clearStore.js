/**
 * 描述 清空全部localStorage
 * @date 2023-03-30
 * @param {objcet} params {}
 * @param {boolean | string} params.type
 * @returns {void}
 */
function clearStore(params = {}) {
    let { type } = params;
    if (type) {
        window.sessionStorage.clear();
    } else {
        window.localStorage.clear()
    }
}

module.exports = clearStore;