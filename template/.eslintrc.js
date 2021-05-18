module.exports = {
  /**
   * 1.指定解析器
   */
  parser: '@typescript-eslint/parser',
  /**
   * 2.解析器选项
   */
  parserOptions: {
    // "ecmaVersion": 6, //ES的版本，默认为5
    // "jsx": true, //启用jsx语法
  },
  /**
   * 3.环境配置 （默认情况下，所有环境变量都为false）
   */
  env: {
    browser: true, //浏览器全局变量。
    commonjs: true, //CommonJS全局变量和CommonJS范围
    es6: true, //启用除模块外的所有ECMAScript 6功能
  },
  /**
   * 4.插件(默认情况下，所有环境变量都为false)
   * plugin插件主要是为eslint新增一些检查规则,做一些定制的eslint规则(而要开启这些规则，需要在rules里自己配)
   * eslint-plugin-react就会对react项目做了一些定制的eslint规则
   */
  /**
   * 插件1：@typescript-eslint/eslint-plugin (为编写typescript代码定制的检查规则)
   * 1.它首先需要安装@typescript-eslint/parser，然后再安装@typescript-eslint/eslint-plugin
   * 2.在rules中配置规则，如：@typescript-eslint/explicit-module-boundary-types
   */
  /**
   * 插件2：eslint-plugin-react (为编写react代码定制的检查规则)
   * 1.要安装@typescript-eslint/eslint-plugin
   * 2.在rules中配置规则，如："react/no-set-state": 0
   */
  /**
   * 插件3：eslint-plugin-react-hooks (为编写react-hook代码定制的检查规则)
   * 1.要安装eslint-plugin-react-hooks
   * 2.在rules中配置规则，如："react/no-set-state": 0
   */
  /**
   * 插件4：eslint-plugin-prettier (使用prettier检查代码风格规则)
   * 1.要安装eslint-plugin-prettier
   * 2.在rules中配置规则，如：'prettier/prettier': 2
   * 3.在编辑器中载入检验配置,并开启fix --on file save
   */
  plugins: ['@typescript-eslint', 'react', 'eslint-plugin-react-hooks', 'prettier'],
  /**
   * 5.共享配置
   * plugins与rules结合是eslint基础能力，extends可以看做是去集成一个个配置方案的最佳实践。
   * 它配置的内容实际就是一份份别人配置好的.eslintrc.js。
   *
   * eslint命令，也可以是继承文件的路径。
   * eslint:all:表示引入当前版本eslint的所有核心规则。
   * eslint:recommended:表示引入eslint的核心功能，并且报告一些常见的共同错误。
   * 如果值为绝对或相对路径则相当于导入路径对应的规则配置。("extends": "./eslint-config-public.js"
   */
  /**
   * AlloyTeam 腾讯全端团队的eslint规则
   * AlloyTeam ESLint 规则不仅是一套科学的 ESLint 配置规范，而且也是你配置个性化 ESLint 规则的最佳参考。
   * 1.需要安装eslint-config-alloy即可（会配合之前已安装好的插件）
   * 2.结合编辑器的eslint -- fix on save, 会自动修复不合理的风格语法。
   * 3.再结合prettier,形成一套完美的规则配置。
   * （AlloyTeam ESLint 规则从 v3 开始，已经不包含所有样式相关的规则了，样式相关的规则交给更专业的 Prettier 处理）
   */
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],
  /**
   * 6.全局变量(指定全局变量的值为true|false)
   * true表示变量可以被覆盖，false表示不允许被覆盖。
   */
  globals: {
    window: true,
  },
  /**
   * 7.自定义规则（待研究）
   */
  settings: {
    sharedData: 'Hello',
  },
  /**
   * 8.禁用持续查找
   * 默认情况下，ESLint将在根目录下的所有父文件夹中查找配置文件。
   * 该属性的作用是一旦发现了配置文件就停止对父文件夹的查找。
   */
  root: true,
  /**
   * 9.规则
   *  规则的错误等级有三种：
   *  "off" 或者 0：关闭规则。
   *  "warn" 或者 1：打开规则，并且作为一个警告（不影响exit code）。
   *  "error" 或者 2：打开规则，并且作为一个错误（exit code将会是1）。
   */
  rules: {
    'no-console': 0, //是否允许console.log
    'no-unused-vars': [
      2,
      {
        //禁止出现未使用过的变量
        vars: 'all',
        args: 'none',
      },
    ],
    //禁止标识符中有悬空下划线_bar
    'no-underscore-dangle': 0,
    //禁止使用字符串中使用模版字符串的${},而使用模版字符串
    'no-template-curly-in-string': 0,
    //禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    'no-undef': 2,
    //禁止扩展原生类型
    'no-extend-native': 0,
    //强制 function 定义中最多允许的参数数量
    'max-params': [2, 7],
    //强制回调函数最大嵌套深度 5层
    'max-nested-callbacks': [2, 5],
    //限制圈复杂度，也就是类似if else能连续接多少个
    complexity: [2, 9],
    //此规则强制每个文件只能包含特定数量的类，而不能包含更多类。
    'max-classes-per-file': [2, 2],
    // 强制模块内的 import 排序
    'sort-imports': 0,
    //ts每个函数都要显式声明返回值
    '@typescript-eslint/explicit-module-boundary-types': 0,
    //对代码库中的所有内容强制执行命名约定
    '@typescript-eslint/naming-convention': 0,
    //禁止调用 require()
    '@typescript-eslint/no-require-imports': 0,
    //一致类型断言
    '@typescript-eslint/consistent-type-assertions': 0,
    //可是直接使用全局this
    '@typescript-eslint/no-invalid-this': 0,
    //可以使用未定义类型的this别名
    '@typescript-eslint/no-this-alias': 0,
    //禁止使用setState
    'react/no-set-state': 0,
    //遵循react-hook的规则
    'react-hooks/rules-of-hooks': 2,
    //不规则的深度依赖警告
    'react-hooks/exhaustive-deps': 1,
    //打开插件eslint-plugin-prettier提供的规则,并对不符合prettier规范的语法进行报错提示
    'prettier/prettier': 2,
  },
};
