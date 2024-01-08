import React from 'react';
import styles from './card.module.css';

const cards = [
    {
        id: 1,
        destino: 'Fernando de Noronha',
        imgUrl: 'https://th.bing.com/th/id/OIP.8xXpo17vRbI0NpVdgyYoOAHaE7?w=280&h=187&c=7&r=0&o=5&pid=1.7'
    },
    {
        id: 2,
        destino: 'Machu Picchu',
        imgUrl: 'https://th.bing.com/th/id/OIP.3_GSVJMltaYlWrN3bzcVEgHaE9?w=276&h=185&c=7&r=0&o=5&pid=1.7'
    },
    {
        id: 3,
        destino: 'MonteVerde',
        imgUrl: 'https://th.bing.com/th/id/OIP.267dnXnFxCK0zCoNgg-ZdgHaE8?w=302&h=201&c=7&r=0&o=5&pid=1.7'
    },
    {
        id: 4,
        destino: 'Patagônia',
        imgUrl: 'https://th.bing.com/th/id/OIP.tSQdIMKk4oLLhDjAe3N03gHaE8?w=278&h=185&c=7&r=0&o=5&pid=1.7'
    },
];

const Card = () => {
    return (
        <div id="melhores-destinos" className={styles.container}>
            {cards?.map((card) => (
                <div key={card.id} className={styles.card}>
                    <img src={card.imgUrl} alt={card.destino} />
                    <div>
                        <p className={styles.card_title}>{card.destino}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Card;
