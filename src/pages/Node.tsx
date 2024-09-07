import Header from "../Components/Header/Header";
import Navigation from "../Components/Header/Navigation";
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
