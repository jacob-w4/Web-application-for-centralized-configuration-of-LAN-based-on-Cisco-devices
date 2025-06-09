from app import create_app
from config import *

### Defining app configurations
config_class = DevConfig()
#config_class = LiveConfig()

app = create_app(config_class)


if __name__ == '__main__':
    app.run(port=app.config['PORT'],
            host=app.config['HOST'],
            debug=app.config['DEBUG'])