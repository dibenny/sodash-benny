Sodash 通过降低 array、number、objects、string 等等的使用难度从而让 JavaScript 变得更简单。 Sodash 的模块化方法 非常适用于：

- 提供针对数组，对象的数据处理
- 对值进行操作和检测
- 创建符合功能的函数

## 安装

```
npm install sodash-benny
```

or

```
yarn add sodash-benny
```

## 导入

```jsx
var _ = require("sodash-benny");
```

## 示例

```jsx
// 去除重复项数据
const testone = _.removeDuplicates;
let arr = [
  {
    key: "1",
    name: "林青霞",
  },
  {
    key: "2",
    name: "张三丰",
  },
  {
    key: "1",
    name: "段誉",
  },
  {
    key: "1",
    name: "段誉",
  },
];

console.log(testone(arr, "name"));
// 结果
// [
//   { key: '1', name: '林青霞' },
//   { key: '2', name: '张三丰' },
//   { key: '1', name: '段誉' }
// ]
```
