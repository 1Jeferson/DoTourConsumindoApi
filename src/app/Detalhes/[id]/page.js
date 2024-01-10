export default async function Detalhes({ params }) {

const card = await fetch(`https://dotour-deploy.onrender.com/destino/${params.id}`).then((res) => res.json())

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 mb-5">
                    <div className="card">
                        <img src={card.imgUrl} className="card-img-top" alt="Imagem do Destino" />
                        <div className="card-body">
                            <h5 className="card-title">{card.destino}</h5>
                            <p className="card-text">{card.descricao}</p>
                            <p className="card-text"><strong>Local:</strong> {card.local}</p>
                            <p className="card-text">
                                <strong>Preço:</strong> R${card.preco}
                            </p>
                            <a href="#" className="btn btn-warning">
                                Reservar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}