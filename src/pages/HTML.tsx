import HTMLCodeExamples from "../components/HTMLCodeExamples";
import HTMLNotes from "../components/HTMLNotes";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import '../CSS/PageCSS.css'
import DynamicNotes from "../components/DynamicNotes";

export default function HTML() {

    return (

        <>
        <Header text="HTML"/>
        <Navigation />
        <DynamicNotes items={ HTMLNotes } />
        <h1>Code Examples</h1>
        <HTMLCodeExamples />
        </>
    );

}