namespace decorator_loading {
  /**
   *
   * @param param property will be mixin the target Class
   */
  function loading(isOpenLoading: boolean = false, time?: number): any {
    return function(target, name, des): any {
      const oldValue = des.value
      des.value = function() {
        const promise = oldValue.apply(this, arguments)

        if (!isOpenLoading) {
          return promise
        }
        // loading start before `time` millisecond
        if (time) {
          const startTime = Date.now()
          var timer = setTimeout(() => {
            console.log('isLoading')
          }, time)
          promise.then(() => {
            if (Date.now() - startTime < time) clearTimeout(timer)
          })
        } else {
          console.log('isLoading')
          promise.then(() => {
            console.log('loading disable')
          })
        }

        return promise
      }
    }
  }

  class Cat {
    @loading(true, 300)
    async say() {
      await new Promise(resolve => {
        setTimeout(() => {
          console.log('nya')
          resolve()
        }, 1000)
      })
    }
  }

  new Cat().say().then(() => {
    console.log('done')
  })
}
