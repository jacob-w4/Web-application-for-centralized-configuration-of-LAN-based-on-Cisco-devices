class Config():
    # Flask
    PORT = 5000


class DevConfig(Config):
    # Flask
    DEBUG = True
    HOST = '127.0.0.1'

    # Database


class LiveConfig(Config):
    # Flask
    DEBUG = False
    HOST = '0.0.0.0'

    # Database