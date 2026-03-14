import { Table, Form, Input, InputNumber, Button, message } from "antd";
import { useState } from "react";

interface Student {
  key: number;
  id: number;
  name: string;
  age: number;
  major: string;
}

const Students = () => {
  const [form] = Form.useForm();
  const [students, setStudents] = useState<Student[]>([
    { key: 1, id: 1, name: "Nam", age: 20, major: "IT" },
    { key: 2, id: 2, name: "Linh", age: 21, major: "Business" },
    { key: 3, id: 3, name: "Hà", age: 19, major: "Design" },
  ]);

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Major", dataIndex: "major", key: "major" },
  ];

  const onFinish = (values: Omit<Student, "key" | "id">) => {
    const nextId = students.length ? Math.max(...students.map((s) => s.id)) + 1 : 1;

    const newStudent: Student = {
      key: Date.now(),
      id: nextId,
      ...values,
    };

    setStudents([newStudent, ...students]);
    message.success("Thêm sinh viên thành công");
    form.resetFields();
  };

  return (
    <div style={{ maxWidth: 600 }}>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{ marginBottom: 20 }}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Vui lòng nhập tên" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Age"
          name="age"
          rules={[{ required: true, message: "Vui lòng nhập tuổi" }]}
        >
          <InputNumber style={{ width: "100%" }} min={1} />
        </Form.Item>

        <Form.Item
          label="Major"
          name="major"
          rules={[{ required: true, message: "Vui lòng nhập chuyên ngành" }]}
        >
          <Input />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Thêm sinh viên
        </Button>
      </Form>

      <Table columns={columns} dataSource={students} pagination={false} />
    </div>
  );
};

export default Students;
