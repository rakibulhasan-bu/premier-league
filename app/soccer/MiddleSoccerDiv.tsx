import Image from "next/image";
import SingleMatch, { TSingleMatch } from "./SingleMatch";
import background from '../../public/background.png'
import liverpool from '../../public/liverpool 1.png'
import evarton from '../../public/everton 1.png'
import { MdAccessTime } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

async function getLeagueFixers() {
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

export default async function MiddleSoccerDiv() {
    const { response } = await getLeagueFixers();

    const dateObject = new Date(response[0]?.fixture?.date);

    // Extract hour and minute
    const hour = dateObject.getHours();
    const minute = dateObject.getMinutes();

    // Format the result as HH:mm
    const formattedTime = ('0' + hour).slice(-2) + ':' + ('0' + minute).slice(-2);

    return (
        <div className='w-full lg:w-[56%] my-6 2xl:my-8'>
            {/* top div contain banner and match  */}
            <div className='relative w-full h-[20dvh] lg:h-[32dvh]'>
                <div className='absolute left-0 top-0 w-full h-full z-0 bg-orange rounded-sm flex justify-end'>
                    <Image src={background} alt="background" className="h-full w-2/5 object-cover" />
                </div>
                {/* upper div's  */}
                <div className='absolute left-0 top-0 w-full h-full z-10 bg-transparent px-4 lg:px-[8%] py-2 lg:py-[4%] 2xl:py-8'>
                    {/* teams details div  */}
                    <div className='flex items-center justify-between'>
                        <div className='2xl:space-y-2'>
                            <p className="text-lg lg:text-2xl 2xl:text-4xl font-semibold uppercase">{response[0]?.teams?.home?.name}</p>
                            <p className="pl-8 2xl:pl-12">VS</p>
                            <p className="text-lg lg:text-2xl 2xl:text-4xl font-semibold uppercase">{response[0]?.teams?.away?.name}</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <Image src={liverpool} alt="background" className="w-16 lg:w-20 2xl:w-24 h-16 lg:h-20 2xl:h-24 rounded-sm object-cover" />
                            <Image src={evarton} alt="background" className="w-16 lg:w-20 2xl:w-24 h-16 lg:h-20 2xl:h-24 rounded-sm object-cover" />
                        </div>
                    </div>
                    {/* time and button div  */}
                    <div className='flex items-center justify-between'>
                        <div className=''>
                            {/* this is time and location div  */}
                            <div className='flex items-center gap-4 2xl:gap-8 py-2'>
                                <div className='flex items-center gap-1 2xl:gap-2'>
                                    <MdAccessTime className="text-base 2xl:text-lg" />
                                    <p className="text-sm 2xl:text-base">{formattedTime}</p>
                                </div>

                                <div className='flex items-center gap-1 2xl:gap-2'>
                                    <IoLocationOutline className="text-base 2xl:text-lg" />
                                    <p className="text-sm 2xl:text-base">{response[0]?.fixture?.referee}</p>
                                </div>
                            </div>
                            <p className="text-xs">Next Fixture</p>
                        </div>
                        <div className=''>
                            <button className="text-xs lg:text-sm 2xl:text-base bg-black text-white py-1 lg:py-2 px-4 lg:px-6 rounded-full">Trade on Tensor</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* this is filter div or latest show div  */}
            <div className='flex items-center justify-between gap-6 py-4 2xl:py-6'>
                <h4>Latest Matches</h4>
                <div>
                    <span>Filter:</span>

                </div>
                <h4>View All</h4>
            </div>

            {/* this is matches div or favorite show div  */}
            <div className='flex flex-col gap-2 2xl:gap-4'>
                {
                    response?.slice(0, 4).map((match: any) => (
                        <SingleMatch key={match.fixture.id} match={match} />
                    ))
                }
            </div>
        </div>
    )
}