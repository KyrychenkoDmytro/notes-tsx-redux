import { FC } from 'react';
import ActiveNotesTable from '../containers/ActiveNotesTable/ActiveNotesTable';
import SummaryNotesTable from '../containers/SummaryNotesTable/SummaryNotesTable';


import { useEffect } from 'react';
import { useAppDispatch } from "../hooks/reduxHooks";
import { fetchNotes } from "../hooks/fetchNotes";

const Home: FC = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchNotes());
    }, [dispatch]);

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