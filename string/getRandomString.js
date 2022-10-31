/**
 * 描述 获得随机的字符串
 * @date 2022-10-31
 * @returns {any}
 */
function getRandomString() {
    return Math.random().toString(36).slice(-8);
}

module.exports = getRandomString;