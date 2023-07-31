import { FC } from "react";

const SummaryRow: FC<{ total: number; archived: number; imgUrl: string, category: string }> = (props) => {
    const { total, archived, imgUrl, category } = props;
    const active = total - archived;

    return (

        <tr className="SummaryNotesTable__body-row show-notes" data-note-category={category}>
            <td className="SummaryNotesTable__td" colSpan={2}>
                <div className="SummaryNotesTable__body-name archives-table__name">
                    <div><img src={imgUrl} alt={category} /></div>
                    <span>{category}</span>
                </div>
            </td>
            <td className="SummaryNotesTable__td" colSpan={2}>{active}</td>
            <td className="SummaryNotesTable__td" colSpan={2}>{archived}</td>
        </tr>
    )
}

export default SummaryRow;