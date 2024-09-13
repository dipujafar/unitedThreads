"use client"
import Sidebar from '@/components/shared/Sidebar';
import user from "@/assets/patient.jpg"
import { Button, Layout, theme } from 'antd';
import { usePathname } from 'next/navigation';
import { ReactNode, Suspense, useEffect, useState } from 'react';
import { GoBell } from 'react-icons/go';
import { IoMenu } from 'react-icons/io5';
import { RxCross1 } from 'react-icons/rx';
import Image from 'next/image';
const {  Content,   } = Layout;

const DashboardLayout = ({children}:{children:ReactNode}) => {

 const {
    token: { colorBgContainer, },
  } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);

  const pathname = usePathname();

    return (
    <Layout style={{minHeight:"100dvh"}}>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed}/>
      <Layout>
       {
       <>
         <nav className='flex items-center justify-between py-4 pr-[68px]' >
          <div className='flex items-center gap-x-2'>
            <Button
            type="text"
            icon={collapsed ? <RxCross1 size={32} className='text-info' /> :<IoMenu size={32} className='text-info' /> }
            onClick={() => setCollapsed(!collapsed)}
          />
          <h1 className='capitalize text-2xl font-bold text-info font-roboto'>{pathname.length > 1 ? pathname.replaceAll("/", " ").replaceAll("-", " "):"dashboard"}</h1>
          </div>
          <div className='flex items-center gap-x-6'>
            <div role='button' className='relative aspect-square size-12 rounded-full bg-info flex-item-center'>
              <GoBell size={20} />
            <span className='absolute top-1.5 right-1.5 size-[18px] bg-warning rounded-full text-sm flex-item-center'>3</span>
            </div>
            <div className='flex items-center gap-x-2'>
              <Image src={user} alt='admin profile' width={48} height={48} className='rounded-full' />
              <h4 className='text-base font-bold text-info font-roboto'> User Name</h4>
            </div>
          </div>
        </nav>
        </>
        }
        <Content className='bg-info rounded-tl-lg p-7'>
          {children}
        </Content>
      </Layout>
    </Layout>
    );
};

export default DashboardLayout;