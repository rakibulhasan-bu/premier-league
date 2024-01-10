import Image from "next/image";
import teamOne from '../../public/teamone.png'

export default function LeaderBoardCard() {
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
            <div className='flex items-center justify-between'>
                <div className='w-3/4 flex items-center gap-2'>
                    <Image src={teamOne} alt="team" width={16} height={16} />
                    <p>Wallet id here</p>
                </div>

                <div className='w-1/4 grid grid-cols-2 justify-items-center'>
                    <p>9</p>
                    <p>33</p>
                </div>
            </div>

            <div className='flex items-center justify-between'>
                <div className='w-3/4 flex items-center gap-2'>
                    <Image src={teamOne} alt="team" width={16} height={16} />
                    <p>Manchester city</p>
                </div>

                <div className='w-1/4 grid grid-cols-2 justify-items-center'>
                    <p>16</p>
                    <p>33</p>
                </div>
            </div>

            <div className='flex items-center justify-between'>
                <div className='w-3/4 flex items-center gap-2'>
                    <Image src={teamOne} alt="team" width={16} height={16} />
                    <p>Leicester City</p>
                </div>

                <div className='w-1/4 grid grid-cols-2  justify-items-center'>
                    <p>33</p>
                    <p>65</p>
                </div>
            </div>

            <div className='flex items-center justify-between'>
                <div className='w-3/4 flex items-center gap-2'>
                    <Image src={teamOne} alt="team" width={16} height={16} />
                    <p>Villareal City</p>
                </div>

                <div className='w-1/4 grid justify-items-center grid-cols-2'>
                    <p>34</p>
                    <p>51</p>
                </div>
            </div>
        </div>
    )
}