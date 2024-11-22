import '../CSS/HomePage.css';

const Home = () => {

    return (

        <>
            <div className="homePage">
                <header >
                    <h1 className="Header">Coding Notes</h1>
                </header>


                <div className='siteInfo'>

                    <p>
                        This site is a React JS version of an original vanilla HTML website I created for a boot camp I recently completed in web development coding/programming.
                    </p>

                    <p>
                       The site has pages for the different topics I have learned so far. Each page is split up into regular notes without large code snippets and a second page with code snippets.
                       I will continue to expand this site as I learn more about coding and add additional pages for new topics as well as new notes.
                    </p>

                </div>

            </div>
        </>
    );

};

export default Home;