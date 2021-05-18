module.exports = {
  printWidth: 80, //一行最多80字符
  semi: true, //行尾需要有分号(默认为false)
  singleQuote: true, //使用单引号 (默认为双引号)
  trailingComma: 'none',  //末尾不需要逗号
  bracketSpacing: true,  // 大括号内的首尾需要空格
  jsxBracketSameLine: false,  //jsx 标签的反尖括号需要换行
  arrowParens: 'avoid', // 箭头函数，只有一个参数的时候，不需要括号
  requirePragma: false, // 不需要写文件开头的 @prettier
  proseWrap: 'preserve' // 使用默认的折行标准
};
