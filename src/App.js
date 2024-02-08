// import logo from './logo.svg';
import './App.css';
import Home1 from './components/Home1';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import DisplayProduct from './components/DisplayProduct/DisplayProduct';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import Productdetails from './components/ProductDetails/ProductsDetails';
import AddProducts from './components/AddProducts/AddProducts';
import Cart from './components/Cart';
import Update from './components/Update/Update';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>

      <Switch>
        <Route exact path={"/"}><Login/></Route>
        <Route path={"/user"}><Home1/></Route>
        <Route path={"/addnewproduct"}><AddProducts/></Route>
        <Route path={'/Cart'}><Cart/></Route>
        <Route path={"/admin"} ><Admin/></Route>
        <Route path={"/displayProduct"}><DisplayProduct/></Route>
        <Route path={'/productDetails:id'}>  <Productdetails/> </Route>
        <Route path={'/updateproduct:id'}>  <Update/> </Route>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
