# to run the server execute commands: 
# $ poetry add fastapi uvicorn[standard]
# $ poetry shell
# $ poetry install
# $ uvicorn main:app --reload

from fastapi import FastAPI
import json
import csv

app = FastAPI()

# Read, parse JSON and send response
@app.get("/json")
def _():
    f = open('../../../1._intro/files/file.json')
    response = json.load(f)
    return response

# Read, parse CSV and send response
@app.get("/csv")
def _():
    with open('../../../1._intro/files/file.csv', newline='') as csv_file:
        reader = csv.DictReader(csv_file)
        response = {}
        for row in reader:
            response.update(row) 
        return response

# Read, parse TXT and send response
@app.get("/txt")
def _():
    response = {}
    with open('../../../1._intro/files/file') as file:
        lines = file.readlines()
        for line in lines:
            (key, value) = line.split()
        response[key] = value
        return response