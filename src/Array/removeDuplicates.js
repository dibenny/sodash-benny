// 定义一个数组去重
function removeDuplicates(arr, prop) {
  return arr.filter(function (item, index, self) {
    return self.findIndex((el) => el[prop] == item[prop]) === index;
  });
}
// 向外暴露
module.exports = {
  removeDuplicates,
};
