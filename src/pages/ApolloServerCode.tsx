import CodePageSetup from '../Components/CodePageSetup';
import Header from '../Components/Header';
import '../CSS/Header.css';

const ApolloServerCode = () => {
    const markdownFilePath = '/ApolloServerNotes/ApolloServerCode.md';

    return (
        <>

            <Header text="Apollo Server Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default ApolloServerCode;
