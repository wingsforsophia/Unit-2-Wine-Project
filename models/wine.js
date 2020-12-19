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
    reviewerAvatar: String, 
    rating: {type: Number, min: 1, max: 10},
    content: String,
   }, {
    timestamps: true
})

const pairingSchema = new Schema ({
    pariedWith: String, 
    url: String,
    image: String,
    date: Date,
    notes: String
}, {
    timestamps: true
})


const wineSchema = new Schema ({
    name: String, 
    varietal: String, 
    year: Number, 
    url: String, 
    price: [priceSchema],
    reviews: [reviewSchema],
    image: String, 
    pairings: [pairingSchema],
    triedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
    favoritedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
}, {
    timestamps: true
})

module.exports = mongoose.model('Wine', wineSchema);