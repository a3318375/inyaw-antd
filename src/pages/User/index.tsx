import { list, save, deleteUser } from '@/services/ant-design-pro/userAdmin';
import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import {
  PageContainer,
  ProTable,
} from '@ant-design/pro-components';
import { FormattedMessage, useIntl } from '@umijs/max';
import { Button, message } from 'antd';
import React, { useRef, useState } from 'react';
import AddBlog from './components/AddForm';

/**
 * @en-US Add node
 * @zh-CN 添加节点
 * @param fields
 */
const handleAdd = async (fields: API.InyaaSysUser) => {
  const hide = message.loading('正在添加');
  try {
    await save({ ...fields });
    hide();
    message.success('Added successfully');
    return true;
  } catch (error) {
    hide();
    message.error('Adding failed, please try again!');
    return false;
  }
};

/**
 *  Delete node
 * @zh-CN 删除节点
 *
 * @param selectedRows
 */
const handleRemove = async (selectedRows: API.InyaaSysUser) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;
  try {
    await deleteUser({ ...selectedRows });
    hide();
    message.success('Deleted successfully and will refresh soon');
    return true;
  } catch (error) {
    hide();
    message.error('Delete failed, please try again');
    return false;
  }
};

const UserList: React.FC = () => {
  /**
   * @en-US Pop-up window of new window
   * @zh-CN 新建窗口的弹窗
   *  */
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const [saveTitle, setTitle] = useState<string>('pages.searchTable.createForm.newBlog');
  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<API.InyaaBlog>();

  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */
  const intl = useIntl();

  const columns: ProColumns<API.InyaaSysUser>[] = [
    {
      title: "用户名",
      dataIndex: ['inyawSysUserDetail','name'],
    },
    {
      title: "账号",
      dataIndex: 'username',
      valueType: 'textarea',
    },
    {
      title: "角色",
      dataIndex: 'roleList',
      valueType: 'textarea',
    },
    {
      title: "邮箱",
      dataIndex: ['inyawSysUserDetail','email'],
      valueType: 'textarea',
    },
    {
      title: "最后登录ip",
      dataIndex: ['inyawSysUserDetail','loginIp'],
      valueType: 'textarea',
    },
    {
      title: "最后登录时间",
      dataIndex: ['inyawSysUserDetail','loginDate'],
      valueType: 'textarea',
    },
    {
      title: "账号是否未锁定",
      dataIndex: 'accountNonLocked',
      valueType: 'textarea',
    },
    {
      title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="Operating" />,
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="update"
          onClick={() => {
            setCurrentRow(record);
            handleModalVisible(true);
          }}
        >
          <FormattedMessage id="pages.searchTable.tag.updateButton" defaultMessage="Configuration" />
        </a>,
        <a key="delete"
           onClick={() => {
             handleRemove(record);
           }}
        >
          <FormattedMessage
            id="pages.searchTable.tag.deleteButton"
            defaultMessage="Subscribe to alerts"
          />
        </a>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.InyaaSysUser>
        headerTitle={intl.formatMessage({
          id: 'pages.searchTable.title',
          defaultMessage: 'Enquiry form',
        })}
        actionRef={actionRef}
        rowKey="key"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              setTitle('pages.searchTable.createForm.newBlog');
              handleModalVisible(true);
            }}
          >
            <PlusOutlined /> <FormattedMessage id="pages.searchTable.new" defaultMessage="New" />
          </Button>,
        ]}
        // request={rule}
        request={async () => {
          // 这里需要返回一个 Promise,在返回之前你可以进行数据转化
          // 如果需要转化参数可以在这里进行修改
          const resp = await list();
          return {
            data: resp.data,
            // success 请返回 true，
            // 不然 table 会停止解析数据，即使有数据
            success: resp.code === 1,
          };
        }}
        columns={columns}
      />
      <AddBlog
        titleLabel={saveTitle}
        open={createModalVisible}
        onOpenChange={handleModalVisible}
        values={currentRow}
        onFinish={async (value) => {
          console.log(1111, value);
          const success = await handleAdd(value as API.InyaaBlog);
          if (success) {
            handleModalVisible(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
      />
    </PageContainer>
  );
};

export default UserList;
