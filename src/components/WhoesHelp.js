import React, { useState } from 'react';

import decoration from '../assets/Decoration.png'

const contentData = {
    fundacjom: {
        description: "W naszej bazie znajdziesz listę zweryfikowanych fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
        entries: [
            {
                title: 'Fundacja "Dbam o Zdrowie"',
                mission: 'Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
                needs: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
            },
            {
                title: 'Fundacja "Dla dzieci"',
                mission: 'Pomoc dzieciom z ubogich rodzin.',
                needs: 'ubrania, meble, zabawki'
            },
            {
                title: 'Fundacja "Bez domu"',
                mission: 'Pomoc dla osób nie posiadających miejsca zamieszkania.',
                needs: 'ubrania, jedzenie, ciepłe koce'
            }
        ]
    },
    organizacjom: {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        entries: [
            {
                title: 'Organizacja “Lorem Ipsum 1”',
                mission: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
                needs: 'Egestas, sed, tempus'
            },
            {
                title: 'Organizacja “Lorem Ipsum 2”',
                mission: 'Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.',
                needs: 'Ut, aliquam, purus, sit, amet'
            },
            {
                title: 'Organizacja “Lorem Ipsum 3”',
                mission: 'Scelerisque in dictum non consectetur a erat nam.',
                needs: 'Mi, quis, hendrerit, dolor'
            }
        ]
    },
    zbiórkom: {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        entries: [
            {
                title: 'Zbiórka “Lorem Ipsum 1”',
                mission: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
                needs: 'Egestas, sed, tempus'
            },
            {
                title: 'Zbiórka “Lorem Ipsum 2”',
                mission: 'Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.',
                needs: 'Ut, aliquam, purus, sit, amet'
            },
            {
                title: 'Zbiórka “Lorem Ipsum 3”',
                mission: 'Scelerisque in dictum non consectetur a erat nam.',
                needs: 'Mi, quis, hendrerit, dolor'
            }
        ]
    }
};

const Content = ({ category }) => {
    const { description, entries } = contentData[category];

    return (
        <div className="content">
            <p>{description}</p>
            {entries.map((entry, index) => (
                <div key={index} className="entry">
                    <h2>{entry.title}</h2>
                    <p>Cel i misja: {entry.mission}</p>
                    <p>Potrzeby: {entry.needs}</p>
                </div>
            ))}
        </div>
    );
};

const Navbar = ({ setCategory }) => {
    return (
        <div className="navbar">
            <button onClick={() => setCategory('fundacjom')}>Fundacjom</button>
            <button onClick={() => setCategory('organizacjom')}>Organizacjom pozarządowym</button>
            <button onClick={() => setCategory('zbiórkom')}>Lokalnym zbiórkom</button>
        </div>
    );
};

const WhoesHelp = () => {
    const [category, setCategory] = useState('fundacjom');

    return (
        <div className="container">
            <h1>Komu pomagamy?</h1>
            <img src={decoration} alt="decoration"/>
            <Navbar setCategory={setCategory} />
            <Content category={category} />
        </div>
    );
};

export default WhoesHelp;

