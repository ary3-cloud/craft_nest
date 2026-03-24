import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router ,Routes,Route,Link} from 'react-router-dom'
import AddProducts from './components/AddProducts';
import SignIn from './components/SignIn';
import GetProducts from './components/GetProducts'
import MpesaPayment from './components/MpesaPayment';
import SignUp from './components/SignUp';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import HomePage from './components/HomePage';





function App() {
  return (

    
  
    <Router>
    <div className="App">
       <header className="App-header">
        <h1>Local & handmade products </h1>
       
      </header>

      <nav class="navbar bg-muted navbar-light navbar-expand-md sticky-top">
                  <Link class="navbar-brand"></Link>
                <button
                class="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#navbarcollapse"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarcollapse">
                    <div class="navbar-nav">
                      <Link className='nav-link 'to='/' id='home'><b>Craftnest</b></Link>
                      <Link className='nav-link'to="/homepage"><b>Home</b></Link>
                      <Link className='nav-link'to='/signup' >signup</Link>
                      <Link className='nav-link'to='/signin' >Signin</Link>
                      <Link className='nav-link'to='/addproducts'>Add products</Link>
                      <Link className='nav-link 'to='/aboutus'  >About Us</Link>
                      
                    </div> 
                </div>
            </nav>

           
          
     <Routes>
      <Route path='/signup'element={<SignUp/>}/>
      <Route path='/signin'element={<SignIn/>}/>
      <Route path='/addproducts'element={<AddProducts/>}/>
      <Route path='/' element={<GetProducts/>}/>
      <Route path='/mpesa'element={<MpesaPayment/>}/>
      <Route path='/aboutus'element={<AboutUs/>}/>
      <Route path='/homepage'element={<HomePage/>}/>
    


     </Routes>
     <br />
     

    </div>
    <Footer/>
    <footer className='bg-info p-2' >
      <p className='text-center text-white'>Developed by Mary &copy; All rights reserved</p>
    </footer>
    </Router>
    


  );
}

export default App;
