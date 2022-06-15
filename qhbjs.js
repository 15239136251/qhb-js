// 日期
let date = {
  getBilldate: require("./date/getBilldate")
};

// 通用
let common = {
};

// 数组
let array = {
  arrayFilterKey: require("./array/arrayFilterKey")
};

// 字符串
let string = {
  toUpperCaseFun: require("./common/toUpperCaseFun")
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