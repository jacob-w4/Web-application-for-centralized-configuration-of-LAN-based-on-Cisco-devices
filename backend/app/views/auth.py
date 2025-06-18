from . import views
from flask import request, jsonify, Blueprint
from ..models import User
from flask_jwt_extended import create_access_token, set_access_cookies, unset_jwt_cookies, jwt_required



@views.route('/login', methods=['POST'])
def login():
    username = request.form.get('username')
    password = request.form.get('password')

    user = User.find_by_username(username)
    if user is None or user.check_password(password) is False:
        return jsonify({'message': 'Authentication failed',
                        'details': 'Invalid username or password'}), 401
    
    response = jsonify({'message': 'Logged In'})
    access_token = create_access_token(identity=user.username)
    set_access_cookies(response, access_token)

    return response, 200


@views.route('/logout', methods=['POST'])
def logout():
    response = jsonify({'message': 'Logged Out'})
    unset_jwt_cookies(response)

    return response, 200