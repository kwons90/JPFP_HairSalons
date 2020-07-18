
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCustomers, getVendors, addCustomer, deleteCustomer } from '../actions'

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: 0,
    monthlySpend: 0
}

class AddCustomer extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: 0,
            monthlySpend: 0,
        }
    }
    handleOnChangeFirstName(ev) {
        console.log(ev.target.value)
        this.setState({ firstName: ev.target.value })
        // console.log(this.state)
    }
    handleOnChangeLastName(ev) {
        this.setState({ lastName: ev.target.value })
        // console.log(this.state)
    }
    handleOnChangeEmail(ev) {
        this.setState({ email: ev.target.value })
        // console.log(this.state)
    }
    handleOnChangePhoneNumber(ev) {
        this.setState({ phoneNumber: ev.target.value })
        // console.log(this.state)
    }
    handleOnChangeMonthlySpend(ev) {
        this.setState({ monthlySpend: ev.target.value })
        console.log(this.state)
    }
    handleOnSubmit(ev) {
        ev.preventDefault();
        if (this.state.firstName == '' ||
            this.state.lastName == '' ||
            this.state.email == '' ||
            this.state.phoneNumber == 0 ||
            this.state.monthlySpend == 0) {
                alert('Inputs are not filled in correctly')
                return null
        }
        this.setState(initialState)
        this.props.handleOnAddSubmitDispatch({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            monthlySpend: this.state.monthlySpend,
        }
        )
    }
    render() {
        return (
            <div>
                <div className='customerFormContainer'>
                    <form onSubmit={(ev) => this.handleOnSubmit(ev)}>
                        First Name:
                        <input className="input"
                            name='text'
                            onChange={(ev) => this.handleOnChangeFirstName(ev)}
                            value={this.state.text}
                        />
                        <br></br>
                        Last Name:
                        <input className="input"
                            name='text'
                            onChange={(ev) => this.handleOnChangeLastName(ev)}
                            value={this.state.text}
                        />
                        <br></br>
                        Email:
                        <input className="input"
                            name='text'
                            onChange={(ev) => this.handleOnChangeEmail(ev)}
                            value={this.state.text}
                        />
                        <br></br>
                        Phone Number:
                        <input className="input"
                            name='text'
                            onChange={(ev) => this.handleOnChangePhoneNumber(ev)}
                            value={this.state.text}
                        />
                        <br></br>
                        Monthly Spend:
                        <input className="input"
                            name='text'
                            onChange={(ev) => this.handleOnChangeMonthlySpend(ev)}
                            value={this.state.text}
                        />
                        <button className='button'>Create</button>
                    </form>
                </div >
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        customers: state.vendors,
        vendors: state.customers,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        load: () => {
            console.log('load data');
        },
        gotCustomers: () => {
            dispatch(getCustomers())
        },
        gotVendors: () => {
            dispatch(getVendors())
        },
        handleOnAddSubmitDispatch: (customer) => {
            dispatch(addCustomer(customer))
        },
        handleOnDeleteClickDispatch: arg => {
            dispatch(deleteCustomer(arg))
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(AddCustomer);