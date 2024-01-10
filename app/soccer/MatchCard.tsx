import Image from "next/image";
import firstTeam from '../../public/teamone.png'
import secondTeam from '../../public/teamone.png'

export default function MatchCard() {
    return (
        <div className='w-full flex justify-between gap-2 2xl:gap-4 border border-primary rounded-md 2xl:rounded-lg p-3.5 2xl:p-4'>
            {/* this is first match div  */}
            <div className='w-full flex flex-col justify-center items-center gap-2.5'>
                <Image src={firstTeam} alt="Bercelona team" width={45} height={45} className="w-10 2xl:w-12 h-10 2xl:h-12 rounded-full" />
                <p className="text-sm">Chelsea</p>
                <div className='w-full mt-auto flex items-center justify-center bg-white text-black font-medium rounded text-sm py-1'>
                    <p>2.2</p>
                </div>
            </div>

            {/* this is premier league div  */}
            <div className='w-full flex flex-col justify-center items-center gap-1.5'>
                <p className="text-white/50 text-[9px] 2xl:text-[10px]">Premier League</p>
                <div className='text-2xl font-bold flex gap-1'>
                    <span>1</span>
                    <span>:</span>
                    <span>2</span>
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
                <Image src={secondTeam} alt="Bercelona team" width={45} height={45} className="w-10 2xl:w-12 h-10 2xl:h-12 rounded-full" />
                <p className="text-sm">Chelsea</p>
                <div className='w-full mt-auto flex items-center justify-center bg-white text-black font-medium rounded text-sm py-1'>
                    <p>2.2</p>
                </div>
            </div>
        </div>
    )
}