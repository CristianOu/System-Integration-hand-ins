import express from 'express';
import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

const app = express();
const PORT = 3000;
const API_URL = 'http://127.0.0.1:8000';
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Date Server Express',
      description: 'documentation of express API'
    },
    host: 'localhost:3000'
  },
  // https://www.codementor.io/@peteradeoye/splitting-your-swagger-spec-into-multiple-files-in-a-node-project-nuprc0mej
  apis: ['./docs/**/*.yaml']
};
const swaggerDocs = swaggerJSDoc(swaggerOptions);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

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

app.listen(PORT, () => {
    console.log("Server is running on", PORT);
})
