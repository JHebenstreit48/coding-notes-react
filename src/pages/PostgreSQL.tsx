import DynamicNotes, { DynamicNotesCode } from "../Notes/DynamicNotes";
import Navigation from "../Components/Navigation";
import items from "../PostgreSQL/PostgreSQLNotes";
import itemsWithCode from "../PostgreSQL/PostgreSQLNotesWCode";


export default function PostgreSQL() {

    return (

        <>
            <h1 className="Header">PostgreSQL</h1>
            <Navigation />
            <DynamicNotes items={items} />
            <DynamicNotesCode items={itemsWithCode} />
        </>
    );

}
