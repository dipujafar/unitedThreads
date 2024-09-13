"use client";
import { store } from "@/redux/store";
import mainTheme from "@/themes/mainTheme";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <AntdRegistry>
        <ConfigProvider theme={mainTheme}>
        {children}
        </ConfigProvider>
      </AntdRegistry>
    </Provider>
  );
};

export default Providers;