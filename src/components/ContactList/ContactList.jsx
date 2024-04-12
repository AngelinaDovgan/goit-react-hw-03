import Contact from "../Contact/Contact"
import css from './ContactList.module.css'

export default function ContactList({ list, onDelete }) {
    return (
    
        <ul className={css.mainlist}>
            {list.map((item) => (
                <li key={item.id} className={css.listitem}>
                        <Contact
                        data={item}
                        name={item.name}
                        number={item.number} onDelete={onDelete} />
                    </li> ))}
        </ul>
    )
}