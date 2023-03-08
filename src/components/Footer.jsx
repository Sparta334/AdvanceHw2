
export default function Footer( {Adress} ){

    return(

        <footer className="footer">
            <div className="footer__above py-5">
            <div className="container">
                <div className="row my-3">
                <h5 className="footer__description col-lg-8">
                     {Adress}
                </h5>
                <ul className="footer__list col-lg-4">
                    <li className="footer__item"><a href="" className="footer__link"><i className="fab fa-facebook-f"></i></a></li>
                    <li className="footer__item"><a href="" className="footer__link"><i className="fab fa-google-plus-g"></i></a></li>
                    <li className="footer__item"><a href="" className="footer__link"><i className="fab fa-linkedin-in"></i></a></li>
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