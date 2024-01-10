import React from 'react';
import styles from './card.module.css';

export default async function Card() {
    const cards = await fetch('https://dotour-deploy.onrender.com/destino/alldestinos').then(res => res.json());

    return (
        <div id="melhores-destinos" className={styles.container}>
            {cards.map((card) => (
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


