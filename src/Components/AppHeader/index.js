import { BellFilled, MailOutlined } from '@ant-design/icons';
import { Image, Space, Typography } from 'antd';
import icon from '../../Data/icons/lewiLogo.png';

function AppHeader() {
  return (
    <div className="AppHeader">
        <Image 
            width={150}
            src={icon}
        />
        <Typography.Title>Admin's Dashboard</Typography.Title>
        <Space>
            <MailOutlined style={{ fontSize: 34}}/>
            <BellFilled style={{ fontSize: 34}}/>
        </Space>
    </div>
  );
}

export default AppHeader;
