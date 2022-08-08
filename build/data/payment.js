var payment = [
    {
        barCode: "1",
        paymentDate: new Date(),
        products: [
            {
                productID: "62e76810356b0c328eec501c",
                quantity: 1
            },
            {
                productID: "62e76810356b0c328eec501d",
                quantity: 1
            },
            {
                productID: "62e76810356b0c328eec5020",
                quantity: 1
            },
        ],
        userID: "62e7f9f57f6971ee2e5d1acb",
        totalPayment: 600.15,
        isShipping: true
    },
    {
        barCode: "2",
        paymentDate: new Date(),
        products: [
            {
                productID: "62e76810356b0c328eec501c",
                quantity: 1
            },
            {
                productID: "62e76810356b0c328eec501d",
                quantity: 1
            },
            {
                productID: "62e76810356b0c328eec5020",
                quantity: 1
            },
        ],
        userID: "62e7f9f57f6971ee2e5d1acb",
        totalPayment: 0.15,
        isShipping: false
    },
    {
        barCode: "3",
        paymentDate: new Date(),
        products: [
            {
                productID: "62e76810356b0c328eec501c",
                quantity: 1
            },
            {
                productID: "62e76810356b0c328eec501d",
                quantity: 1
            },
            {
                productID: "62e76810356b0c328eec5020",
                quantity: 1
            },
        ],
        userID: "62e7f9f57f6971ee2e5d1acb",
        totalPayment: 333,
        isShipping: true
    }
];
module.exports = payment;
