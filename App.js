
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Women from './pages/Women';
import Men from './pages/Men';
import Kids from './pages/Kids';
import Offers from './pages/Offers';
import Vmart from './pages/Vmart';
import ProductGrid from "./components/ProductGrid";
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from "./pages/CategoryPage"; // New component for categories
import MyFeed from "./pages/MyFeed"; 
import ProductList from "./pages/ProductList";




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'>
     
      
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/category/:category" element={<ProductList />} />
      <Route path="/myfeed" element={<MyFeed />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
      <Route path="/" element={<ProductGrid />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      <Route index element={<Home/>}/>
      <Route path='/women' element={<Women/>}/>
      <Route path='/men' element={<Men/>}/>
      <Route path='/kids' element={<Kids/>}/>
      <Route path='/offers' element={<Offers/>}/>
      <Route path='/vmart' element={<Vmart/>}/>
      </Route>
    </Routes>
   
   
   
    </BrowserRouter>
    
    
    
    
  );
}

export default App;
