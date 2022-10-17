
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Combiner from './Combiner';
import ProductListing from './Containers/ProductListing';
import ProductDetail from './Containers/PorductDetail';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Combiner/>} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Shop' element={<ProductListing />} />
          <Route path='/Product/:ProductID' element={<ProductDetail/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
