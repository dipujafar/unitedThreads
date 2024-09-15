"use client";
import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineBarChart } from "react-icons/ai";
import { CiBadgeDollar, CiLogout } from "react-icons/ci";
import { GoChecklist } from "react-icons/go";
import { LuClipboardList } from "react-icons/lu";
import { PiUsersThreeThin } from "react-icons/pi";
import { TbListDetails, TbSettingsCheck } from "react-icons/tb";
import logoImage from "@/assets//image/logo.png";
type MenuItem = Required<MenuProps>["items"][number];

type TSidebarType = {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ collapsed, setCollapsed }: TSidebarType) => {
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }


  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(!value)}
      className={`px-2 overflow-hidden ${!collapsed ? "min-w-[240px]" : ""}`}
    >
      <div>
        <div className="demo-logo-vertical pb-4 pt-20">
         <Image src={logoImage} alt="logoImage"></Image>
        </div>
        <Menu
          theme="light"
          mode="vertical"
          className="sidebar-menu space-y-2"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "dashboard",
              label: <Link href="/dashboard">Dashboard</Link>,
              icon: <AiOutlineBarChart size={24} />,
            },
            {
              key: "user-management",
              icon: <PiUsersThreeThin strokeWidth={1} size={24} />,
              label: <Link href="/user-management">User Management</Link>,
            },
            {
              key: "earnings",
              icon: <CiBadgeDollar strokeWidth={1} size={24} />,
              label: <Link href="/earnings">Earnings</Link>,
            },
            {
              key: "products",
              icon: <LuClipboardList size={24} />,
              label: <Link href="/products">Produts</Link>,
            },
            {
              key: "orders",
              icon: <GoChecklist size={24} />,
              label: <Link href="/order-details">Order Details</Link>,
            },
            {
              key: "quotes",
              icon: <TbListDetails size={24} />,
              label: <Link href="/quotes-details">Quote Details</Link>,
            },
            {
              key: "settings",
              icon: <TbSettingsCheck size={24} />,
              label: <Link href="/settings">Settings</Link>,
            },
            {
              key: "logout",
              icon: <CiLogout strokeWidth={0.8} size={24} />,
              label: "Logout",
            },
          ]}
        />
      </div>
    </Sider>
  );
};

export default Sidebar;
