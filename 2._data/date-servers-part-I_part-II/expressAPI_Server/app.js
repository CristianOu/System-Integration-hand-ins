const express = require('express')
const app = express()
const port = 3000
const API_URL = "http://127.0.0.1:8000"

// GET request which provides current timestamp (exercise part I)
app.get("/express_api_timestamp", (req, res) => {
  res.send({"timestamp": new Date()}) 
})

// Integrating third-party API (exercise part II)
app.get("/timestamp", async (req, res) => {
  let result = await fetch(`${API_URL}/fast_api_timestamp`)
  result = await result.json()
  const date = new Date(result.timestamp)
  res.send({"Timestamp from FAST_API": date})
})

app.listen(port, () => {
    console.log("Server is running on", port);
})
