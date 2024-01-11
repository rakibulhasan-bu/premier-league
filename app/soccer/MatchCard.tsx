import Image from "next/image";

async function getFixers() {
    const res = await fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures/headtohead?h2h=33-34', {
        headers: {
            "X-RapidAPI-Key": 'o7sjBtY7kTZlMse12Zd4m6AgwybNyTIM',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    })

    if (!res.ok) {
        // throw new Error('Failed to fetch data')
        console.log("res", res);
    }

    return res.json()
}

export default async function MatchCard() {
    const { response } = await getFixers();
    const match = response[0];
    return (
        <div className='w-full flex justify-between gap-2 2xl:gap-4 border border-primary rounded-md 2xl:rounded-lg p-3.5 2xl:p-4'>
            {/* this is first match div  */}
            <div className='w-full flex flex-col justify-center items-center gap-2.5'>
                <Image src={match?.teams?.home?.logo} alt="Bercelona team" width={45} height={45} className="w-10 2xl:w-12 h-10 2xl:h-12 rounded-full" />
                <p className="text-sm">{match?.teams?.home?.name}</p>
                <div className='w-full mt-auto flex items-center justify-center bg-white text-black font-medium rounded text-sm py-1'>
                    <p>2.1</p>
                </div>
            </div>

            {/* this is premier league div  */}
            <div className='w-full flex flex-col justify-center items-center gap-1.5'>
                <p className="text-white/50 text-[9px] 2xl:text-[10px]">{match?.league?.name}</p>
                <div className='text-2xl font-bold flex gap-1'>
                    <span>{match?.goals?.home}</span>
                    <span>:</span>
                    <span>{match?.goals?.away}</span>
                </div>
                <div className='flex items-center gap-0.5'>
                    <span className="w-2.5 h-2.5 rounded-full bg-orange"></span>
                    <span className="text-white/50 text-sm">49:30</span>
                </div>
                <div className='w-full mt-auto flex items-center justify-center bg-white text-black font-medium rounded text-sm py-1'>
                    <p>2.2</p>
                </div>
            </div>

            {/* this is first match div  */}
            <div className='w-full flex flex-col justify-center items-center gap-2.5'>
                <Image src={match?.teams?.away?.logo} alt="Bercelona team" width={45} height={45} className="w-10 2xl:w-12 h-10 2xl:h-12 rounded-full" />
                <p className="text-sm">{match?.teams?.away?.name}</p>
                <div className='w-full mt-auto flex items-center justify-center bg-white text-black font-medium rounded text-sm py-1'>
                    <p>2.3</p>
                </div>
            </div>
        </div>
    )
}