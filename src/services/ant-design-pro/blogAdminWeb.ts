// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /blog/web/archive/list */
export async function archive(options?: { [key: string]: any }) {
  return request<API.BaseResultListInyaaBlog>('/blog/web/archive/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /blog/web/comment/list */
export async function findBlogCommentList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findBlogCommentListParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResultPageInyaaBlogComment>('/blog/web/comment/list', {
    method: 'GET',
    params: {
      ...params,
      req: undefined,
      ...params['req'],
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /blog/web/comment/save */
export async function saveBlogComment(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.saveBlogCommentParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResultString>('/blog/web/comment/save', {
    method: 'POST',
    params: {
      ...params,
      req: undefined,
      ...params['req'],
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /blog/web/list */
export async function findBlogList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findBlogListParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResultListInyaaBlogWebVo>('/blog/web/list', {
    method: 'GET',
    params: {
      ...params,
      req: undefined,
      ...params['req'],
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /blog/web/page */
export async function findBlogPage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findBlogPageParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResultPageInyaaBlogWebVo>('/blog/web/page', {
    method: 'GET',
    params: {
      ...params,
      req: undefined,
      ...params['req'],
    },
    ...(options || {}),
  });
}
