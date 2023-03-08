

export default function Footer( {Adress} ){

    return(

        <footer className="footer">
            <div className="footer__above ">
            <div className="container">
                <div>
                <h5 className="footer__description">
                     {Adress}
                </h5>
                <ul className="footer__list">
                    <li className="footer__item"><a href="" className="footer__link"><i ></i></a></li>
                    <li className="footer__item"><a href="" className="footer__link"><i ></i></a></li>
                    <li className="footer__item"><a href="" className="footer__link"><i ></i></a></li>
                </ul>
                </div>
            </div>
            </div>

            <div className="footer__below">
            <div className="container">
                <h6>
                &copy; Copyright All rights reserved.
                </h6>
            </div>
            </div>
        </footer>

    );


}