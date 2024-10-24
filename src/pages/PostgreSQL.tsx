// import DynamicNotes, { DynamicNotesCode } from "../Components/DynamicNotes";
import Navigation from "../Components/Navigation";
// import items from "../PostgreSQL/PostgreSQLNotes.tsx";
// import postgreSQLItemsWithCode from "../PostgreSQL/PostgreSQLNotesWCode.tsx";
import "../CSS/Header.css";


export default function postgreSQL() {

    return (

        <>
            <h1 className="Header">PostgreSQL</h1>
            <Navigation />
            {/* <DynamicNotes items={items} />
            <DynamicNotesCode items={postgreSQLItemsWithCode} /> */}
        </>
    );

}
