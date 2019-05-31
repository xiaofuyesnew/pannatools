<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body,
#app,
.com {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.main {
  width: 1400px;
  height: calc(100vh - 40px);
  padding: 10px;
  margin: 0 auto;
}

input,
select,
textarea {
  border: none;
  box-shadow: none;
  outline: none;
  appearance: none;
  display: block;
  resize: none;
}
</style>
