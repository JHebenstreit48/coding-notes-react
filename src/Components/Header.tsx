import "../CSS/Header.css";
import Navigation from "./Navigation";

interface Header {
  text: string;
}

export default function Header({ text }: Header) {
  return (
    <>
      <div>
        <h1 className="Header">{text}</h1>
        <Navigation />
      </div>

    </>
  );
}
