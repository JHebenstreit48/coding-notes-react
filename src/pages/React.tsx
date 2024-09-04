import Header from "../components/Header/Header";
import Navigation from "../components/Header/Navigation";
import DynamicNotes, { DynamicNotesCode } from "../components/Notes/DynamicNotes";
import items from "../components/Notes/ReactNotes";
import '../CSS/PageCSS.css';
import '../CSS/Card.css';


export default function React() {

    return (

        <>
            <Header text="React" />
            <Navigation />
            <DynamicNotes items={items} />
            {/* <DynamicNotesCode items={itemsWithCode} /> */}
        </>
    );

}
