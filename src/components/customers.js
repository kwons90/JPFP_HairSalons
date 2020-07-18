import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCustomers, getVendors, deleteCustomer, editCustomer } from '../actions'
import AddCustomer from './addCustomer';

class CustomerPage extends Component {
    constructor() {
        super()
        this.state = {
            vendorId: ''
        }
    }
    componentDidMount() {
        this.props.gotCustomers()
    }
    async handleOnChangeSelect(ev, customerId) {
        ev.preventDefault()
        console.log('ev target value is ',ev.target.value)
        await this.setState({ vendorId: ev.target.value })
        this.props.editCustomerVendor(this.state.vendorId, customerId)
        console.log(this.state)
    }
    render() {
        const { customers, vendors } = this.props;
        console.log('vendors is ',vendors)
        return (
            <div>
                <AddCustomer />
                <div className='columns is-multiline'>
                    {customers.length > 0 && customers.map(customer => {
                        return (
                            <div key={customer.id} className='box column is-one-third'  >
                                <article className="media">
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <strong>{`${customer.firstName} ${customer.lastName}`} </strong>

                                            </p>
                                            <p>
                                                <small>{`Monthly Spend of $${customer.monthlySpend}`}</small>
                                            </p>
                                            <p>
                                                <select
                                                    name="Vendor"
                                                    id="Vendor Select"
                                                    onChange={(ev) => this.handleOnChangeSelect(ev, customer.id)}
                                                >
                                                    {/* <option key={vendor.id} value={vendor.id}>{vendors.filter(vendor => vendor.id == customer.VendorId).vendorName}</option> */}
                                                    {this.props.vendors.map(vendor => {
                                                        return <option key={vendor.id} value={vendor.id} selected={vendor.id == customer.VendorId}>{vendor.vendorName}</option>
                                                    })}
                                                </select>
                                            </p>
                                            <p>
                                                <button onClick={(ev) => this.props.handleOnDeleteClickDispatch(customer.id)}> Destroy Customer </button>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>)
                    })}
                </div>
            </div>
        )
    }
}

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
    },
    editCustomerVendor: (newVendorId, customerId) => {
        dispatch(editCustomer(newVendorId, customerId))
    },
    handleOnDeleteClickDispatch: arg => {
        dispatch(deleteCustomer(arg))
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(CustomerPage);

