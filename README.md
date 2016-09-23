# GoReact
* [GoReact](https://github.com/jiaolongHuang/GoReact)

* 基于**webpack + react + react-router-redux + redux + redux-immutablejs + react-css-modules + postcss + ES6**， 适用于**SPA**的前端脚手架
* 推荐使用
	* **axios**作为HTTP客户端
	* **redux-form**
	* **redux-thunk**(让action支持异步)

## 下载
```
 git clone https://github.com/jiaolongHuang/GoReact
 cd GoReact
 npm install (安装依赖模块)
 npm install webpack webpack-dev-server -g (没有安装webpack, webpack-dev-server的需要安装)
```

## 运行

* 开发模式：

```
npm run dev
open http://127.0.0.1:8368
```
* 发布生产版本

```
npm run build
```

## 文件命名规范
| 文件夹 |文件名|作用|webpack处理后的alias名 |
| ------| ------ | ------ | ------ |
| actions | 全部小写,如first.jsx | |xxAction |
| components | 首字母大写，如Header.jsx | 原子组件| 不处理 |
| componentsPage | 首字母大写，如AppList.jsx |由多个子组件组成的组件 | 不处理 |
| config | 全部小写,如first.jsx |route.jsx, store.jsx | 不处理 |
| constants | 首字母大写,如ActionTypes.jsx | 常量存放| ActionTypes.jsx -> ActionType |
| containers | 功能+Container, 如HomeContainer.jsx | 一个页面 | 不处理 |
| helpers | 全部小写,如api.jsx |接口，公用函数 | xxHelper |
| reducers | 全部小写,如first.jsx | | xxReducer |
| style |  | 不需要被css-modules处理的css文件，通常是全局样式| 不处理 |

