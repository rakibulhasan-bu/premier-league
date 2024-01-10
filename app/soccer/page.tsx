import LeftSoccerDiv from './LeftSoccerDiv';
import MiddleSoccerDiv from './MiddleSoccerDiv';
import RightSoccerDiv from './RightSoccerDiv';
import SingleMatch from './SingleMatch';
import SoccerNavbar from './SoccerNavbar';

export default function Soccer() {
    return (
        <div>
            {/* soccer nav bar here  */}
            <SoccerNavbar />
            {/* this is body of these page  */}
            <div className='flex gap-6 2xl:gap-8'>
                {/* this is left div for Matches  */}
                <LeftSoccerDiv />
                {/* this is main div for showing content */}
                <MiddleSoccerDiv />
                {/* this is right soccer div for trending now matches  */}
                <RightSoccerDiv />
            </div>
        </div>
    )
}