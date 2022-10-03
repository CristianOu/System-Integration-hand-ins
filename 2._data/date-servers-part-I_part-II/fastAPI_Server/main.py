# to run the server execute commands: 
# $ poetry install
# $ uvicorn main:app --reload

from fastapi import FastAPI
from datetime import datetime

import requests

app = FastAPI()
API_URL = "http://localhost:3000"

@app.get("/timestamp")
def _():
    response = requests.get(f'{API_URL}/express_api_timestamp')
    response = response.json()
    
    current_date = datetime.strptime(response['timestamp'], '%Y-%m-%dT%H:%M:%S.%fZ')
    print(type(current_date))

    return {"Timestamp from EXPRESS_API": current_date} 

@app.get("/fast_api_timestamp")
def _():
    return {"timestamp": datetime.now()}