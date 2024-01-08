import styles from './sobre.module.css';

export default function Sobre() {
    return (
        <>

            <article className={styles.sobre_nos}>
                <div>
                    <h1 id="sobre">Sobre a Do Tour</h1>
                </div>
                <div>
                    <p>
                        Somos uma agência de viagens especializada em proporcionar experiências
                        inesquecíveis de conexão com a natureza. Se você busca ugir da agitação
                        urbana e mergulhar em destinos incriveis, cercados pela beleza selvagem do
                        mundo natural, então você está no lugar certo!
                    </p>
                    <p>
                        Na Do Tour, acreditamos que viajar pela natureza é uma jornada de
                        autodescoberta, uma oportunidade para renovar o espírito e nutrir a alma.
                        Combinando aventura e educação ambiental, nossos roteiros proporcionam uma
                        experiência única, onde cada passo é uma conexão com a grandiosidade e
                        fragilidade do mundo natural.
                    </p>
                    <p>
                        Então, se você está pronto para explorar o lado mais puro e exuberante do
                        mundo, venha conosco e descubra a magia das viagens naturais com a Do
                        Tour. Junte-se a nós para criar memórias duradouras enquanto contribuímos
                        para a proteção do nosso planeta para as futuras gerações. A aventura está
                        apenas começando!
                    </p>
                </div>
            </article>

        </>
    );
}