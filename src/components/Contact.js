import component from '../assets/component0.png';
import decoration from '../assets/Decoration.png';
import instagram from '../assets/component.png';
import facebook from '../assets/component2.png';
import { useState } from "react";

const Contacts = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [error, setError] = useState({ name: '', email: '', text: '' });

    const handleNameChange = (e) => { setName(e.target.value) };
    const handleEmailChange = (e) => { setEmail(e.target.value) };
    const handleTextChange = (e) => { setText(e.target.value) };

    const handleSubmit = (e) => {
        e.preventDefault();
        let formErrors = { name: '', email: '', text: '' };
        let validation = true;

        if (!name.trim()) {
            formErrors.name = 'Proszę wpisać swoje imię';
            validation = false;
        }

        if (!email.trim()) {
            formErrors.email = 'Proszę wpisać swój e-mail';
            validation = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formErrors.email = 'Proszę wpisać prawidłowy e-mail';
            validation = false;
        }

        if (!text.trim()) {
            formErrors.text = 'Proszę wpisać swoją wiadomość';
            validation = false;
        }

        setError(formErrors);

        if (validation) {
            console.log('Wiadomość wysłana')
            alert('Wiadomość wysłana');
        }
    };

    return (
        <div className="contact-page" id="contact">
            <div className="contact-img">
                <img src={component} alt="Component Image" />
            </div>
            <div className="contact-info">
                <h1>Skontaktuj się z nami</h1>
                <img src={decoration} alt="decoration" />
                <form onSubmit={handleSubmit}>
                    <div className="input-name-email">
                        <div>
                            <p>Wpisz swoje imię</p>
                            <input
                                type="text"
                                placeholder="imię"
                                value={name}
                                onChange={handleNameChange}
                            />
                            {error.name && <p className="error">{error.name}</p>}
                        </div>
                        <div>
                            <p>Wpisz swój e-mail</p>
                            <input
                                type="email"
                                placeholder="xyz@gmail.com"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            {error.email && <p className="error">{error.email}</p>}
                        </div>
                    </div>
                    <div className="input-message">
                        <p>Wpisz swoją wiadomość</p>
                        <input
                            type="text"
                            placeholder="wpisz swoją wiadomość"
                            value={text}
                            onChange={handleTextChange}
                        />
                        {error.text && <p className="error">{error.text}</p>}
                    </div>
                    <button className="auth-button-contact" type="submit">Wyślij</button>
                </form>
                <div className="footer">
                    <div className="footer-copyright">
                        <p>Copyright by Coders Lab</p>
                    </div>
                    <div className="footer-icons">
                        <img src={facebook} alt="facebook" />
                        <img src={instagram} alt="instagram" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
