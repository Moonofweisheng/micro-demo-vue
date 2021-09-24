import ApiClient from "@/http/ApiClient";
import BaseResponse from "@/model/common/BaseResponse";
import ListModel from "@/model/example/ListModel";

export default class ExampleApi {
  /**
   * 查询单据列表
   */
  static getList(applyDate: string): Promise<BaseResponse<ListModel[]>> {
    return ApiClient.server()
      .post("/example/getList", { applyDate: applyDate }, {})
      .then(res => {
        return res.data;
      });
  }
  /**
   * 查询商品单据列表
   */
  static getSkuList(applyDate: string): Promise<BaseResponse<ListModel[]>> {
    return ApiClient.server()
      .post("/example/getSkuList", { applyDate: applyDate }, {})
      .then(res => {
        return res.data;
      });
  }

  /**
   * 获取账户
   * 获取账户
   *
   * @param tenant 租户id
   * @param owner 拥有者id
   * @param type 账户类型,
   */
  static get(tenant: string, owner: string, type: string): Promise<any> {
    return ApiClient.server()
      .get(`aas/v1/${tenant}/account/get`, {
        params: {
          owner: owner,
          type: type
        }
      })
      .then(res => {
        return res.data;
      });
  }
}
