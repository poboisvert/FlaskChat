import sqlite3
from flask import Blueprint, jsonify, request


from flask_restful import Resource, reqparse
from models.user import UserModel

class UserRegister(Resource):
    TABLE_NAME = 'users'

    parser = reqparse.RequestParser()
    parser.add_argument('username',
                        type=str,
                        required=True,
                        help="This field cannot be left blank!"
                        )
    parser.add_argument('password',
                        type=str,
                        required=True,
                        help="This field cannot be left blank!"
                        )
    parser.add_argument('coins',
                        type=int,
                        default=50,
                        help="This field cannot be left blank!"
                        )

    def post(self):
        # Parse user informtion
        data = UserRegister.parser.parse_args()

        # Username verification
        if UserModel.find_by_username(data['username']):
            return {"message": "User with that username already exists."}, 400
        
        # Create user to save
        user = UserModel(**data)
        # Save user with model
        user.save_to_db()
        # Return confirmation message
        return {"message": "User created successfully."}, 201

class User(Resource):
    def get(self, name):
        user = UserModel.find_by_username(name)
        if user:
            return user.json()
        return {'message': 'User not found'}, 404

