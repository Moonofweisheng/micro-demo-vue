<template>
  <div class="list-view">
    <div class="toolbar" v-if="selectable">
      <div class="selected-btn" type="info" :closable="false">
        <span>已选中</span>
        <span class="num">{{ internalSelected.length }}</span>
        <span>行</span>
        <el-button type="text" @click="doCancel()">取消选中</el-button>
      </div>
      <slot name="actions" :selected="internalSelected"></slot>
      <div class="icons">
        <slot name="icons"></slot>
      </div>
    </div>
    <el-table
      ref="table"
      fit
      :data="data"
      :row-key="rowKey"
      :stripe="stripe"
      :emptyText="emptyText"
      :default-sort="internalDefaultSort"
      @selection-change="doSelectionChange"
      @sort-change="doSortChange"
    >
      <el-table-column
        v-if="selectable"
        type="selection"
        :selectable="checkSelectable"
        :reserve-selection="reserveSelection"
      ></el-table-column>
      <slot></slot>
    </el-table>
    <el-pagination
      class="pagination"
      layout="sizes, total, prev, pager, next"
      v-if="pageable && !smallPage"
      :current-page.sync="internalPage"
      :page-sizes="[10, 30, 50, 100]"
      :page-size="queryParam.limit"
      :total="total"
      @size-change="doSizeChange"
      @current-change="doPageChange"
    >
    </el-pagination>

    <el-pagination
      class="pagination"
      layout="jumper,prev,next,total"
      v-if="pageable && smallPage"
      :current-page.sync="internalPage"
      :page-size="queryParam.limit"
      :total="total"
      @size-change="doSizeChange"
      @current-change="doPageChange"
    >
    </el-pagination>
  </div>
</template>
<script lang="ts" src="./ListView.ts"></script>
<style lang="scss" scoped>
.list-view {
  .toolbar {
    display: flex;
    align-items: center;
    padding-bottom: 10px;
  }
  .selected-btn {
    flex: 0 0 auto;
    color: #4c5f7d;
    width: auto;
    display: inline-block;
    margin-right: 10px;
    padding: 4px 12px;
    font-size: $--button-small-font-size;
    /deep/ .el-button--text {
      padding: 0;
      margin-left: 5px;
    }
  }
  .num {
    color: $--color-primary;
    margin: 0 5px;
  }
  .pagination {
    height: 56px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
