import { Table } from "antd";

interface Product {
  key: number;
  id: number;
  name: string;
  price: number;
  category: string;
}

const Products = () => {
  const data: Product[] = [
    { key: 1, id: 1, name: "Laptop", price: 1200, category: "Electronics" },
    { key: 2, id: 2, name: "Chair", price: 80, category: "Furniture" },
    { key: 3, id: 3, name: "Coffee", price: 15, category: "Beverages" },
    { key: 4, id: 4, name: "T-shirt", price: 25, category: "Clothing" },
    { key: 5, id: 5, name: "Book", price: 10, category: "Education" },
  ];

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Product Name", dataIndex: "name", key: "name" },
    { title: "Price", dataIndex: "price", key: "price" },
    { title: "Category", dataIndex: "category", key: "category" },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 3 }}
    />
  );
};

export default Products;
