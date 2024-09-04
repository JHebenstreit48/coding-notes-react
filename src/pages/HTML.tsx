import DynamicNotes from "../components/Notes/DynamicNotes";
import items from "../components/Notes/HTMLNotes";
import '../CSS/PageCSS.css'

export default function HTML() {

    return (

        <>
            <h1 className="Header">HTML</h1>
            <DynamicNotes items={ items } />
        </>
    );

}
