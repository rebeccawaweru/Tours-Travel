from pymongo import MongoClient
import os

class Connection:
    def __new__(cls):
        connection = MongoClient(os.environ.get('MONGO_URI'))
        return connection