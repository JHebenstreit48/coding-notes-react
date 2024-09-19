import DynamicNotes, { DynamicNotesCode } from "../Notes/DynamicNotes";
import Navigation from "../Components/Navigation";
import items from "../PostgreSQL/PostgreSQLNotes";
import postgreSQLItemsWithCode from "../PostgreSQL/PostgreSQLNotesWCode";
import "../CSS/Header.css";


export default function postgreSQL() {

    return (

        <>
            <h1 className="Header">PostgreSQL</h1>
            <Navigation />
            <DynamicNotes items={items} />
            <DynamicNotesCode items={postgreSQLItemsWithCode} />
        </>
    );

}
