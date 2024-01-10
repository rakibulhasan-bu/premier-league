import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import MatchCard from "./MatchCard";
import Image from "next/image";
import swapImage from '../../public/swap-image.png';

export default function RightSoccerDiv() {
    return (
        <div className='w-[22%] mt-10 mb-4 2xl:my-12'>
            {/* this is trending now match div  */}
            <div className='mr-4'>
                <div className='grid grid-cols-2 mb-4'>
                    <p className="text-lg font-medium">Trending Now</p>
                    <div className='flex items-center justify-center gap-1.5 text-xs'>
                        <FaArrowLeft className="text-white/20" />
                        <FaArrowRight className="text-white/50" />
                    </div>
                </div>
                <MatchCard />
            </div>

            {/* this is statistics div  */}
            <div className='bg-green mr-4 p-3 rounded-lg my-6 2xl:my-10 space-y-2.5 text-xs'>
                <div className='grid grid-cols-7 gap-1'>
                    <p className="col-span-2">Attacks</p>
                    <p className="col-span-1">27</p>
                    <p className="col-span-3">Attacks</p>
                    <p className="col-span-1">12</p>
                </div>

                <div className='grid grid-cols-7 gap-1'>
                    <p className="col-span-2">Posts</p>
                    <p className="col-span-1">6</p>
                    <p className="col-span-3">Attacks</p>
                    <p className="col-span-1">16</p>
                </div>

                <div className='grid grid-cols-7 gap-1'>
                    <p className="col-span-2">Possession</p>
                    <p className="col-span-1">70%</p>
                    <p className="col-span-3">Attacks</p>
                    <p className="col-span-1">30%</p>
                </div>
            </div>

            {/* swapping div  */}
            <div className='relative'>
                <Image src={swapImage} alt="swap image" width={400} height={150} className="w-full -z-10" />
                <div className='text-white absolute top-0 left-0 w-full bg-transparent h-full z-10 pb-8 pt-9 px-4'>
                    <p className="text-lg font-semibold">Try Your Luck in</p>
                    <p className="text-3xl font-bold">SWAPs</p>
                </div>
            </div>
        </div>
    )
}