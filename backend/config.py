import os
from dotenv import find_dotenv, load_dotenv
from datetime import timedelta

dotenv_path = find_dotenv()
load_dotenv(dotenv_path)


class Config():
    # Flask
    PORT = 5000
    DEBUG = True
    HOST = '127.0.0.1'

    # Flask JWT
    JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY') 
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(minutes=5)
    JWT_TOKEN_LOCATION = 'cookies'

    # Database
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL')
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # Admin credentials
    AD_USER = os.getenv('ADMIN_USERNAME')
    AD_PASSW = os.getenv('ADMIN_PASSWORD')

    # Cookies
    JWT_COOKIE_HTTPONLY = True
    JWT_COOKIE_SAMESITE = 'Strict'



class DevelopmentConfig(Config):
    # Cookies
    JWT_COOKIE_SECURE = False



class ProductionConfig(Config):
    # Cookies
    JWT_COOKIE_SECURE = True



config = {
    'development': DevelopmentConfig,
    'production': ProductionConfig
}