import logo from './logo.svg';
import './App.css';
import Product from './components/Product';
import 'bootstrap/dist/css/bootstrap.css'
import AddProduct from './components/AddProduct';
import { useState } from 'react';
import Register from './components/Register';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import First from './components/First';
import Home from './components/Home';
import Data from './components/Data';
import Protected from './components/Protected';
import AboutUs from './components/AboutUs';
// function App() {
//   const [products , setproducts] = useState([
//     {
//       "name" : "ABC",
//       "price" : 20,
//       "quantity":0
//     }
//   ])
//   var arr = [1,2,3,4,5];
//   var [product , setProduct] = useState({
//     "name" : "ABC",
//     "price" : 20,
//     "quantity":0
//   })
//   var InsertProduct = (data) => {
//     // setProduct(data);
//     // console.log(data)
//     setproducts([...products,data]);
//   }
//   return (
//     <div>
//       <h1 className='alert alert-success App'>
//         Welcome!!!
//       </h1>
//       <BrowserRouter><Link to="/register">Register</Link>
//       <Link to="/add">Create</Link>
//       <hr/> </BrowserRouter>
           
//       <Outlet/>     
//       <BrowserRouter>
//         <Routes>
//         <Route path='/' element={<First />}/>
//           <Route path='register' element={<Register/>}/>
//            <Route path='add' element={<AddProduct/>}/>
//         </Routes>
//       </BrowserRouter>
//       {/* <AddProduct sendProduct = {InsertProduct}/>
//       <div>
//         Let's Get into the world of animation!!!
//       </div>
//       {/* <Product p = {product} /> */}
//       {/*
//         products.map((prod , idx) => 
//         {
//           return (
//             <Product p = {prod} key = {idx}/>)
//         })
//       }

//       <hr/> */}
//       {/* {
//         arr.map((num , idx) => 
//         {
//          return (<li key={idx}>{num}</li>) 
//         })
//       } */}
//     </div>

//   );
// }

// export default App;




function App() {
  var arr = [100,3534,346452,2,46];
  const [products,setProducts] = useState([{
    "name":"ABC",
    "price":20,
    "quantity":0
  },
  {
    "name":"XYZ",
    "price":10,
    "quantity":9
  }
]);
  const [product,setProduct] = useState({
    "name":"ABC",
    "price":20,
    "quantity":0
  });
  var insertProduct=(data)=>{
    // setProduct(data)
    setProducts([...products,data]);
    console.log(product);
  }
  var [isSignedIn,setSignedIn] = useState(false);


  var changeState=()=>{
      if(!isSignedIn)
        setSignedIn(true);
      else
        setSignedIn(false)
      console.log(isSignedIn)
  }
  return (
    <BrowserRouter>
    <div>
       <h1 className='alert alert-success App'>
        Welcome!!!
      </h1>
      <button className="btn btn-success" onClick={changeState}>Change</button>
      <First/>
        <Routes>
        <Route path='/' element={<AboutUs/>}/>
          <Route path='register' element={<Register/>}/>
           <Route path='add' element={<Protected isSignedIn={isSignedIn}> 
           <AddProduct/>
           </Protected>}/>
           <Route path='home' element={<Home/>}/>
           <Route path='/data/:id' element={<Data/>}/>
          
        </Routes>
      {/* <Register/>
      <AddProduct sendProduct={insertProduct}/>
      <hr/>
      {
        products.map((prod,idx)=>{
          return (<Product p={prod} key={idx}/>)
        })
      }
     <Product p={product}/> 
      <hr/>
      {
        arr.map((num,idx)=>{
          return(<li key={idx}>{num}</li>);
        })
      } */}
    </div>
    </BrowserRouter>
    
  );
}

export default App;
