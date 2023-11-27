import { useEffect, useState } from "react";
import { UsergroupAddOutlined } from "@ant-design/icons";
import { Card, Space, Statistic, Typography } from "antd";
import apiData from "../../Data/api.json";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const Dashboard = () => {
    const [totalUsers, setTotalUsers] = useState(null);
    const [totalLogins, setTotalLogins] = useState(null);
    const [stateCounts, setStateCounts] = useState(null);
  
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
  
        // Extract unique states and count occurrences
        const counts = data.reduce((acc, user) => {
          const state = user.address.state;
          acc[state] = (acc[state] || 0) + 1;
          return acc;
        }, {});
        setStateCounts(counts);
      } else {
        console.error("Data is not an array:", data);
      }
    }, []); // Empty dependency array to run the effect only once on component mount
  
    // Define pieChartData and pieChartComponent inside the component
    let pieChartData = null;
    let pieChartComponent = null;

    
    const chartOptions = {
      maintainAspectRatio: false,
      responsive: true,
      aspectRatio: 1,
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
        },
      title: {
        display: true,
        text: 'Sort User by State', 
        fontSize: 50,
        },
    },
  };

      if (stateCounts) {
        pieChartData = {
          labels: Object.keys(stateCounts),
          datasets: [
            {
              data: Object.values(stateCounts),
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        };
    
        pieChartComponent = (
          <Card>
            <Pie data={pieChartData} options={chartOptions} />
          </Card>
        );
      }
    return (
    <div>
      <Typography.Title level={2}>Dashboard</Typography.Title>
      <Space direction="horizontal">
       <DashboardCard
          icon={
            <UsergroupAddOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(0, 0, 255, 0.5)",
                borderRadius: "50%",
                fontSize: "50px",
                padding: "20px",
              }}
            />
          }
          title="Total Logins"
          value={totalLogins}
        />
        <DashboardCard
          icon={
            <UsergroupAddOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.5)",
                borderRadius: "50%",
                fontSize: "50px",
                padding: "20px",
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
                padding: "20px",
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
                padding: "20px",
              }}
            />
          }
          title="Currently Logged In"
          value={8}
        />
      </Space>
      {pieChartComponent}
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