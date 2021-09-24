<template>
  <page-wrapper>
    <!-- 异常页页眉 开始 -->
    <template slot="header">
      <!-- 页面标题或自定义内容（若使用标题，则需用span包裹） -->
      <span>基础详情</span>
      <!-- 页眉标题 结束 -->
      <!-- 页眉按钮组（按钮为一个时，可以不用div包裹） 开始 -->
      <div>
        <el-button type="primary" size="medium" @click="doEdit">编辑</el-button>
        <el-button size="medium" @click="doBack">返回</el-button>
      </div>
      <!-- 页眉按钮组 结束 -->
    </template>
    <!-- 异常页页眉 结束 -->
    <!-- 详情主题 开始 -->
    <template slot="body">
      <!-- 异常提示内容 -->
      <div class="hint_content">
        <!-- 异常提示显示图片 -->
        <img class="hint_image" :src="imgUrl" />
        <div class="hint_content_right">
          <!-- 异常提示标题 -->
          <div class="hintTitle nowrap" :title="hintTitle">{{ hintTitle }}</div>
          <!-- 异常提示描述 -->
          <p class="hint_describe two-clamp" :title="hintDescribe">
            {{ hintDescribe }}
          </p>
          <!-- 异常提示操作按钮 -->
          <div class="hint_operation">
            <el-button class="main_button" type="primary" size="medium" @click="mainBtn">主要按钮</el-button>
            <el-button class="normal_button">默认按钮</el-button>
          </div>
        </div>
      </div>
    </template>
    <!-- 详情主题 结束 -->
  </page-wrapper>
</template>

<script lang="ts" src="./Abnormal.ts"></script>

<style lang="scss" scoped>
/deep/.page-body {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hint_content {
  display: flex;
  align-items: center;
  .hint_image {
    width: 196px;
    height: 196px;
  }
  .hint_content_right {
    margin-left: 32px;
    .hintTitle {
      font-size: 16px;
      font-weight: 500;
      color: #1f375d;
    }
    // 一行，多余显示....
    .nowrap {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .hint_describe {
      margin: 12px 0 24px;
      width: 240px;
      font-size: 12px;
      color: #8c96a4;
    }
    // 超过两行 ...
    .two-clamp {
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
      white-space: pre-line;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
  }
}
</style>
