import { Table, Button } from "antd";
import { useState } from "react";
import AddUserModal from "../components/AddUserModal";

export interface User {
  key: number;
  name: string;
  email: string;
  role: string;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([
    {
      key: 1,
      name: "Duc",
      email: "duc@gmail.com",
      role: "Admin",
    },
  ]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
  ];

  return (
    <>
      <AddUserModal users={users} setUsers={setUsers} />

      <Table columns={columns} dataSource={users} />
    </>
  );
};

export default Users;