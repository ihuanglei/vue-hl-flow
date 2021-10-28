<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Card name</span>
      </div>
    </el-card>
    <el-button type="primary" @click="onClick">Primary {{ text }}</el-button>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    node: {
      type: Object
    }
  },
  data() {
    return {
      text: '',
      table: {
        loading: false,
        data: {}
      }
    }
  },
  methods: {
    onClick() {
      this.text = new Date()
    }
  },
  created() {}
}
</script>
