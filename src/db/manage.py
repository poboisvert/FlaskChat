# Generic
from flask import Flask
from flask_restful import Api
from flask_jwt import JWT
from flask_script import Manager


# Authentification
from security import authenticate, identity
from resources.user import UserRegister
from resources.market import Market, MarketList

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['PROPAGATE_EXCEPTIONS'] = True
app.secret_key = 'examplekey'
api = Api(app)


@app.before_first_request
def create_tables():
    db.create_all()


jwt = JWT(app, authenticate, identity)  # /auth

# Market - Routing
api.add_resource(Market, '/market/<string:name>')
api.add_resource(MarketList, '/markets')

# Routing - User 
api.add_resource(UserRegister, '/register')

if __name__ == '__main__':
    from db import db
    db.init_app(app)
    app.run(port=5000, debug=True)
