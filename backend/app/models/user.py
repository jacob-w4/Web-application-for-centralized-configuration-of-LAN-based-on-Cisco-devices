from app import db
import datetime
from werkzeug.security import generate_password_hash, check_password_hash

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(30), unique=True, nullable=False)
    password = db.Column(db.String(162), unique=True, nullable=False)
    permission = db.Column(db.Enum('read', 'write', 'admin'), default='read', nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.datetime.now, nullable=False)
    device_folders = db.relationship('DeviceFolder', backref='user')
    user_devices = db.relationship('UserDevice', back_populates='user')

    def __init__(self, username, password, permission):
          self.username = username
          self.set_password(password)
          self.permission = permission

    def set_password(self, password):
        self.password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def __repr__(self):
        return '<User %r>' % self.username
