<template>
  <!-- 基础页面外层包裹容器 -->
  <div class="page-wrapper">
    <!-- 页面头部 开始-->
    <div class="page-header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <!-- 页面头部 结束 -->

    <!-- 查询条件 开始 -->
    <div class="page-query" v-if="$slots.query">
      <slot name="query"></slot>
    </div>
    <!-- 查询条件 结束 -->
    <!-- 页面主体内容区 开始 -->
    <div class="page-body" v-if="$slots.body">
      <slot name="body"></slot>
    </div>
    <!-- 页面主体内容区 结束 -->
  </div>
</template>

<script lang="ts" src="./PageWrapper.ts"></script>

<style lang="scss" scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
  background: #ffffff;
  .page-header {
    flex: 0 0 auto;
    height: 56px;
    width: 100%;
    box-sizing: border-box;
    padding: 0 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #d7dfeb;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: $--color-text-primary;
    /deep/.el-tabs__header {
      margin: 0;
    }
    /deep/.el-tabs__nav-wrap::after {
      height: 0;
    }
    /deep/.el-tabs__item {
      height: 56px;
      line-height: 56px;
    }
  }
  .page-query {
    width: 100%;
    box-sizing: border-box;
    padding: 20px 32px;
  }
  .page-body {
    flex: 1 1 auto;
    width: 100%;
    box-sizing: border-box;
    padding: 0 32px;
  }
}
</style>
