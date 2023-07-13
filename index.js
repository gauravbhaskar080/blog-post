//jshint esversion:6
const connectToMongo = require("./dbConnection.js");
const Post = require("./models/posts");
const FormSubmission = require("./models/formSubmission");
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent = "Welcome to our Blog! Here, you will find a collection of informative and engaging articles on various topics. Explore our posts to expand your knowledge and stay updated with the latest trends. Happy reading!";
const aboutContent = "We are passionate about sharing knowledge and insights through our blog. Our team of dedicated writers strives to provide high-quality content on a wide range of topics. Whether you're a curious reader or a fellow enthusiast, we hope you find value and inspiration in our articles.";
const contactContent = "We would love to hear from you! If you have any questions, suggestions, or simply want to connect with us, feel free to reach out. You can contact us through the form below or via email or phone. We appreciate your feedback and look forward to engaging with our readers!";


const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

connectToMongo();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  Post.find({})
    .exec()
    .then((posts) => {
      res.render("home", {
        startingContent: homeStartingContent,
        posts: posts,
      });
    })
    .catch((err) => {
      console.error("Error retrieving posts:", err);
      res.status(500).send("Internal Server Error");
    });
});

app.get("/compose", function (req, res) {
  res.render("compose");
});

app.post("/compose", function (req, res) {
  const postDayTitle = req.body.postDayTitle;
  const postTitle = req.body.postTitle;
  const postBody = req.body.postBody;
  const postImageURL = req.body.postImageURL;

  const post = new Post({
    dayTitle: postDayTitle,
    title: postTitle,
    content: postBody,
    imageURL: postImageURL
  });

  post.save()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.error("Error saving post:", err);
      res.status(500).send("Internal Server Error");
    });
});

app.get("/posts/:postId", function (req, res) {
  const requestedPostId = req.params.postId;

  Post.findOne({ _id: requestedPostId })
    .exec()
    .then((post) => {
      res.render("post", {
        dayTitle: post.dayTitle,
        title: post.title,
        content: post.content,
        imageURL: post.imageURL
      });
    })
    .catch((err) => {
      console.error("Error retrieving post:", err);
      res.status(500).send("Internal Server Error");
    });
});

app.get("/about", function (req, res) {
  res.render("about", { aboutContent: aboutContent });
});

app.get("/contact", function (req, res) {
  res.render("contact", { contactContent: contactContent });
});

app.post("/contact", async function(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  try {
    // Create a new form submission document
    const formSubmission = new FormSubmission({
      name: name,
      email: email,
      message: message,
    });

    // Save the form submission to the database
    await formSubmission.save();
    res.redirect("/"); // Redirect to the home page
  } catch (error) {
    console.log(error);
    res.send("Error occurred. Please try again later.");
  }
});

app.listen(3000, function () {
  console.log('Server listening on port 3000');
});
