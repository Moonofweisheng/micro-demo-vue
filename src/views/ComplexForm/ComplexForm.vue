<template>
  <page-wrapper>
    <!-- 表单页眉 开始 -->
    <template slot="header">
      <!-- 页面标题或自定义内容（若使用标题，则需用span包裹） -->
      <span>复杂表单</span>
      <!-- 页眉标题 结束 -->
    </template>
    <!-- 表单页眉 结束 -->

    <!-- 表单主体 开始 -->
    <template slot="body">
      <!-- 详情视图 开始（可以作为详情与表单的容器） -->
      <detail-view>
        <!-- 表单卡片 参数有showTag,title,type 具体用法可参照本页面及组件内注释 -->
        <!-- 不同type对应不同颜色，可以作为表单页面状态的容器 -->
        <detail-card title="基础信息">
          <template slot="right">
            <el-form :model="form" :rules="rules" :inline-message="true" ref="basicForm" label-width="120px">
              <el-row>
                <el-col :span="12">
                  <el-form-item label="商品名称" prop="code">
                    <span class="tip">- 系统自动生成，可修改，最多不超过10个字符</span>
                    <el-input v-model="form.code"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="商品副标题" prop="name">
                    <span class="tip">撒打瞌睡打款收到师傅的</span>
                    <el-input ref="name" v-model="form.name"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                  <el-form-item label="商品编码" prop="code">
                    <span class="tip">- 系统自动生成，可修改，最多不超过10个字符</span>
                    <el-input v-model="form.code"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="商品ID" prop="name">
                    <span class="tip">撒打瞌睡打款收到师傅的</span>
                    <el-input ref="name" v-model="form.name"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                  <el-form-item label="商品类目" prop="code">
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
                </el-col>
                <el-col :span="12">
                  <el-form-item label="商品类型" prop="name">
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
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                  <el-form-item label="销售方式" prop="code">
                    <el-radio-group v-model="form.code">
                      <el-radio label="标准"></el-radio>
                      <el-radio label="称重"></el-radio>
                    </el-radio-group>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="销售方式" prop="code">
                    <el-radio-group v-model="form.code">
                      <el-radio label="标准"></el-radio>
                      <el-radio label="称重"></el-radio>
                    </el-radio-group>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                  <el-form-item label="商品主图" prop="code">
                    <span class="tip">- 图片上传建议：688*424像素，PNG/JPG格式，大小不超过1M</span>
                    <el-upload
                      action="http://otp.cdinfotech.top/"
                      list-type="picture-card"
                      class="example-uploader"
                      :on-success="handleImgSuccess"
                      :before-upload="beforeImgUpload"
                    >
                      <i class="el-icon-plus example-uploader-icon"></i>
                      <span class="example-uploader-text">上传图片</span>
                    </el-upload>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="商品视频" prop="code">
                    <span class="tip">- 视频比例建议1:1，支持 wmv/mp4/rmvb/avi；支持30秒以内时长；大小不超过30M</span>
                    <el-upload
                      action="https://jsonplaceholder.typicode.com/posts/"
                      list-type="picture-card"
                      class="example-uploader"
                      :on-success="handleVideoSuccess"
                      :before-upload="beforeVideoUpload"
                    >
                      <i class="el-icon-plus example-uploader-icon"></i>
                      <span class="example-uploader-text">上传视频</span>
                    </el-upload>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </template>
        </detail-card>
        <!-- <detail-card title="商品规格">
                    <template slot="right">
                        <el-row>
                            <el-col :span="12">
                                <el-select v-model="form.type" ref="type" multiple filterable allow-create default-first-option value-key="uuid" placeholder="请下拉选择或输入查询">
                                    <el-option v-for="item in optionList" :key="item.uuid" :value="`${item.name}[${item.mobile}]`" :label="`${item.name}[${item.mobile}]`">
                                        {{ item.name }}[{{ item.mobile }}]
                                    </el-option>
                                </el-select>
                            </el-col>
                        </el-row>
                    </template>
                </detail-card> -->
        <detail-card title="图文详情">
          <template slot="right">
            <editor></editor>
          </template>
        </detail-card>
      </detail-view>
      <!-- 详情视图 结束 -->
    </template>
    <!-- 表单主体 结束 -->
  </page-wrapper>
</template>

<script lang="ts" src="./ComplexForm.ts"></script>

<style lang="scss" scoped>
.tip {
  display: block;
  min-height: 32px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  color: $--color-text-secondary;
}
/deep/.el-col-12 {
  /deep/.el-input {
    max-width: 416px;
  }
  /deep/.el-select {
    max-width: 416px;
  }
}
.example-uploader {
  /deep/.el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  /deep/.el-upload--picture-card {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    line-height: 0;
  }
  /deep/.el-upload:hover {
    border-color: #409eff;
  }
  .example-uploader-text {
    height: 16px;
    font-size: 12px;
    font-weight: 400;
    color: $--color-text-secondary;
    line-height: 16px;
  }
  .example-uploader-icon {
    font-size: 24px;
    color: #8c939d;
    width: 32px;
    height: 32px;
    line-height: 30px;
    text-align: center;
  }
  /deep/.el-upload-list__item {
    width: 80px;
    height: 80px;
  }
}
</style>
