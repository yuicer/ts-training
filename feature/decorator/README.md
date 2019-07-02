### decorator

decorator(target, props, descriptor)

```ts

target: // 要在其上定义属性的对象
props: // 要定义或修改的属性的名称
descriptor : {
  configurable // 当且仅当该属性的 configurable 为 true 时，该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除。默认为 false。
  enumerable // 当且仅当该属性的enumerable为true时，该属性才能够出现在对象的枚举属性中。默认为 false。
  value // 该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。默认为 undefined。
  writable // 当且仅当该属性的writable为true时，value才能被赋值运算符改变。默认为 false。
  get
  set
}

```

装饰器会优先执行，所以存在 `var oldValue = descriptor.value`