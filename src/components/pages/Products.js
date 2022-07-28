import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Product from "../Product";
import Loader from "../Loader";


export default function Products() {

    const [products, setProducts] = useState([]);

    const {get, loading} = useFetch('https://react-tutorial-demo.firebaseio.com/');

    useEffect(() => {
        get('supermarket.json')
            .then(data => {
                setProducts(data);
            })
            .catch(error => {
                console.log(error);
            })
    })


    return <>
        {loading && <Loader />}
        <section className="inner_page_head">
         <div className="container_fuild">
            <div className="row">
               <div className="col-md-12">
                  <div className="full">
                     <h3>Product Grid</h3>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="product_section layout_padding">
         <div className="container">
            <div className="heading_container heading_center">
               <h2>
                  Our <span>products</span>
               </h2>
            </div>
            <div className="row">
                {products.map(product => <Product key={product.id} details={product}></Product>)}
            </div>
         </div>
      </section>
    </>
}