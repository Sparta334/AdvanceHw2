
import products from '../Data/product.json'
import {Row , Col} from "antd"

export default function ProductList( {IMAGES} ){

    return(
            <div className="image__layout">
                    <Row  gutter={[8, 10]} justify="center" >

                        <Col xxl={24}>
                            <h1 className="text-center">{IMAGES} </h1>
                        </Col>
                        <Col span={24}>
                            <hr className="divider--dark"/>
                        </Col>
                    </Row>
                    <Row gutter={[8, 10]}>

                        {
                            products.map( product=>
                                
                                <Col key = { product.id } 
                                    sm = {{span:12}}
                                    lg = {{span: 8}}
                                    xl = {{span :6}}
                                    xxl = {{span:4}}
                                >
                                    
                                    <div className="image">
                                    <a href="" className="image__link">
                                        <img src={product.image} alt="" className="image__style"/>
                                    </a>
                                    <p className="image_title">{product.image_title}</p>
                                    </div>
                                </Col>
                                
                            )
                        
                        
                        }


                    </Row>
                
            </div> 
    );

}