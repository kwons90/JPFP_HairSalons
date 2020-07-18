import React from 'react';

const VendorPage = function (vendors) {
    return (
        <div className='columns is-multiline'>
            {vendors.map(vendor => {
                return (
                    <div className = 'column is-one-third' key = {vendor.id}>
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
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default VendorPage