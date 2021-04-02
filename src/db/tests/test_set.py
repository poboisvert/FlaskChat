import pytest
import requests

url = 'http://127.0.0.1:5000' # The root url of the flask app

def test_index_page():
    r = requests.get(url+'/markets') # Assumses that it has a path of "/"
    assert r.status_code == 200 # Assumes that it will return a 200 response