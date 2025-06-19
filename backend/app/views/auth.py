from . import views
from flask import request, jsonify, Blueprint
from ..models import User
from flask_jwt_extended import create_access_token, set_access_cookies, unset_jwt_cookies, jwt_required



@views.route('/login', methods=['POST'])
def login():
    username = request.json.get('username')
    password = request.json.get('password')

    user = User.find_by_username(username)
    if user is None or user.check_password(password) is False:
        return jsonify({'msg': 'Authentication failed',
                        'details': 'Invalid username or password'}), 401
    
    response = jsonify({'msg': 'Logged In'})
    access_token = create_access_token(identity=user.username)
    set_access_cookies(response, access_token)

    return response, 200


@views.route('/logout', methods=['POST'])
def logout():
    response = jsonify({'msg': 'Logged Out'})
    unset_jwt_cookies(response)

    return response, 200