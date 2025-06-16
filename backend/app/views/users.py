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
