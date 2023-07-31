import { FC } from "react";
import ActiveRow from "./ActiveRow/ActiveRow";
import { useAppSelector } from "../../../hooks/reduxHooks";

const ActiveTbody: FC = () => {
    const { activeNotes } = useAppSelector(state => state.notes);

    return (
        <tbody className="ActiveNotesTable__body">
            {
                activeNotes.map((item) => (
                    <ActiveRow key={item.id} {...item} />
                ))
            }
        </tbody>
    )
}

export default ActiveTbody;