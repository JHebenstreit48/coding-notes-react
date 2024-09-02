import HTMLCodeExamples from "../components/HTMLCodeExamples";
import Header from "../components/Header";
import '../CSS/PageCSS.css'
import DynamicNotes from "../components/DynamicNotes";
import { HTMLNotes } from "../components/HTMLNotes";

export default function HTML() {

    return (

        <>
        <Header text="HTML"/>
        <DynamicNotes items={ HTMLNotes} />
        <h1>Code Examples</h1>
        <HTMLCodeExamples />
        </>
    );

}