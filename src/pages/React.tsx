import Header from "../Components/HeaderNavFooter/Header";
import Navigation from "../Components/HeaderNavFooter/Navigation";
import DynamicNotes, { DynamicNotesCode } from "../Components/OtherComponents/DynamicNotes";
import items from "../Components/ReactNotes/ReactNotes";
import itemsWithCode from "../Components/ReactNotes/ReactCodeExamples";
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
