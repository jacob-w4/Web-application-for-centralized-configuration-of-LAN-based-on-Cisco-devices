from ..utils import admin_required
from . import views
from flask import request, jsonify
from ..models import User
from flask_jwt_extended import get_jwt_identity, jwt_required



@views.route('/me', methods=['GET'])
@jwt_required()
def get_current_user():
    user_identity = get_jwt_identity()
    user = User.find_by_username(user_identity)

    if not user:
        return jsonify({'message': 'User not found'}), 404
    
    return jsonify({'username': user.username,
                    'perm': user.permission}), 200


@views.route('/user', methods=['POST'])
@jwt_required()
@admin_required
def create_user():
    username = request.get_json()['username']
    password = request.get_json()['password']
    permission = request.get_json()['permission']
    if User.find_by_username(username) is not None:
        return jsonify({'msg': 'User already exists'}), 409
    
    user = User(username, password, permission)
    user.save()
    return jsonify({'msg': 'User has been created'}), 200