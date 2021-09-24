<template>
  <div class="finished">
    <i class="el-icon-check finished-icon"></i>
    <span class="finished-text">操作成功</span>
    <span class="finished-describe">新建表单成功啦新建表单成功啦新建表单成功啦新建表单成功啦</span>
    <div class="finished-operator">
      <el-button type="primary" @click="doCreate">再次新建</el-button>
      <el-button style="margin-left:16px" @click="doDetail">查看详情</el-button>
    </div>
  </div>
</template>

<script lang="ts" src="./Step4.ts"></script>
<style lang="scss" scoped>
.finished {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 24px;
  .finished-icon {
    height: 64px;
    width: 64px;
    text-align: center;
    line-height: 62px;
    border-radius: 50%;
    font-weight: 600;
    color: $--color-white;
    background-color: $--color-success;
    font-size: 30px;
    margin-bottom: 12px;
  }
  .finished-text {
    height: 32px;
    font-size: 16px;
    font-weight: 500;
    color: $--color-black;
    line-height: 32px;
    margin-bottom: 20px;
  }
  .finished-describe {
    text-align: center;
    width: 240px;
    height: 36px;
    font-size: 12px;
    color: #8c96a4;
    line-height: 17px;
    margin-bottom: 32px;
  }
}
</style>
