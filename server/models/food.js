const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    foodName: {
        type: String,
    },
    daysSinceIAte: {
        type: Number,
    }
});

const Food =  mongoose.model("Food", FoodSchema);

module.exports = Food; 