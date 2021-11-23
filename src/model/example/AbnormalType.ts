/* eslint-disable no-inner-declarations */
export enum abnormalType {
  noContent = 'noContent',
  noTask = 'noTask',
  noSearchResult = 'noSearchResult',
  systemErr = 'systemErr',
  networkErr = 'networkErr',
  rightControl = 'rightControl'
}

export namespace hintTitle {
  export function string(state: abnormalType) {
    if (state === abnormalType.noContent) {
      return '暂无内容'
    } else if (state === abnormalType.noTask) {
      return '暂无任务'
    } else if (state === abnormalType.noSearchResult) {
      return '暂无搜索结果'
    } else if (state === abnormalType.systemErr) {
      return '系统异常'
    } else if (state === abnormalType.networkErr) {
      return '网络异常'
    } else if (state === abnormalType.rightControl) {
      return '权限控制'
    }
    return ''
  }
}

export namespace hintDescribe {
  export function string(state: abnormalType) {
    if (state === abnormalType.noContent) {
      return '暂无内容暂无内容暂无内容'
    } else if (state === abnormalType.noTask) {
      return '暂无任务暂无任务暂无任务'
    } else if (state === abnormalType.noSearchResult) {
      return '暂无搜索结果暂无搜索结果暂无搜索结果'
    } else if (state === abnormalType.systemErr) {
      return '系统异常系统异常系统异常'
    } else if (state === abnormalType.networkErr) {
      return '网络异常网络异常网络异常'
    } else if (state === abnormalType.rightControl) {
      return '权限控制权限控制权限控制'
    }
    return ''
  }
}
