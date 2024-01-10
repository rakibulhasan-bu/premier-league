import SingleMatch from "./SingleMatch";

export default function MiddleSoccerDiv() {
    return (
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
                <SingleMatch />
            </div>
        </div>
    )
}