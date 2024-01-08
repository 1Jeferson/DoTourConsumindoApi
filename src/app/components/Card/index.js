import React from 'react';
import styles from './card.module.css';

const cards = [
    {
        id: 1,
        destino: 'Fernando de Noronha',
        imgUrl: 'https://th.bing.com/th/id/OIP.ksPPT3WCJP8akdf1JbvqvAHaE8?w=290&h=194&c=7&r=0&o=5&pid=1.7'
    },
    {
        id: 2,
        destino: 'Machu Picchu',
        imgUrl: 'https://th.bing.com/th/id/OIP.ksPPT3WCJP8akdf1JbvqvAHaE8?w=290&h=194&c=7&r=0&o=5&pid=1.7'
    },
];

const Card = () => {
    return (
        <div className={styles.container}>
            {cards?.map((card) => (
                <div key={card.id} className={styles.card}>
                    <img src={card.imgUrl} alt={card.destino} />
                    <div className={styles.card_title}>
                        <p>{card.destino}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Card;
