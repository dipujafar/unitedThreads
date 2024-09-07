"use client";
import { store } from "@/redux/store";
import mainTheme from "@/themes/mainTheme";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ConfigProvider theme={mainTheme}>
      {children}
      </ConfigProvider>
    </Provider>
  );
};

export default Providers;