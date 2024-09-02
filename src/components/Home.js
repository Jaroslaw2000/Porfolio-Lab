import React from 'react';
import {Link} from 'react-scroll'
import decoration from '../assets/Decoration.png';
import homeHeroImage from '../assets/Home-Hero-Image.jpg';
import icon1 from '../assets/Icon1.png';
import icon2 from '../assets/Icon2.png';
import icon3 from '../assets/Icon3.png';
import icon4 from '../assets/Icon4.png';
import people from '../assets/People.png';
import WhoesHelp from "./WhoesHelp";
import Contact from "./Contact";
import Header from "./Header";

const Home = () => {
    return (
        <div>
            <Header/>
            <main className="main-content" id="home">
                <div className="main-image">
                    <img src={homeHeroImage} alt="Box with items"/>
                </div>
                <div className="main-text">
                    <h2>Zacznij pomagać!</h2>
                    <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                    <img src={decoration} alt="decoration"/>
                    <div className="main-buttons">
                        <button className="main-button">ODDAJ RZECZY</button>
                        <button className="main-button">ZORGANIZUJ ZBIÓRKĘ</button>
                    </div>
                </div>
            </main>
            <section className="column-section" id="about">
                <div className="column-tabela">
                    <ul className="column-ul">
                        <li className="column-li">
                            <h1>10</h1>
                            <h2>Oddanych Worków</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere fugiat laudantium magni quasi quia ut!</p>
                        </li>
                        <li className="column-li">
                            <h1>5</h1>
                            <h2>Wspartych Organizacji</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere fugiat laudantium magni quasi quia ut!</p>
                        </li>
                        <li className="column-li">
                            <h1>7</h1>
                            <h2>Zorganizowanych Zbiórek</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere fugiat laudantium magni quasi quia ut!</p>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="column-section-2" id="about-us">
                <div className="title">
                    <h1>Wystarczą 4 proste kroki</h1>
                    <img src={decoration} alt="Decoration"/>
                </div>
                <div className="column-2">
                    <div className="column-ul-2">
                        <div className="column-li">
                            <img className="column-2-icons" src={icon1} alt="icon"/>
                            <h2> Wybierz rzeczy</h2>
                            <div className="line"></div>
                            <p>ubrania, zabawki, sprzęty, inne</p>
                        </div>
                        <div className="column-li">
                            <img className="column-2-icons" src={icon2} alt="icon"/>
                            <h2> Spakuj je</h2>
                            <div className="line"></div>
                            <p>skorzystaj z worków na śmieci</p>
                        </div>
                        <div className="column-li">
                            <img className="column-2-icons" src={icon3} alt="icon"/>
                            <h2> Zdecyduj komu chcesz pomóc</h2>
                            <div className="line"></div>
                            <p>wybierz zaufane miejsce</p>
                        </div>
                        <div className="column-li">
                            <img className="column-2-icons" src={icon4} alt="icon"/>
                            <h2> Zamów kuriera</h2>
                            <div className="line"></div>
                            <p>kurier przyjdzie w dogodnym terminie</p>
                        </div>
                    </div>

                </div>
                <div className="main-buttons">
                    <button className="main-button">ODDAJ RZECZY</button>
                </div>
            </section>
            <section className="about-us">
                <div className="about-us-content">
                    <h1>O nas</h1>
                    <img src={decoration} alt="decoration"/>
                    <h2>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</h2>
                </div>
                <div className="about-us-image">
                    <img src={people} alt="people"/>
                </div>
            </section>
            <WhoesHelp/>
            <Contact/>
        </div>
    );
}

export default Home;
