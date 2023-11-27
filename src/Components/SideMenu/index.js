import {
    AppstoreOutlined,
    ShopOutlined,
    ShoppingCartOutlined,
    UserOutlined,
    TableOutlined,
  } from "@ant-design/icons";
import { Menu, Table } from 'antd';
import { useNavigate } from 'react-router-dom';

function SideMenu() {
    const navigate = useNavigate()
    return (
        <div className="SideMenu">
            <Menu 
            onClick={(item)=>{
                // Item Key
                navigate(item.key);
            }}
                items={[
                    {
                        label: "Dashboard",
                        icon: <AppstoreOutlined />,
                        key: '/',
                    },
                    {
                        label: "Users",
                        icon: <UserOutlined />,
                        key: '/users',
                    },
                    {
                        label: "Table",
                        icon: <TableOutlined />,
                        key: '/table',
                    },
                ]}
            ></Menu>
        </div>
    )
}


export default SideMenu