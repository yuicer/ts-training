namespace decorator_loading {
  /**
   *
   * @param param property will be mixin the target Class
   */
  function loading(delay: number = 200, debounce: number = 300): any {
    // debounce
    const time = 0
    return function(target, props, descriptor): any {
      const oldValue = descriptor.value
      descriptor.value = function() {
        const fn = oldValue.bind(this, arguments)

        let timer: any = 0
        console.log('isLoading')
        clearTimeout(timer)
        timer = setTimeout(() => {
          fn()
          console.log('done')
        }, delay)

        return descriptor
      }
    }
  }

  class Cat {
    @loading(3000)
    say(str) {
      console.log(str)
    }
  }

  new Cat().say('miao')
}
