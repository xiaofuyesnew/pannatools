<template>
  <div class="nakecode">
    <Header content="推文代码生成"/>
    <div class="main">
      <div class="options">
          <div class="types">
              <div class="warp"></div>
          </div>
          <div class="opt">

          </div>
      </div>
      <div class="output">
        <textarea class="code" v-model="code" placeholder="这里将输出代码"></textarea>
        <div class="info">最后更新时间：2019-05-31 14:01</div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import codebase from "@/util/codebase.js";

export default {
  name: "makecode",
  data() {
    return {
      code: "",
      codebase: codebase,
      currentCode: {}
    };
  },
  components: {
    Header
  },
  methods: {},
  mounted() {
    console.log(this.codebase.code);
  }
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: space-between;
}

.options {
  width: 60%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  border: 1px solid #ccc;
}

.output {
  width: 38%;
  height: 100%;
}
.code {
  width: 100%;
  height: 80%;
  background-color: #f2f2f2;
  padding: 10px;
  font-size: 12px;
}
.info {
    width: 100%;
    line-height: 1em;
    text-align: right;
    font-size: 14px;
    color: #666;
    margin-top: 10px;
}
</style>

