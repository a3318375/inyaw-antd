import React, {useRef} from "react";
import {
  ModalForm,
  ProFormText,
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
                id="pages.searchTable.createForm.titleRule"
                defaultMessage="标题必填"
              />
            ),
          },
        ]}
        label={intl.formatMessage({
          id: 'pages.searchTable.blog.title',
          defaultMessage: '标签名称',
        })}
        name="name"
      />
      <ProFormText
        label={intl.formatMessage({
          id: 'pages.searchTable.blog.summary',
          defaultMessage: '标签描述',
        })}
        name="remark"
      />
      <ProFormText
        name="id"
        hidden
      />
    </ModalForm>
  );
}
export default AddType;
