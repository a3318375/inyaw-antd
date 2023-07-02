// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /authorize */
export async function clientCredentialsGrant1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.clientCredentialsGrant1Params,
  options?: { [key: string]: any },
) {
  return request<API.BaseResultString>('/authorize', {
    method: 'GET',
    params: {
      ...params,
      authorizedClient: undefined,
      ...params['authorizedClient'],
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /authorized */
export async function authorizationFailed(options?: { [key: string]: any }) {
  return request<API.BaseResultOAuth2Error>('/authorized', {
    method: 'GET',
    ...(options || {}),
  });
}
