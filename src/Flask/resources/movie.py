from flask_restful import Resource, reqparse
from flask_jwt import jwt_required
from models.movie import MovieModel
from flask import Blueprint, jsonify, request

class Movie(Resource):
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

    @jwt_required()
    def get(self, name):
        movie = MovieModel.find_by_name(name)
        if movie:
            return movie.json()
        return {'message': 'Movie not found'}, 404

    def post(self, name):
        if MovieModel.find_by_name(name):
            return {'message': "An movie with name '{}' already exists.".format(name)}

        data = Movie.parser.parse_args()

        movie = MovieModel(name, data['rating'], data['year'], data['describe'], data['baseURL'])

        try:
            movie.save_to_db()
        except:
            return {"message": "An error occurred inserting the movie."}

        return movie.json(), 201

    def delete(self, name):
        movie = MovieModel.find_by_name(name)
        if movie:
            movie.delete_from_db()

        return {'message' : 'Movie deleted'}

    def put(self, name):
        data = Movie.parser.parse_args()

        movie = MovieModel.find_by_name(name)
     
        if movie is None:
            movie =  MovieModel(name, data['rating'], data['year'], data['describe'])
        else:
            movie.rating =  data['rating']
            movie.year =  data['year']
            movie.describe =  data['describe']

       
        movie.save_to_db()

        return movie.json()


class MovieList(Resource):
    def get(self):

       # return {'movies': list(map(mabda x: x.json(), MovieModel.query.all()))}
        return {'movies': [movie.json() for movie in MovieModel.query.all()]}
