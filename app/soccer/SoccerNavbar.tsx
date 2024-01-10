import Image from 'next/image'
import logo from '../../public/logo.png'
import { SelectProfile } from '@/components/apps-components/SelectProfile'
import { IoNotificationsOutline } from "react-icons/io5";
import { HiOutlineMail } from 'react-icons/hi';
import { FaRegHeart } from 'react-icons/fa';

export default function SoccerNavbar() {
    return (
        <div className='hidden lg:flex h-[12dvh] 2xl:h-[15dvh] px-8 2xl:px-12 bg-black items-center justify-between'>
            <div className='flex items-center gap-8 text-sm'>
                <p>Matches</p>
                <p>Staking</p>
                <p>Rewards</p>
                <p>Trade</p>
            </div>
            <h3 className='text-2xl font-semibold'>The Premier Collection</h3>
            <div className='flex items-center gap-12'>
                {/* this is icons div notification message and love  */}
                <div className='flex items-center gap-4 text-lg'>
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