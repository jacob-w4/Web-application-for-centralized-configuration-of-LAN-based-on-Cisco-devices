from app.models import User, Device
    

def test_new_user():
    """
    GIVEN a User model
    WHEN a new User is created
    THEN check the username, password, and permission fields are defined correctly
    """
    user = User('test123', 'testpass', 'read')

    assert user.username == 'test123'
    assert user.check_password('testpass')  == True
    assert user.permission == 'read'


def test_new_device():
    """
    GIVEN a Device model
    WHEN a new device is created
    THEN check name, ipv4_address, ipv6_address, description and model are defined correctly
    """
    device = Device('test_device', '192.168.1.100', '2001:db8:acab:cafe::1', 'desc123', 'c1921/k9')

    assert device.name == 'test_device'
    assert device.ipv4_address == '192.168.1.100'
    assert device.ipv6_address == '2001:db8:acab:cafe::1'
    assert device.description == 'desc123'
    assert device.model == 'c1921/k9'