const axios = require("axios");
const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        var{query: params} = req
        axios.get("https://www.googleapis.com/books/v1/volumes", {params}).then(results => console.log(results))

    }
}