import React from 'react';
import styles from './card.module.css';



export default async function CardDestino() {
    const cards = await fetch('http://localhost:8080/destino/alldestinos').then(res => res.json());

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
