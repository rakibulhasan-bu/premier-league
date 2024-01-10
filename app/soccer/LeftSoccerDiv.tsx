import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import MatchCard from "./MatchCard";

export default function LeftSoccerDiv() {
    return (
        <div className='w-[22%] ml-4 my-10 2xl:my-12'>
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
            <div className=''>
                love matches
            </div>

            {/* this is leader board div  */}
            <div className=''>
                leader board
            </div>
        </div>
    )
}