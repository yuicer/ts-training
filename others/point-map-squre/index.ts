interface IPoint {
  x: number
  y: number
}

class Square {
  private xNum: number
  private yNum: number
  // 参数大于0
  constructor(
    private width: number,
    private height: number,
    private xSeperator: number,
    private ySeperator: number
  ) {
    this.xNum = width / xSeperator
    this.yNum = height / ySeperator
  }

  public findIndex(point: IPoint): number {
    const x = point.x === this.width ? this.xNum - 1 : point.x / this.xSeperator
    const y =
      point.y === this.height ? this.yNum - 1 : point.y / this.ySeperator

    return Math.floor(x) + this.yNum * Math.floor(y)
  }
}

const a = new Square(10, 10, 5, 5).findIndex({ x: 10, y: 6 })
console.log(a)
