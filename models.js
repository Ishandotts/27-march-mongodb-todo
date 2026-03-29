const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mohdmursaleen5805_db_user:yrP03B8w8Y61xodW@cluster0.ka7ibvr.mongodb.net/todo-app");

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

const TodoSchema = new mongoose.Schema({
    title: String,
    description: String,
    userId: mongoose.Types.ObjectId
});

const userModel = mongoose.model("users", UserSchema);
const todoModel = mongoose.model("todos", TodoSchema);

module.exports = {
    userModel: userModel,
    todoModel: todoModel
}