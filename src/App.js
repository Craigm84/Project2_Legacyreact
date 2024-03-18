import './App.css';
import { Routes, Route, Router, Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import Routing from './Routing/Routing';
import HomePage from './Routing/HomePage';

import CartPage from './Routing/CartPage';
import ItemsPage from './Routing/ItemsPage';
import ItemEdit from './components/Items/ItemEdit';
import Header from './Routing/Header';
import Login from './components/Login/Login';



function App() {
  return (
    <div>
<Routing />
<div className="container">

<Routes>
<Route path="/Login" element={<Login />}></Route>  
<Route path="/" element={<HomePage />}></Route>
<Route path="/ItemsPage" element={<ItemsPage />}></Route>
<Route path="/CartPage" element={<CartPage />}></Route>
<Route path="/Item/update/:id" element={<ItemEdit />}></Route>

</Routes>

</div>
    </div>
  );
}

export default App;
