
import {Col , Row ,Avatar} from "antd"

export default function HeaderItem( { Name , Slogan } ){

    return(
        
    <div className= "header">

        <Row className="headerRow" gutter={[8, 0]} justify="center" align="middle">
            <Col xxl={24}>

            <Row center ="xxl" >
            <Avatar className="header__Avatar" size={{
                xs: 130,
                sm: 140,
                md: 170,
                lg: 170,
                xl: 180,
                xxl:200,
            }} src="./images/avatar.png" alt="avatar" />
            </Row>
            </Col>
        </Row>
        <Row gutter={[8,8]} justify="center" align="middle">
            <Col xxl={24}>
            <Row center ="xxl" >
            <h1 className="header__title">{Name}</h1>
            </Row>
            </Col>
             <Col span={24}>
            <hr className="divider--light" />
            </Col>
            <Col>
             <p class="header__slogan">{Slogan}</p>
            </Col>
        </Row>

     </div>
    );


}