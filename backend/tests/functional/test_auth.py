import os
from dotenv import find_dotenv, load_dotenv

dotenv_path = find_dotenv()
load_dotenv(dotenv_path)

def test_login_success(client):
    """
    GIVEN a Flask application configured for testing
    WHEN the 'api/login' is requested
    THEN check if login is successful
    """
    response = client.post('api/login', json={"username": os.getenv('ADMIN_USERNAME'),
                                              "password": os.getenv('ADMIN_PASSWORD')})
    set_cookie_header = response.headers.get('Set-Cookie')

    assert 'access_token_cookie=' in set_cookie_header
    assert response.status_code == 200
    assert response.json['msg'] == 'Logged In'


def test_login_failed(client):
    """
    GIVEN a Flask application configured for testing
    WHEN the 'api/login' is requested
    THEN check if login is failed
    """

    response = client.post('api/login', json={"username": os.getenv('ADMIN_USERNAME'),
                                              "password": 'jgfdjfgshbvcx'})
    
    assert response.status_code == 401
    assert response.json['msg'] == 'Authentication failed'


def test_logout(logged_in_admin_client):
    """
    GIVEN a logged in user
    WHEN the 'api/logout' is requested
    THEN check if logout is successful
    """

    response = logged_in_admin_client.post('api/logout')
    set_cookie_header = response.headers.get('Set-Cookie')

    assert 'access_token_cookie=;' in set_cookie_header
    assert response.status_code == 200
    assert response.json['msg'] == 'Logged Out'