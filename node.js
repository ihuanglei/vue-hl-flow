import { Node } from 'butterfly-dag'

const getNodeStyle = (left, top) => {
  return {
    left: left + 'px',
    top: top + 'px',
    position: 'absolute'
  }
}

class DefaultNode extends Node {
  draw = (opts) => {
    const div = document.createElement('div')
    const style = getNodeStyle(opts.left, opts.top)
    Reflect.ownKeys(style).forEach(key => {
      div.style[key] = style[key]
    })
    div.className = opts.options.class || 'hl-flow-node'
    div.id = 'hl-flow-node-' + opts.id
    return div
  }
}

export default DefaultNode
