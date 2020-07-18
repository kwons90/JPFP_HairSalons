export function getMostPopular(data, sortingEl) {
    let counts = data.reduce((a, c) => {
        a[c[sortingEl]] = (a[c[sortingEl]] || 0) + 1;
        return a;
    }, {});

    // console.log(counts)
    const values = Object.keys(counts).sort((a, b) =>
        counts[b] - counts[a]
    )

    return values;
}
export const getMostProfitable = function(arr) {
    if(!Array.isArray(arr)){
        return []
    }
    else if (arr.length ==0) {
        return []
    }
    let vendorSalesObj = {}
    for(let i =0; i<arr.length; i++ ) {
      // console.log(arr[i])
      // console.log(vendorSalesObj)
      if(Object.keys(vendorSalesObj).includes(arr[i].VendorId)) {
        vendorSalesObj[arr[i].VendorId] = vendorSalesObj[arr[i].VendorId] + arr[i].monthlySpend
      }
      else{
        vendorSalesObj[arr[i].VendorId] = arr[i].monthlySpend
      }
    }
    let vendorSalesList = []
    let keys = Object.keys(vendorSalesObj)
    for(let i = 0; i<keys.length;i++) {
      vendorSalesList.push([keys[i],vendorSalesObj[keys[i]]])
    }
    console.log('vendorSalesObj is ',vendorSalesObj)
    console.log(vendorSalesList)
    vendorSalesList.sort(function(a, b) {
      return b[1] - a[1];
    });
    let returnArr = [] 
    
    for(let i = 0; i<vendorSalesList.length;i++) {
      returnArr.push(vendorSalesList[i][0])
    }
    return returnArr
  }
