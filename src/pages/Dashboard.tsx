import { Layout, Menu } from "antd";
import { useState } from "react";
import Users from "./Users";
import Register from "./Register";
import Students from "./Students";
import Products from "./Products";
import Login from "./Login";

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const [page, setPage] = useState("login");

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <Menu
          theme="dark"
          defaultSelectedKeys={["login"]}
          onClick={(e) => setPage(e.key)}
          items={[
            { key: "login", label: "Đăng nhập" },
            { key: "register", label: "Đăng ký" },
            { key: "students", label: "Sinh viên" },
            { key: "products", label: "Sản phẩm" },
            { key: "users", label: "Người dùng" },
          ]}
        />
      </Sider>

      <Layout>
        <Header style={{ background: "#fff" }}>
          <h2>Admin Dashboard</h2>
        </Header>

        <Content style={{ padding: 20 }}>
          {page === "login" && <Login />}
          {page === "register" && <Register />}
          {page === "students" && <Students />}
          {page === "products" && <Products />}
          {page === "users" && <Users />}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;