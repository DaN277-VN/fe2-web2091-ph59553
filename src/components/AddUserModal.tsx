import { Button, Modal, Form, Input } from "antd";
import { useState } from "react";
import { User } from "../pages/Users";

interface Props {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const AddUserModal = ({ users, setUsers }: Props) => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const addUser = (values: any) => {
    const newUser: User = {
      key: Date.now(),
      ...values,
    };

    setUsers([...users, newUser]);

    setOpen(false);
    form.resetFields();
  };

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)} style={{marginBottom:20}}>
        Add User
      </Button>

      <Modal open={open} onCancel={() => setOpen(false)} footer={null} title="Add User">
        <Form form={form} layout="vertical" onFinish={addUser}>
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="role" label="Role" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default AddUserModal;