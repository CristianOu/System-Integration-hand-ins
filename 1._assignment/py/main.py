# script the start: nodemon --exec python3 main.py

import json
import csv

print("Python Read and Parse")

print("===JSON===")
f = open('../files/file.json')
data = json.load(f)
print("Ocupation:", data['ocupation'])

print("===CSV===")
with open('../files/file.csv', newline='') as csv_file:
  reader = csv.DictReader(csv_file)
  print("Full Name:", end =" ")
  for row in reader:
    print(row['first_name'], row['last_name'])

print("===TXT===")
dictionary = {}
with open('../files/file') as file:
  lines = file.readlines()
  for line in lines:
    (key, value) = line.split()
    dictionary[key] = value
  print("Course:", dictionary["course"])