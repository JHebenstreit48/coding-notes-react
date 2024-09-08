import DynamicNotes, { DynamicNotesCode } from "../Components/DynamicNotes";
import Navigation from "../Components/Navigation";
import items from "../Components/PostgreSQLNotes";
import itemsWithCode from "../Components/PostgreSQLNotesWCode";


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
