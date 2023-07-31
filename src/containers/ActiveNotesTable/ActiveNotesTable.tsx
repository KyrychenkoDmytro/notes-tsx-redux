import { FC } from "react";
import ActiveThead from "../../components/Active/ActiveThead/ActiveThead";
import ActiveTbody from "../../components/Active/ActiveTbody/ActiveTbody";

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