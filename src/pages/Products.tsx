import { Table, Form, Input, InputNumber, Button, message } from "antd";
import { useState } from "react";

interface Product {
  key: number;
  id: number;
  name: string;
  price: number;
  quantity: number;
  description?: string;
}

const Products = () => {
  const [form] = Form.useForm();
  const [products, setProducts] = useState<Product[]>([
    { key: 1, id: 1, name: "Laptop", price: 1200, quantity: 10, description: "Máy tính xách tay" },
    { key: 2, id: 2, name: "Chair", price: 80, quantity: 15, description: "Ghế văn phòng" },
    { key: 3, id: 3, name: "Coffee", price: 15, quantity: 40, description: "Cà phê" },
  ]);

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Price", dataIndex: "price", key: "price" },
    { title: "Quantity", dataIndex: "quantity", key: "quantity" },
    { title: "Description", dataIndex: "description", key: "description" },
  ];

  const onFinish = (values: Omit<Product, "key" | "id">) => {
    console.log("Submitted product:", values);

    const nextId = products.length ? Math.max(...products.map((p) => p.id)) + 1 : 1;
    const newProduct: Product = {
      key: Date.now(),
      id: nextId,
      ...values,
    };

    setProducts([newProduct, ...products]);
    message.success("Thêm sản phẩm thành công");
    form.resetFields();
  };

  return (
    <div style={{ maxWidth: 700 }}>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{ marginBottom: 20 }}
      >
        <Form.Item
          label="Tên sản phẩm"
          name="name"
          rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Giá"
          name="price"
          rules={[{ required: true, message: "Vui lòng nhập giá" }]}
        >
          <InputNumber style={{ width: "100%" }} min={0} />
        </Form.Item>

        <Form.Item
          label="Số lượng"
          name="quantity"
          rules={[{ required: true, message: "Vui lòng nhập số lượng" }]}
        >
          <InputNumber style={{ width: "100%" }} min={0} />
        </Form.Item>

        <Form.Item label="Mô tả" name="description">
          <Input.TextArea rows={3} />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Thêm sản phẩm
        </Button>
      </Form>

      <Table columns={columns} dataSource={products} pagination={{ pageSize: 5 }} />
    </div>
  );
};

export default Products;
