import  mongoose  from "mongoose";
const schema = new mongoose.Schema({
    id_user: {
        type: String,
        default: 'no_user'
    },
    id_book: {
        type: String,
        required: [true, "can't be blank"]
    },
    name: {
        type: String,
        required: [true, "can't be blank"]
    },
    comment: {
        type: String
    },
    date: {
        type: Date,
        default: new Date()
    }
});
export const CommentModel = mongoose.model('Comment', schema);