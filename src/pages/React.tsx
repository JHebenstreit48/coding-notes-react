import DynamicNotes from "../components/Notes/DynamicNotes";
import items from "../components/Notes/ReactNotes";
import '../CSS/PageCSS.css';


export default function React() {

    return (

        <>
            <DynamicNotes items={items} />
        </>
    );

}
