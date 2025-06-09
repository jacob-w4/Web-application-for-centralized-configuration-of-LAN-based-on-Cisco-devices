class Config():
    # Flask Config
    PORT = 2888


class DevConfig(Config):
    # Flask Config
    DEBUG = True
    HOST = '127.0.0.1'

    # Database Config


class LiveConfig(Config):
    # Flask Config
    DEBUG = False
    HOST = '0.0.0.0'

    # Database Config