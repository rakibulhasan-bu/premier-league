import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import MatchCard from "./MatchCard";

export default function RightSoccerDiv() {
    return (
        <div className='w-[22%] mr-4 my-10 2xl:my-12'>
            {/* this is trending now match div  */}
            <div className=''>
                <div className='grid grid-cols-2 mb-4'>
                    <p className="text-lg font-medium">Trending Now</p>
                    <div className='flex items-center justify-center gap-1.5 text-xs'>
                        <FaArrowLeft className="text-white/20" />
                        <FaArrowRight className="text-white/50" />
                    </div>
                </div>
                <MatchCard />
            </div>
        </div>
    )
}