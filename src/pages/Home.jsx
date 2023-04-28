import HeaderItem from "../components/Header/HeaderItem"
import ProductList from "../components/ProductList/ProductList";
import Article from "../components/Article/Article";
import Footer from "../components/Footer/Footer";
import { Space } from "antd";
import {LoadingOutlined} from "@ant-design/icons"
import { useImage } from "../api/react-hook/hook";

function Home(){


    const {data , isLoading} = useImage();
    const Recivce = data || [];

    return (
        <div>
        <Space direction="vertical" size="large">
            <HeaderItem
                Name="Ian"
                Slogan="I am so handsome" 
            />


            {
                isLoading ? 
                ( <LoadingOutlined/> ) 
                
                :
                
                ( <ProductList
                    IMAGES="我沒去過的地方"
                    data = {Recivce}
                />
                
                )
            }

           
            <Article/>
        </Space>

            <Footer 

                Adress="新北市新店區，有人抄我網頁，我就去你抄你家"
            
            />
        </div>
        

    );


}

export default Home