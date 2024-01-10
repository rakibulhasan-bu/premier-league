import Image from "next/image";
import teamOne from '../../public/teamone.png'

interface TTeam {
    team: string;
    played: number;
    shotsOnTarget: number
}

export async function getLeaderBoard() {
    const res = await fetch('https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague/table/teamstat?stat=shotsOnTarget', {
        cache: "no-store",
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
            {data.tablestat.slice(0, 4).map((match: TTeam) => (
                <div key={match.team} className='flex items-center justify-between'>
                    <div className='w-3/4 flex items-center gap-2'>
                        <Image src={teamOne} alt="team" width={16} height={16} />
                        <p>{match.team}</p>
                    </div>

                    <div className='w-1/4 grid grid-cols-2 justify-items-center'>
                        <p>{match.played}</p>
                        <p>{match.shotsOnTarget}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}