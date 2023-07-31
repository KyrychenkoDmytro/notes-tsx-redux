export interface Note {
    id: number;
    name: string;
    created: string;
    category: string;
    content: string;
    dates: string;
    imgUrl: string;
    archived: boolean;
}

export interface NumberOfNotesByCategory {
    [category: string]: { total: number; archived: number; imgUrl: string }
}