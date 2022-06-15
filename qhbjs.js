// 日期
let date = {
  getBilldate: require("./date/getBilldate")
};

// 通用
let common = {
  validateURL: require("./common/validateURL"),
  isEmail: require("./common/isEmail"),
  isMobile: require("./common/isMobile"),
  isPhone: require("./common/isPhone"),
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
  ...array,
  ...common,
  ...date,
  ...string,
  ...store
};

module.exports = qhbjs;