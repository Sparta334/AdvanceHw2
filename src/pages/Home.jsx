import Header from "../components/Header"
import ProductList from "../components/ProductList";
import Article from "../components/Article";
import Footer from "../components/footer";

function Home(){

    return (
        
        <div className="container">
            <Header
                Name="Ian"
                Slogan="I am so handsome" 
            />
            <ProductList
                IMAGES="我沒去過的地方"
            />
            <Article/>

            <Footer 

                Adress="新北市新店區，接下來不跟你說，怕你來我家尋仇"
            
            />


        </div>

    );


}

export default Home