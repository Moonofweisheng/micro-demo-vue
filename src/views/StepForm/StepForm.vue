<template>
  <page-wrapper>
    <!-- 表单页眉 开始 -->
    <template slot="header">
      <!-- 页面标题或自定义内容（若使用标题，则需用span包裹） -->
      <span>分步表单</span>
      <!-- 页眉标题 结束 -->
    </template>
    <!-- 表单页眉 结束 -->

    <!-- 表单主体 开始 -->
    <template slot="body">
      <!-- 详情视图 开始（可以作为详情与表单的容器） -->
      <detail-view>
        <div class="example-steps">
          <el-steps :space="300" :active="active" finish-status="success" align-center>
            <el-step title="步骤1"> </el-step>
            <el-step title="步骤2"></el-step>
            <el-step title="步骤3"></el-step>
            <el-step title="完成"></el-step>
          </el-steps>
        </div>
        <step1 v-if="active === 1" @nextStep="doNextStep"></step1>
        <step2 v-if="active === 2" @nextStep="doNextStep" @prevStep="doPrevStep"></step2>
        <step3 v-if="active === 3" @submit="doSubmit" @prevStep="doPrevStep"></step3>
        <step4 v-if="active === 4"></step4>
      </detail-view>
      <!-- 详情视图 结束 -->
    </template>
    <!-- 表单主体 结束 -->
  </page-wrapper>
</template>

<script lang="ts" src="./StepForm.ts"></script>
<style lang="scss" scoped>
.example-steps {
  position: relative;
  max-width: 1040px;
  width: 80%;
  margin: 0 auto 32px;
  text-align: center;
}
.example-form {
  position: relative;
  width: 560px;
  margin: 0 auto;
  /deep/.el-input {
    max-width: 416px;
  }
  /deep/.el-select {
    max-width: 416px;
  }
}
</style>
