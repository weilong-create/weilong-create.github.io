function avg(data){
    let f=data.products
    let count=0
    for(i=0;i<f.length;i++){
        count+=f[i].price
    }
    return count/3

}

console.log(
    avg({
        size:3,
        products:[{
            name:'product1',
            price: 100,

        },
        {
            name: 'product2',
            price: 700,
        },
        {
            name:'product3',
            price: 250,
        },
    ]
    })

)