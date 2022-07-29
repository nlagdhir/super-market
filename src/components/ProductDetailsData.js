export default function ProductDetailsData(props) {
    console.log(props);
    console.log('component called!');
    const {description, price} = props;
    return <>
        <div className="container">
        <p>{description} sold at <strong>${price}</strong> per piece.</p>
        <button>${price}</button>
        </div>
    </>
}