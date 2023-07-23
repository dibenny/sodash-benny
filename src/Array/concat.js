// 定义一个数组合并
function concat(...arguments) {
  const newArray = [];
  // 遍历传入的参数列表
  for (let i = 0; i < arguments.length; i++) {
    const arg = arguments[i];
    // 如果参数是数组，则将其元素逐个添加到新数组中
    if (Array.isArray(arg)) {
      for (let j = 0; j < arg.length; j++) {
        newArray.push(arg[j]);
      }
    } else {
      // 如果参数不是数组，则直接添加到新数组中
      newArray.push(arg);
    }
  }
  return newArray;
}
// 向外暴露
module.exports = {
  concat,
};
