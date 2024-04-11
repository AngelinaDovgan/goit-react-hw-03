export default function ContactForm({onAdd}) {
    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const number = e.target.elements.number.value;
        onAdd({
            id: Date.now(),
            name: name,
            number: number
        });
        e.target.reset();
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" />
            <input type="text" name="number" />
            <button type="submit">Add contact</button>
        </form>
    );
}