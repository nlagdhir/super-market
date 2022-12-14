import {useState, useEffect} from 'react';
import useFetch from './../hooks/useFetch.js';
import {useLocation, useParams, Routes, Route, NavLink, Outlet } from 'react-router-dom';
import ProductDetailsData from './ProductDetailsData.js';
import './ProductDetails.css';
import ProductDetailsNutrition from './ProductDetailsNutrition.js';
import ProductDetailsStorage from './ProductDetailsStorage.js';

export default function ProductDetails() {
    
    const {id} = useParams();
    const {get, loading} = useFetch('https://react-tutorial-demo.firebaseio.com/productinfo/');
    const [product, setProduct] = useState([]);

    useEffect(() => {
        get(`id${id}.json`)
            .then(data => {
                if(data){
                    setProduct(data);
                } 
            }).catch(error => {
                console.error(error);
            })
    })

    return <>
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
                  <span>Products Detail</span>
               </h2>
            </div>

            <div className="product-details-layout">
                <h2>{product.name}</h2>
                <img className="product-details-image" src={product.image} alt={product.name} />
            </div>
            <div>
                <div className="tabs">
                    <ul>
                        <li> 
                            <NavLink className={(navData) => navData.isActive ? "tab-active" : "" } to="">Details</NavLink>
                        </li>
                        <li>
                            <NavLink className={(navData) => navData.isActive ? "tab-active" : "" } to={'nutrition'}>Nutrition</NavLink> 
                        </li>
                        <li>
                            <NavLink className={(navData) => navData.isActive ? "tab-active" : "" } to={'storage'}>Storage</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      <Routes>
        <Route path="" element={<ProductDetailsData description={product.description} price={product.price}/> } />
        <Route path='nutrition' element={<ProductDetailsNutrition nutrition={product.nutrition}/> } />
        <Route path="storage" element={<ProductDetailsStorage storage={product.storage}/> } />
      </Routes>
      
    </>
}