"use client";
import {
  Button,
  ColorPicker,
  Form,
  FormProps,
  InputNumber,
  Select,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import Image from "next/image";
import { CiUser } from "react-icons/ci";
import { LuCalendarDays } from "react-icons/lu";
import { TbMessage } from "react-icons/tb";
import uploadedImage from "@/assets/image/hoddieImage.png";
import Link from "next/link";

// Reset FieldType to match the form fields
type FieldType = {
  size: string;
  color: string;
  quantity: number;
  materialPreference: string;
  price: number;
};

const handleSizeChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const QuoteOrderDetailsContainer = () => {
  // Setting initial values for all input fields
  const initialValues: FieldType = {
    size: "L", 
    color: "#456gdg", 
    quantity: 10, 
    materialPreference: "Combinations of materials are looking for 10% cotton , 90% polyester", 
    price: 50, 
  };

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <div className="flex items-center gap-3">
            <p className="text-xl font-bold ">Orders ID: #6743</p>
          </div>
          <div className=" flex items-center gap-3 mt-3 mb-5">
            <LuCalendarDays className=" w-6 h-6" />
            <p className=" text-md">Feb 16,2022</p>
          </div>
          <Link href={"/message/userName"}>
          <Button size="large" icon={<TbMessage />}>
            Message
          </Button>
          </Link>
        </div>
        <div className="flex gap-3">
          <CiUser className="w-12 h-12 rounded-md bg-primaryBlack text-parimaryWhite py-2 px-2" />

          <div>
            <h2 className="text-xl font-bold mb-3">Retailer </h2>
            <p className=" mb-2">Full Name: Emon</p>
            <p className=" mb-2">Email: emon@gmail.com</p>
            <p className=" mb-2">Phone: +545412110</p>
            <p className=" mb-2">Address: Keraniganj, Dhaka</p>
          </div>
        </div>
      </div>
      {/* product information */}

      <div>
        <div>
          <Form
            layout="vertical"
            onFinish={onFinish}
            initialValues={initialValues}
          >
            <div className="space-y-5">
              <div className="flex justify-between">
                <div className="lg:w-1/3 w-full">
                  <div>
                    <h4 className="text-2xl ">Category</h4>
                    <p className="text-3xl font-semibold">Hoodie</p>
                  </div>
                  {/* input size */}
                  <Form.Item label="Size" name="size">
                    <Select
                      size="large"
                      placeholder="Please Select a size"
                      onChange={handleSizeChange}
                      options={[
                        { value: "S", label: "S" },
                        { value: "M", label: "M" },
                        { value: "L", label: "L" },
                        { value: "XL", label: "XL" },
                        { value: "XXL", label: "XXL" },
                      ]}
                    />
                  </Form.Item>

                  {/* input color */}
                  <Form.Item label="Color" name="color">
                    <ColorPicker
                      size="large"
                      style={{ width: "100%" }}
                    ></ColorPicker>
                  </Form.Item>

                  {/* input quantity */}
                  <Form.Item label="Quantity" name="quantity">
                    <InputNumber
                      size="large"
                      style={{ width: "100%" }}
                      placeholder="Please input quantity"
                    />
                  </Form.Item>

                  {/* input Materials Preference */}
                  <Form.Item
                    label="Materials Preference"
                    name="materialPreference"
                  >
                    <TextArea rows={4} placeholder="Write here....." />
                  </Form.Item>
                </div>

                <div className="lg:w-1/3 w-full">
                  {/* input Product Price */}
                  <Form.Item label="Product Price" name="price">
                    <InputNumber
                      size="large"
                      style={{ width: "100%", borderRadius: "15px" }}
                      placeholder="Please input product price"
                    />
                  </Form.Item>
                  <div className="flex flex-col gap-1 justify-center items-center">
                    <Image
                      src={uploadedImage}
                      alt="productImage"
                      className="border border-black px-4 py-8"
                    />
                    <figcaption className="text-[#00B047] text-xl font-medium">
                      Uploaded Design
                    </figcaption>
                  </div>
                </div>
              </div>

              <Button htmlType="submit" block size="large">
                Quote Accept
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default QuoteOrderDetailsContainer;
