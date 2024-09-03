import '../../CSS/Header.css';

interface Header {
    text: string;
}

export default function Header({ text }: Header) {
    return (
        <>
            <div>

                <header>
                    <div>
                    <h1 className='Header'>{ text }</h1>
                    </div>
                </header>
            
            </div>
            
        </>
    )
}
