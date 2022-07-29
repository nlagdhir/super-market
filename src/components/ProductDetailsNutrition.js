export default function ProductDetailsNutrition(props) {
    console.log(props);
    const {nutrition} = props;
    console.log(nutrition)
    return <>
        <div className="container">
            <table className="table table-nutrition">
                <thead>
                    <tr>
                    <th>Nutrient</th>
                    <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Protein</td>
                    <td>{nutrition.protein}g</td>
                    </tr>
                    <tr>
                    <td>Carbohydrates</td>
                    <td>{nutrition.carbs}g</td>
                    </tr>
                    <tr>
                    <td>Fat</td>
                    <td>{nutrition.fat}g</td>
                    </tr>
                    <tr>
                    <td>Salt</td>
                    <td>{nutrition.salt}g</td>
                    </tr>
                </tbody>
            </table>
        </div>   
    </>
}