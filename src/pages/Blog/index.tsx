import { delete8, list9, save8 } from '@/services/ant-design-pro/blogAdmin';
import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { FormattedMessage, useIntl } from '@umijs/max';
import { Button, message } from 'antd';
import React, { useRef, useState } from 'react';
import AddForm from './components/AddForm';

/**
 * @en-US Add node
 * @zh-CN 添加节点
 * @param fields
 */
const handleAdd = async (fields: API.InyaaBlog) => {
  const hide = message.loading('正在添加');
  try {
    await save8({ ...fields });
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
const handleRemove = async (selectedRows: API.InyaaBlog) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;
  try {
    await delete8({ ...selectedRows });
    hide();
    message.success('Deleted successfully and will refresh soon');
    return true;
  } catch (error) {
    hide();
    message.error('Delete failed, please try again');
    return false;
  }
};

const BlogList: React.FC = () => {
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

  const columns: ProColumns<API.InyaaBlog>[] = [
    {
      title: '标题',
      width: 400,
      dataIndex: 'title',
    },
    {
      title: '状态',
      width: 140,
      dataIndex: 'status',
      valueEnum: {
        true: { text: '发布', status: 'Processing' },
        false: { text: '草稿', status: 'Success' },
      },
    },
    {
      title: '访问量',
      dataIndex: 'views',
      ellipsis: true,
    },
    {
      title: '评论数',
      dataIndex: 'comments',
      ellipsis: true,
    },
    {
      title: '创建时间',
      width: 140,
      key: 'since',
      dataIndex: 'createTime',
      valueType: 'date',
    },
    {
      title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="Operating" />,
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="update"
          onClick={() => {
            console.log(224, record);
            setCurrentRow(record);
            handleModalVisible(true);
          }}
        >
          <FormattedMessage
            id="pages.searchTable.tag.updateButton"
            defaultMessage="Configuration"
          />
        </a>,
        <a
          key="delete"
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
      <ProTable<API.InyaaBlogTag, API.PageInyaaBlogVo>
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
              setCurrentRow({ id: 0 });
              handleModalVisible(true);
            }}
          >
            <PlusOutlined /> <FormattedMessage id="pages.searchTable.new" defaultMessage="New" />
          </Button>,
        ]}
        // request={rule}
        request={async (
          // 第一个参数 params 查询表单和 params 参数的结合
          // 第一个参数中一定会有 pageSize 和  current ，这两个参数是 antd 的规范
          params: API.list9Params & {
            pageSize?: number;
            current?: number;
          },
        ) => {
          // 这里需要返回一个 Promise,在返回之前你可以进行数据转化
          // 如果需要转化参数可以在这里进行修改
          const resp = await list9({
            page: params.current,
            size: params.pageSize,
          });
          return {
            data: resp.data?.content,
            // success 请返回 true，
            // 不然 table 会停止解析数据，即使有数据
            success: resp.code === 1,
            // 不传会使用 data 的长度，如果是分页一定要传
            total: resp.data?.totalElements,
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
          console.log(224514, value);
          if (value.type && value.type.obj) {
            value.type = value.type.obj;
          } else {
            delete value.type;
          }

          const tagList: API.InyaaBlogTag[] = [];
          if (value.tagList) {
            for (const tagObj of value.tagList) {
              tagList.push(tagObj.obj);
            }
            value.tagList = tagList;
          } else {
            delete value.type;
          }
          console.log(114514, value);
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

export default BlogList;
