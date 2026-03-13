import { Table } from "antd";

interface Student {
  key: number;
  id: number;
  name: string;
  age: number;
  major: string;
}

const Students = () => {
  const data: Student[] = [
    { key: 1, id: 1, name: "Nam", age: 20, major: "IT" },
    { key: 2, id: 2, name: "Linh", age: 21, major: "Business" },
    { key: 3, id: 3, name: "Hà", age: 19, major: "Design" },
  ];

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Major", dataIndex: "major", key: "major" },
  ];

  return <Table columns={columns} dataSource={data} pagination={false} />;
};

export default Students;
