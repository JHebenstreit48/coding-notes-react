import Navigation from "../Components/Navigation";
import "../CSS/Header.css";
import mongoDBNoteswithCodeMkdn from "../MongoDB/MongoDBNotesWithCode";
import PageSetupCode from "../Components/CodePageSetup";
export default function MongoDBCode() {

    return (

        <>
            <h1 className="Header">MongoDB</h1>
            <Navigation />
            <PageSetupCode
            markdownContentCode={mongoDBNoteswithCodeMkdn}
            />
            
                

        </>
    );

}
