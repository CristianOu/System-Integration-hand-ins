const express = require('express')
const app = express()
const port = 3000
const API_URL = "http://127.0.0.1:8000"

app.get("/express_api_timestamp", (req, res) => {
  res.send({"timestamp": new Date()}) 
})

app.get("/timestamp", async (req, res) => {
  let result = await fetch(`${API_URL}/fast_api_timestamp`)
  result = await result.json()
  console.log(typeof result.timestamp)
  const date = new Date(result.timestamp)
  console.log(typeof date)
  res.send({"Timestamp from FAST_API": date})
})

app.listen(port, () => {
    console.log("Server is running on", port);
})
