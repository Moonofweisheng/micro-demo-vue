<template>
  <page-wrapper>
    <!-- 列表页眉 开始 -->
    <template slot="header">
      <!-- 页面标题或自定义内容（若使用标题，则需用span包裹，注释内容为选项卡示例） -->
      <span>商品列表</span>
      <!-- <el-tabs v-model="sysState" @tab-click="doSearch">
                <el-tab-pane label="全部订单" name="all"></el-tab-pane>
                <el-tab-pane label="待付款" name="CONFIRMED"></el-tab-pane>
                <el-tab-pane label="待审核" name="PAID"></el-tab-pane>
                <el-tab-pane label="待发货" name="DELIVERING"></el-tab-pane>
                <el-tab-pane label="待收货" name="DELIVERED"></el-tab-pane>
                <el-tab-pane label="已完成" name="FINISHED"></el-tab-pane>
                <el-tab-pane label="已取消" name="CANCELED"></el-tab-pane>
            </el-tabs> -->
      <!-- 页眉标题 结束 -->

      <!-- 页眉按钮组（按钮为一个时，可以不用div包裹） 开始 -->
      <div>
        <el-button type="primary" size="medium">+新建</el-button>
        <!-- <el-button type="primary" size="medium">代客下单</el-button> -->
      </div>
      <!-- 页眉按钮组 结束 -->
    </template>
    <!-- 列表页眉 结束 -->

    <!-- 列表查询条件 开始 -->
    <template slot="query">
      <query-condition :toggle="true" @search="doSearch" @reset="doReset">
        <template>
          <el-col :span="6">
            <el-form-item label="订单号">
              <el-date-picker
                type="date"
                ref="applyDate"
                v-model="applyDate"
                value-format="yyyy-MM-dd"
                placeholder="申请时间"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="订单号">
              <el-date-picker
                type="date"
                ref="applyDate"
                v-model="applyDate"
                value-format="yyyy-MM-dd"
                placeholder="申请时间"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="订单号">
              <el-date-picker
                type="date"
                ref="applyDate"
                v-model="applyDate"
                value-format="yyyy-MM-dd"
                placeholder="申请时间"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </template>
        <template slot="closed">
          <el-col :span="6">
            <el-form-item label="订单号">
              <el-date-picker
                type="date"
                ref="applyDate"
                v-model="applyDate"
                value-format="yyyy-MM-dd"
                placeholder="申请时间"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="订单号">
              <el-date-picker
                type="date"
                ref="applyDate"
                v-model="applyDate"
                value-format="yyyy-MM-dd"
                placeholder="申请时间"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="订单号">
              <el-date-picker
                type="date"
                ref="applyDate"
                v-model="applyDate"
                value-format="yyyy-MM-dd"
                placeholder="申请时间"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="订单号">
              <el-date-picker
                type="date"
                ref="applyDate"
                v-model="applyDate"
                value-format="yyyy-MM-dd"
                placeholder="申请时间"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </template>
      </query-condition>
    </template>
    <!-- 列表查询条件 结束 -->

    <!-- 列表主体表格 开始 -->
    <template slot="body">
      <list-view ref="orderDataList" :selectable="true" :data="orderDataList" :total="orderTotal" @load="doListLoad">
        <template slot="actions">
          <div class="operation">
            <el-button size="small">批量删除</el-button>
            <el-button size="small">导出查询结果</el-button>
          </div>
        </template>
        <el-table-column prop="appId" label="图片" sortable>
          <template slot-scope="scope">
            <img style="width:96px;" :src="scope.row.appId" />
          </template>
        </el-table-column>
        <el-table-column prop="flowNo" label="订单号"> </el-table-column>
        <el-table-column prop="sysState" label="订单状态"> </el-table-column>
        <el-table-column prop="type" label="订单类型"> </el-table-column>
        <el-table-column prop="memberInfo" label="客户信息"> </el-table-column>
        <el-table-column prop="consignee" label="收货人信息"> </el-table-column>
        <el-table-column prop="realAmount" label="下单金额（元）"> </el-table-column>
        <el-table-column prop="created" label="下单时间"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div>
              <el-button type="text" @click="doOrderDtl(scope.row)">查看</el-button>
              <el-button type="text" @click="doOrderDtl(scope.row)">查看</el-button>
              <el-button type="text" @click="doOrderDtl(scope.row)">查看</el-button>
            </div>
          </template>
        </el-table-column>
      </list-view>
    </template>
    <!-- 列表主体表格 结束 -->
  </page-wrapper>
</template>

<script lang="ts" src="./SkuList.ts"></script>
<style lang="scss" scoped>
.operation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 1 auto;
}
</style>
