
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Reviews from './components/Order/Reviews/Reviews';
import AddFood from './components/Dashboard/AddFood/AddFood';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ViewOrderList from './components/Order/ViewOrderList/ViewOrderList';
import FoodOrderList from './components/Order/FoodOrderList/FoodOrderList';
import FoodOrder from './components/Order/FoodOrder/FoodOrder';
import ManageService from './components/ManageService/ManageService';
import AddAdmin from './components/Admin/AddAdmin';
import NotFound from './components/NotFound/NotFound';



export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>

      <Route exact path="/">
          <Home></Home>
          </Route>
          
      <Route exact path="/home">
          <Home></Home>
          </Route>
        
       

        <PrivateRoute path="/dashboard">
        <Dashboard></Dashboard>
        </PrivateRoute>
        
        
        
        <Route  path="/login">
        <Login></Login> 
        </Route>

        <PrivateRoute path="/order/:id">
        <FoodOrder></FoodOrder>
        </PrivateRoute>

        <PrivateRoute path="/order">
        <FoodOrder></FoodOrder>
        </PrivateRoute>
        
      

        <Route path="/view-order">
       <ViewOrderList></ViewOrderList>
        </Route>
    
         <Route path="/orderList">
         <FoodOrderList></FoodOrderList>
         </Route>

        <Route path="/review">
        <Reviews></Reviews>
        </Route>

        
        <Route path="/add-food">
        <AddFood></AddFood>
        </Route>

         <Route path="/manageService">
           <ManageService></ManageService>
         </Route>
         
        <PrivateRoute path="/addAdmin">
        <AddAdmin></AddAdmin>
        </PrivateRoute>

        <Route path="*">
            <NotFound></NotFound>
          </Route>
        
        
      </Switch>
    </Router>
   </UserContext.Provider>
  );
}

export default App;
