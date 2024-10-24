import Navigation from "../Components/Navigation";
import "../CSS/Header.css";
import mongoDBNotesmkdn from "../MongoDB/MongoDBNotes";
import PageSetup from "../Components/PageSetup";
export default function MongoDB() {

    return (

        <>
            <h1 className="Header">MongoDB</h1>
            <Navigation />
            <PageSetup
            markdownContent={mongoDBNotesmkdn}
             />
            
                

        </>
    );

}
