import MatchCard from "./MatchCard";

export default function LeftSoccerDiv() {
    return (
        <div className='w-[22%]'>
            {/* this is live match div  */}
            <div className=''>
                live matches
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