from flask import Flask, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

@app.route("/api/destinations", methods=["GET"])
def get_destinations():
    with open("data/destinations.json") as f:
        data = json.load(f)
    return jsonify(data)

if __name__ == "__main__"

port = int(os.environ.get("PORT", 10000))
app.run(host="0.0.0.0", port=port)

