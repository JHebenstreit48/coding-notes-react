import Header from "../components/Header/Header";
import items from "../components/Notes/ReactNotes";
import DynamicNotes from "../components/Notes/DynamicNotes";
import '../CSS/PageCSS.css';
import DynamicNotesCode from "../components/Notes/DynamicNotesCode";

export default function react() {

    return (

        <>
            <Header text="React" />
            <DynamicNotes items={items} />
            <DynamicNotesCode items={items} />
        </>
    );

}
