namespace decorator_log {
  class Math {
    @log
    add(a, b) {
      return a + b
    }
  }

  function log(target, props, descriptor) {
    var oldValue = descriptor.value
    descriptor.value = function() {
      console.info(`Calling ${name} with`, arguments)
      return oldValue.apply(this, arguments)
    }

    return descriptor
  }

  new Math().add(2, 4)
}
