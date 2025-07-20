from app.models import Device, DeviceType

def test_delete_device_success(logged_in_admin_client):
    """
    GIVEN a logged in admin user and created device
    WHEN admin user want to delete device ('api/device')
    THEN device should be deleted from database
    """

    device_type = DeviceType.find_by_name_and_vendor(name="cisco", vendor="cisco")
    device = Device(name="R-TEST-123", model="C1921", device_type=device_type)
    device.save()

    response = logged_in_admin_client.delete(f'api/device/{device.id}')

    assert response.status_code == 200
    assert Device.find_by_name(device.name) is None
    


def test_delete_device_failed_401(client):
    """
    GIVEN a not logged in user and created device
    WHEN not logged in user want to delete device ('api/device')
    THEN device shouldnt be deleted from database (401 - Unauthorized)
    """

    device_type = DeviceType.find_by_name_and_vendor(name="cisco", vendor="cisco")
    device = Device(name="R-TEST-1234", model="C1921", device_type=device_type)
    device.save()

    response = client.delete(f'api/device/{device.id}')

    assert response.status_code == 401
    assert Device.find_by_name(device.name) is not None
    device.delete()



def test_delete_device_failed_403(logged_in_client):
    """
    GIVEN a logged in user without admin permission and created device
    WHEN not admin user want to delete device ('api/device')
    THEN device shouldnt be deleted from database (403 - Forbidden)
    """

    device_type = DeviceType.find_by_name_and_vendor(name="cisco", vendor="cisco")
    device = Device(name="R-TEST-12345", model="C1921", device_type=device_type)
    device.save()

    response = logged_in_client.delete(f'api/device/{device.id}')

    assert response.status_code == 403
    assert Device.find_by_name(device.name) is not None
    device.delete()


def test_delete_device_failed_404(logged_in_admin_client):
    """
    GIVEN a logged in admin user
    WHEN admin user want to delete not existing device ('api/device')
    THEN return status code 404 - Not Found
    """
    device_id = 999999999123
    response = logged_in_admin_client.delete(f'api/device/{device_id}')

    assert response.status_code == 404
