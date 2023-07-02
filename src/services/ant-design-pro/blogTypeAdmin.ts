// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /type/delete */
export async function delete1(body: API.InyaaBlogType, options?: { [key: string]: any }) {
  return request<API.BaseResultString>('/type/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /type/list */
export async function list1(options?: { [key: string]: any }) {
  return request<API.BaseResultListInyaaBlogType>('/type/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /type/save */
export async function save1(body: API.InyaaBlogType, options?: { [key: string]: any }) {
  return request<API.BaseResultString>('/type/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
