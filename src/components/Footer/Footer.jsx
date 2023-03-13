import {Row , Col} from 'antd'
import { FacebookOutlined, GooglePlusOutlined , LinkedinOutlined} from "@ant-design/icons"
import style from "./Footer.module.css"

export default function Footer( {Adress} ){

    return(

        <footer className={style.footer}>
            <div className={style.footer__above}>
            <div className="container">
                
                <Row className={style.footer__Row} >
                    <Col lg={16} xs={24} >
                        <h5 className={style.footer__description}>
                            {Adress}
                        </h5>
                    </Col>
                    <Col lg={8 } xs={24} >
                        <ul className={style.footer__list}>
                            <li className={style.footer__item}><a href="" className={style.footer__link}><FacebookOutlined className={style.footer_Icon} /></a></li>
                            <li className={style.footer__item}><a href="" className={style.footer__link}><GooglePlusOutlined className={style.footer_Icon} /></a></li>
                            <li className={style.footer__item}><a href="" className={style.footer__link}><LinkedinOutlined className={style.footer_Icon} /></a></li>
                        </ul>
                    </Col>
                </Row>
            </div>
            </div>

            <div className={style.footer__below}>
            <div className="container">
                <h6>
                &copy; Copyright All rights reserved.
                </h6>
            </div>
            </div>
        </footer>

    );


}