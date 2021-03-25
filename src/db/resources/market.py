from flask_restful import Resource, reqparse
from flask_jwt import jwt_required
from models.market import MarketModel
from flask import Blueprint, jsonify, request

class Market(Resource):
    parser = reqparse.RequestParser()

    parser.add_argument('rating',
        type=int,
        required=True,
        help="This field cannot be left blank!"
    )

    parser.add_argument('year',
        type=int,
        required=True,
        help="This field cannot be left blank!"
    )
    parser.add_argument('describe')
    parser.add_argument('baseURL')
    parser.add_argument('channel')

    @jwt_required()
    def get(self, name):
        market = MarketModel.find_by_name(name)
        if market:
            return market.json()
        return {'message': 'Market not found'}, 404

    def post(self, name):
        if MarketModel.find_by_name(name):
            return {'message': "An movie with name '{}' already exists.".format(name)}

        data = Market.parser.parse_args()

        market = MarketModel(name, data['rating'], data['year'], data['describe'], data['baseURL'], data['channel'])

        try:
            market.save_to_db()
        except:
            return {"message": "An error occurred inserting the movie."}

        return market.json(), 201

    def delete(self, name):
        market = MarketModel.find_by_name(name)
        if market:
            market.delete_from_db()

        return {'message' : 'Market deleted'}

    def put(self, name):
        data = Market.parser.parse_args()

        market = MarketModel.find_by_name(name)
     
        if market is None:
            market =  MarketModel(name, data['rating'], data['year'], data['describe'])
        else:
            market.rating =  data['rating']
            market.year =  data['year']
            market.describe =  data['describe']

       
        market.save_to_db()

        return market.json()


class MarketList(Resource):
    def get(self):

       # return {'movies': list(map(mabda x: x.json(), MarketModel.query.all()))}
        return {'markets': [market.json() for market in MarketModel.query.all()]}
