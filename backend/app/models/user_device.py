from app import db
from .shared import BaseMixin

class UserDevice(db.Model, BaseMixin):
    __tablename__ = 'user_devices'
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), primary_key=True)
    device_id = db.Column(db.Integer, db.ForeignKey('device.id'), primary_key=True)
    folder_id = db.Column(db.Integer)

    user = db.relationship('User', back_populates='user_devices')
    device = db.relationship('Device', back_populates='user_devices')
    
    