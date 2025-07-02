from functools import wraps
from flask import jsonify, request
from flask_jwt_extended import get_jwt_identity
from ..models import User

def admin_required(f):
    @wraps(f)
    def wrapper(*args, **kwargs):
        user_identity = get_jwt_identity()
        if User.is_admin(user_identity) is False:
            return jsonify({"msg": "Forbidden"}), 403
        else:
            return f(*args, **kwargs)
    return wrapper