import Header from "../components/Header/Header";
import Navigation from "../components/Header/Navigation";
import '../CSS/Card.css';
import '../CSS/PageCSS.css';
export default function apis() {

    return (

        <>
            <Header text="APIs" />
            <Navigation />
            {/* <DynamicNotes items={ items } />
            <DynamicNotesCode items={ itemsWithCode } /> */}
        </>
    );

}
