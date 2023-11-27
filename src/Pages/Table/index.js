import { Typography, Space } from "antd";
import { BasicTable } from "../../Components/UserTable";

export const Table = () => {
  return (
    <div className="customers">
      <Space direction="vertical" wrap={true}>
        <Typography.Title level={2}>User Data</Typography.Title>
        
        <div style={{ overflow: 'auto', maxHeight: '500px', width: '100%' }}>
          <BasicTable style={{ width: '100%' }} />
        </div>
      </Space>
    </div>
  );
};
