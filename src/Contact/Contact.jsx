import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Contact({ data: { name, number, id }, onDelete }) {
    return (
        <>
           
            <p> <FaUser /> {name}</p>
            <p> <BsFillTelephoneFill /> {number}</p>
            <button onClick={() => onDelete(id)}>
            Delete</button>
        </>
    )
}