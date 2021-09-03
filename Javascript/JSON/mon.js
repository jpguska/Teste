db.product.insertOne({
    id: 3,
    name: "rubber",
    price: 1.30,
    stock: 43,
    reviews: [
        {
            authorName: "Sally",
            rating: 5,
            review: "hexagon!"
        },
        {
            authorName: "John",
            rating: 2,
            review: "hexagon??"
        },
    ]
})