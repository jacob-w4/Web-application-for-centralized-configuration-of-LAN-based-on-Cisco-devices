from app import db
import datetime
from .shared import BaseMixin

class Backup(db.Model, BaseMixin):
    __tablename__ = 'backup'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(45), nullable=False)
    description = db.Column(db.String(100), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.datetime.now, nullable=False)
    description = db.Column(db.String(800), nullable=False)
    device_id = db.Column(db.Integer, db.ForeignKey('device.id'))

    def __repr__(self):
        return '<Backup %r>' % self.name