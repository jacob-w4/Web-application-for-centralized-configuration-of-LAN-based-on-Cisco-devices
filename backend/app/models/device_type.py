from app import db
from .shared import BaseMixin

class DeviceType(db.Model, BaseMixin):
    __tablename__ = 'device_type'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(45), nullable=False)
    vendor = db.Column(db.String(45), nullable=False)
    devices = db.relationship('Device', backref='device_type')

    

    def __repr__(self):
        return '<DeviceType %r>' % self.name