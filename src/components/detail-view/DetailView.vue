<template>
  <!-- 基础详情页外层视图 -->
  <div class="detail-view">
    <!-- 内容区 -->
    <slot></slot>
    <!-- 内容区结束 -->
  </div>
</template>

<script lang="ts" src="./DetailView.ts"></script>

<style lang="scss" scoped>
.detail-view {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding-top: 20px;
  background: #ffffff;
}
</style>
