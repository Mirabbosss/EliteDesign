'use client';
import React from 'react';
import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

const AdminLayout = ({children} : {children: React.ReactNode}) => {
    const router = useRouter();
    const pathname = usePathname()

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            router.push('/login');
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        router.push('/login');
    };
    
    return (
        <body>
            
            <div className='flex gap-5'>
            {/* Left SideBar */}
            <div className='bg-[#D9D9D9] h-screen w-1/5 flex flex-col p-4 relative'>
                <Link href='/admin' className={`${pathname === '/admin' || '/admin/*' ? 'bg-gray-400' : ''} py-[20px] px-[60px] hover:bg-gray-400 w-full duration-100 rounded-md`}>Главная</Link>

                <Link href='/admin' className={`${pathname === '' ? 'active' : ''} py-[20px] px-[60px] hover:bg-gray-400 w-full duration-100 rounded-md`}>Тест-1</Link>

                <Link href='/admin' className={`${pathname === '' ? 'active' : ''} py-[20px] px-[60px] hover:bg-gray-400 w-full duration-100 rounded-md`}>Тест-2</Link>

                <Link href='/admin' className={`${pathname === '' ? 'active' : ''} py-[20px] px-[60px] hover:bg-gray-400 w-full duration-100 rounded-md`}>Тест-3</Link>

                <button onClick={() => handleLogout()} className='absolute bottom-[100px] left-[20%] bg-gray-500 py-2 px-5 hover:scale-95 duration-150'>Выйти</button>
            </div>

            <div className='min-h-screen h-full w-full'>
              {children}
            </div>
        </div>
             
        </body> 
    );
};

export default AdminLayout;