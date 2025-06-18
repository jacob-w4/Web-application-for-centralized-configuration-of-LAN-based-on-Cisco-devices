from app import create_app
from config import config

### Defining app configurations
app = create_app(config_class=config['development'])


if __name__ == '__main__':
    app.run(port=app.config['PORT'],
            host=app.config['HOST'],
            debug=app.config['DEBUG'])