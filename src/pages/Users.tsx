import { Table, Button } from "antd";
import { useState } from "react";
import AddUserModal from "../components/AddUserModal";

export interface User {
  key: number;
  id: number;
  name: string;
  email: string;
  status: "active" | "inactive";
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([
    {
      key: 1,
      id: 1,
      name: "Duc",
      email: "duc@gmail.com",
      status: "active",
    },
    {
      key: 2,
      id: 2,
      name: "Mai",
      email: "mai@gmail.com",
      status: "inactive",
    },
  ]);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <span style={{ color: status === "active" ? "green" : "red" }}>
          {status}
        </span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: User) => (
        <>
          <Button
            type="link"
            onClick={() => console.log("edit", record)}
          >
            Edit
          </Button>
          <Button
            type="link"
            danger
            onClick={() => {
              setUsers(users.filter((u) => u.key !== record.key));
            }}
          >
            Delete
          </Button>
        </>
      ),
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