<template>
  <div class="com home">
    <Header content="般若生产力小工具集" />
    <div class="main">
      <el-button type="primary" round class="btn" @click="toEach('makecode')">推文代码生成</el-button>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'home',
  data() {
    return {

    }
  },
  components: {
    Header
  },
  methods: {
    toEach(name) {
      this.$router.push({
        name: name
      })
    }
  },
  mounted() {
    
  }
}
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn {
  margin-top: 10px;
}
</style>
