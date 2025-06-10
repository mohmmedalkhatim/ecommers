import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import App from '../App';
import Home from '../screens/Home';
import Products from '../screens/Products';
import ProductPage from '../screens/Products/product_page';
import Auth from '../screens/Auth';
import Signin from '../screens/Auth/Signin';
import Signup from '../screens/Auth/Signup';
import Cart from '../screens/Cart';
import Collations from '../screens/collations';
import About from '../screens/About';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} index />
      <Route path="/sign_in" element={<Signin />}/>
      <Route path="/sign_up" element={<Signup />}/> 
      <Route path="/auth" element={<Auth />}/> 
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/collations" element={<Collations/>} />
      <Route path="/about" element={<About/>} />
    </Route>
  )
);
