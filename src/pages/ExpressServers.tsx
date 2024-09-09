import DynamicNotes, { DynamicNotesCode } from "../Notes/DynamicNotes";
import Header from "../Components/Header";
import items from "../Notes/ExpressServersNotes";
import itemsWithCode from "../Notes/ExpressSeversCode";
import Navigation from "../Components/Navigation";
export default function servers() {

    return (

        <>
            <Header text="Express Servers" />
            <Navigation />
            <DynamicNotes items={items} />
            <DynamicNotesCode items={itemsWithCode} />
        </>
    );
}
