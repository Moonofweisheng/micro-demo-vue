import { Vue, Prop, Component } from "vue-property-decorator";

@Component({
  name: "QueryCondition"
})
export default class QueryCondition extends Vue {
  opened: boolean = false; // 是否展开
  @Prop({ type: Boolean, default: false }) toggle: boolean; // 允许折叠
  @Prop({ type: Boolean, default: true }) showButton: boolean; // 是否显示查询重置按钮
  $refs: any;

  /**
   * 键盘事件
   */
  bindFastCode(ev: KeyboardEvent) {
    if (ev.keyCode === 13) {
      // 如果是input，则回车触发查询
      const input = ev.target as any;
      if (this.$refs.queryCondition.$el.contains(input) && input.type && input.type === "text") {
        this.doSearch();
      }
    }
  }

  doSearch() {
    this.$emit("search");
  }

  doReset() {
    this.$emit("reset");
  }

  doToggle() {
    this.opened = !this.opened;
  }
}
