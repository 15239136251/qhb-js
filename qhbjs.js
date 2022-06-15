// 日期
let date = {
  getBilldate: require("./date/getBilldate")
};

// 通用
let common = {
  validateURL: require("./common/validateURL")
};

// 数组
let array = {
  arrayFilterKey: require("./array/arrayFilterKey"),
  arraySlice: require("./array/arraySlice")
};

// 字符串
let string = {
  toUpperCaseFun: require("./string/toUpperCaseFun")
};

// 本地储存storage方法
let store = {

};

// qhbjs
const qhbjs = {
  hello: require("./hello"),
  ...date,
  ...common,
  ...array,
  ...string,
  ...store
};

module.exports = qhbjs;