// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /toLogin */
export async function toLogin(options?: { [key: string]: any }) {
  return request<any>('/toLogin', {
    method: 'GET',
    ...(options || {}),
  });
}
