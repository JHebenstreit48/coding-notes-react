import HTMLCodeExamples from "../components/HTMLCodeExamples";
import HTMLNotes from "../components/HTMLNotes";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
export default function HTML() {

    return(

        <>
        <Header text="HTML"/>
        <Navigation />
        <h2>Notes without Code</h2>
        <HTMLNotes />
        <h1>Code Examples</h1>
        <HTMLCodeExamples />
        </>
    );

}