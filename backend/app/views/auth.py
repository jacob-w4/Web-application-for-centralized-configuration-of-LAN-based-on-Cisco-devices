from . import views
from flask import request, jsonify
from ..models import User
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, create_refresh_token

@views.route('/login', methods=['POST'])
def login():
    username = request.form.get('username')
    password = request.form.get('password')

    user = User.find_by_username(username)
    if user is None or user.check_password(password) is False:
        return jsonify({'status': 'Authentication failed',
                        'details': 'Invalid username or password'}), 401
    
    access_token = create_access_token(identity=user.username)

    return jsonify({'status': 'Logged In',
                    'token': access_token}), 200