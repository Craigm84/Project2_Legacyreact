import './App.css';
import { Routes, Route, Router, Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import Routing from './Routing/Routing';
import CartPage from './Routing/CartPage';
import ItemsPage from './Routing/ItemsPage';
import ItemEdit from './components/Items/ItemEdit';
import Login from './components/Login/Login';
import { Rating } from '@mui/material';
import ItemCard from './components/Items/ItemCard';
import Home from './components/Home';


function App() {
  return (
    <div>

      <Routing />
          <div className="container">
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/ItemsPage" element={<ItemsPage />}></Route>
          <Route path="/CartPage" element={<CartPage />}></Route>
          <Route path="/Item/update/:id" element={<ItemEdit />}></Route>
          <Route path="/Item/rating/:id" element={<ItemCard />}></Route>
        </Routes>



      </div>
    </div>
  );
}

export default App;
