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


    @classmethod
    def find_by_name(cls, name):
        return cls.query.filter_by(name=name).first()


    def __repr__(self):
        return '<Device name %r>' % self.name
