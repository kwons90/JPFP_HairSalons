import React, { Component } from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import AddCustomer from './components/addCustomer'
import { connect } from 'react-redux';
import { getCustomers, getVendors } from './actions'
import Home from './components/home'
import VendorPage from './components/vendors'
import CustomerPage from './components/customers'
import Nav from './components/nav'
import Popular from './components/popular'
import Profitable from './components/profitable'
import {getMostPopular,getMostProfitable} from './components/utils'


class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.gotCustomers()
    this.props.gotVendors()
  }
  render() {
    const { customers, vendors } = this.props;
    const popularVendorSort = getMostPopular(customers, 'VendorId');
    const profitableVendorSort = getMostProfitable(customers,"monthlySpend")
    return (
      <div className='container is-fullhd'>
        <HashRouter>
          <h1 className='title'>MyStyles</h1>
          <h3 className='title is-6'>Where you can style reliably</h3>
          <div>{Nav(customers, vendors,popularVendorSort,profitableVendorSort)}</div>
          <br></br>
          <Switch>
            <Route path="/customers">
              <CustomerPage />
            </Route>
            <Route path="/vendors">{VendorPage(vendors)}</Route>
            <Route path="/MostPopular">{Popular(customers,vendors,popularVendorSort)}</Route>
            <Route path="/MostProfitable">{Profitable(customers,vendors,profitableVendorSort)}</Route>
            <Route path="/">{Home(customers, vendors)}</Route>
          </Switch>
        </HashRouter>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  customers: state.customers.customers,
  vendors: state.vendors.vendors,
})

const mapDispatchToProps = (dispatch) => ({
  gotCustomers: () => {
    dispatch(getCustomers())
  },
  gotVendors: () => {
    dispatch(getVendors())
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(App);

