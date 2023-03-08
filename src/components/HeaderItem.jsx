
import Header from "antd/es/layout/layout";
import {Col , Row ,Avatar} from "antd"

export default function HeaderItem( { Name , Slogan } ){

    return(
        
    <Header className= "header">

        <Row className="headerRow" gutter={[8, 0]} justify="center" align="middle">
            <Col xxl={24}>

            <Row center ="xxl" >
            <Avatar className="header__Avatar" size={{
                xs: 140,
                sm: 160,
                md: 180,
                lg: 200,
                xl: 225,
                xxl:240,
            }} src="./images/avatar.png" alt="avatar" />
            </Row>
            </Col>
        </Row>
        <Row gutter={[8, 10]} justify="center" align="middle">
            <Col xxl={24}>
            <Row center ="xxl" >
            <h1 className="header__title">{Name}</h1>
            </Row>
            </Col>
            
        </Row>
        <Row className="header__sloganRow" gutter={[8, 45]} justify="center">

             <Col span={24}>
            <hr className="divider--light" />
            </Col>
            <Col>
             <p class="header__slogan">{Slogan}</p>
            </Col>
        </Row>

     </Header>
    );


}