"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Car
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)


@api.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    newuser = User(email=data['email'],first_name=data['first_name'],last_name=data['last_name'],password=data['password'],phone=data['phone'],zip_code=data['zip_code'])
    db.session.add(newuser)
    db.session.commit()
    return 'success', 200

@api.route('/vin', methods=['POST'])
def create_autoInfo():
    data = request.get_json()
    autoInfo = Car(vin=data['vin'])
    db.session.add(autoInfo)
    db.session.commit()
    return 'sucess', 200

@api.route('/car', methods=['POST'])
def create_carInfo():
    data = request.get_json()
    autoInfo = Car(model=data['model'],color=data['color'],make=data['make'],mileage=data['mileage'],year=data['year'])
    db.session.add(autoInfo)
    db.session.commit()
    return jsonify({"msg": "info created"}), 200

@api.route('/auto', methods=['GET'])
def create_carInfo():
    car = Car.query.all()
    carlist = list(map(lambda x: x.serialize(), car))
    return jsonify({"msg": "info created"}), 200
   


@api.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    if "email" not in data or data['email']=='':
        raise APIException('Email Not Found', status_code=400)
    if 'password' not in data or data['password']=='':
        raise APIException('Password Not Found', status_code=400)
    user = User.query.filter_by(email=data['email']).first()
    if user == None or data['password'] != user.password or data['email'] != user.email:
        raise APIException('Email or Password is Incorrect!', status_code=400)
    else: 
        user = user.serialize()
        accessToken = create_access_token(identity=user)
        return jsonify(accessToken), 200

@api.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200

@api.route('/reset', methods=["POST", "GET"])
def reset():
    sg = sendgrid.SendGridAPIClient(api_key='')
    from_email = Email("nnngozi@gmail.com")
    subject = "Password Reset"
    data = request.get_json()
    to_email = data['email']
    content = Content("text/html", '<a href="https://3000-yadibelly-newfinalproje-nmj2vjpsht7.ws-us59.gitpod.io/resetpage">Reset Your Password</a>')
    mail = Mail(from_email, to_email, subject, content)
    response = sg.client.mail.send.post(request_body=mail.get())
    print(response.status_code)
    print(response.body)
    print(response.headers)
    return "Success"

@api.route('/updatepassword/<id>', methods=["PUT"])
def change_password(id):
    user = User.query.get(id)
    password = request.json['password']
    user.password = password
    db.session.commit()
    return "sucess"  

@api.route('/signup', methods=["GET"])
def get_users():
    user = User.query.all()
    user_list = list(map(lambda x: x.serialize(), user))
    return jsonify(user_list),200
    
    
