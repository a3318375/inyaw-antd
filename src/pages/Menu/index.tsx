import {PlusOutlined} from '@ant-design/icons';
import type {ActionType, ProColumns} from '@ant-design/pro-components';
import {findMenuList1, save5, delete5} from '@/services/ant-design-pro/menuAdmin';
import {
  PageContainer,
  ProTable,
} from '@ant-design/pro-components';
import {FormattedMessage, useIntl} from '@umijs/max';
import {Button, message} from 'antd';
import React, {useRef, useState} from 'react';
import AddForm from './components/AddForm';

/**
 * @en-US Add node
 * @zh-CN 添加节点
 * @param fields
 */
const handleAdd = async (fields: API.InyaaSysMenu) => {
  const hide = message.loading('正在添加');
  try {
    await save5({...fields});
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
const handleRemove = async (selectedRows: API.InyaaSysMenu) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;
  try {
    await delete5({...selectedRows});
    hide();
    message.success('Deleted successfully and will refresh soon');
    return true;
  } catch (error) {
    hide();
    message.error('Delete failed, please try again');
    return false;
  }
};

const MenuList: React.FC = () => {
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

  const columns: ProColumns<API.InyaaBlogType>[] = [
    {
      title: '菜单名称',
      width: 120,
      dataIndex: 'name',
    },
    {
      title: '菜单路径',
      width: 120,
      dataIndex: 'path',
    },
    {
      title: '菜单图标',
      width: 120,
      dataIndex: 'icon',
    },
    {
      title: '组件路径',
      width: 120,
      dataIndex: 'component',
    },
    {
      title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="Operating"/>,
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
          <FormattedMessage id="pages.searchTable.type.updateButton" defaultMessage="Configuration"/>
        </a>,
        <a key="delete"
           onClick={() => {
             handleRemove(record);
           }}
        >
          <FormattedMessage
            id="pages.searchTable.type.deleteButton"
            defaultMessage="Subscribe to alerts"
          />
        </a>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.InyaaSysMenuVo>
        columns={columns}
        request={async (params, sorter, filter) => {
          // 表单搜索项会从 params 传入，传递给后端接口。
          console.log(params, sorter, filter);
          const data = await findMenuList1();
          return Promise.resolve({
            data: data.data,
            success: true,
          });
        }}
        rowKey="id"
        pagination={false}
        search={false}
        dateFormatter="string"
        headerTitle="嵌套表格"
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              setTitle('pages.searchTable.createForm.newBlog');
              handleModalVisible(true);
            }}
          >
            <PlusOutlined/> <FormattedMessage id="pages.searchTable.new" defaultMessage="New"/>
          </Button>,
        ]}
      />
      <AddForm
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

export default MenuList;
