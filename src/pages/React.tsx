import Header from "../Components/Header";
import Navigation from "../Components/Navigation";
import DynamicNotes, { DynamicNotesCode } from "../Components/DynamicNotes";
import items from "../Components/ReactNotes";
import itemsWithCode from "../Components/ReactCodeExamples";


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
