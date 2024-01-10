'use client'

import Image from 'next/image'
import logo from '../../public/logo.png'
import { SelectProfile } from '@/components/apps-components/SelectProfile'
import { IoNotificationsOutline } from "react-icons/io5";
import { HiOutlineMail } from 'react-icons/hi';
import { FaRegHeart } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SoccerNavbar() {

    const currentRoute = usePathname();

    return (
        <div className='hidden lg:flex h-[12dvh] 2xl:h-[12dvh] px-8 2xl:px-12 bg-black items-center justify-between'>
            <div className='h-full flex items-center gap-8 text-base text-[#A0A8B1] 2xl:text-base'>
                <Link href={'/soccer'} className={`h-full flex items-center justify-center border-t-2 hover:border-primary hover:text-[#4070a1] ${currentRoute === "/soccer" ? "text-[#4070a1] border-primary" : "border-transparent"}`}>
                    <p>Matches</p>
                </Link>
                <Link href={'/soccer/trade'} className={`h-full flex items-center justify-center border-t-2 hover:border-primary hover:text-[#4070a1] ${currentRoute === "/soccer/trade" ? "text-[#4070a1] border-primary" : "border-transparent"}`}>
                    <p>Trade</p>
                </Link>
                <Link href={'/soccer/staking'} className={`h-full flex items-center justify-center border-t-2 hover:border-primary hover:text-[#4070a1] ${currentRoute === "/soccer/staking" ? "text-[#4070a1] border-primary" : "border-transparent"}`}>
                    <p>Staking</p>
                </Link>
                <Link href={'/soccer/rewards'} className={`h-full flex items-center justify-center border-t-2 hover:border-primary hover:text-[#4070a1] ${currentRoute === "/soccer/rewards" ? "text-[#4070a1] border-primary" : "border-transparent"}`}>
                    <p>Rewards</p>
                </Link>
            </div>
            <h3 className='text-2xl font-semibold'>The Premier Collection</h3>
            <div className='flex items-center gap-12'>
                {/* this is icons div notification message and love  */}
                <div className='flex items-center gap-4 text-lg 2xl:text-xl'>
                    <IoNotificationsOutline />
                    <HiOutlineMail />
                    <FaRegHeart />
                </div>
                {/* this is profile image and select div  */}
                <div className='flex items-center gap-2'>
                    <Image src={logo} alt='avatar' height={50} width={50} className='w-10 2xl:w-14 h-10 2xl:h-14 rounded-full object-cover' />
                    <SelectProfile />
                </div>
            </div>
        </div>
    )
}