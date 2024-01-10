import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import MatchCard from "./MatchCard";
import LeaderBoardCard from "./LeaderBoardCard";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import team from '../../public/teamone.png'
import logo from '../../public/logo.png'
import LeagueCard from "./LeagueCard";

export default function LeftSoccerDiv() {
    return (
        <div className='hidden lg:block lg:w-[22%] ml-4 mt-10 mb-4 2xl:my-12'>
            {/* this is live match div  */}
            <div className=''>
                <div className='grid grid-cols-2 mb-4'>
                    <p className="text-primary text-lg font-medium">Live Matches</p>
                    <div className='flex items-center justify-center gap-1.5 text-xs'>
                        <FaArrowLeft className="text-white/30" />
                        <FaArrowRight className="text-primary" />
                    </div>
                </div>
                <MatchCard />
            </div>

            {/* this is premier league div  */}
            <div className='my-6 2xl:my-10 space-y-2'>
                <div className='flex items-center justify-between gap-2'>
                    <div className='flex items-center gap-2'>
                        <Image src={team} alt="england" width={24} height={24} />
                        <div className=''>
                            <h4 className="">Premier League</h4>
                            <p className="text-xs text-white/50">England</p>
                        </div>
                    </div>
                    <IoIosArrowForward />
                </div>
                <LeagueCard />
            </div>

            {/* this is leader board div  */}
            <div className='space-y-2'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-1'>
                        <Image src={logo} alt="england" width={24} height={24} />
                        <div className=''>
                            <h4 className="">Leaderboards</h4>
                            <p className="text-xs text-white/50">The Premier Collection - AllSportsDAO</p>
                        </div>
                    </div>
                    <IoIosArrowForward />
                </div>
                <LeaderBoardCard />
            </div>
        </div>
    )
}