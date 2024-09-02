import '../CSS/Header.css'

interface Header {
    text: string;
}

export default function Header({ text }: Header) {
    return (
        <>
            <div>
            <h1 className='header'>{ text }</h1>
            </div>
            
        </>
    )
}