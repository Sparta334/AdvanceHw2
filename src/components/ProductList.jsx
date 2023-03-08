
import products from '../Data/product.json'

export default function ProductList( {IMAGES} ){

    return(
        <div>
            <article class="image__layout py-3 py-sm-5">
                <div class="container">
                    <h1 class="text-center">{IMAGES} </h1>
                    <hr class="divider--dark"/>
                    <div className="row">

                        {
                            products.map( product=>
                                
                                <section key = { product.id }>
                                    
                                    <div className="image mt-4 col-sm-6 col-lg-3">
                                    <a href="" className="image__link">
                                        <img src={product.image} alt="" className="image__style"/>
                                    </a>
                                    <p className="image_title">{product.image_title}</p>
                                    </div>
                                </section>
                                
                            )
                        
                        
                        }


                    </div>
                </div>
                
            </article>
        </div> 
    );

}