import { Row, Col } from "antd";


export default function Article(){

    return(
        <Row className="description__layout">
            <Col xxl={24}>
            <Row center ="xxl">
                <Col span={24}>
                <h1>DESCRIPTIONS</h1>
                </Col>
                <Col span={24}>
                <hr className="divider--light"/>
                </Col>
                <p className="description__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laborum
                    corrupti ut iure aliquam. Quod, perferendis. Libero tempore iste, animi sint numquam illum quasi laboriosam
                    unde pariatur quidem! Suscipit consequatur nihil dolor impedit temporibus ad cum, voluptatum odit ratione
                    ullam
                    eligendi amet beatae aliquid eaque nesciunt optio nobis ducimus itaque. Voluptatibus aspernatur assumenda
                    quod
                    quo error consequuntur, vero iusto reprehenderit repellat maiores, sapiente dolores voluptates minima. Alias
                    dolore assumenda fuga quae repellat voluptatum quo, saepe exercitationem perspiciatis reiciendis modi
                    tempora.
                    Recusandae explicabo iusto corporis nam numquam dignissimos, necessitatibus, iure non culpa repellat
                    repudiandae temporibus! Saepe excepturi tempore iusto eos sit!</p>

            </Row>
            </Col> 
        </Row>

    );


}