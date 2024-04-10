import Contact from "../Contact/Contact"
export default function ContactList({ list }) {
    return (
    
        <ul>
            {list.map((item) => (
                        <li key={item.id}>
                        <Contact
                        data={item} 
                        name={item.name}
                        number={item.number} />
                    </li> ))}
        </ul>
    )
}