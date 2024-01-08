import React from 'react';
import styles from './card.module.css';

const cards = [
    {
        id: 1,
        destino: 'Fernando de Noronha',
        imgUrl: 'https://th.bing.com/th/id/OIP.8xXpo17vRbI0NpVdgyYoOAHaE7?w=280&h=187&c=7&r=0&o=5&pid=1.7',
        descricao: 'Fernando de Noronha, paraíso tropical no Atlântico, encanta com praias deslumbrantes, águas cristalinas e vida marinha única. Destino preservado e exclusivo, ideal para amantes da natureza.'
    },
    {
        id: 2,
        destino: 'Machu Picchu',
        imgUrl: 'https://th.bing.com/th/id/OIP.3_GSVJMltaYlWrN3bzcVEgHaE9?w=276&h=185&c=7&r=0&o=5&pid=1.7',
        descricao: 'Machu Picchu, joia arqueológica nos Andes, fascina com suas ruínas incas impressionantes, cenário montanhoso espetacular e aura mística. Destino icônico para os amantes da história e da natureza.'
    },
    {
        id: 3,
        destino: 'MonteVerde',
        imgUrl: 'https://th.bing.com/th/id/OIP.267dnXnFxCK0zCoNgg-ZdgHaE8?w=302&h=201&c=7&r=0&o=5&pid=1.7',
        descricao: 'Monte Verde, em Costa Rica, é uma reserva nublada única. Rodeada por florestas tropicais, oferece biodiversidade excepcional, trilhas emocionantes e uma experiência imersiva na natureza.'
    },
    {
        id: 4,
        destino: 'Patagônia',
        imgUrl: 'https://th.bing.com/th/id/OIP.tSQdIMKk4oLLhDjAe3N03gHaE8?w=278&h=185&c=7&r=0&o=5&pid=1.7',
        descricao: 'Patagônia, vasta região compartilhada por Chile e Argentina, deslumbra com sua beleza selvagem. Glaciares imponentes, lagos cristalinos e montanhas majestosas definem.'
    },
];

const CardDestino = () => {
    return (

        <>
            <div className={styles.cardContainer}>
                <h3 className={styles.cardTitle}>Os Melhores Destinos</h3>
                <div className={styles.container}>
                    {cards.map((card) => (
                        <div className="card" style={{ width: "18rem" }} key={card.id}>
                            <img src={card.imgUrl} className="card-img-top" alt={card.destino} />
                            <div className="card-body">
                                <h5 className="card-title">{card.destino}</h5>
                                <p className="card-text">
                                    {card.descricao}
                                </p>
                                <a href="#" className="btn btn-warning">
                                    Visitar
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default CardDestino;
