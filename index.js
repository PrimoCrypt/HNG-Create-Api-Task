var express = require("express");
var app = express();

app.get("/", (req, res, next) => {
    res.json({"slackUsername": 'LeoNesi', "backend": true, "age": 21, "bio": 'I am a full-stack Developer hoping to expand skills and impact on the society'});
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});
