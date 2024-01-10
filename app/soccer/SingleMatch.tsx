import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaRegHeart } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import firstTeam from '../../public/teamone.png'
import secondTeam from '../../public/teamtwo.png'

export default function SingleMatch() {
    return (
        <Link href={'/'} className='w-full flex flex-col lg:flex-row items-center justify-between gap-6 bg-black hover:bg-white hover:text-black rounded 2xl:rounded-md p-4'>
            {/* this is match vs div  */}
            <div className='flex items-center  gap-4 2xl:gap-8'>
                {/* first team image and name div  */}
                <div className='flex items-center gap-1 2xl:gap-2'>
                    <Image src={firstTeam} alt="Bercelona team" width={45} height={45} className="w-8 2xl:w-11 h-8 2xl:h-11 rounded-full" />
                    <p className="text-sm 2xl:text-base">Barcelona</p>
                </div>
                {/* vs two team div  */}
                <div className='flex flex-col justify-center items-center'>
                    <span className="w-[1px] h-3 bg-slate-700"></span>
                    <span className="text-sm leading-[16px]">VS</span>
                    <span className="w-[1px] h-3 bg-slate-700"></span>
                </div>
                {/* second team image and name div */}
                <div className='flex items-center gap-1 2xl:gap-2'>
                    <Image src={secondTeam} alt="Bercelona team" width={45} height={45} className="w-8 2xl:w-11 h-8 2xl:h-11 rounded-full" />
                    <p className="text-sm 2xl:text-base">Real Madrid</p>
                </div>
            </div>

            {/* this is time and location div  */}
            <div className='flex items-center gap-4 2xl:gap-8'>
                <div className='flex items-center gap-1 2xl:gap-2'>
                    <MdAccessTime className="text-base 2xl:text-lg" />
                    <p className="text-sm 2xl:text-base">5:00 PM</p>
                </div>

                <div className='flex items-center gap-1 2xl:gap-2'>
                    <IoLocationOutline className="text-base 2xl:text-lg" />
                    <p className="text-sm 2xl:text-base">London</p>
                </div>
            </div>

            {/* this is favourites and view details div  */}
            <div className='flex items-center gap-4 2xl:gap-8'>
                <FaRegHeart />
                <div className="flex items-center gap-1">
                    <p className="text-sm">View Details</p>
                    <FaArrowRight />
                </div>
            </div>
        </Link>
    )
}