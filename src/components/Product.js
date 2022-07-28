import {Link} from 'react-router-dom';
 
export default function Product(props) {
    const {name, price, image, id} = props.details;
    return <>
         <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="box">
                <div className="option_container">
                <div className="options">
                    <Link to={'/product/'+id} className="option1" >{name}</Link>
                    <Link to="" className="option2" >Buy Now</Link>
                </div>
                </div>
                <div className="img-box">
                <img src={image} alt={name} />
                </div>
                <div className="detail-box">
                <h5>
                    {name}
                </h5>
                <h6>
                    ${price}
                </h6>
                </div>
            </div>
        </div>
    </>
}