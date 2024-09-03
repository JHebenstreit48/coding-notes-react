import Header from "../components/Header/Header";
import '../CSS/PageCSS.css'
import DynamicNotes from "../components/Notes/DynamicNotes";
import items from "../components/Notes/HTMLNotes";
import DynamicNotesCode from "../components/Notes/DynamicNotesCode";

export default function HTML() {

    return (

        <>
            <Header text="HTML" />
            <DynamicNotes items={ items } />
            <DynamicNotesCode items={ items } />
        </>
    );

}
