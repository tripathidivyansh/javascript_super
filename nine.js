const shoppingCart = [
    {
        itemName: "js courSe",
        price: 2999,
    },
    {
        itemName: "Mobine dev courSe",
        price: 999,
    },
    {
        itemName: "Devpos",
        price: 999999999999,
    },
];

const priceTopay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceTopay);
