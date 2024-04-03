from flask import Flask
from config import Connection
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
mongo = Connection()

from app import routes
