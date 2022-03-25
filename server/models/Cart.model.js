import  mongoose  from "mongoose";
const schema = new mongoose.Schema({
    id_user: {
        type: String,
    },
    date: {
        type: Date,
        default: new Date()
    },
    products: {
        type: [
            {
                id_category: String,
                name: String,
                price: Number,
                release_date: Date,
                img: String,
                describe: String, 
                id_nsx: String,
                id_nsx: String,
                count: Number,
                _id: String,
            }
        ],
        required : true,
        minlength: 1,
    },
})

export const CartModel = mongoose.model('Cart', schema);