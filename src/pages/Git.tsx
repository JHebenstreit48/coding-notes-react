import DynamicNotes, { DynamicNotesCode } from "../Components/DynamicNotes";
import Header from "../Components/Header";
import Navigation from "../Components/Navigation";
import items from "../Components/GitNotes";
import itemsWithCode from "../Components/GitNotesWithCode";
export default function git() {

    return (

        <>
            <Header text="Git" />
            <Navigation />
            <DynamicNotes items={ items } />
            <DynamicNotesCode items={ itemsWithCode } />

        </>
    );

}
