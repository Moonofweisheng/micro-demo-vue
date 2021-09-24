<template>
  <page-wrapper>
    <!-- 详情页眉 开始 -->
    <template slot="header">
      <!-- 页面标题或自定义内容（若使用标题，则需用span包裹） -->
      <span>基础详情</span>
      <!-- 页眉标题 结束 -->
      <!-- 页眉按钮组（按钮为一个时，可以不用div包裹） 开始 -->
      <div>
        <el-button type="primary" size="medium" @click="doEdit">编辑</el-button>
        <el-button type="primary" size="medium" @click="doBack">返回</el-button>
      </div>
      <!-- 页眉按钮组 结束 -->
    </template>
    <!-- 详情页眉 结束 -->

    <!-- 详情主体 开始 -->
    <template slot="body">
      <detail-view>
        <!-- 详情卡片 参数有showTag,title,type 具体用法可参照本页面及组件内注释 -->
        <!-- 不同type对应不同颜色，可以作为编辑页面状态的容器 -->
        <detail-card type="success">
          <template slot="left">
            啊书法大赛发
          </template>
          <template slot="right">
            <el-form>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="下单客户：">
                    撒旦萨达[ 撒倒萨倒萨十大]
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="收货人：">
                    但是大师傅士大夫是大师傅士大夫是
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </template>
        </detail-card>

        <detail-card title="基础信息" :showTag="true">
          <template slot="right">
            <el-form>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="下单客户：">
                    撒旦萨达[ 撒倒萨倒萨十大]
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="收货人：">
                    但是大师傅士大夫是大师傅士大夫是
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="收货地址：">
                    ds啊实打实大大阿萨打算大d's
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="订单类型：">
                    撒大苏打啊啊啊啊啊啊啊啊啊啊啊
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="下单渠道：">
                    反对哈哈哈哈哈哈哈哈哈哈哈
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="配送方式：">送货上门</el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="支付方式："></el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-form-item label="备注信息：">
                    撒啊啊啊啊啊啊啊啊啊啊啊啊啊
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </template>
        </detail-card>
        <detail-card title="商品信息" :showTag="true">
          <template slot="right">
            <el-form>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="下单客户：">
                    撒旦萨达[ 撒倒萨倒萨十大]
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="收货人：">
                    但是大师傅士大夫是大师傅士大夫是
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="收货地址：">
                    ds啊实打实大大阿萨打算大d's
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="订单类型：">
                    撒大苏打啊啊啊啊啊啊啊啊啊啊啊
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="下单渠道：">
                    反对哈哈哈哈哈哈哈哈哈哈哈
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="配送方式：">送货上门</el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="支付方式："></el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-form-item label="备注信息：">
                    撒啊啊啊啊啊啊啊啊啊啊啊啊啊
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </template>
        </detail-card>
      </detail-view>
    </template>
    <!-- 详情主体表格 结束 -->
  </page-wrapper>
</template>

<script lang="ts" src="./BasicDetail.ts"></script>

<style lang="scss" scoped></style>
