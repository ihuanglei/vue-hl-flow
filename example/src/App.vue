<template>
  <div id="app">
    <div id="btns" class="btns">
      <el-button type="primary" @click="onAddClick">添加节点</el-button>
      <el-button type="primary" @click="onSaveClick">获取数据</el-button>
    </div>
    <HLFlow :data="data" />
  </div>
</template>
<script>
import Vue from 'vue'
import TNode from './components/node-test.vue'
import { HLFlow } from '../../dist/index.js'
import '../../dist/index.css'

const endpoints = [
  {
    id: 'right',
    orientation: [1, 0],
    pos: [0, 0.5]
  },
  {
    id: 'left',
    orientation: [-1, 0],
    pos: [0, 0.5]
  }
]

export default {
  components: { HLFlow },
  data() {
    return {
      data: {
        nodes: []
      }
    }
  },
  mounted() {
    const AA = Vue.extend({ template: '<p>1111</p>' })
    console.log(AA)
    let aa = new AA()
    aa.$mount()
    console.log(aa)
  },
  methods: {
    onAddClick() {
      let index = this.data.nodes.length + 1
      this.data.nodes.push({ id: index, top: 50, left: 50, render: TNode, endpoints, class: 'class' })
    },
    onSaveClick() {
      console.log(this.data.nodes)
    }
  }
}
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
.btns {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1000;
}
</style>
