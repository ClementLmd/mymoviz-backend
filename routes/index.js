var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');

const API_KEY_TMDB = process.env.API_KEY_TMDB;

router.get('/movies', (req,res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=bb538245ee77df239c2188ff07673782`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        res.json(data)
    })
})

module.exports = router;
