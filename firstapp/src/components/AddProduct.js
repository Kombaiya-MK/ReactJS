import { useState } from "react"

function AddProduct(props)
{
    var [product , setProduct] = useState({
        "name" : "",
        "price" : 0,
        "quantity" : 0
    })
    var [name , setName] = useState()
    
    var changeName = (event) =>
    {
        // product.name = event.target.value
        // console.log(product.name)
        // setName(event.target.value)
        setProduct({...product ,"name": event.target.value})

    }
    var changePrice = (event) =>
    {
        // product.name = event.target.value
        // console.log(product.name)
        // setName(event.target.value)
        setProduct({...product ,"price": event.target.value})

    }
    var changeQuantity = (event) =>
    {
        // product.name = event.target.value
        // console.log(product.name)
        // setName(event.target.value)
        setProduct({...product ,"quantity": event.target.value})

    }
    var insertProduct = () =>
    {
        props.sendProduct(product)
    }
    return (
        <div className="alert alert-primary AddProduct">
            <label className="form-control">Product Name</label>
            <input onChange={changeName} type="text" className="form-control"></input>
            <label className="form-control">Product price</label>
            <input onChange={changePrice} type="number" className="form-control"></input>
            <label className="form-control">Product quantity</label>
            <input onChange={changeQuantity} type="number" className="form-control"></input>
            <button onClick={insertProduct} className="btn btn-dark">Add Product</button>
            <div>
                {product.name}
                {name}
                <br/>
                {product.price}
                <br/>
                {product.quantity}
                <br/>

            </div>

        </div>
    )
}

export default AddProduct;