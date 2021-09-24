<template>
  <div class="simple-layout">
    <header class="header">
      <slot name="header"></slot>
    </header>
    <main class="main">
      <slot name="main"></slot>
    </main>
  </div>
</template>
<script lang="ts" src="./SimpleLayout.ts"></script>

<style lang="scss" scoped>
.simple-layout {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  .header {
    width: 100%;
    height: 64px;
    box-sizing: border-box;
    padding: 0 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
  }
  .main {
    width: 1200px;
    padding: 20px;
    margin: 0 auto;
    height: calc(100vh - 64px);
    box-sizing: border-box;
    background-color: #f0f2f6;
    overflow: auto;
  }
}
</style>
