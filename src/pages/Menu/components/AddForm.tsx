import React, {useRef} from "react";
import {
  ModalForm,
  ProForm,
  ProFormText,
  ProFormSwitch,
  ProFormInstance,
} from "@ant-design/pro-components";
import {FormattedMessage, useIntl} from "@@/exports";

export type AddBlogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onFinish?: (formData: API.InyaaBlog) => Promise<boolean | void>;
  values?: Partial<API.InyaaBlog>;
  titleLabel: string;
};

const AddType: React.FC<AddBlogProps> = (props) => {
  const formRef = useRef<ProFormInstance>();
  const intl = useIntl();
  return (
    <ModalForm
      title={intl.formatMessage({
        id: props.titleLabel,
        defaultMessage: 'New blog',
      })}
      initialValues={props.values}
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
                id="pages.searchTable.menu.name"
                defaultMessage="菜单名称必填"
              />
            ),
          },
        ]}
        label={intl.formatMessage({
          id: 'pages.searchTable.menu.name',
          defaultMessage: '菜单名称',
        })}
        name="name"
      />
      <ProFormText
        rules={[
          {
            required: true,
            message: (
              <FormattedMessage
                id="pages.searchTable.menu.path"
                defaultMessage="菜单路径必填"
              />
            ),
          },
        ]}
        label={intl.formatMessage({
          id: 'pages.searchTable.menu.path',
          defaultMessage: '菜单路径',
        })}
        name="path"
      />
      <ProFormText
        label={intl.formatMessage({
          id: 'pages.searchTable.menu.icon',
          defaultMessage: '菜单图标',
        })}
        name="icon"
      />
      <ProFormText
        label={intl.formatMessage({
          id: 'pages.searchTable.menu.component',
          defaultMessage: '组件路径',
        })}
        name="component"
      />
      <ProFormText
        label={intl.formatMessage({
          id: 'pages.searchTable.menu.parentId',
          defaultMessage: '父级菜单',
        })}
        name="parentId"
      />
      <ProForm.Group>
        <ProFormSwitch
          label={intl.formatMessage({
            id: 'pages.searchTable.menu.isShow',
            defaultMessage: '是否显示',
          })}
          name="isShow"
        />
        <ProFormSwitch
          label={intl.formatMessage({
            id: 'pages.searchTable.menu.isExt',
            defaultMessage: '是否跳转外部链接',
          })}
          name="isExt"
        />
      </ProForm.Group>
      <ProFormText
        name="id"
        hidden
      />
    </ModalForm>
  );
}
export default AddType;
