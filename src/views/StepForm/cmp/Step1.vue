<template>
  <el-form :model="form" :rules="rules" ref="step1" label-width="120px" class="example-form">
    <el-form-item label="商品ID" prop="name">
      <span class="tip">撒打瞌睡打款收到师傅的</span>
      <el-input ref="name" v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="门店类型" prop="type">
      <el-select
        v-model="form.type"
        ref="type"
        filterable
        clearable
        value-key="uuid"
        placeholder="请下拉选择或输入查询"
      >
        <el-option
          v-for="item in optionList"
          :key="item.uuid"
          :value="`${item.name}[${item.mobile}]`"
          :label="`${item.name}[${item.mobile}]`"
        >
          {{ item.name }}[{{ item.mobile }}]
        </el-option>
      </el-select>
    </el-form-item>
    <el-button style="margin-top: 12px;margin-left:120px" type="primary" @click="doNext">下一步</el-button>
  </el-form>
</template>

<script lang="ts" src="./Step1.ts"></script>
<style lang="scss" scoped>
.example-form {
  position: relative;
  padding-bottom: 24px;
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
