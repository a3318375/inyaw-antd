// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /tag/delete */
export async function delete2(body: API.InyaaBlogTag, options?: { [key: string]: any }) {
  return request<API.BaseResultString>('/tag/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /tag/list */
export async function list2(options?: { [key: string]: any }) {
  return request<API.BaseResultListInyaaBlogTag>('/tag/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /tag/save */
export async function save2(body: API.InyaaBlogTag, options?: { [key: string]: any }) {
  return request<API.BaseResultString>('/tag/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
