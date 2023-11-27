import { Typography, Space } from "antd";
import { HeartFilled, GithubFilled, LinkedinFilled, PhoneFilled } from "@ant-design/icons";

const { Link } = Typography;

function AppFooter() {
  const iconSize = 24; // Adjust the size as needed

  return (
    <div className="AppFooter">
      <Space size={16}>
        <Link href="https://www.linkedin.com/in/jiajiejackie/" target="_blank" style={{ fontSize: iconSize }}>
          <LinkedinFilled />
        </Link>
        <Link href="tel:0474957099" style={{ fontSize: iconSize }}>
          <PhoneFilled />
        </Link>
        <Link href="https://github.com/fattyhope" target="_blank" style={{ fontSize: iconSize }}>
          <GithubFilled />
        </Link>
      </Space>
    </div>
  );
}

export default AppFooter;
