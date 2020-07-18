import React from 'react'
import { Link } from 'react-router-dom';

const Nav = (customers, vendors, popularVendorSort,profitableVendorSort) => {
    const popularVendor = vendors.filter(vendor => vendor.id == popularVendorSort[0])
    let popularVendorName
    if (popularVendor[0]) {
        popularVendorName = popularVendor[0].vendorName
    }
    else {
        popularVendorName = null
    }
    const profitableVendor = vendors.filter(vendor => vendor.id == profitableVendorSort[0])
    let profitableVendorName
    if (profitableVendor[0]) {
        profitableVendorName = profitableVendor[0].vendorName
    }
    else {
        profitableVendorName = null
    }
    return (
        <nav className="navbar is-link" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className='navbar-item' to='/'>Home</Link>
                <Link className='navbar-item' to='/customers'>Customers ({customers.length})</Link>
                <Link className='navbar-item' to='/vendors'>Vendors ({vendors.length}) </Link>
                <Link className='navbar-item' to='/MostPopular'>{`Most Popular (${popularVendorName})`}</Link>
                <Link className='navbar-item' to='/MostProfitable'>{`Most Profitable (${profitableVendorName})`}</Link>
            </div>
        </nav>
    )
};

export default Nav


