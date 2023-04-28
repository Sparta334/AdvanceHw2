
import {Row , Col} from "antd"

import style from "./ProductList.module.css"

export default function ProductList( {IMAGES , data} ){

    return(
            <div className={style.image__layout}>
                    <Row  gutter={[8, 10]} justify="center" >

                        <Col>
                            <h1 className={style.text_center}>{IMAGES} </h1>
                        </Col>
                        <Col span={24}>
                            <hr className="divider--dark"/>
                        </Col>
                    </Row>
                    <Row gutter={[8, 10]}>

                        {
                            data.map( product=>
                                
                                <Col key = { product.id } 
                                    sm = {{span:12}}
                                    lg = {{span: 8}}
                                    xl = {{span :6}}
                                    xxl = {{span:4}}
                                >
                                    
                                    <div className={style.image}>
                                    <a href="" className={style.image__link}>
                                        <img src={product.url} alt="" className={style.image__style}/>
                                    </a>
                                    <p className={style.image_title}>{product.image_title}</p>
                                    </div>
                                </Col>
                                
                            )
                        
                        
                        }


                    </Row>
                
            </div> 
    );

}