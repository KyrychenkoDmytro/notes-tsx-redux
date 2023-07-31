import { FC } from 'react';
import ActiveNotesTable from '../containers/ActiveNotesTable/ActiveNotesTable';
import SummaryNotesTable from '../containers/SummaryNotesTable/SummaryNotesTable';

const Home: FC = () => {
    return (
        <div className="Home">
            <div className="container">
                <ActiveNotesTable />
                <SummaryNotesTable />
            </div>
        </div>
    )
}

export default Home; 