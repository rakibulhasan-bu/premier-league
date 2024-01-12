import Image from "next/image"
import teamOne from '../../public/teamone.png'

interface TMatch {
    team: string;
    played: number;
    win: number;
    draw: number;
    loss: number;
    goalsFor: number;
    goalsAgainst: number;
    points: number;
    logo: string;
}

export async function getLeagueTable() {
    const res = await fetch('https://premier-league-server.vercel.app/api/league-table')

    return res.json()
}

export default async function LeagueCard() {
    const data = await getLeagueTable();
    return (
        <div className='w-full text-xs space-y-2 2xl:space-y-2.5 rounded-xl py-3 px-2.5 2xl:p-4 bg-black'>
            {/* this is heading  */}
            <div className='flex items-center mb-2.5'>
                <div className='w-1/2'>
                    <p>Team</p>
                </div>

                <div className='w-1/2 grid justify-items-center grid-cols-5'>
                    <p>D</p>
                    <p>L</p>
                    <p>Ga</p>
                    <p>Gd</p>
                    <p>Pts</p>
                </div>
            </div>

            {/* this is another divs  */}
            {data?.result?.map((match: TMatch) => (
                <div key={match?.team} className='flex items-center font-light'>
                    <div className='w-1/2 flex items-center gap-1'>
                        <Image src={match?.logo} alt="team" width={16} height={16} className="h-5 w-5 rounded-full object-cover" />
                        <p>{match?.team}</p>
                    </div>

                    <div className='w-1/2 grid justify-items-center grid-cols-5'>
                        <p>{match?.draw}</p>
                        <p>{match?.loss}</p>
                        <p>{match?.goalsAgainst}</p>
                        <p>{match?.goalsFor}</p>
                        <p>{match?.points}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}