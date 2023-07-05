import React, {useRef} from "react";
import { TreeSelect } from 'antd';
import {
  ModalForm,
  ProFormText,
  ProFormTreeSelect,
  ProFormInstance,
} from "@ant-design/pro-components";
import {useIntl} from "@@/exports";
import {findMenuList1} from '@/services/ant-design-pro/menuAdmin';

export type AddBlogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onFinish?: (formData: API.InyaaSysRoleVo) => Promise<boolean | void>;
  values?: Partial<API.InyaaBlog>;
  titleLabel: string;
};

const AddType: React.FC<AddBlogProps> = (props) => {
  const onChange = (newValue: string) => {
    console.log(111, newValue);
  };
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
            message: "角色名称必填",
          },
        ]}
        label="角色名称"
        name="roleName"
      />
      <ProFormText
        label="权限代码"
        name="roleKey"
      />
      <ProFormText
        label="描述"
        name="description"
      />
      <ProFormTreeSelect
        name="menuList"
        placeholder="Please select"
        allowClear
        width={330}
        secondary
        request={async () => {
          const menuResp = await findMenuList1();
          return menuResp.data ? menuResp.data : [];
        }}
        // tree-select args
        fieldProps={{
          showArrow: false,
          treeCheckable: true,
          filterTreeNode: true,
          showSearch: true,
          dropdownMatchSelectWidth: false,
          autoClearSearchValue: true,
          multiple: true,
          treeNodeFilterProp: 'name',
          showCheckedStrategy: TreeSelect.SHOW_ALL,
          fieldNames: {
            label: 'name',
            value: 'id'
          },
        }}
      />
      <ProFormText
        name="id"
        hidden
      />
    </ModalForm>
  );
}
export default AddType;
