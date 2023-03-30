/**
 * 描述 获取全部localStorage
 * @date 2023-03-30
 * @param {object} params {}
 * @param {boolean | string} params.type
 * @returns {Array}
 */
function getAllStore(params = {}) {
    const getStore = require("./getStore")
    let list = [];
    let {
        type
    } = params;
    if (type) {
        for (let i = 0; i <= window.sessionStorage.length; i++) {
            list.push({
                name: window.sessionStorage.key(i),
                content: getStore({
                    name: window.sessionStorage.key(i),
                    type: 'session'
                })
            })
        }
    } else {
        for (let i = 0; i <= window.localStorage.length; i++) {
            list.push({
                name: window.localStorage.key(i),
                content: getStore({
                    name: window.localStorage.key(i),
                })
            })

        }
    }
    return list;
}

module.exports = getAllStore;