import 'bootstrap/dist/css/bootstrap.css'
function Product(props)
{
    // var product = 
    // {
    //     "name" : "product 1",
    //     "price" : 20,
    //     "quantity" : 10
    // }
    return (
        <div>
            <h1>Product Details</h1>
            {props.p.name}
            <br/>
            {props.p.price}
            <br/>
            {props.p.quantity}
            <br/>

        </div>
    )
}

export default Product;