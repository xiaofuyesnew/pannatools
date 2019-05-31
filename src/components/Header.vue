<template>
    <div class="header">{{content}}</div>
</template>

<script>
export default {
    props: {
        content: String
    }
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 40px;
  background-color: #409eff;
  color: #fff;
  text-align: center;
  line-height: 40px;
  font-size: 18px;
}
</style>

