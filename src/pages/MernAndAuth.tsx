import Navigation from "../Components/Navigation";
import "../CSS/Header.css";
import PageSetup from "../Components/PageSetup";

const MernAndAuth = () => {
    const markdownFilePath = "./MernAndAuth/MernAuthNotes.md";

    return (

        <>
            <h1 className="Header">MERN Stack</h1>
            <Navigation />
            <PageSetup
            filePath={markdownFilePath}
            markdownContent="markdownContent"            
             />

        </>
    );
}

export default MernAndAuth;
