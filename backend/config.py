import os
from dotenv import find_dotenv, load_dotenv

dotenv_path = find_dotenv()
load_dotenv(dotenv_path)


class Config():
    # Flask
    PORT = 5000
    DEBUG = True
    HOST = '127.0.0.1'

    # Flask JWT
    JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY') 

    # Database
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL')
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # Admin credentials
    AD_USER = os.getenv('ADMIN_USERNAME')
    AD_PASSW = os.getenv('ADMIN_PASSWORD')

