import { Component, Vue, Watch } from "vue-property-decorator";
import PageWrapper from "@/components/page-wrapper/PageWrapper.vue";
import { abnormalType, hintTitle, hintDescribe } from "@/model/example/AbnormalType";

@Component({
  components: { PageWrapper }
})
export default class Abnormal extends Vue {
  status: string = "";
  // 提示图片
  imgUrl = require("@/assets/img/common/img_blank.png");
  // 提示标题
  hintTitle: string = "";
  // 提示内容
  hintDescribe: string = "";

  // 监听路由变化，hintTitle、hintDescribe动态传参接收
  @Watch("$route")
  routechange() {
    // 判断异常页类型
    this.judgeTitle();
  }

  // 刷新当前页时，hintTitle、hintDescribe值为当前url指定值
  mounted() {
    // 判断异常页类型
    this.judgeTitle();
  }

  // 判断异常页类型
  judgeTitle() {
    this.status = this.$route.params.abnormalStatus;
    // 提示标题
    this.hintTitle = hintTitle.string(this.status as abnormalType);
    // 提示内容
    this.hintDescribe = hintDescribe.string(this.status as abnormalType);
    // 判断异常页类型，显示不同提示图案
    switch (this.$route.params.hintTitle) {
      case "noContent":
        this.imgUrl = require("@/assets/img/common/img_blank.png");
        break;
      case "noTask":
        this.imgUrl = require("@/assets/img/common/img_notask.png");
        break;
      case "noSearchResult":
        this.imgUrl = require("@/assets/img/common/img_noresult.png");
        break;
      case "systemErr":
        this.imgUrl = require("@/assets/img/common/img_systemmistake.png");
        break;
      case "networkErr":
        this.imgUrl = require("@/assets/img/common/img_networkmistake.png");
        break;
      case "rightControl":
        this.imgUrl = require("@/assets/img/common/img_permission.png");
        break;
    }
  }
  // 修改
  doEdit() {
    console.log("edit...");
  }
  // 返回
  doBack() {
    console.log("back...");
  }
  // 主要按钮
  mainBtn() {
    console.log("button...");
  }
  // 默认按钮
  normalBtn() {
    console.log("button...");
  }
}
