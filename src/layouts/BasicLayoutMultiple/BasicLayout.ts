import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class BasicLayout extends Vue {
  handleOpen(key: string, keyPath: string) {
    console.log(key, keyPath)
  }

  handleClose(key: string, keyPath: string) {
    console.log(key, keyPath)
  }
}
