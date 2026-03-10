import { Form, Input, Button } from "antd";

interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

const Register = () => {
  const onFinish = (values: RegisterForm) => {
    console.log(values);
  };

  return (
    <Form layout="vertical" style={{ width: 400 }} onFinish={onFinish}>
      <Form.Item label="Name" name="name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Email" name="email" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Password" name="password" rules={[{ required: true }]}>
        <Input.Password />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Register;