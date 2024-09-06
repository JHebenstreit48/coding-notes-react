import Header from "../components/Header/Header";
import Navigation from "../components/Header/Navigation";
// import DynamicNotes from "../components/Notes/DynamicNotes";
// import items from "../components/Notes/HTMLNotes";
export default function typescript() {

    return (

        <>
            <Header text="TypeScript" />
            <Navigation />
            {/* <DynamicNotes items={items} /> */}
            {/* <DynamicNotesCode items={itemsWithCode} /> */}
        </>
    );

}
