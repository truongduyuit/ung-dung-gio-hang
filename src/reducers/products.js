var initialState = [
    {
        id: 1,
        name: 'Iphone 7 Plus',
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'Xiao Mi A1',
        image: 'https://cdn1.vienthonga.vn/image/2017/9/3/xiaomi-mi-a1-black-600x600.jpg',
        description: 'Sản phẩm do Xiao Mi sản xuất',
        price: 200,
        inventory: 10,
        rating: 5
    },
    {
        id: 3,
        name: 'OPPO F1',
        image: 'https://images-na.ssl-images-amazon.com/images/I/61-BmjNwoTL._SX522_.jpg',
        description: 'Sản phẩm do Oppo sản xuất',
        price: 350,
        inventory: 10,
        rating: 4
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default products;