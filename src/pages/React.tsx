import Header from "../components/Header/Header";
import DynamicNotes from "../components/Notes/DynamicNotes";
import items from "../components/Notes/ReactNotes";
import DynamicNotesCode from "../components/Notes/DynamicNotesCode";
import '../CSS/PageCSS.css';


export default function React() {

    return (

        <>
            <Header text="React" />
            <DynamicNotes items={items} />
            <DynamicNotesCode items={items} />
        </>
    );

}
