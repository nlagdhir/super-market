export default function ProductDetailsStorage(props) {
    const {storage} = props;
    return <>
        <div className="container">
        <p>
            <strong>Storage instructions:</strong> {storage}
        </p>
        </div>
    </>
}