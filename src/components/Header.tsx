import "../../src/index.css"
// import "../css/header.css"

interface Header {
    text: string;
}

export default function Header({ text }: Header) {
    return (
        <>
            <div>
            <h1>{ text }</h1>
            </div>
            
        </>
    )
}