import Image from 'next/image'
import logo from '../public/logo.png'
import { SelectProfile } from '@/components/apps-components/SelectProfile'
import { IoBasketballSharp, IoNotificationsOutline, IoStatsChart } from "react-icons/io5";
import { HiMenuAlt2, HiOutlineMail } from "react-icons/hi";
import { FaFootballBall, FaRegHeart } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { IoMdFootball } from "react-icons/io";

export default function Home() {
  return (
    <main className="flex h-screen overflow-auto text-white">
      {/* this is left side bar  */}
      <div className='w-[5%] h-full bg-black flex flex-col gap-6'>
        <Image src={logo} alt='The Premier Collection logo' height={80} width={80} className='w-full' />
        <div className='w-full flex flex-col items-center justify-center gap-6 text-xl 2xl:text-2xl'>
          <HiMenuAlt2 />
          <MdDashboard />
          <IoStatsChart />
          <IoMdFootball />
          <FaFootballBall />
          <IoBasketballSharp />
        </div>
      </div>
      {/* this is right side  */}
      <div className='w-[95%] bg-bgBlack h-full'>
        {/* div top nav here  */}
        <div className='h-[12dvh] 2xl:h-[15dvh] pl-8 pr-16 bg-black flex items-center justify-between'>
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
        {/* this is body of these page  */}
        <div className='flex gap-6 2xl:gap-8'>
          {/* this is left div for Matches  */}
          <div className='w-3/12'>
            as
          </div>
          {/* this is main div for showing content */}
          <div className='w-6/12'>
            content
          </div>
          {/* this is last div for trending now matches  */}
          <div className='w-3/12'>
            lasat div
          </div>
        </div>
      </div>
    </main>
  )
}
