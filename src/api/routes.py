"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route("/signup", methods = ["POST"])
def signup():
    body = request.get_json()
    comprobandoE = User.query.filter_by(email = body["email"]).first()
    if comprobandoE != None:
        return "el email ya existe"
    comprobandoN = User.query.filter_by(nickname = body["nickname"]).first()
    if comprobandoN != None:
        return "el nickname ya existe"
    user = User(email = body["email"], password = body["password"], nickname = body["nickname"]  )
    db.session.add(user)
    db.session.commit()
    token=create_access_token(identity=user.id)
    return jsonify(token)

@api.route("/login", methods = ["POST"])
def login():
    body = request.get_json()
    email= body["email"]
    password=body["password"]
    comprobando = User.query.filter_by(email = body["email"]).first()
    psw = User.query.filter_by(password = body["password"]).first()
    if comprobando == None:
       raise APIException('Email no encontrado')
    if psw == None:
       raise APIException('Contraseña incorrecta') 
    if comprobando.password != psw.password:
        raise APIException('Contraseña incorrecta') 
    token=create_access_token(identity=comprobando.id)
    return jsonify(token)

@api.route("/altas", methods=['GET'])
@jwt_required()
def private():
    current_user_id = get_jwt_identity()
    return jsonify({"id": user.id, "email": user.email }), 200

@api.route('/token', methods=['POST'])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.filter.query(email=email, password=password).first()
    if user is None:
        return jsonify({"msg":"error in the email or password"}), 401
    access_token = create_access_token( identity=user.id)
    return jsonify({"token":access_token, "user_id":user.id}), 200