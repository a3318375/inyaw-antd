// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /blog/delete */
export async function delete8(body: API.InyaaBlog, options?: { [key: string]: any }) {
  return request<API.BaseResultString>('/blog/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /blog/info */
export async function info1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.info1Params,
  options?: { [key: string]: any },
) {
  return request<API.BaseResultInyaaBlog>('/blog/info', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /blog/initMap */
export async function initMap(options?: { [key: string]: any }) {
  return request<API.BaseResultInyaaBlogDto>('/blog/initMap', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /blog/list */
export async function list8(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list8Params,
  options?: { [key: string]: any },
) {
  return request<API.BaseResultListInyaaBlog>('/blog/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /blog/list/page */
export async function list9(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.list9Params,
  options?: { [key: string]: any },
) {
  return request<API.BaseResultPageInyaaBlogVo>('/blog/list/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /blog/save */
export async function save8(body: API.InyaaBlogDto, options?: { [key: string]: any }) {
  return request<API.BaseResultString>('/blog/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /blog/web/info */
export async function webInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.webInfoParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResultInyaaBlogWebInfoVo>('/blog/web/info', {
    method: 'GET',
    params: {
      ...params,
      blog: undefined,
      ...params['blog'],
    },
    ...(options || {}),
  });
}
