# to run the server execute commands: 
# $ poetry init
# $ poetry install
# $ poetry shell
# $ uvicorn main:app --reload

# Documentation through SwaggerUI is automatically generated and 
# can be accessed on "http://127.0.0.1:8000/docs"

from fastapi import FastAPI
from datetime import datetime
import requests

app = FastAPI()
API_URL = "http://localhost:3000"

#GET request which provides current timestamp (exercise part I)
@app.get("/fast_api_timestamp")
def _():
    return {"timestamp": datetime.now()}

# Integrating third-party API (exercise part II)
@app.get("/timestamp")
def _():
    response = requests.get(f'{API_URL}/express_api_timestamp')
    response = response.json()
    current_date = datetime.strptime(response['timestamp'], '%Y-%m-%dT%H:%M:%S.%fZ')
    return {"Timestamp from EXPRESS_API": current_date} 