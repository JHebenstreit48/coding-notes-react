import "../CSS/Header.css";

interface Header {
  text: string;
}

export default function Header({ text }: Header) {
  return (
    <>
      <h1 className="Header">{text}</h1>
    </>
  );
}
