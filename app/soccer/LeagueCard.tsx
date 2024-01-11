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
}

export async function getLeagueTable() {
    const res = await fetch('https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague/table', {
        headers: {
            'X-RapidAPI-Key': 'o7sjBtY7kTZlMse12Zd4m6AgwybNyTIM',
            'X-RapidAPI-Host': 'heisenbug-premier-league-live-scores-v1.p.rapidapi.com'
        }
    })

    if (!res.ok) {
        // throw new Error('Failed to fetch data')
        console.log(res);
    }

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
            {data?.records?.slice(0, 4).map((match: TMatch) => (
                <div key={match.team} className='flex items-center font-light'>
                    <div className='w-1/2 flex items-center gap-1'>
                        <Image src={teamOne} alt="team" width={16} height={16} />
                        <p>{match.team}</p>
                    </div>

                    <div className='w-1/2 grid justify-items-center grid-cols-5'>
                        <p>{match.draw}</p>
                        <p>{match.loss}</p>
                        <p>{match.goalsAgainst}</p>
                        <p>{match.goalsFor}</p>
                        <p>{match.points}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}