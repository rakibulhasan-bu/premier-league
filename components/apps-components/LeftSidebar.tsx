'use client'

import logo from '../../public/logo.png'
import { IoBasketballSharp, IoStatsChart } from "react-icons/io5";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaFootballBall } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { IoMdFootball } from "react-icons/io";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LeftSidebar() {

    const currentRoute = usePathname();

    return (
        <div className=' flex flex-col gap-6'>
            <Image src={logo} alt='The Premier Collection logo' height={80} width={80} className='w-full' />
            <div className='w-full flex flex-col items-center justify-center text-2xl 2xl:text-3xl'>
                <Link href={'/'} className={`w-full flex items-center justify-center border-l-4 hover:border-primary hover:text-primary py-3 2xl:py-4 ${currentRoute === "/" ? "text-primary border-primary" : "border-transparent"}`}>
                    <HiMenuAlt2 />
                </Link>
                <Link href={'/dashboard'} className={`w-full flex items-center justify-center border-l-4 hover:border-primary hover:text-primary py-3 2xl:py-4 ${currentRoute === "/dashboard" ? "text-primary border-primary" : "border-transparent"}`}>
                    <MdDashboard />
                </Link>
                <Link href={'/analytics'} className={`w-full flex items-center justify-center border-l-4 hover:border-primary hover:text-primary py-3 2xl:py-4 ${currentRoute === "/analytics" ? "text-primary border-primary" : "border-transparent"}`}>
                    <IoStatsChart />
                </Link>
                <Link href={'/soccer'} className={`w-full flex items-center justify-center border-l-4 hover:border-primary hover:text-primary py-3 2xl:py-4 ${currentRoute === "/soccer" ? "text-primary border-primary" : "border-transparent"}`}>
                    <IoMdFootball />
                </Link>
                <Link href={'/football'} className={`w-full flex items-center justify-center border-l-4 hover:border-primary hover:text-primary py-3 2xl:py-4 ${currentRoute === "/football" ? "text-primary border-primary" : "border-transparent"}`}>
                    <FaFootballBall />
                </Link>
                <Link href={'/basketball'} className={`w-full flex items-center justify-center border-l-4 hover:border-primary hover:text-primary py-3 2xl:py-4 ${currentRoute === "/basketball" ? "text-primary border-primary" : "border-transparent"}`}>
                    <IoBasketballSharp />
                </Link>
            </div>
        </div>
    )
}