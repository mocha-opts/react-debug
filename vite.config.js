import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const NODE_ENV = process.env.NODE_ENV;
const __DEV__ = NODE_ENV === "development";

export default defineConfig({
  plugins: [react()],
  resolve: {
    // 引用地址指向本地
    alias: [
      // import {} from 'react'
      {
        find: /^react$/,
        replacement: path.resolve(__dirname, "./packages/_react"),
      },
      // import {} from 'react-dom';
      {
        find: /^react-dom$/,
        replacement: path.resolve(__dirname, "./packages/_react-dom"),
      },
      // import {} from 'scheduler';
      {
        find: /^scheduler$/,
        replacement: path.resolve(__dirname, "./packages/_scheduler"),
      },
      // import {} from 'react/?';
      {
        find: /^react\/(.*)$/,
        replacement: path.resolve(__dirname, "./packages/_react/$1"),
      },
      // import {} from 'react-dom/?';
      {
        find: /^react-dom\/(.*)$/,
        replacement: path.resolve(__dirname, "./packages/_react-dom/$1"),
      },
      // import {} from 'shared/?';
      {
        find: /^shared\/(.*)$/,
        replacement: path.resolve(__dirname, "./packages/_shared/$1"),
      },
      // import {} from 'react-dom-bindings/?';
      {
        find: /^react-dom-bindings\/(.*)$/,
        replacement: path.resolve(
          __dirname,
          "./packages/_react-dom-bindings/$1"
        ),
      },
      // import {} from 'react-reconciler/?';
      {
        find: /^react-reconciler\/(.*)$/,
        replacement: path.resolve(__dirname, "./packages/_react-reconciler/$1"),
      },
      // import {} from 'react-client/?';
      {
        find: /^react-client\/(.*)$/,
        replacement: path.resolve(__dirname, "./packages/_react-client/$1"),
      },
    ],
    preserveSymlinks: true,
  },
  optimizeDeps: {
    // 这里是为了 vite 提前编译，运行需要 ReactSharedInternal 变量对象（提前声明）
    include: ["shared/ReactSharedInternals"],
    // react 不需要编译
    // 使用 @vitejs/plugin-react，此处配置不支持，报错
    exclude: ["react"],
  },
  // React 源码当中有很多提前定义的环境变量
  define: {
    __DEV__,
    __EXPERIMENTAL__: true,
    __EXTENSION__: false,
    __PROFILE__: false,
    __TEST__: NODE_ENV === "test",
    __IS_CHROME__: false,
    __IS_FIREFOX__: false,
    __IS_EDGE__: false,
    __IS_NATIVE__: false,
  },
});
