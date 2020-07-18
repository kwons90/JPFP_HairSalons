import React from 'react'

const Popular = function (customers,vendors,popularVendorSort) {
    let popularVendorArr = []
    for(let i=0;i<popularVendorSort.length;i++) {
        let v = vendors.filter(vendor => popularVendorSort[i] == vendor.id)
        v = popularVendorArr.push(...v)
    }
    // console.log(popularVendorArr)
    return (
        <div className='columns is-multiline'>
        {popularVendorArr.map(vendor => {
            return (
                <div className='column is-one-third' key={vendor.id}>
                    <div className='card'>
                        <div className='card-image'>
                            <figure className='image is-4by3'>
                                <img src={vendor.imageURL}></img>
                            </figure>
                        </div>
                        <div className='card-content'>
                            <div className='media-content'>
                                <p className="title is-4">{vendor.vendorName}</p>
                                <p className="subtitle is-6">{vendor.city}</p>
                                <p className ='subtitle is-6'>{`Customers: ${customers.filter(customer => customer.VendorId ==vendor.id).length}`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
        </div>
    )
}

export default Popular
