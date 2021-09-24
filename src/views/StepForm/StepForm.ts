import { Component, Vue } from "vue-property-decorator";
import PageWrapper from "@/components/page-wrapper/PageWrapper.vue";
import DetailView from "@/components/detail-view/DetailView.vue";
import ListView from "@/components/list-view/ListView.vue";
import DetailCard from "@/components/detail-card/DetailCard.vue";
import Step1 from "./cmp/Step1.vue";
import Step2 from "./cmp/Step2.vue";
import Step3 from "./cmp/Step3.vue";
import Step4 from "./cmp/Step4.vue";

@Component({
  components: {
    PageWrapper,
    DetailView,
    DetailCard,
    ListView,
    Step1,
    Step2,
    Step3,
    Step4
  }
})
export default class StepForm extends Vue {
  active: number = 1; // 激活状态的步骤
  /**
   * 下一步
   */
  doNextStep() {
    if (this.active < 3) {
      this.active += 1;
    }
  }
  /**
   * 上一步
   */
  doPrevStep() {
    if (this.active > 1) {
      this.active -= 1;
    }
  }
  /**
   * 提交
   */
  doSubmit() {
    this.active += 1;
  }
}
