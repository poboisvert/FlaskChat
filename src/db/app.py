from flask import Flask

def create_app(config_filename):
   # create a minimal app
   app = Flask(__name__)
   app.config.from_pyfile(config_filename)

   # simple hello world view
   @app.route('/hello')
   def hello():
      return 'Hello, World!'

   return app