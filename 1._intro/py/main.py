# script dev-start: $ nodemon --exec python3 main.py

import json
import csv

print("Python Read and Parse")

# Read and parse JSON
def readParseJSON():
  print("===JSON===")
  f = open('../files/file.json')
  data = json.load(f)
  if data :
    print(data['person'])
  else :
    print("No data")

# Read and parse CSV
def readParseCSV():
  print("===CSV===")
  with open('../files/file.csv', newline='') as csv_file:
    reader = csv.DictReader(csv_file)
    print("Full Name:", end =" ")
    for row in reader:
      print(row['first_name'], row['last_name'])

# Read and parse TXT
def readParseTXT():
  print("===TXT===")
  response = {}
  with open('../files/file') as file:
    lines = file.readlines()
    for line in lines:
      (key, value) = line.split()
      response[key] = value
    print("Course:", response["course"])
  
readParseJSON()
readParseCSV()
readParseTXT()