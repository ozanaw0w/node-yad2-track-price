// Set up the database driver
const env = require('dotenv');
env.config()
const mongoose = require('mongoose');
const uri = process.env.MONGO_DB_URL;

//store the prices in the database
class Database {
    PriceModel;
    async connect() {
        await mongoose.connect(uri)
        this.PriceModel = new mongoose.model('Price', priceSchema, 'prices');
    }
    // Check the price difference  
    async addPrice(url, price) {
        const prev = await this.PriceModel.findOneAndUpdate({
            url: url
        }, {
            $set: { price }
        }, { upsert: true })
        if (!prev) {
            return `new price ${price}`
        } else if (prev.price !== Number(price)) {
            return `update ${prev.price} to ${price}`
        } else {
            return ``
        }

    }
}
const priceSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = Database;