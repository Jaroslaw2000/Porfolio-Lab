import React, { useState, useEffect } from 'react';
import decoration from '../assets/Decoration.png';




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
            },
            {
                title: 'Fundacja "Bez domu"',
                mission: 'Pomoc dla osób nie posiadających miejsca zamieszkania.',
                needs: 'ubrania, jedzenie, ciepłe koce'
            },
            {
                title: 'Fundacja "Bez domu"',
                mission: 'Pomoc dla osób nie posiadających miejsca zamieszkania.',
                needs: 'ubrania, jedzenie, ciepłe koce'
            },
            {
                title: 'Fundacja "Bez domu"',
                mission: 'Pomoc dla osób nie posiadających miejsca zamieszkania.',
                needs: 'ubrania, jedzenie, ciepłe koce'
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
            },
            {
                title: 'Organizacja “Lorem Ipsum 3”',
                mission: 'Scelerisque in dictum non consectetur a erat nam.',
                needs: 'Mi, quis, hendrerit, dolor'
            },
            {
                title: 'Organizacja “Lorem Ipsum 3”',
                mission: 'Scelerisque in dictum non consectetur a erat nam.',
                needs: 'Mi, quis, hendrerit, dolor'
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
            },
            {
                title: 'Zbiórka “Lorem Ipsum 3”',
                mission: 'Scelerisque in dictum non consectetur a erat nam.',
                needs: 'Mi, quis, hendrerit, dolor'
            },
            {
                title: 'Zbiórka “Lorem Ipsum 3”',
                mission: 'Scelerisque in dictum non consectetur a erat nam.',
                needs: 'Mi, quis, hendrerit, dolor'
            },
            {
                title: 'Zbiórka “Lorem Ipsum 3”',
                mission: 'Scelerisque in dictum non consectetur a erat nam.',
                needs: 'Mi, quis, hendrerit, dolor'
            }
        ]
    }
};

const Content = ({ category, currentPage, itemsPerPage }) => {
    const { description, entries } = contentData[category];

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentEntries = entries.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="content">
            <p className="description">{description}</p>
            {currentEntries.map((entry, index) => (
                <div key={index} className="entry">
                    <div className="main-description">
                        <h2>{entry.title}</h2>
                        <p>Cel i misja: {entry.mission}</p>
                        <div className="description-need">
                            <p>Potrzeby: {entry.needs}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <div className="pagination">
            {pages.map(page => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={page === currentPage ? 'active' : ''}
                >
                    {page}
                </button>
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
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(contentData[category].entries.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [category]);

    return (
        <div className="container" id="organizations">
            <h1>Komu pomagamy?</h1>
            <img src={decoration} alt="decoration" />
            <Navbar setCategory={setCategory} />
            <Content category={category} currentPage={currentPage} itemsPerPage={itemsPerPage} />
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    );
};

export default WhoesHelp;