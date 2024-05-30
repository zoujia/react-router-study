export default function Contact() {
    const contact = {
        first: "Your",
        last: "Name",
        avatar: "https://placekitten.com/g/200/200",
        twitter: "your_handle",
        notes: "Some notes",
        favorite: true,
    };

    return (
        <div id="contact">
            <div>
                <img
                    key={contact.avatar}
                    src={contact.avatar || null}
                />
            </div>
            <div>
                {/* TODO: */}
            </div>
        </div>
    )
}