import { list3, saveByMenuIdList, delete3 } from '@/services/ant-design-pro/roleAdmin';
import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import {
  PageContainer,
  ProTable,
} from '@ant-design/pro-components';
import { FormattedMessage, useIntl } from '@umijs/max';
import { Button, message } from 'antd';
import React, { useRef, useState } from 'react';
import AddForm from './components/AddForm';

/**
 * @en-US Add node
 * @zh-CN 添加节点
 * @param fields
 */
const handleAdd = async (fields: API.InyaaSysRole) => {
  const hide = message.loading('正在添加');
  try {
    await saveByMenuIdList({ ...fields });
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
const handleRemove = async (selectedRows: API.InyaaSysRole) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;
  try {
    await delete3({ ...selectedRows });
    hide();
    message.success('Deleted successfully and will refresh soon');
    return true;
  } catch (error) {
    hide();
    message.error('Delete failed, please try again');
    return false;
  }
};

const TypeList: React.FC = () => {
  /**
   * @en-US Pop-up window of new window
   * @zh-CN 新建窗口的弹窗
   *  */
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const [saveTitle, setTitle] = useState<string>('pages.searchTable.createForm.newBlog');
  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<API.InyaaSysRoleVo>();

  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */
  const intl = useIntl();

  const columns: ProColumns<API.InyaaSysRoleVo>[] = [
    {
      title: "角色名称",
      dataIndex: 'roleName',
    },
    {
      title: "权限代码",
      dataIndex: 'roleKey',
      valueType: 'textarea',
    },
    {
      sorter: true,
      title: "描述",
      dataIndex: 'description',
      valueType: 'dateTime',
    },
    {
      title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="Operating" />,
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="update"
          onClick={() => {
            const idList = [];
            if (record.menuList) {
              record.menuList.forEach(item => {
                idList.push(item.id);
              });
              record.menuList = idList;
            }
            console.log(1145, record)
            setCurrentRow(record);
            handleModalVisible(true);
          }}
        >
          <FormattedMessage id="pages.searchTable.type.updateButton" defaultMessage="Configuration" />
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
      <ProTable<API.InyaaSysRoleVo>
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
          const resp = await list3();
          return {
            data: resp.data,
            // success 请返回 true，
            // 不然 table 会停止解析数据，即使有数据
            success: resp.code === 1,
          };
        }}
        columns={columns}
      />
      <AddForm
        titleLabel={saveTitle}
        open={createModalVisible}
        onOpenChange={handleModalVisible}
        values={currentRow}
        onFinish={async (value) => {
          value.menuIdList = value.menuList;
          delete value.menuList;
          console.log(1111, value);
          const success = await handleAdd(value as API.InyaaSysRole);
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

export default TypeList;
