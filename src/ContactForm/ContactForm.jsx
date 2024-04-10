export default function ContactForm({onAdd}) {
    const handleSubmit = e => {
        e.preventDefault();
        onAdd({
            id: Date.now(),
            text: e.target.elements.text.value
        })
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