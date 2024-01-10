import Image from "next/image"
import teamOne from '../../public/teamone.png'

export default function LeagueCard() {
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
            <div className='flex items-center font-light'>
                <div className='w-1/2 flex items-center gap-1'>
                    <Image src={teamOne} alt="team" width={16} height={16} />
                    <p>Liverpool</p>
                </div>

                <div className='w-1/2 grid justify-items-center grid-cols-5'>
                    <p>3</p>
                    <p>2</p>
                    <p>24</p>
                    <p>9</p>
                    <p>33</p>
                </div>
            </div>

            <div className='flex items-center font-light'>
                <div className='w-1/2 flex items-center gap-1'>
                    <Image src={teamOne} alt="team" width={16} height={16} />
                    <p>Manchester city</p>
                </div>

                <div className='w-1/2 grid justify-items-center grid-cols-5'>
                    <p>6</p>
                    <p>2</p>
                    <p>21</p>
                    <p>16</p>
                    <p>33</p>
                </div>
            </div>

            <div className='flex items-center font-light'>
                <div className='w-1/2 flex items-center gap-1'>
                    <Image src={teamOne} alt="team" width={16} height={16} />
                    <p>Leicester City</p>
                </div>

                <div className='w-1/2 grid justify-items-center grid-cols-5'>
                    <p>D</p>
                    <p>L</p>
                    <p>Ga</p>
                    <p>Gd</p>
                    <p>Pts</p>
                </div>
            </div>

            <div className='flex items-center font-light'>
                <div className='w-1/2 flex items-center gap-1'>
                    <Image src={teamOne} alt="team" width={16} height={16} />
                    <p>Villareal City</p>
                </div>

                <div className='w-1/2 grid justify-items-center grid-cols-5'>
                    <p>D</p>
                    <p>L</p>
                    <p>Ga</p>
                    <p>Gd</p>
                    <p>Pts</p>
                </div>
            </div>
        </div>
    )
}