from flask import request, jsonify
from ..models import DeviceType, Device
from . import views
from ..utils import admin_required 
from flask_jwt_extended import jwt_required

@views.route('device', methods=['POST'])
@jwt_required()
@admin_required
def create_device():
    name = request.get_json()['name']
    ip = request.get_json()['ip']
    desc = request.get_json()['description']
    model = request.get_json()['model']
    vendor = request.get_json()['vendor']
    type = request.get_json()['type']

    if Device.find_by_name(name) is not None:
        return jsonify({'msg': 'Device already exists'}), 409

    device_type = DeviceType.find_by_name_and_vendor(type, vendor)
    device = Device(name=name, ipv4_address=ip, description=desc, model=model, device_type=device_type)
    device.save()
    return jsonify({'msg': 'Device has been created'}), 200

@views.route('device/<id>', methods=['DELETE'])
@jwt_required()
@admin_required
def delete_device(id):
    device = Device.find_by_id(int(id))

    if device is None:
        return jsonify({'msg': 'Device not found'}), 404
    
    device.delete()
    return jsonify({'msg': 'Device has been deleted'}), 200