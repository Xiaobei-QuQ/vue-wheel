# vue学习造轮子
[![Build Status](https://travis-ci.org/Xiaobei-QuQ/vue-wheel.svg?branch=master)](https://travis-ci.org/Xiaobei-QuQ/vue-wheel)

## 介绍

笨方法，造轮子。

## 开始使用

1. 添加CSS样式
    使用本框架前，请在css中开启border-box
    ```
    *，*::before,*::after {box-sizing: border-box;}
    ```
    IE8以上支持此样式。
    还需要设置默认颜色等变量（后续会改成SCSS变量）
    ```
    html {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
    }
    ```
    IE15及以上支持此样式。
2. 安装north-wheel
```
npm i --save north-wheel
```

3. 引入north-wheel
    ```
    4 import {ButtonGroup,Button,Icon} from 'north-wheel'
     13 import 'north-wheel/dist/index.css'
     12 export default {
     11   name: 'app',
     10   components: {
      9   ¦ HelloWorld,
      8   ¦ 'g-button': Button
      7   }
      6 }
    
    ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码