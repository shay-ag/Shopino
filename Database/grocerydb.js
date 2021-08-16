const Fruits = [
    {
        _id: '1',
        name: "Fresh Fruits Complete Basket",
        image: '/images/grocery/fruits/image1.webp',
        description: 'Ipsum exercitation reprehenderit dolor reprehenderit mollit in labore reprehenderit consequat qui sit proident laboris fugiat.',
        brand: 'Fruit Basket',
        price: '$6.99/kg',
        countInStock: 10,
        rating: 5.0,
        numReviews: 5,
    },
    {
        _id: '2',
        name: "Fresh Fruits Rich Donut Basket",
        image: '/images/grocery/fruits/image2.webp',
        description: 'Ipsum exercitation reprehenderit dolor reprehenderit mollit in labore reprehenderit consequat qui sit proident laboris fugiat.',
        brand: 'Fruit Basket',
        price: '$16.99/kg',
        countInStock: 20,
        rating: 5.0,
        numReviews: 5,
    },
    {
        _id: '3',
        name: "Fresh Fruits All in One Basket",
        image: '/images/grocery/fruits/image3.webp',
        description: 'Ipsum exercitation reprehenderit dolor reprehenderit mollit in labore reprehenderit consequat qui sit proident laboris fugiat.',
        brand: 'Fruit Basket',
        price: '$36.99/kg',
        countInStock: 5,
        rating: 5.0,
        numReviews: 5,
    }
];

const Vegetables = [
    {
        _id: '1',
        name: "Tomato & Green Vegies Basket",
        image: '/images/grocery/vegetables/image1.webp',
        description: 'Ipsum exercitation reprehenderit dolor reprehenderit mollit in labore reprehenderit consequat qui sit proident laboris fugiat.',
        brand: 'Vegie Basket',
        price: '$6.99/kg',
        countInStock: 10,
        rating: 5.0,
        numReviews: 5,
    },
    {
        _id: '2',
        name: "Cucumber & Onion Vegies Basket",
        image: '/images/grocery/vegetables/image2.webp',
        description: 'Ipsum exercitation reprehenderit dolor reprehenderit mollit in labore reprehenderit consequat qui sit proident laboris fugiat.',
        brand: 'Vegie Basket',
        price: '$16.99/kg',
        countInStock: 10,
        rating: 5.0,
        numReviews: 5,
    },{
        _id: '3',
        name: "Fresh & Healthy Corriander Leaves",
        image: '/images/grocery/vegetables/image3.webp',
        description: 'Ipsum exercitation reprehenderit dolor reprehenderit mollit in labore reprehenderit consequat qui sit proident laboris fugiat.',
        brand: 'Vegie Basket',
        price: '$2.99/kg',
        countInStock: 10,
        rating: 5.0,
        numReviews: 5,
    },
    {
        _id: '4',
        name: "Fresh & Healthy Spinach Leaves",
        image: '/images/grocery/vegetables/image4.webp',
        description: 'Ipsum exercitation reprehenderit dolor reprehenderit mollit in labore reprehenderit consequat qui sit proident laboris fugiat.',
        brand: 'Vegie Basket',
        price: '$6.99/kg',
        countInStock: 15,
        rating: 5.0,
        numReviews: 5,
    }
];


const DairyProducts = [
    {
        _id: '1',
        name: "Milk + Egg + Other Dairy Products",
        image: '/images/grocery/dairy-products/image1.webp',
        description: 'Ipsum exercitation reprehenderit dolor reprehenderit mollit in labore reprehenderit consequat qui sit proident laboris fugiat.',
        brand: 'Fruit Basket',
        price: '$6.99',
        countInStock: 10,
        rating: 5.0,
        numReviews: 5,
    },
    {
        _id: '2',
        name: "Milk + Other Dairy Products + Eggless Bread",
        image: '/images/grocery/dairy-products/image2.webp',
        description: 'Ipsum exercitation reprehenderit dolor reprehenderit mollit in labore reprehenderit consequat qui sit proident laboris fugiat.',
        brand: 'Vegie Basket',
        price: '$16.99',
        countInStock: 10,
        rating: 5.0,
        numReviews: 5,
    },
    {
        _id: '3',
        name: "Milk + Egg + Bread + Other Dairy Products",
        image: '/images/grocery/dairy-products/image3.webp',
        description: 'Ipsum exercitation reprehenderit dolor reprehenderit mollit in labore reprehenderit consequat qui sit proident laboris fugiat.',
        brand: 'Fruit Basket',
        price: '$26.99',
        countInStock: 10,
        rating: 5.0,
        numReviews: 5,
    }
];


module.exports = {Fruits, Vegetables, DairyProducts};