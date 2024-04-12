import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from './Contact.module.css'

export default function Contact({ data: { name, number, id }, onDelete }) {
    return (
        <>
           
            <p className={css.ctext}> <FaUser /> {name}</p>
            <p className={css.ctext}> <BsFillTelephoneFill /> {number}</p>
            <button onClick={() => onDelete(id)}>
            Delete</button>
        </>
    )
}