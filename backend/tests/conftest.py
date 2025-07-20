from flask import jsonify
import pytest
from config import config
from app import create_app
from flask_jwt_extended import create_access_token, set_access_cookies
import os
from dotenv import find_dotenv, load_dotenv
from app.models import User

dotenv_path = find_dotenv()
load_dotenv(dotenv_path)


@pytest.fixture()
def app():
    app = create_app(config['development'])
    with app.app_context():
        yield app

@pytest.fixture()
def client(app):
    return app.test_client()


@pytest.fixture()
def logged_in_admin_client(client):
    access_token = create_access_token(identity=os.getenv('ADMIN_USERNAME'))

    client.set_cookie(
        path='/',
        key='access_token_cookie',
        value=access_token,
    )
    return client

@pytest.fixture()
def logged_in_client(client):
    # Creating test user and save to db
    user = User('testing123', 'test123', 'read')
    user.save()

    access_token = create_access_token(identity=user.username)

    client.set_cookie(
        path='/',
        key='access_token_cookie',
        value=access_token,
    )
    yield client
    user.delete()