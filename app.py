from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

import requests
from bs4 import BeautifulSoup

from pymongo import MongoClient
import certifi
ca = certifi.where()
client = MongoClient("mongodb+srv://one_week:test@cluster0.z3lmmyi.mongodb.net/?retryWrites=true&w=majority", tlsCAFile=ca)
db = client.dbsparta


@app.route("/")
def home():
    return render_template("index.html")



@app.route("/message", methods=["POST"])
def message_post():
    name_receive = request.form["name_give"]
    message_receive = request.form["message_give"]

    doc = {"name": name_receive, "message": message_receive}
    db.message.insert_one(doc)
    return jsonify({"msg": "저장 완료!"})




@app.route("/message", methods=["GET"])
def message_get():
    all_message = list(db.message.find({}, {"_id": False}))
    return jsonify({"result": all_message})

@app.route("/member", methods=["GET"])
def member_get():
    all_members = list(db.member.find({}, {"_id": False}))
    return jsonify({"result": all_members})



if __name__ == "__main__":
    app.run("0.0.0.0", port=5002, debug=True)
