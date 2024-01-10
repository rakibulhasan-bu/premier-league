import Image from "next/image";
import firstTeam from '../../public/teamone.png'
import secondTeam from '../../public/teamone.png'

export default function MatchCard() {
    return (
        <div className='w-full flex gap-2 2xl:gap-4 border border-primary rounded-md 2xl:rounded-lg p-4'>
            {/* this is first match div  */}
            <div className='flex flex-col gap-2'>
                <Image src={firstTeam} alt="Bercelona team" width={45} height={45} className="w-8 2xl:w-11 h-8 2xl:h-11 rounded-full" />
                <p>Chelsea</p>
                <div className='w-full flex items-center justify-center bg-white text-black font-medium'>
                    <p>2.2</p>
                </div>
            </div>

            {/* this is premier league div  */}
            <div className='flex flex-col gap-2'>
                <p className="text-white/50">Premier League</p>
                <div className='text-2xl font-bold flex gap-1'>
                    <span>1</span>
                    <span>:</span>
                    <span>2</span>
                </div>
                <div className='flex items-center gap-0.5'>
                    <span className="w-1 h-1 rounded-full bg-orange"></span>
                    <span className="text-white/50">49:30</span>
                </div>
                <div className='w-full flex items-center justify-center bg-white text-black font-medium'>
                    <p>2.2</p>
                </div>
            </div>

            {/* this is first match div  */}
            <div className='flex flex-col gap-2'>
                <Image src={secondTeam} alt="Bercelona team" width={45} height={45} className="w-8 2xl:w-11 h-8 2xl:h-11 rounded-full" />
                <p>Chelsea</p>
                <div className='w-full flex items-center justify-center bg-white text-black font-medium'>
                    <p>2.2</p>
                </div>
            </div>
        </div>
    )
}