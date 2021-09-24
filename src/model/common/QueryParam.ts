import FilterParam from "@/model/common/FilterParam";
import SortParam from "@/model/common/SortParam";

export default class QueryParam {
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
