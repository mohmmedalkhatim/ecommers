import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import App from '../App';
import Home from '../screens/Home';
import Products from '../sections/Products';
import ProductPage from '../sections/Products/product_page';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} index />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<ProductPage />} />
    </Route>
  )
);
