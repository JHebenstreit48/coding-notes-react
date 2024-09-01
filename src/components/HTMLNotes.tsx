// Define the types for each text part and for the list item
interface TextPart {
  text: string;
  emphasis: boolean;
}

interface ListItem {
  content: TextPart[];
}

// Define the functional component with TypeScript and use the default export function syntax
export default function htmlNotesComponent() {
  // Define the list items with dynamic content
  const items: ListItem[] = [
    {
      content: [
        { text: 'Hypertext Markup Language (HTML)', emphasis: true },
        { text: ' is one of the three cornerstone languages.', emphasis: false },
      ],
    },
    {
      content: [
        { text: 'HTML', emphasis: true },
        { text: ' is used to create the ', emphasis: false },
        { text: 'structure', emphasis: true },
        { text: ' of a webpage.', emphasis: false },
      ],
    },
    {
      content: [
        { text: 'It is made up of ', emphasis: false },
        { text: 'elements', emphasis: true },
        { text: ' which work together to provide content and the basic framework for all pages on the web.', emphasis: false },
      ],
    },
  ];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
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
  );
}
