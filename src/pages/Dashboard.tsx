import { Layout, Menu } from "antd";
import { useState } from "react";
import Users from "./Users";
import Register from "./Register";
import Students from "./Students.tsx";
import Products from "./Products.tsx";

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const [page, setPage] = useState("users");

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <Menu
          theme="dark"
          defaultSelectedKeys={["students"]}
          onClick={(e) => setPage(e.key)}
          items={[
            { key: "students", label: "Students" },
            { key: "products", label: "Products" },
            { key: "users", label: "Users" },
            { key: "register", label: "Register" },
          ]}
        />
      </Sider>

      <Layout>
        <Header style={{ background: "#fff" }}>
          <h2>Admin Dashboard</h2>
        </Header>

        <Content style={{ padding: 20 }}>
          {page === "students" && <Students />}
          {page === "products" && <Products />}
          {page === "users" && <Users />}
          {page === "register" && <Register />}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;