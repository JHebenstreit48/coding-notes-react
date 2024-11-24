import Header from '../Components/Header';
import '../CSS/HomePage.css';

const Home = () => {

    return (

        <>
        
                <Header text="Coding Notes" />

                <div className='siteInfo'>

                    <p className='siteInfoContent'>
                        This site is a React JS version of an original vanilla HTML website I created for a boot camp I recently completed in web development coding/programming.
                    </p>

                    <p className='siteInfoContent'>
                       The site has pages for the different topics I have learned so far. Each page is split up into regular notes without large code snippets and a second page with code snippets.
                       I will continue to expand this site as I learn more about coding and add additional pages for new topics as well as new notes.
                    </p>

                </div>
        </>
    );

};

export default Home;