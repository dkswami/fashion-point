import { Routes, Route } from 'react-router-dom';

import Products from './components/products/products.component';
import Navigation from './routes/navigation/navigation.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Home = () => {
  return(
    <>
    <h1>this is a demo website for simmi foundation by deepak swami</h1>
    </>
  )
}

const Authentication = () => {
  return(
    <>
      <h2> Sign in or sign up</h2>
    </>
  )
}


function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='products' element={<Products/>} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
