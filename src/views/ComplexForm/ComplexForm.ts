import { Component, Vue } from "vue-property-decorator";
import PageWrapper from "@/components/page-wrapper/PageWrapper.vue";
import DetailView from "@/components/detail-view/DetailView.vue";
import ListView from "@/components/list-view/ListView.vue";
import DetailCard from "@/components/detail-card/DetailCard.vue";
import Editor from "@/components/editor/editor.vue";

@Component({
  components: { PageWrapper, DetailView, DetailCard, ListView, Editor }
})
export default class ComplexForm extends Vue {
  imageUrl: string = ""; // 图片地址
  editorText: string = ""; // 富文本框内容
  form = {
    // form表单绑定的内容
    code: "", // 门店code
    name: "", // 门店名称
    contacts: "", // 门店联系人
    mobile: "", // 门店手机号
    type: "", // 门店类型
    address: "" // 门店地址
  };

  optionList = [
    {
      // 下拉框选项
      uuid: "232423543645756",
      // 联系人
      name: "张三",
      // 联系人电话
      mobile: "11554546564",
      // 是否设为默认
      isDefault: true
    },
    {
      uuid: "23242354362226",
      // 联系人
      name: "李四",
      // 联系人电话
      mobile: "155666555555",
      // 是否设为默认
      isDefault: false
    }
  ];

  rules = {
    // 表单校验信息，具体使用方法可以参考http://download.qianfan123.com/fant3-web/test/index.html#/zh-CN/component/form
    code: [{ required: true, message: "请输入门店编码", trigger: "blur" }],
    name: [{ required: true, message: "请输入门店名称", trigger: "blur" }],
    contacts: [{ required: true, message: "请输入联系人", trigger: "blur" }],
    mobile: [{ required: false, message: "请输入联系方式", trigger: "blur" }],
    type: [{ required: true, message: "请选择门店类型", trigger: "blur" }],
    address: [{ required: false, message: "请选择门店地址", trigger: "blur" }]
  };

  /**
   * 后退按钮事件
   */
  doBack() {
    this.$router.go(-1);
  }

  /**
   * 图片上传成功回调
   * @param res
   * @param file
   */
  handleImgSuccess(res: any, file: any) {
    this.imageUrl = URL.createObjectURL(file.raw);
  }

  /**
   * 图片上传前钩子，可以用作格式大小校验
   * @param file 文件
   */
  beforeImgUpload(file: { type: string; size: number }) {
    const isJPG = file.type === "image/jpeg" || file.type === "image/png";
    const isLt1M = file.size / 1024 / 1024 < 1;
    if (!isJPG) {
      this.$message({
        showClose: false,
        message: "上传图片只能是 JPG/PNG 格式!",
        type: "error"
      });
      return false;
    }
    if (!isLt1M) {
      this.$message({
        showClose: false,
        message: "上传图片大小不能超过 1MB!",
        type: "error"
      });
      return false;
    }
    return isJPG && isLt1M;
  }

  /**
   * 视频上传成功回调
   * @param res
   * @param file
   */
  handleVideoSuccess(res: any, file: any) {
    console.log(222);
    this.imageUrl = URL.createObjectURL(file.raw);
  }

  /**
   * 视频上传前钩子，可以用作格式大小校验
   * @param file 文件
   */
  beforeVideoUpload(file: { type: string; size: number }) {
    const videoType = ["    /wmv", "video/mp4", "video/rmvb", "video/avi"];
    const typeIndex = videoType.findIndex(type => {
      return type === file.type;
    });
    const isLt1M = file.size / 1024 / 1024 < 30;
    if (typeIndex <= -1) {
      this.$message({
        showClose: false,
        message: "上传图片只能是 wmv/mp4/rmvb/avi 格式!",
        type: "error"
      });
      return false;
    }
    if (!isLt1M) {
      this.$message({
        showClose: false,
        message: "上传视频大小不能超过 30MB!",
        type: "error"
      });
      return false;
    }
    return typeIndex >= -1 && isLt1M;
  }
}
