import { Component, Vue } from "vue-property-decorator";
import PageWrapper from "@/components/page-wrapper/PageWrapper.vue";
import ExampleApi from "@/http/example/ExampleApi";
import ListModel from "@/model/example/ListModel";

@Component({
  components: { PageWrapper }
})
export default class ComplexDetail extends Vue {
  skuDataList: ListModel[] = [];
  activeIndex = "1";
  applyDate = "";

  mounted() {
    ExampleApi.getList(this.applyDate)
      .then(resp => {
        this.skuDataList = resp.data;
      })
      .catch(error => {
        console.log(error);
      });
  }

  // 切换菜单项
  handleSelect() {
    console.log("change...");
  }
  // 审核
  doAudit() {
    console.log("change...");
  }
  // 复制
  doCopy() {
    console.log("change...");
  }
  // 导出
  doExport() {
    console.log("change...");
  }
}
