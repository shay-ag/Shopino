const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const lodash = require("lodash");
const {MensWear, WomensWear, OccasionalWear, DailyWear} = require("./Database/fashiondb");
const {Mobiles, Cameras, Gaming, Sports} = require("./Database/electronicsdb");
const {Fruits, Vegetables, DairyProducts} = require("./Database/grocerydb");
const {AirConditioners, Kitchen, Refridgerators, Television, WashingMachine} = require("./Database/appliancesdb");
const {SchoolItems, Teddybears, BarbieDolls} = require("./Database/toysdb");
const { values } = require("lodash");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

const categories = ["Fashion", "Electronics", "Grocery", "Appliances", "Toys"];

const categoriesArray = [

    fashion = ["Men's Wear", "Women's Wear", "Occasional Wear", "Daily Wear"],

    electronics = ["Mobiles", "Camera", "Gaming", "Sports"],

    grocery = ["Fruits", "Vegetables", "Dairy Products"],

    appliances = ["Air-Conditioners", "Kitchen", "Refridgerators", "Television", "Washing-Machine"],

    toys = ["School Items", "Teddy Bears", "Barbie Dolls"]

];

const fashionProductsArray = [MensWear, WomensWear, OccasionalWear, DailyWear];
const electronicsProductsArray = [Mobiles, Cameras, Gaming, Sports];
const groceryProductsArray = [Fruits, Vegetables, DairyProducts];
const appliancesProductsArray = [AirConditioners, Kitchen, Refridgerators, Television, WashingMachine];
const toysProductsArray = [SchoolItems, Teddybears, BarbieDolls];

const productsArray = [fashionProductsArray, electronicsProductsArray, groceryProductsArray, appliancesProductsArray, toysProductsArray];

var cartArray = [];
var wishlistArray = [];

app.get("/", (req, res)=>{
    res.render('home')
});

app.get("/categories/:string", (req, res) => {

    const searchedPage = lodash.lowerCase(req.params.string);

    for(let i =0; i < categories.length; i++){
        const actualPage = lodash.lowerCase(categories[i]);

        if(searchedPage === actualPage){

            res.render('categories', {
                categoryName: categories[i],
                categoryArray: categoriesArray[i],
                productsArray: productsArray[i]
            });
        }
    }
});

app.get("/products/:string", (req, res) => {

    const searchedPage = lodash.lowerCase(req.params.string);

    for( let i = 0; i < productsArray.length; i++){

        for( let j = 0; j < productsArray[i].length; j++){

            for( let k =0; k < productsArray[i][j].length; k++){
                
                const validPage = lodash.lowerCase(productsArray[i][j][k].name);
                if( searchedPage === validPage){

                    res.render('products', {
                        image: productsArray[i][j][k].image,
                        name: productsArray[i][j][k].name,
                        description: productsArray[i][j][k].description,
                        brand: productsArray[i][j][k].brand,
                        price: productsArray[i][j][k].price,
                        countInStock: productsArray[i][j][k].countInStock,
                        rating: productsArray[i][j][k].rating,
                        numReviews: productsArray[i][j][k].numReviews 
                    });
                }
            }
        }
    }
});

var count = 1;

app.get("/cart", (req, res) => {

    res.render('cart', {
        cartItemArray: cartArray
    })
});


app.get("/addToCart/:string", (req, res) => {

    const productTitle = lodash.lowerCase(req.params.string);

    var appeared = false;
    var value = {};

    for ( let i = 0; i < productsArray.length; i++){
        for (let j = 0; j < productsArray[i].length; j++){
            for( let k = 0; k < productsArray[i][j].length; k++){

                const validTitle = lodash.lowerCase(productsArray[i][j][k].name);

                if(productTitle === validTitle){ 
                    value = {
                        name: productsArray[i][j][k].name,
                        image: productsArray[i][j][k].image,
                        brand: productsArray[i][j][k].brand,
                        price: productsArray[i][j][k].price
                    }
                }
            }
        }
    }
    cartArray.map ( item => {

        if (item.name === value.name){
            appeared = true;
            return item;
        }
        else
        return item;
    } 
    );
    
    if(appeared === false){
        cartArray.push(value);
    }
    res.redirect("/cart");
});

app.get("/removeFromCart/:string", (req, res) => {

    const productTitle = lodash.lowerCase(req.params.string);

    for ( let i = 0; i < productsArray.length; i++){
        for (let j = 0; j < productsArray[i].length; j++){
            for( let k = 0; k < productsArray[i][j].length; k++){

                const validTitle = lodash.lowerCase(productsArray[i][j][k].name);

                if(productTitle === validTitle){
                    
                    const value = {
                        name: productsArray[i][j][k].name,
                        image: productsArray[i][j][k].image,
                        brand: productsArray[i][j][k].brand,
                        price: productsArray[i][j][k].price
                    }

                    cartArray = cartArray.filter(item => item.name !== value.name);
                    res.redirect("/cart");
                }
            }
        }
    }
});

app.get("/wishlist", (req, res) => {

    res.render('wishlist', {
        wishlistItemArray : wishlistArray
    })
});

app.get("/addToWishlist/:string", (req, res) => {

    const searchedTitle = lodash.lowerCase(req.params.string);
    
    var appeared = false;
    var value = {};

    for( let i = 0; i<productsArray.length; i++){
        for( let j = 0; j<productsArray[i].length; j++){
            for( let k=0; k<productsArray[i][j].length; k++){

                const validTitle = lodash.lowerCase(productsArray[i][j][k].name)

                if(searchedTitle === validTitle){

                    value = {
                        name: productsArray[i][j][k].name,
                        description: productsArray[i][j][k].description,
                        image: productsArray[i][j][k].image,
                        brand: productsArray[i][j][k].brand,
                        price: productsArray[i][j][k].price
                    }
                }
            }
        }
    }
    wishlistArray.map (item => {

        if (item.name === value.name){
            appeared = true;
            return item;
        }
        else
        return item;
    } );
    
    if(appeared === false){
        wishlistArray.push(value);
    }
    res.redirect("/wishlist");
});

app.get("/removeFromWishlist/:string", (req, res) => {

    const productTitle = lodash.lowerCase(req.params.string);

    for ( let i = 0; i < productsArray.length; i++){
        for (let j = 0; j < productsArray[i].length; j++){
            for( let k = 0; k < productsArray[i][j].length; k++){

                const validTitle = lodash.lowerCase(productsArray[i][j][k].name);

                if(productTitle === validTitle){
                    
                    const value = {
                        name: productsArray[i][j][k].name,
                        image: productsArray[i][j][k].image,
                        brand: productsArray[i][j][k].brand,
                        price: productsArray[i][j][k].price
                    }

                    wishlistArray = wishlistArray.filter(item => item.name !== value.name);
                    res.redirect("/wishlist");
                }
            }
        }
    }
});

app.listen(3000, ()=> {
    console.log('Server started on port 3000');
})