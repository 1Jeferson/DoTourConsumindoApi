import React from 'react';
import styles from './card.module.css';
import Link from 'next/link';



export default async function CardDestino() {
    const cards = await fetch('https://dotour-deploy.onrender.com/destino/alldestinos').then(res => res.json());

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
                                <Link href={{
                                    pathname: `/Detalhes/`,
                                    query: { id: card.id },
                                }}
                                    as={`/Detalhes/${card.id}`}
                                    className="btn btn-warning">
                                    Detalhes
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
