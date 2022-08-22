import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';
import Products from './routes/products/products.component';
import Navigation from './routes/navigation/navigation.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Checkout from './routes/checkout/checkout.component';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='products' element={<Products/>} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
