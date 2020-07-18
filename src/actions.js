import axios from 'axios'

export const TYPES = {
    GET_VENDORS: 'GET_VENDORS',
    ADD_VENDOR: 'ADD_VENDOR',
    DELETE_VENDOR: 'DELETE_VENDOR',
    EDIT_VENDOR: 'EDIT_VENDOR',
    GET_CUSTOMERS: 'GET_CUSTOMERS',
    ADD_CUSTOMER: 'ADD_CUSTOMER',
    DELETE_CUSTOMER: 'DELETE_CUSTOMER',
    EDIT_CUSTOMER: 'EDIT_CUSTOMER',
}

//Action Creators:

// console.log(TYPES)
function _getCustomers(customers) {
    return {
        type: TYPES.GET_CUSTOMERS,
        payload: customers
    }
}

export const getCustomers = () => async (dispatch) => {
    try {
        const response = await axios.get('api/customers')
        // console.log('getCustomers being called to return ',response)
        dispatch(_getCustomers(response.data))
    } catch (err) {
        console.log('error while getting customers', err)
    }
}


function _addCustomer(customer) {
    return {
        type: TYPES.ADD_CUSTOMER,
        payload: customer
    }
}

export const addCustomer = (customer) => async (dispatch) => {
    try {
        const response = await axios.post('api/customers', customer)
        console.log('response.data', response.data);
        dispatch(_addCustomer(response.data))
    } catch (err) {
        console.log('error while adding customer', err)
    }
}

function _editCustomer(customers) {
    return {
        type: TYPES.EDIT_CUSTOMER,
        payload: customers
    }
}

export const editCustomer = (newVendorId, customerId) => async (dispatch) => {
    try {
        const response = await axios.put(`api/customers/${customerId}`, { VendorId: newVendorId })
            .then(() => {
                return axios.get('/api/customers')
            })
            .then(res => {
                console.log('res.data is', res.data)
                dispatch(_editCustomer(res.data))
            });
    } catch (err) {
        console.log('error while editing Customer', err)
    }
}

function _deleteCustomer(customerId) {
    return {
        type: TYPES.DELETE_CUSTOMER,
        payload: customerId,
    }
}

export const deleteCustomer = (customerId) => async (dispatch) => {
    try {
        if (customerId) {
            const response = await axios.delete(`api/customers/${customerId}`)
            dispatch(_deleteCustomer(customerId))
        } else {
            console.log('no customer id to delete');
        }

    } catch (err) {
        console.log('error while deleting customer', err)
    }
}


function _getVendors(vendorId) {
    // console.log('vendors in actions ',vendors)
    return {
        type: TYPES.GET_VENDORS,
        payload: vendorId,
    }
}

export const getVendors = () => async (dispatch) => {
    try {
        const response = await axios.get('api/vendors')
        // console.log('vendor resp', response.data)
        dispatch(_getVendors(response.data))
    } catch (err) {
        console.log('error while getting vendors', err)
    }
}
