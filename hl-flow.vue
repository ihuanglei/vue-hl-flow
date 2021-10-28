<template>
  <div ref="canvas" class="canvas"></div>
</template>
<script>
import { Canvas } from 'butterfly-dag'
import 'butterfly-dag/dist/index.css'

import { render, diff } from './utils.js'
import DefaultNode from './node.js'

export default {
  name: 'HLFlow',
  props: {
    options: {
      type: Object
    },
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      nodes: this.data.nodes,
      edges: this.data.edges,
      groups: this.data.groups
    }
  },
  watch: {
    nodes: {
      handler() {
        this.updateCavans()
      }
    },
    edges: {
      handler() {
        this.updateCavans()
      }
    },
    groups: {
      handler() {
        this.updateCavans()
      }
    }
  },
  mounted() {
    this.initCanvas()
    this.updateCavans()
  },
  methods: {
    initCanvas() {
      this.canvas = new Canvas({
        root: this.$refs.canvas,
        disLinkable: true,
        linkable: true,
        draggable: true,
        zoomable: true,
        moveable: true,
        theme: {
          edge: {
            shapeType: 'Bezier',
            arrow: true
          }
        }
      })
      this.canvas.setMinimap(true)
      this.draw()
    },
    updateCavans() {
      this.processNodes(this.nodes)
    },
    draw() {
      this.canvas.draw([], () => {
        this.canvas.setGridMode(true, {
          isAdsorb: false,
          theme: {
            shapeType: 'circle',
            gap: 20,
            background: '#FFF',
            circleRadiu: 1.5,
            circleColor: 'rgb(234 234 234)'
          }
        })
      })
    },
    processNodes(nodes) {
      const oldNodes = this.canvas.nodes
      const { created, deleted } = diff(nodes, oldNodes, 'id')
      this.canvas.removeNodes(
        deleted.map((e) => e.id),
        true
      )
      this.addNodes(created)
      this.addDomNodes(created)
    },
    addNodes(nodes) {
      let canvasNodes = nodes.map((node) => {
        return {
          ...node,
          Class: DefaultNode
        }
      })
      this.canvas.addNodes(canvasNodes)
    },
    addDomNodes(nodes) {
      nodes.map((node) => {
        const dom = document.getElementById('hl-flow-node-' + node.id)
        dom.appendChild(render(node))
      })
    },
    processEdges() {}
  }
}
</script>
<style scoped>
.canvas {
  width: 100%;
  height: 100%;
}
</style>
