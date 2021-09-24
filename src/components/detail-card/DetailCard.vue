<template>
  <!-- 基础详情卡片 -->
  <div class="detail-card" :class="[typeClass]">
    <!-- 基础详情卡片头部(是否显示标题前竖线由showTag控制) -->
    <header class="header" v-if="title">
      <span class="header-tag" v-if="showTag"></span>
      <span>{{ title }}</span>
    </header>
    <!-- 基础详情卡片头部结束 -->

    <!-- 内容区 -->
    <main class="body">
      <!-- 内容区左部（用于自定义显示图片等）开始 -->
      <div class="card-left" v-if="$slots.left">
        <slot name="left"></slot>
      </div>
      <!-- 内容区左部 结束 -->

      <!-- 内容区右部（用于显示卡片主内容） 开始 -->
      <div class="card-right" v-if="$slots.right">
        <slot name="right"></slot>
      </div>
      <!-- 内容区右部 结束 -->
    </main>
    <!-- 内容区结束 -->
  </div>
</template>

<script lang="ts" src="./DetailCard.ts"></script>

<style lang="scss">
.detail-card {
  margin-bottom: 16px;
  .header {
    display: flex;
    align-items: center;
    height: 40px;
    font-size: 14px;
    line-height: 0;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: $--color-text-primary;
    .header-tag {
      width: 3px;
      height: 12px;
      background: $--color-primary;
      margin-right: 5px;
    }
  }
  .body {
    display: flex;
    width: 100%;
    .card-left {
      width: 96px;
      flex: 0 0 auto;
    }
    .card-right {
      width: 100%;
      flex: 1 1 auto;
    }
  }
}
.card-info {
  border: none;
  background: #ffffff;
}
.card-warning {
  border: 1px solid $--color-warning;
  background-color: $--color-warning-extra-lighter;
}
.card-error {
  border: 1px solid $--color-danger;
  background-color: $--color-danger-extra-lighter;
}
.card-success {
  border: 1px solid $--color-success;
  background-color: $--color-success-extra-lighter;
}
</style>
