import Header from "../Components/Header";
import PageSetup from "../Components/PageSetup";

const MernAndAuth = () => {
    const markdownFilePath = "/MernAndAuth/MernAndAuth.md";

    return (

        <>
             <Header text="MERN Stack" />
            <PageSetup
            filePath={markdownFilePath}
            markdownContent="markdownContent"            
             />

        </>
    );
}

export default MernAndAuth;
