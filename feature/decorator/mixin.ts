namespace decorator_mixin {
  /**
   *
   * @param param property will be mixin the target Class
   */
  function mixin(param: object = {}) {
    return function(target): any {
      Object.assign(target.prototype, param)
    }
  }

  @mixin({ food: 'fish', name: 'yuicer' })
  class Cat {
    private name: string
    private food: string

    async say() {
      console.log(`
      ${this.name}
      nya 
      ${this.food}`)
    }
  }

  new Cat().say()
}
