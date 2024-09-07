import Header from "../Components/Header/Header";
import Navigation from "../Components/Header/Navigation";
import DynamicNotes, { DynamicNotesCode } from "../Components/Notes/DynamicNotes";
import  items from "../Components/Notes/ReactNotes/ReactNotes";
import itemsWithCode from "../Components/Notes/ReactNotes/ReactCodeExamples";
import '../CSS/Page.css';
import '../CSS/Card.css';


export default function React() {

    return (

        <>
            <Header text="React" />
            <Navigation />
            <DynamicNotes items={items} />
            <DynamicNotesCode items={itemsWithCode} />
        </>
    );

}
