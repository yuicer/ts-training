namespace decorator_decorate {
  /**
   *  decorate the defined function
   */
  function decorate(str) {
    /**
     * @param target Class.prototype
     * @param name methods/key name
     * @param des descriptor. just like `Object.defineProperty(obj, prop, descriptor)`
     */
    return function(target, props, descriptor): any {
      // old function
      const oldValue = descriptor.value
      descriptor.value = function() {
        console.log(str)
        oldValue.apply(null, arguments)
      }
    }
  }

  class Cat {
    @decorate('biubiubiu')
    async say() {
      console.log('nya')
    }
  }

  new Cat().say()
}
