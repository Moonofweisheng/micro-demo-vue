import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class Step4 extends Vue {
  /**
   * 再次创建
   */
  doCreate() {
    console.log('再次创建')
  }

  /**
   * 查看详情
   */
  doDetail() {
    console.log('查看详情')
  }
}
