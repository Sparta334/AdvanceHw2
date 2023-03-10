import HeaderItem from "../components/HeaderItem"
import ProductList from "../components/ProductList";
import Article from "../components/Article";
import Footer from "../components/Footer";
import { Space } from "antd";

function Home(){

    return (
       
        <div>
        <Space direction="vertical" size="large">
            <HeaderItem
                Name="Ian"
                Slogan="I am so handsome" 
            />
            <ProductList
                IMAGES="我沒去過的地方"
            />
            <Article/>
        </Space>

            <Footer 

                Adress="新北市新店區，有人抄我網頁，我就去你抄你家"
            
            />
        </div>

        

    );


}

export default Home