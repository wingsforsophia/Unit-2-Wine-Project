const mongoose = require('mongoose')
const Schema = mongoose.Schema



const priceSchema = new Schema ({
    price: Number, 
    location: String, 
    date: Date
}, {
    timestamps: true
})

const reviewSchema = new Schema ({
    reviewer: String,
    reviewerPhoto: String, 
    rating: {type: Number, min: 1, max: 10},
    content: String,

}, {
    timestamps: true
})

const pairingSchema = new Schema ({
    pariedWith: String, 
    recipeUrl: String, 
    date: Date
}, {
    timestamps: true
})


const wineSchema = new Schema ({
    name: String, 
    varietal: String, 
    year: Number, 
    url: String, 
    price: [priceSchema],
    liked: Boolean, 
    reviews: [reviewSchema],
    image: String, 
    pairings: [pairingSchema],
    triedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
    favoritedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
}, {
    timestamps: true
})




module.exports = mongoose.model('Wine', wineSchema);