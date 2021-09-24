import { Component, Vue } from "vue-property-decorator";
import BasicLayout from "@/layouts/BasicLayoutSingle/BasicLayout.vue";
import PageWrapper from "@/components/page-wrapper/PageWrapper.vue";
import QueryCondition from "@/components/query-condition/QueryCondition.vue";
import ListView from "@/components/list-view/ListView.vue";
import ExampleApi from "@/http/example/ExampleApi";
import ListModel from "@/model/example/ListModel";

@Component({
  components: {
    BasicLayout,
    PageWrapper,
    QueryCondition,
    ListView
  }
})
export default class OrderList extends Vue {
  applyDate: string = ""; // 申请日期
  orderDataList: ListModel[] = []; // 订单列表
  orderTotal: number = 0; // 单据总数
  activeTab: string = "all"; // 激活状态tab

  mounted() {
    this.doSearch();
  }
  /**
   * 搜索按钮点击事件
   */
  doSearch() {
    ExampleApi.getSkuList(this.applyDate)
      .then(resp => {
        this.orderDataList = resp.data;
        this.orderTotal = resp.total;
      })
      .catch(error => {
        console.log(error);
      });
  }

  /**
   * 表格换页事件
   */
  doListLoad() {
    this.doSearch();
  }

  /**
   * 重置按钮事件
   */
  doReset() {
    this.applyDate = "";
  }

  /**
   * 查看详情点击事件
   * @param row
   */
  doOrderDtl(row: ListModel) {
    this.$router.push("/basicDetail");
  }
}
