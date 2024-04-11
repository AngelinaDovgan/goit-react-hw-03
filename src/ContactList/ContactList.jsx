import Contact from "../Contact/Contact"
export default function ContactList({ list, onDelete }) {
    return (
    
        <ul>
            {list.map((item) => (
                        <li key={item.id}>
                        <Contact
                        data={item}
                        name={item.name}
                        number={item.number} onDelete={onDelete} />
                    </li> ))}
        </ul>
    )
}