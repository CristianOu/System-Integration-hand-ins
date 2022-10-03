# to run the server execute commands: 
# $ poetry install
# $ uvicorn main:app --reload

from fastapi import FastAPI
import json
import csv

app = FastAPI()

@app.get("/json")
def _():
    f = open('../../../1._intro/files/file.json')
    response = json.load(f)
    return response

@app.get("/csv")
def _():
    with open('../../../1._intro/files/file.csv', newline='') as csv_file:
        reader = csv.DictReader(csv_file)
        response = {}
        for row in reader:
            response.update(row) 
        return response

@app.get("/txt")
def _():
    response = {}
    with open('../../../1._intro/files/file') as file:
        lines = file.readlines()
        for line in lines:
            (key, value) = line.split()
        response[key] = value
        return response