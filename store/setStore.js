/**
 * 描述 存储localStorage
 * @date 2023-03-30
 * @param {object} params
 * @param {string} params.name
 * @param {any} params.content
 * @param {string} params.type
 * @returns {void}
 */
function setStore(params = {}) {
    const {
        name,
        content,
        type,
    } = params;
    let obj = {
        dataType: typeof (content),
        content: content,
        type: type,
        datetime: new Date().getTime()
    }
    if (type) window.sessionStorage.setItem(name, JSON.stringify(obj));
    else window.localStorage.setItem(name, JSON.stringify(obj));
}

module.exports = setStore