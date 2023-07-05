import React, {useRef, useState} from "react";
import {
  ModalForm,
  ProFormText,
  ProFormInstance, ProForm, ProFormSwitch, ProFormSelect,
} from "@ant-design/pro-components";
import {FormattedMessage, useIntl} from "@@/exports";
import {MdEditor} from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import {list1} from "@/services/ant-design-pro/blogTypeAdmin";
import {list2} from "@/services/ant-design-pro/blogTagAdmin";
import {Form} from "antd";
import {info1} from "@/services/ant-design-pro/blogAdmin";


export type AddBlogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onFinish?: (formData: API.InyaaBlogAdd) => Promise<boolean | void>;
  values?: Partial<API.InyaaBlog>;
  titleLabel: string;
};

const AddTag: React.FC<AddBlogProps> = (props) => {
  const [text, setText] = useState('');
  const formRef = useRef<ProFormInstance>();
  const intl = useIntl();
  return (
    <ModalForm
      title={intl.formatMessage({
        id: props.titleLabel,
        defaultMessage: 'New blog',
      })}
      request={async (params) => {
        console.log(114514, params)
        console.log(114515, props)
        setText('');
        const info: API.InyaaBlogAdd = {
          status: true,
          isHot: false,
          isComment: true,
        }
        if (props && props.values && props.values.id !== 0) {
          const infoResult = await info1(params);
          if (infoResult && infoResult.data && infoResult.data.article && infoResult.data.article.context) {
            const infoResp: API.InyaaBlogAdd = {
              id: infoResult.data.id,
              title: infoResult.data.title,
              cover: infoResult.data.cover,
              comments: infoResult.data.comments,
              status: infoResult.data.status,
              summary: infoResult.data.summary,
              views: infoResult.data.views,
              isComment: infoResult.data.isComment,
              isHot: infoResult.data.isHot,
              article: infoResult.data.article,
            };

            if (infoResult.data.type) {
              const type: API.SelectType = {};
              type.value = infoResult.data.type.id;
              type.label = infoResult.data.type.name;
              type.obj = infoResult.data.type;
              infoResp.type = type;
            }
            if (infoResult.data.tagList) {
              const tagList = []
              for (const tag of infoResult.data.tagList) {
                const obj: API.SelectType = {};
                obj.label = tag.name;
                obj.value = tag.id;
                obj.obj = tag;
                tagList.push(obj);
              }
              infoResp.tagList = tagList;
            }
            setText(infoResult.data.article.context);
            formRef?.current?.resetFields?.()
            return infoResp;
          }
        }
        formRef?.current?.resetFields?.()
        return info;
      }}
      formRef={formRef}
      width="800px"
      params={{id: props.values?.id}}
      open={props.open}
      onOpenChange={props.onOpenChange}
      onFinish={props.onFinish}
    >
      <ProFormText
        rules={[
          {
            required: true,
            message: (
              <FormattedMessage
                id="pages.searchTable.createForm.titleRule"
                defaultMessage="标题必填"
              />
            ),
          },
        ]}
        label={intl.formatMessage({
          id: 'pages.searchTable.blog.title',
          defaultMessage: '标题',
        })}
        name="title"
      />
      <ProFormText
        rules={[
          {
            required: true,
            message: (
              <FormattedMessage
                id="pages.searchTable.createForm.summaryRule"
                defaultMessage="描述必填"
              />
            ),
          },
        ]}
        label={intl.formatMessage({
          id: 'pages.searchTable.blog.summary',
          defaultMessage: '描述',
        })}
        name="summary"
      />
      <ProForm.Group>
        <ProFormSelect
          name="type"
          width="md"
          label={intl.formatMessage({
            id: 'pages.searchTable.blog.type',
            defaultMessage: '分类',
          })}
          fieldProps={{
            labelInValue: true,
          }}
          request={async () => {
            const types = await list1();
            const typeResp = []
            if (types && types.data) {
              for (const tag of types.data) {
                const obj: API.SelectType = {};
                obj.label = tag.name;
                obj.value = tag.id;
                obj.obj = tag;
                typeResp.push(obj);
              }
            }
            return typeResp;
          }}
        />
        <ProFormSelect.SearchSelect
          name="tagList"
          width="md"
          label={intl.formatMessage({
            id: 'pages.searchTable.blog.tag',
            defaultMessage: '标签',
          })}
          request={async () => {
            const tags = await list2();
            const tagResp = []
            if (tags && tags.data) {
              for (const tag of tags.data) {
                const obj: API.SelectType = {};
                obj.label = tag.name;
                obj.value = tag.id;
                obj.obj = tag;
                tagResp.push(obj);
              }
            }
            return tagResp;
          }}

        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormSwitch name="status" label="是否发布"/>
        <ProFormSwitch name="isHot" label="是否热门"/>
        <ProFormSwitch name="isComment" label="是否开启评论"/>
      </ProForm.Group>
      <ProForm.Group>
        <Form.Item name={["article", "context"]} label="正文" valuePropName={text}>
          <MdEditor modelValue={text} onChange={setText}/>
        </Form.Item>
      </ProForm.Group>
      <ProFormText
        name="id"
        hidden
      />
      <ProFormText
        name={["article", "id"]}
        hidden
      />
    </ModalForm>
  );
}
export default AddTag;
