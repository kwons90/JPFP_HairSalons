import axios from 'axios';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunks from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { _addCustomer, _deleteCustomer, _getCustomers, _getVendors } from './actions'
import { TYPES } from './actions'

const customerInititalState = {
  customers: []
}

const vendorInititalState = {
  vendors: []
}

const vendorReducer = (state = vendorInititalState, action) => {
  switch (action.type) {
    case TYPES.GET_VENDORS:
      return {
        ...state,
        vendors: action.payload
      }
    case TYPES.ADD_VENDOR:
      return {
        ...state,
      }
    default:
      return state
  }
};

const customerReducer = (state = customerInititalState, action) => {
  switch (action.type) {
    case TYPES.GET_CUSTOMERS:
      return {
        ...state,
        customers: action.payload
      }
    case TYPES.ADD_CUSTOMER:
      return {
        ...state,
        customers: [...state.customers, action.payload]
      }
    case TYPES.EDIT_CUSTOMER:
      return {
        ...state,
        customers: action.payload //object with vendorId and customerId
      }
    case TYPES.DELETE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter(customer => {
          return customer.id !== action.payload
        })
      }
    default:
      return state
  }
};

const reducer = combineReducers({
  vendors: vendorReducer,
  customers: customerReducer
});


const store = createStore(reducer, applyMiddleware(
  thunks,
  createLogger({ collapsed: true }),
));


export default store;

