const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema ({
    reviewer: String,
    reviewerAvatar: String, 
    rating: {type: Number, min: 1, max: 10},
    content: String,
   }, {
    timestamps: true
})

const pairingSchema = new Schema ({
    pairer: String,
    pairerAvatar: String,
    pairedWith: String, 
    url: String,
    siteName: String, 
    image: String,
    date: Date,
    notes: String,
    wineId: String
}, {
    timestamps: true
})


const wineSchema = new Schema ({
    name: String, 
    varietal: String, 
    year: Number, 
    url: String, 
    price: String,
    reviews: [reviewSchema],
    region: String, 
    image: String, 
    description: String,
    pairings: [pairingSchema],
    favoritedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
    siteName: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Wine', wineSchema);