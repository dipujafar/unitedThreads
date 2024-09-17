import { Divider } from "antd";
import { ConfigProvider, Table, TableProps } from "antd";
import Image from "next/image";
import prodctImage from "@/assets/image/hoodie.png";

type TDataType = {
  key: number;
  product: string;
  orderID: string;
  quantity: number;
  total: string;
};
const data: TDataType[] = Array.from({ length: 4 }).map((_, inx) => ({
  key: inx + 1,
  product: "Hoodie",
  orderID: "#25421",
  quantity: 2,
  total: "$800.40",
}));

const columns: TableProps<TDataType>["columns"] = [
  {
    title: "Product Name",
    dataIndex: "product",
    render: (value) => (
      <div className="flex gap-3 items-center">
        <Image src={prodctImage} alt="productImage"></Image>
        <h4>{value}</h4>
      </div>
    ),
  },
  {
    title: "Order ID",
    dataIndex: "orderID",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
  },
  {
    title: "Total",
    dataIndex: "total",
  },
];

const QuoteOrderProductTable = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            colorBgContainer: "rgb(235,237,238)",
            headerBg: "rgb(235,237,238)",
            headerColor: "rgb(35,35,35)",
            headerSplitColor: "rgb(235,237,238)",
            borderColor: "rgb(221,223,224)",
            cellFontSize: 16,
          },
        },
      }}
    >
      <div className="py-6 px-4 bg-[#EBEDEE] rounded">
        <h1 className="text-xl font-semibold">Products</h1>
        <Divider></Divider>
        <Table columns={columns} dataSource={data} pagination={false}></Table>
        <div className="mt-4 flex flex-col  gap-2  lg:mr-64">
          <h1 className="text-end">
            Paid <span className="ml-16">$3,200</span>
          </h1>
          <h1 className="text-end">
            Due Amount <span className="ml-16">$590</span>
          </h1>
          <h1 className="text-2xl font-bold text-end">
            Total <span className="text-2xl font-medium ml-8">$3841</span>
          </h1>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default QuoteOrderProductTable;
