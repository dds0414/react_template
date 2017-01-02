####注意
1. `react-router`必须为`2.8.1`，否则会报错
2. `reducers`中必须添加`routerStateReducer`，否则无法显示，代码示例如下：

    ``` javascript
    const reducer = combineReducers({
        router: routerStateReducer,
        reducers
    });
    ```