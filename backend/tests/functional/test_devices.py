from app.models import Device


def test_create_device_success(logged_in_admin_client):
    """
    GIVEN a logged in admin user
    WHEN user want to create device ('api/device')
    THEN user should be created in the db (status 200)
    """
    data = {'name': 'R1-TEST',
            'ip': '192.168.1.12',
            'description' : 'test',
            'model' : 'c1234',
            'vendor': 'cisco',
            'type': 'router'}

    response = logged_in_admin_client.post('api/device', json=data)

    assert response.status_code == 200
    assert response.json['msg'] == 'Device has been created'

    device = Device.find_by_name('R1-TEST')

    assert device is not None
    assert device.name == 'R1-TEST'

    device.delete()


def test_create_device_failed_409(logged_in_admin_client):
    """
    GIVEN a logged in admin user
    WHEN user want to create device with existing name ('api/device')
    THEN user shouldn't be created in the db (status 409)
    """
    device = Device(name='R1-TEST', ipv4_address='192.168.1.12', model='c1234')
    device.save()

    data = {'name': 'R1-TEST',
            'ip': '192.168.1.12',
            'description' : 'test',
            'model' : 'c1234',
            'vendor': 'cisco',
            'type': 'router'}

    response = logged_in_admin_client.post('api/device', json=data)

    assert response.status_code == 409

    device = Device.find_by_name('R1-TEST')
    
    assert device is not None
    assert device.name == 'R1-TEST'
    device.delete()


def test_create_device_failed_401(client):
    """
    GIVEN not logged in user
    WHEN user want to create device ('api/device')
    THEN user shouldn't be created in the db (status 401)
    """

    data = {'name': 'R1-TEST',
            'ip': '192.168.1.12',
            'description' : 'test',
            'model' : 'c1234',
            'vendor': 'cisco',
            'type': 'router'}

    response = client.post('api/device', json=data)

    assert response.status_code == 401

    device = Device.find_by_name('R1-TEST')

    assert device is None