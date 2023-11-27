import { Typography, Table, Space } from "antd";
import { useMemo, useState } from "react";
import rData from '../../Data/api.json';
import { DateTime } from 'luxon';
import image from '../../Data/icons/selfie.jpg';

export const BasicTable = () => {

    const [isLoading, setLoading] = useState(false);
    const [expandedRowKeys, setExpandedRowKeys] = useState([]);

    const data = useMemo(() =>
    rData.map((item, index) => ({
      ...item,
      key: index,
      signupTime: DateTime.fromISO(item.signupTime),
    })),
    );
  
    const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          sorter: (a, b) => a.id - b.id,
        },
        {
          title: 'User',
          dataIndex: 'username',
        },
        {
          title: 'Signup Date',
          dataIndex: 'signupTime',
          sorter: (a, b) => a.signupTime.toMillis() - b.signupTime.toMillis(),
          render: (signupTime) => signupTime.toLocaleString(), 
        },
        {
          title: 'Address',
          dataIndex: 'address',
          render: (address) => (
            `${address.houseNumber} ${address.street}, ${address.state}, ${address.postcode}`
          ),
        },
        {
          title: 'Total Logins',
          dataIndex: 'totalLogins',
          sorter: (a, b) => a.totalLogins - b.totalLogins,
        },
      ];
    
      const expandedRowRender = record => (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '200px' }}>
          <div style={{ width: '20%', background: '#FFFFFF', padding: 'auto', textAlign: 'left' }}>
            <img src={image} alt="User" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            <h2>User Description</h2>
            <p><b>Name:</b> {record.username}</p>
            <p><b>Sign Up Date:</b> {record.signupTime.toLocaleString(DateTime.DATE_SHORT)}</p>
            <p><b>Sign Up Time:</b> {record.signupTime.toLocaleString(DateTime.TIME_SIMPLE)}</p>
            <p><b>Last Logged In:</b> {record.signupTime.toLocaleString(DateTime.TIME_SIMPLE)}</p>
          </div>
        </div>
      );

      const onExpand = (expanded, record) => {
        setExpandedRowKeys(expanded ? [record.key] : []);
      };
    
      const tableColumns = columns.map((item) => ({
        ...item,
      }));

  // Return the table properties
  return (
        <Table
            columns={tableColumns}
            loading={isLoading}
            dataSource={data}
            bordered={true} 
            size="large"
            rowSelection
            pagination={{
                pageSize: 8,
                position: ['bottomRight'],
                showTotal: (total) => {
                return <b>Total {total} Entries</b>;
                }
            }}
            expandable={{
                expandedRowRender,
                expandedRowKeys,
                onExpand,
            }}
        />
  );
}

