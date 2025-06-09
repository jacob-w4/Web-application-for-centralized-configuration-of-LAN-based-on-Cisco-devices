from app import create_app
from config import *

app = create_app()

config = Development()

if __name__ == '__main__':
    app.run(port=config.FLASK_PORT, 
            debug=config.DEBUG,
            host=config.HOST)