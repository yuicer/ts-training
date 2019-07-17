//  尾链表
type chainNext = Chain | null
class Chain {
  constructor(public value: number, public next?: chainNext) {}

  // 找出节点
  static findNode(callback: (node: Chain) => boolean, node: chainNext): chainNext | null {
    if (node) {
      if (callback(node)) return node
      else return this.findNode(callback, node.next)
    } else {
      console.log('not fount')
      return null
    }
  }

  // 删除节点
  static deleteNode(targetNode: Chain) {
    if (!targetNode.next) {
      targetNode = null
      return
    }

    targetNode.setValue(targetNode.next.value)
    targetNode.setNext(targetNode.next.next)
    targetNode.next = null
  }

  setNext(next: chainNext) {
    this.next = next
  }

  setValue(value: number) {
    this.value = value
  }
}

// 构造链表
const nodeStart = new Chain(0)
const node1 = new Chain(1)
const node2 = new Chain(2)
const node3 = new Chain(3)
const node4 = new Chain(4)

nodeStart.setNext(node1)
node1.setNext(node2)
node2.setNext(node3)
node3.setNext(node4)

/**
 *  找出链表的某个元素并且删除，返回删除的元素，改变原链表
 */

Chain.deleteNode(
  Chain.findNode(node => {
    return node.value === 1
  }, nodeStart)
)
