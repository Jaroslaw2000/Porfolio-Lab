import component from '../assets/component0.png'
import decoration from '../assets/Decoration.png'
import instagram from '../assets/component.png'
import facebook from '../assets/component2.png'

const contacts = () => {
    return(
        <div className="contact-page">
            <div className="contact-img">
                <img src={component} alt="Component Image" />
            </div>
            <div className="contact-info">
                <h1>Skontaktuj się z nami</h1>
                <img src={decoration} alt="decoration"/>
                <div className="input-name-email">
                    <div>
                        <p>Wpisz swoje imię</p>
                        <input type="text" placeholder="imię"/>
                    </div>
                    <div>
                        <p>Wpisz swój e-mail</p>
                        <input type="email" placeholder="xyz@gmail.com"/>
                    </div>
                </div>
                <div className="input-message">
                    <p>Wpisz swoją wiadomość</p>
                    <input type="text" placeholder="wpisz swoją wiadomość"/>
                </div>
                <div className="footer">
                    <div className="footer-copyright">
                        <p>Copyright by Coders Lab</p>
                    </div>
                    <div className="footer-icons">
                        <img src={facebook} alt="facebook"/>
                        <img src={instagram} alt="instagram"/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default contacts;
