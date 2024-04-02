const router = require("express").Router()
const axios = require('axios');
require('dotenv').config()
//http://localhost:3001/api/workouts/

router.get("/:type", async (req, res)=>{

  const axios = require('axios');

  const options = {
    method: 'GET',
    url: process.env.WORKOUT_URL,
    params: {Muscles: req.params.type},
    headers: {
      'X-RapidAPI-Key': process.env.WORKOUT_API,
      'X-RapidAPI-Host': process.env.WORKOUT_HOST
    }
  };
  
  try {
    const response = await axios.request(options);
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.error(error);
  }
})

module.exports = router