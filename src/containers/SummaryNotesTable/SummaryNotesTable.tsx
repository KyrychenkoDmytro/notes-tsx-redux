import { FC } from "react";
import SummaryThead from "../../components/SummaryThead/SummaryThead";
import SummaryTbody from "../../components/SummaryTbody/SummaryTbody";

const SummaryNotesTable: FC = () => {
    return (
        <>
            <table className="SummaryNotesTable">
                <SummaryThead />
                <SummaryTbody />
            </table>
        </>
    )
}

export default SummaryNotesTable;