from app.models import User

def test_get_current_user_data(logged_in_admin_client):
    """
    GIVEN a logged in user
    WHEN the '/api/me' endpoint is requested
    THEN the current user data should be returned
    """

    response = logged_in_admin_client.get('api/me')

    assert response.status_code == 200
    assert response.json['username'] == 'admin123'
    assert response.json['perm'] == 'admin'


def test_create_user_success(logged_in_admin_client):
    """
    GIVEN a logged in admin user
    WHEN admin creates user ('/api/user')
    THEN user should be created (status 200)
    """

    response = logged_in_admin_client.post('api/user', json={'username': 'test12345', 'password': 'pass123', 'permission': 'read'})
    
    user = User.find_by_username('test12345')

    assert response.status_code == 200
    assert response.json['msg'] == 'User has been created'
    assert user is not None
    assert user.permission == 'read'

    user.delete()

def test_create_user_failed_401(client):
    """
    GIVEN not logged in user
    WHEN want to create user ('/api/user')
    THEN user shouldnt be created (status 401 - Unauthorized)
    """

    response = client.post('api/user', json={'username': 'test12345', 'password': 'pass123', 'permission': 'read'})
    
    user = User.find_by_username('test12345')

    assert response.status_code == 401
    assert user is None

def test_create_user_failed_409(logged_in_client):
    """
    GIVEN logged in user (with read permission)
    WHEN want to create user ('/api/user')
    THEN user shouldnt be created (status 403 - Need admin perm)
    """

    response = logged_in_client.post('api/user', json={'username': 'test12345', 'password': 'pass123', 'permission': 'read'})
    
    user = User.find_by_username('test12345')

    assert response.status_code == 403
    assert user is None