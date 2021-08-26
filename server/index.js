const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const BookModel = require("./models/book");
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://dbUser:parafernalha@crud.j1xvh.mongodb.net/book?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

app.post("/insert", async (req, res) => {
    const bookName = req.body.bookName;
    const bookPrice = req.body.bookPrice;
    const bookAuthor = req.body.bookAuthor;

    const book = new BookModel({ bookName: bookName, bookPrice: bookPrice, bookAuthor: bookAuthor });

    try {
        await book.save();
        res.send("inserted data");
    } catch (err) {
        console.log(err);
    }
});

app.get("/read", async (req, res) => {
    // FoodModel.find({$where: {foodName:  "Apple"}}, )
    BookModel.find({}, (err, results) => {
        if (err) {
            res.send(err);
        }

        res.send(results);
    });
});

app.put("/update", async (req, res) => {
    const newFoodName = req.body.newFoodName;
    const id = req.body.id;

    try {
        await FoodModel.findById(id, (err, updatedFood) => {
            updatedFood.foodName = newFoodName;
            updatedFood.save();
            res.send("updated");
        });
    } catch (err) {
        console.log(err);
    }
});

app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    await FoodModel.findByIdAndRemove(id).exec();
    res.send("deleted");
});

app.listen(3004, () => {
    console.log("server runnig on port 3003");
});