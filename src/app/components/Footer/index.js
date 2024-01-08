import styles from './footer.module.css';


export default function Footer() {
    return (
        <>
            <footer className={styles.site_footer}>
                <div className="container">
                    <div className="row">
                        <div id="contato" className={styles.container_form}>
                            <h2 style={{ color: "#FFF2E7" }}>Entre em Contato</h2>
                            <div className="mb-3">
                                <label
                                    style={{ width: 400, color: "#FFF2E7" }}
                                    htmlFor="exampleFormControlInput1"
                                    className="form-label"
                                >
                                    Email:
                                </label>
                                <input
                                    type="email"
                                    className="form-control form-input"
                                    id="exampleFormControlInput1"
                                    placeholder="email@gmail"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    style={{ width: 400, color: "#FFF2E7" }}
                                    htmlFor="exampleFormControlTextarea1"
                                    className="form-label"
                                >
                                    Digite sua Dúvida:
                                </label>
                                <textarea
                                    className="form-control form-input"
                                    id="exampleFormControlTextarea1"
                                    rows={5}
                                    defaultValue={""}
                                />
                            </div>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <h6>Links rápidos</h6>
                            <ul className={styles.footer_links}>
                                <li>
                                    <a href="#melhores-destinos">Melhores destinos</a>
                                </li>
                                <li>
                                    <a href="#">Politica de privacidade</a>
                                </li>
                                <li>
                                    <a href="Promocoes.html">Promoções em alta</a>
                                </li>
                                <li>
                                    <a href="#sobre">Sobre nós</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className={styles.copyright_text}>
                                Copyright © 2023 All Rights Reserved by Do Tour.
                            </p>
                        </div>
                    </div>
                    <div>
                        <a style={{ width: 60 }} className='mx-2' href="https://www.facebook.com/" target="_blank">
                        <i className="fa-brands fa-square-facebook"></i>
                        </a>

                        <a style={{ width: 60 }} href="https://twitter.com/" target="_blank">
                        <i className="fa-brands fa-x-twitter"></i>
                        </a>
                    </div>
                </div>
            </footer>

        </>
    );
}