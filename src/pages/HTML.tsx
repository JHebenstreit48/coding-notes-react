import Header from "../components/Header/Header";
import DynamicNotes from "../components/Notes/DynamicNotes";
import items from "../components/Notes/HTMLNotes";
import DynamicNotesCode from "../components/Notes/DynamicNotesCode";
import '../CSS/PageCSS.css'

export default function HTML() {

    return (

        <>
            <Header text="HTML" />
            <DynamicNotes items={ items } />
            <DynamicNotesCode items={ items } />
        </>
    );

}
