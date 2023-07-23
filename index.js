// 这是包的入口文件

// 数组去重
const removeDuplicates = require("./src/Array/removeDuplicates.js");
// 数组去重
const concat = require("./src/Array/concat.js");
// 深拷贝
const deepClone = require("./src/Object/deepClone.js");
// 检测数据类型
const typeJudgment = require("./src/Object/typeJudgment.js");
// 向外暴露
module.exports = {
  ...removeDuplicates,
  ...deepClone,
  ...concat,
  ...typeJudgment,
};
