import LeftSoccerDiv from './LeftSoccerDiv';
import MiddleSoccerDiv from './MiddleSoccerDiv';
import RightSoccerDiv from './RightSoccerDiv';

export default function Soccer() {
    return (
        <div className='flex flex-col lg:flex-row gap-4 2xl:gap-8 mx-2 lg:mx-0'>
            {/* this is left div for Matches  */}
            <LeftSoccerDiv />
            {/* this is main div for showing content */}
            <MiddleSoccerDiv />
            {/* this is right soccer div for trending now matches  */}
            <RightSoccerDiv />
        </div>
    )
}