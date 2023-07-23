// 定义一个深拷贝
function deepClone(target) {
  // 基本数据类型直接返回
  if (typeof target !== "object") {
    return target;
  }
  // 引用数据类型特殊处理
  // 判断数组还是对象
  const temp = Array.isArray(target) ? [] : {};
  for (const key in target) {
    // 递归
    temp[key] = deepClone(target[key]);
  }
  return temp;
}
module.exports = {
  deepClone,
};
