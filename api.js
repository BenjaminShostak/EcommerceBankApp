const axios = require('axios');
const mysql2 = require('mysql2')
const sequelize = require('sequelize')

// Send a POST request
axios({
    method: 'post',
    url: '/user/12345',

  });

  axios({
    method: 'get',
    url: 'http://bit.ly/2mTM3nY',
    responseType: 'stream'
    });

    axios
  .get("https://www.omdbapi.com/?t=The%20Matrix&apikey=trilogy")
  .then(function(res) {
    console.log(res.data);
  });
