# react-debug

一个用于通过 Vite 调试 React 源码的最小化项目。

本项目的核心目标是：  
在 Vite 开发环境中，将 `react`、`react-dom`、`scheduler` 等依赖指向本地 React 源码目录，从而可以在浏览器 DevTools 中调试 React 内部源码，例如：

- `ReactFiberWorkLoop`
- `ReactFiberBeginWork`
- `ReactFiberCompleteWork`
- `ReactFiberHooks`
- `ReactDOMRoot`
- `Scheduler`

---

推荐调试流程
首次渲染流程
```ts
createRoot
  -> root.render
    -> updateContainer
      -> scheduleUpdateOnFiber
        -> ensureRootIsScheduled
          -> performConcurrentWorkOnRoot
            -> renderRootConcurrent
              -> workLoopConcurrent
                -> performUnitOfWork
                  -> beginWork
                  -> completeWork
            -> commitRoot
```

useState 更新流程

点击按钮触发：

```ts
setCount(count + 1)
```

大致流程：
```ts
dispatchSetState
  -> dispatchSetStateInternal
    -> enqueueConcurrentHookUpdate
      -> scheduleUpdateOnFiber
        -> ensureRootIsScheduled
          -> performConcurrentWorkOnRoot
            -> renderWithHooks
              -> updateState
            -> commitRoot
```
useEffect 流程

首次渲染：
```ts
renderWithHooks
  -> mountEffect
    -> pushSimpleEffect
      -> commitRoot
        -> flushPassiveEffects
          -> commitPassiveMountEffects
```

更新时：

```ts
renderWithHooks
  -> updateEffect
    -> pushSimpleEffect
      -> commitRoot
        -> flushPassiveEffects
          -> commitPassiveUnmountEffects
          -> commitPassiveMountEffects
```
