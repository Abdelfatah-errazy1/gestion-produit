import './App.css';

import { BrowserRouter as Router ,Routes , Route,Link } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import CreateProduit from './pages/CreateProduit';
import UpdateProduit from './pages/UpdateProduit';
import Produit from './pages/Produit';



function App() {
  return (
    <div className='relative'>

    <Router>
        <Nav/>
     

      
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/stocks/create' Component={CreateProduit} />
        <Route path='/stocks/update/:id' Component={UpdateProduit} />
        <Route path='/stocks/:id' Component={Produit} />
        {/* <Route path='/stocks/update/:id' Component={UpdateProduit} /> */}
     
      </Routes>
      
      <Footer />
    </Router>
    </div>
  );
}

export default App;
