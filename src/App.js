import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import Login from './Components/Login/Login';
import AuthProvider from './Components/Context/AuthProvider';
import PrivateRoute from './Components/PrivateRouter/PrivateRouter';
import MyOrders from './Components/MyOrders/MyOrders';
import Order from './Components/Order/Order';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import AllOrder from './Components/AllOrder/AllOrder';

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/service/:serviceId">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/myOrders">
            <MyOrders></MyOrders>
          </Route>
          <Route path="/order/:id">
            <Order></Order>
          </Route>
          <Route path="/allOrders">
            <AllOrder></AllOrder>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
