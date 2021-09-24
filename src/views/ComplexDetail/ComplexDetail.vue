<template>
  <div class="complexDetail">
    <!-- 详情top 开始 -->
    <page-wrapper class="complexDetail-top" style="margin-bottom:20px">
      <!-- 详情页眉 开始 -->
      <template slot="header">
        <!-- 页面标题或自定义内容（若使用标题，则需用span包裹） -->
        <span>复杂详情</span>
        <!-- 页眉标题 结束 -->
        <!-- 页眉按钮组（按钮为一个时，可以不用div包裹） 开始 -->
        <div>
          <el-button type="primary" size="medium" @click="doAudit">审核</el-button>
          <el-button size="medium" @click="doCopy">复制</el-button>
          <el-button size="medium" @click="doExport">导出</el-button>
        </div>
        <!-- 页眉按钮组 结束 -->
      </template>
      <!-- 详情页眉 结束 -->

      <!-- 详情top主体 开始 -->
      <template slot="body">
        <div class="topForm">
          <div class="topForm-header">
            <div class="topForm-header-tag">
              待审核
            </div>
            <div class="topForm-header-content">单号：38472389472384723</div>
          </div>
          <div class="topForm-content">
            <div class="topForm-content-left">
              <el-form>
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="创建人：">
                      丽丽
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="客户名：">
                      发财树百货店
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="创建时间：">
                      2019/08/28 12:00:00
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="生效日期：">
                      2019/08/28 ～ 2019/10/28
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="备注：">
                      暂无
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
            <div class="topForm-content-right">
              <div class="amountName">订单金额</div>
              <div class="amountNum">¥ 398.00</div>
            </div>
          </div>
        </div>
      </template>
      <!-- 详情top主体表格 结束 -->
    </page-wrapper>
    <!-- 详情top 结束 -->
    <!-- 详情bottom 开始 -->
    <page-wrapper class="complexDetail-bottom">
      <!-- 详情页眉 开始 -->
      <template slot="header">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">订单信息</el-menu-item>
          <el-menu-item index="2">物流信息</el-menu-item>
          <el-menu-item index="3">操作日志</el-menu-item>
        </el-menu>
      </template>
      <!-- 详情页眉 结束 -->

      <!-- 详情主体 开始 -->
      <template slot="body">
        <div class="bottomForm">
          <div class="bottomForm-header">
            收货信息
          </div>
          <div class="bottomForm-content">
            <el-form>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="收货人：">
                    丽丽
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="联系电话：">
                    18303655076
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="收货时间：">
                    2019/08/28 12:00:00
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                  <el-form-item label="收货地址：">
                    上海市闵行区浦江镇朴实路185弄68号甲
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
          <div class="bottomForm-header bottomForm-productInfo-header">
            商品信息
          </div>
          <div class="bottomForm-content">
            <el-table :data="skuDataList" :stripe="false" style="width: 100%">
              <el-table-column prop="appId" label="主图"> </el-table-column>
              <el-table-column prop="consignee" label="商品编码"> </el-table-column>
              <el-table-column prop="created" label="商品名称"> </el-table-column>
              <el-table-column prop="flowNo" label="规格"> </el-table-column>
              <el-table-column prop="memberInfo" label="数量"> </el-table-column>
              <el-table-column prop="realAmount" label="单位"> </el-table-column>
              <el-table-column prop="sysState" label="单价/¥"> </el-table-column>
              <el-table-column prop="type" label="小计"> </el-table-column>
            </el-table>
          </div>
          <div class="bottomForm-footer">
            <div class="bottomForm-footer-content">
              <div class="amountList productAmount">
                <span class="amountName">商品金额：</span>
                <span class="amount">¥398.00</span>
              </div>
              <div class="amountList discountAmount">
                <span class="amountName">优惠金额：</span>
                <span class="amount">¥398.00</span>
              </div>
              <div class="amountList freightAmount">
                <span class="amountName">运费：</span>
                <span class="amount">¥398.00</span>
              </div>
              <div class="amountList amountPayable">
                <span class="amountName">应付金额：</span>
                <span class="amount amountPayable-number">¥398.00</span>
              </div>
            </div>
          </div>
        </div>
      </template>
      <!-- 详情主体表格 结束 -->
    </page-wrapper>
    <!-- 详情bottom 结束 -->
  </div>
</template>

<script lang="ts" src="./ComplexDetail.ts"></script>

<style lang="scss" scoped>
.complexDetail {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
  .complexDetail-top {
    .topForm {
      padding: 22px 32px;
      .topForm-header {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        .topForm-header-tag {
          padding: 2px 7px;
          font-size: 14px;
          font-weight: 500;
          color: rgb(239, 130, 30);
          background: rgba(239, 130, 30, 0.2);
          border-radius: 12px;
        }
        .topForm-header-content {
          margin-left: 8px;
          font-size: 16px;
          font-weight: 500;
          color: #242633;
        }
      }
      .topForm-content {
        display: flex;
        align-items: center;
        .topForm-content-left {
          flex: 1;
          /deep/ .el-form-item {
            margin-bottom: 0;
          }
        }
        .topForm-content-right {
          .amountName {
            height: 24px;
            line-height: 24px;
            font-size: 12px;
            color: #36445a;
            text-align: right;
          }
          .amountNum {
            height: 28px;
            line-height: 28px;
            font-size: 24px;
            font-weight: 500;
            color: #242633;
          }
        }
      }
    }
  }
  .complexDetail-bottom {
    border-bottom: 0;
    .el-menu--horizontal > .el-menu-item {
      height: 55px;
      line-height: 55px;
    }
    .bottomForm {
      padding: 20px 32px;
      .bottomForm-header {
        margin-bottom: 10px;
        width: 64px;
        height: 24px;
        line-height: 20px;
        font-size: 14px;
        font-weight: 500;
        color: #242633;
      }
      .bottomForm-content {
        /deep/ .el-form-item {
          margin-bottom: 0;
        }
      }
      .bottomForm-productInfo-header {
        margin-top: 32px;
      }
    }
    .bottomForm-footer {
      display: flex;
      justify-content: flex-end;
      margin-top: 12px;
      .bottomForm-footer-content {
        .amountList {
          width: 222px;
          height: 24px;
          font-size: 12px;
          color: #36445a;
          .amountName {
            display: inline-block;
            width: 60px;
            text-align: left;
          }
          .amount {
            margin-left: 8px;
            font-family: PingFangSC-Regular, PingFang SC;
          }
        }
        .amountPayable {
          .amountPayable-number {
            font-size: 16px;
            color: #de3232;
          }
        }
      }
    }
  }
}
</style>
