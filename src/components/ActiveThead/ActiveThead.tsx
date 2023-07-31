import { FC } from "react";


const ActiveThead: FC = () => {
    return (
        <thead className="ActiveNotesTable__header">
            <tr className="ActiveNotesTable__header-row">
                <th>Name</th>
                <th>Created</th>
                <th>Category</th>
                <th>Content</th>
                <th>Dates</th>
                <th>
                    <div className="ActiveNotesTable__header-wrapper-icons">
                        <div className="ActiveNotesTable__header-icons-archive-all">
                            <img src="./assets/icons/archive-all.svg" alt="archive all" />
                        </div>
                        <div className="ActiveNotesTable__header-icons-delete-all">
                            <img src="./assets/icons/delete-all.svg" alt="delete all" />
                        </div>
                    </div>
                </th>

            </tr>
        </thead>
    )
}

export default ActiveThead;