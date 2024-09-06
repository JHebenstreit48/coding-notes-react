import Header from "../components/Header/Header";
import Navigation from "../components/Header/Navigation";
import '../CSS/Card.css';
import '../CSS/Page.css';
export default function node() {

    return (

        <>
            <Header text="Node" />
            <Navigation />
            {/* <DynamicNotes items={ items } />
            <DynamicNotesCode items={ itemsWithCode } /> */}
        </>
    );

}
