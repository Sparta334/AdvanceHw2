import { Row, Col } from "antd";
import style from "./Article.module.css"

export default function Article(){

    return(
        <Row className={style.description__layout}>
            <Col xxl={24}>
            <Row className={style.description__Row} center ="xxl">
                <Col span={24}>
                <h1>DESCRIPTIONS</h1>
                </Col>
                <Col span={24}>
                <hr className="divider--light"/>
                </Col>
                <p className={style.description__content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laborum
                    corrupti ut iure aliquam.I am sexy guy I am sexy guy I am sexy guy I am sexy guy I am sexy guy I am sexy guy 
                    I am sexy guy I am sexy guy I am sexy guy I am sexy guy I am sexy guy I am sexy guy I am sexy guy I am sexy
                    I am sexy guy I am sexy guy I am sexy guy I am sexy guy I am sexy guy I am sexy guy I am sexy guy I am sexy guy 
                    I am sexy guy I am sexy guy I am sexy guy I am sexy guy I am sexy guy I am sexy guy I am sexy guy I am sexy guy 
                    I am sexy guy I am sexy guy I am sexy guy I am sexy guy I am sexy guy I am sexy guy I am sexy guy I am sexy guy 
                    I am sexy guy I am sexy guy I am sexy guy I am sexy guy I am sexy guy I am sexy guy I am sexy guy 
                    I am sexy guy I am sexy guy I am sexy guy I am sexy guy I am sexy guy I am sexy guy I am sexy guy 
                    I am sexy guy I am sexy guy I am sexy guy I am sexy guy I am sexy guy I am sexy guy I am sexy guy I am sexy guy 
                    I am sexy guy I am sexy guy I am sexy guy I am sexy guy I am sexy guy I am sexy guy 
                    I am sexy guy I am sexy guy  HAHAAHHHHHHHHHHHHHHHHHHHAHHAHAHAAHAH</p>

            </Row>
            </Col> 
        </Row>

    );


}