def test_get_current_user_data(logged_in_client):
    """
    GIVEN a logged in user
    WHEN the '/api/me' endpoint is requested
    THEN the current user data should be returned
    """

    response = logged_in_client.get('api/me')

    assert response.status_code == 200
    assert response.json['username'] == 'admin123'
    assert response.json['perm'] == 'admin'