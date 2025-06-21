from app import db
import datetime
from .shared import BaseMixin

class Device(db.Model, BaseMixin):
    __tablename__ = 'device'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20))
    ipv4_address = db.Column(db.String(15), nullable=True)
    ipv6_address = db.Column(db.String(39), nullable=True)
    description = db.Column(db.String(100), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.datetime.now)
    model = db.Column(db.String(45))
    device_type_id = db.Column(db.Integer, db.ForeignKey('device_type.id'))
    backups = db.relationship('Backup', backref='device')
    user_devices = db.relationship('UserDevice', back_populates='device')

    def __init__(self, name, ipv4_address, ipv6_address, description, model):
        self.name = name
        self.ipv4_address = ipv4_address
        self.ipv6_address = ipv6_address
        self.description = description
        self.model = model

    def __repr__(self):
        return '<Device name %r>' % self.name
