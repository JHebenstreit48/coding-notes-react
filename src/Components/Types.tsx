export type ListItemsArray = ListItem[];
export type NotesPropsType = {
  items: ListItemsArray;
};

export interface TextPart {
  text: string;
  emphasis?: boolean;
  emphasis2?: boolean;
  code?: boolean;
}

export interface ListItem {
  content: TextPart[];
}
