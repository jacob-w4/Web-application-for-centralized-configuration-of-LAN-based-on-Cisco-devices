from app import create_app, db
from config import config
from app.models import *



app = create_app(config_class=config['development'])

# Create database structure
with app.app_context():
    db.drop_all()
    db.create_all()

    # Create admin user
    admin = User(username=app.config['AD_USER'],
                 password=app.config['AD_PASSW'],
                 permission='admin')
    admin.save()
