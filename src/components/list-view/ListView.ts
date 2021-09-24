import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { CommonUtil } from "fant-ui";
// 筛选参数
class FilterParam {
  // 查询条件运算,格式为“field:<操作符>”
  property: Nullable<string> = null;
  // 查询参数
  value: any;
}

// 排序参数
class SortParam {
  // 排序字段
  property: Nullable<string> = null;
  // 排序方式，默认倒叙
  direction: Nullable<string> = null;
}

// 查询参数
class QueryParam {
  // 开始位置
  start: number = 0;
  // 页面大小
  limit: number = 0;
  //
  filters: FilterParam[] = [];
  //
  sorters: SortParam[] = [];
  // 扩展信息
  fetchParts: string[] = [];
}

@Component({
  components: {}
})
export default class ListView extends Vue {
  @Prop({ type: Boolean, default: true }) selectable: boolean; // 是否显示勾选框
  @Prop({ type: Boolean, default: true }) pageable: boolean; // 是否显示分页
  @Prop({ type: Boolean, default: false }) stripe: boolean; // 是否斑马纹
  @Prop({ type: Number, default: 0 }) total: number; // 选项总数
  @Prop({ type: Array, default: [] }) data: any[];
  @Prop() emptyText: string;
  @Prop() defaultSort: any; // 默认排序
  @Prop() rowKey: any; // 行id 配合reserve-selection使用
  @Prop({ type: Boolean, default: true }) reserveSelection: boolean; // 跨页选中
  @Prop({ type: Boolean, default: false }) smallPage: boolean;
  @Prop({ type: Boolean, default: false }) highlightCurrentRow: boolean;
  @Prop({
    type: Function,
    default: (row: any, index: number) => {
      return true;
    }
  })
  @Prop({ type: Function })
  checkSelectable: () => boolean; // checkbox是否可选

  internalPage: number = 1;
  internalSelected: any[] = []; // 选中的对象数组
  internalDefaultSort: any = {};
  queryParam: QueryParam = new QueryParam();
  $refs: any;

  created() {
    if (this.defaultSort) {
      this.internalDefaultSort = {
        prop: this.defaultSort.property,
        order: this.defaultSort.direction === "ASC" ? "ascending" : "descending"
      };
      this.queryParam.sorters = [this.defaultSort];
    }
    this.queryParam.limit = 10;
    this.queryParam.start = (this.internalPage - 1) * this.queryParam.limit!;
  }

  doSelectionChange(arr: any) {
    this.internalSelected = arr;
    this.$emit("selected", this.internalSelected);
  }

  /**
   * 表格排序
   */
  doSortChange({ column, prop, order }: any) {
    order === "ascending" ? (order = "ASC") : (order = "DESC");
    const sorts = [];
    column && prop && order && sorts.push({ property: prop, direction: order });
    this.internalPage = 1;
    this.queryParam.start = (this.internalPage - 1) * this.queryParam.limit!;
    this.queryParam.sorters = sorts;
    this.$emit("load", CommonUtil.copy(this.queryParam));
  }

  /**
   * 取消选中
   */
  doCancel() {
    this.$refs.table.clearSelection();
  }

  /**
   * 分页回调
   */
  doPageChange(page: number) {
    this.internalPage = page;
    this.queryParam.start = (this.internalPage - 1) * this.queryParam.limit;
    this.$emit("load", CommonUtil.copy(this.queryParam));
  }

  /**
   * 每页多少条change
   */
  doSizeChange(pageSize: number) {
    this.queryParam.limit = pageSize;
    this.reset();
  }

  search() {
    this.doCancel(); // 解决编辑已勾选数据后，internalSelected不改变的问题
    this.$emit("load", CommonUtil.copy(this.queryParam));
  }

  reset() {
    this.doCancel(); // 解决编辑已勾选数据后，internalSelected不改变的问题
    this.internalPage = 1;
    this.queryParam.start = (this.internalPage - 1) * this.queryParam.limit;
    this.$emit("load", CommonUtil.copy(this.queryParam));
  }
}
