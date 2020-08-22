var express = require("express");
var app = express();

app.set("view engine", "ejs");

var Items = require("./models/items");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + "/public"));

var mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
//mongoose.connect("mongodb://localhost/YelpCamp"); //-- for local database
mongoose.connect("mongodb+srv://Srezz:E0Y550F4bZhiXLeX@cluster0-oshu0.mongodb.net/todolist?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    console.log('Connected to DB!');
}).catch(err => {
    console.log('Error', err.message);
});


var methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.get("/", function (req, res) {
    Items.find({}, function (err, allitems) {
        if (err) {
            console.log(err);
            res.render("index");
        } else {
            res.render("index", {
                allitems: allitems
            });
        }
    });
});

app.post("/", function (req, res) {
    var newitem = {
        item: req.body.itemm
    }
    Items.create(newitem, function (err, newlyCreated) {
        if (err) {
            console.log(err);
        } else {
            console.log(newlyCreated);
        }
    });
    res.redirect("/");
})

app.delete("/:id", function (req, res) {
    Items.findByIdAndRemove(req.params.id, function (err) {
        res.redirect("/");
    })
});

app.get("/:id", function (req, res) {
    Items.find({}, function (err, allitems) {
        res.render("edit", {
            requiredid: req.params.id,
            allitems: allitems
        });
    })

})

app.put("/:id", function (req, res) {
    var updateditem = {
        item: req.body.editeditem
    }

    Items.findByIdAndUpdate(req.params.id, updateditem, function (err, updateditem) {
        if (err) {
            console.log(err);
        } else {
            console.log(updateditem);
            res.redirect("/");
        }
    });
});

app.listen(process.env.PORT || 3000, process.env.ID, function (req, res) {
    console.log("Server has started for todoList at PORT 3000");
});