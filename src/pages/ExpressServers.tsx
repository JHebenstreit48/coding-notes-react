import Header from "../Components/HeaderNavFooter/Header";
import Navigation from "../Components/HeaderNavFooter/Navigation";
import '../CSS/Card.css';
import '../CSS/Page.css';
export default function servers() {

    return (

        <>
            <Header text="Express Servers" />
            <Navigation />
            {/* <DynamicNotes items={ items } />
            <DynamicNotesCode items={ itemsWithCode } /> */}
        </>
    );

}
