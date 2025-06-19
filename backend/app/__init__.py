from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from flask_cors import CORS


db = SQLAlchemy()
jwt = JWTManager()
cors = CORS(supports_credentials=True)

def create_app(config_class):
    app = Flask(__name__)
    app.config.from_object(config_class)

    cors.init_app(app)
    db.init_app(app)
    jwt.init_app(app)
    

    # Blueprints
    from .views import views
    app.register_blueprint(views, url_prefix='/api')
    

    return app
    