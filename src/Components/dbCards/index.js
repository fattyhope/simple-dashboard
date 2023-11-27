import { useEffect, useState } from "react";
import { UsergroupAddOutlined } from "@ant-design/icons";
import { Card, Space, Statistic, Typography } from "antd";
import apiData from "../../Data/api.json";

function Dashboard() {
  const [totalUsers, setTotalUsers] = useState(null);
  const [totalLogins, setTotalLogins] = useState(null);

  useEffect(() => {
    const data = apiData;

    // Check if data is an array
    if (Array.isArray(data)) {
        // Extract the total number of users
        const totalUsers = data.length;
        setTotalUsers(totalUsers);

        // Extract the total number of logins from all users
        const totalLogins = data.reduce((total, user) => total + user.totalLogins, 0);
        setTotalLogins(totalLogins);
    } else {
        console.error("Data is not an array:", data);
        }
    }, []); // Empty dependency array to run the effect only once on component mount

    return (
    <div>
      <Typography.Title level={2}>Dashboard</Typography.Title>
      <Space direction="horizontal">
        <DashboardCard
          icon={
            <UsergroupAddOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.5)",
                borderRadius: "50%",
                fontSize: "50px",
                padding: "10px",
              }}
            />
          }
          title="Total Users"
          value={totalUsers}
        />
        <DashboardCard
          icon={
            <UsergroupAddOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.5)",
                borderRadius: "50%",
                fontSize: "50px",
                padding: "10px",
              }}
            />
          }
          title="Logins Today"
          value={42}
        />
        <DashboardCard
          icon={
            <UsergroupAddOutlined
              style={{
                color: "red",
                backgroundColor: "rgba(255, 182, 193)",
                borderRadius: "50%",
                fontSize: "50px",
                padding: "10px",
              }}
            />
          }
          title="Currently Logged In"
          value={8}
        />
        <DashboardCard
          icon={
            <UsergroupAddOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(0, 0, 255, 0.5)",
                borderRadius: "50%",
                fontSize: "50px",
                padding: "10px",
              }}
            />
          }
          title="Total Logins"
          value={totalLogins}
        />
      </Space>
    </div>
  );
}

function DashboardCard({ title, value, icon }) {
    return (
        <Card>
            <Space direction="horizontal">
                {icon}
                <Statistic title={title} value={value} />
            </Space>
        </Card>
    );
} 


export default Dashboard;