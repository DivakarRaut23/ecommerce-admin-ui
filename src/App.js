import Login from './pages/login/Login'
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import PasswordReset from './pages/password-reset/PasswordReset';

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Category from './pages/category/Category';
import Product from './pages/product/Product';
import AddProduct from './pages/product/AddProduct';
import EditProduct from "./pages/edit-product/EditProduct";
import { PrivateRoute } from './components/private-route/PrivateRoute';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute exact path="/dashboard">
              <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/category">
            <Category />
            </PrivateRoute>
          <PrivateRoute path="/products">
            <Product />
          </PrivateRoute>
          <PrivateRoute path="/product/new">
            <AddProduct />
          </PrivateRoute>
          <PrivateRoute exact path="/product/:_id">
						<EditProduct />
					</PrivateRoute>
          <Route path="/reset-password">
            <PasswordReset/>
          </Route> 
          <Route path="/">
            <Login />
          </Route>
          <Route path="*">
           <h1> Page not Found : Error 404</h1>
          </Route>  
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
