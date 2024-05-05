from flask import Flask
from config import Connection
from dotenv import load_dotenv
from flask_cors import CORS

load_dotenv()

app = Flask(__name__)
mongo = Connection()

#Enable CORS for all routes
CORS(app, resources={r"/*": {"origins": ["https://denzetoursandtravels.netlify.app"]}}, supports_credentials=True)


from app import routes
