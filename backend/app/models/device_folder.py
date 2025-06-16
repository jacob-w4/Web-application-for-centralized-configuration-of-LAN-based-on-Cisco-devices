from app import db
from .shared import BaseMixin

class DeviceFolder(db.Model, BaseMixin):
    __tablename__ = 'device_folder'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(45), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __repr__(self):
        return '<Folder %r>' % self.name