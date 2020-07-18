import React from 'react'

const Profitable = function (customers,vendors,profitableVendorSort) {
    console.log(profitableVendorSort)
    let profitableVendorArr = []
    for(let i=0;i<profitableVendorSort.length;i++) {
        let v = vendors.filter(vendor => profitableVendorSort[i] == vendor.id)
        v = profitableVendorArr.push(...v)
    }
    // console.log(profitableVendorArr)
    return (
        <div className='columns is-multiline'>
        {profitableVendorArr.map(vendor => {
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
                                <p className ='subtitle is-6'>{`Monthly Sales: $${customers.filter(customer => customer.VendorId ==vendor.id).reduce((a,b)=>({monthlySpend: a.monthlySpend+b.monthlySpend})).monthlySpend}`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
        </div>
    )
}

export default Profitable
