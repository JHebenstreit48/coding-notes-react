interface TextPart {
  text: string;
  emphasis: boolean;
}

interface ListItem {
  content: TextPart[];
}

interface DynamicNotes {

  items: ListItem[];
}

export default function DynamicNotes({ items }: DynamicNotes) {

  return (

    <>

      <div className="card">

        <h2 id="card-header">Notes without Code</h2>
        <ul>
          {items.map((item, index) => (
            <li className="list-items" key={index}>
              {item.content.map((part, idx) =>
                part.emphasis ? (
                  <span key={idx} className="emphasis">{part.text} </span>
                ) : (
                  <span key={idx}>{part.text} </span>
                )
              )}
            </li>
          ))}
        </ul>

      </div>


    </>


  )
}