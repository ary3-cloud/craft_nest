import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router ,Routes,Route,Link} from 'react-router-dom'
import AddProducts from './components/AddProducts';
import SignIn from './components/SignIn';
import GetProducts from './components/GetProducts';
import MpesaPayment from './components/MpesaPayment';
import SignUp from './components/SignUp';




function App() {
  return (
    <Router>
    <div className="App">
       <header className="App-header">
        <h1>Local & handmade products </h1>

      </header>

      <nav>
        <Link to="/signin" className='btn btn-info m-2'>Sign In</Link>
        <Link to="/signup" className='btn btn-info m-2'>Sign Up</Link>
        <Link to="/" className='btn btn-info m-2'>Get Products</Link>
        <Link to="/addproducts" className='btn btn-info m-2'>Add Products</Link>
      </nav>

     <Routes>
      <Route path='/signup'element={<SignUp/>}/>
      <Route path='/signin'element={<SignIn/>}/>
      <Route path='/addproducts'element={<AddProducts/>}/>
      <Route path='/'element={<GetProducts/>}/>
      <Route path='/mpesapayment'element={<MpesaPayment/>}/>
      



     </Routes>

    </div>
    </Router>
  );
}

export default App;
