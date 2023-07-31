import { FC } from "react";
import ActiveThead from "../../components/ActiveThead/ActiveThead";
import ActiveTbody from "../../components/ActiveTbody/ActiveTbody";

const ActiveNotesTable: FC = () => {
    

    return (
        <>
            <table className="ActiveNotesTable">
                <ActiveThead />
                <ActiveTbody />
            </table>
        </>
    )
}

export default ActiveNotesTable;