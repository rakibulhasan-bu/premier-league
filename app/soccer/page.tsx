import SingleMatch from './SingleMatch';
import SoccerNavbar from './SoccerNavbar';

export default function Soccer() {
    return (
        <div className=''>
            {/* soccer nav bar here  */}
            <SoccerNavbar />
            {/* this is body of these page  */}
            <div className='flex gap-6 2xl:gap-8'>
                {/* this is left div for Matches  */}
                <div className='w-[22%]'>
                    as
                </div>
                {/* this is main div for showing content */}
                <div className='w-[56%] my-6 2xl:my-8'>
                    {/* top div contain banner and match  */}
                    <div className='w-full h-[28dvh] bg-orange'>

                    </div>

                    {/* this is filter div or latest show div  */}
                    <div className='flex items-center justify-between gap-6 py-4 2xl:py-6'>
                        <h4>Latest Matches</h4>
                        <h4>Filter</h4>
                        <h4>View All</h4>
                    </div>

                    {/* this is matches div or favorite show div  */}
                    <div className='flex flex-col gap-2 2xl:gap-4'>
                        <SingleMatch />
                        <SingleMatch />
                        <SingleMatch />
                    </div>
                </div>
                {/* this is last div for trending now matches  */}
                <div className='w-[22%]'>
                    lasat div
                </div>
            </div>
        </div>
    )
}