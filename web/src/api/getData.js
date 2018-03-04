import fetch from '@/config/fetch2'

/**
 * 获取竞猜列表
 */

//登录
export const addDepartMent = data =>fetch('/api/api-gsst/v1/campus/getCampusTypes?accessToken=aaaa',data,'POST');
