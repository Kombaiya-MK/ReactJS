import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import "bootstrap/dist/css/bootstrap.css"
import GetInterns from './components/GetInterns';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <div>
       <h1 className='alert alert-success App'>
        Welcome!!!
      </h1>
      <Navbar />
        <Routes>
          <Route path='Login' element={<Login/>}/>
           <Route path='GetInterns' element={<GetInterns/>}/>
        </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
