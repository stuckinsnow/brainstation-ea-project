import { useNavigate } from "react-router-dom";

function ContactPage(){
    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        alert('thank your for submitting the form');
        navigate('/');
    }

    return (
        <div>
            <h2>Contact Page</h2>
            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="message" name="message" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ContactPage;