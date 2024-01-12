import Image from "next/image";
import teamOne from '../../public/teamone.png'

interface TTeam {
    playerName: string;
    goals: number;
    penalties: number;
    photo: string;
}

async function getLeaderBoard() {
    const res = await fetch('https://premier-league-server.vercel.app/api/leader-board')

    return res.json()
}

export default async function LeaderBoardCard() {
    const data = await getLeaderBoard();
    return (
        <div className='w-full text-xs space-y-2 2xl:space-y-2.5 rounded-xl py-3 px-2.5 2xl:p-4 bg-black'>
            {/* this is heading  */}
            <div className='w-full flex items-center mb-2.5'>
                <div className='w-3/4'>
                    <p>Holder</p>
                </div>

                <div className='w-1/4 flex items-center gap-0.5 text-[10px]'>
                    <span>Holding</span>
                    <span>$ASD</span>
                </div>
            </div>

            {/* this is another divs  */}
            {data?.result?.map((match: TTeam) => (
                <div key={match?.playerName} className='flex items-center justify-between'>
                    <div className='w-3/4 flex items-center gap-2'>
                        <Image src={match?.photo} alt="team" width={16} height={16} className="h-5 w-5 rounded-full object-cover" />
                        <p>{match?.playerName}</p>
                    </div>

                    <div className='w-1/4 grid grid-cols-2 justify-items-center'>
                        <p>{match?.goals}</p>
                        <p>{match?.penalties}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}