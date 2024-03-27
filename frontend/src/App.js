
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>

    <Navbar/>
    <Routes>
      <Route path='/'element={<Shop category="Shop"/>}/>
      <Route path='/new'element={<ShopCategory category="new"/>}/>
      <Route path='/used'element={<ShopCategory category="used"/>}/>
      <Route path='/brandnew'element={<ShopCategory category="brandnew"/>}/>
      <Route path='/product'element={<Product/>}/>
      <Route path=':productID' element = {<Product/>}/>

<Route path='/cart'element={<Cart/>}/>
<Route path='/login'element={<LoginSignup/>}/>


    </Routes>

    </BrowserRouter>
      
    </div>

  );
}

export default App;
