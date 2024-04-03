from app import app, mongo
from flask import request, jsonify
from app.models import User
from bson import json_util, ObjectId
from datetime import datetime
from pymongo import DESCENDING

db = mongo.get_database()


@app.route('/')
def start():
   return 'Hello World'

@app.route('/signup', methods=['POST'])
def signup():
   data = request.json  
   username = data.get('username')
   email = data.get('email')
   password = data.get('password')

   if not username or not email or not password:
      return jsonify({'error':'Enter the missing fields'}), 400
   
    #check if user already exists
   existing_user = db.users.find_one({'$or':[{'username':username}, {'email':email}]})
   if existing_user:
      return jsonify({'error':'Username or email already exists'}), 401
   
   #print(existing_user.get('_id').generation_time)
   
   new_user = User(username,email,password)
   db.users.insert_one({
      'username':new_user.username,
      'email':new_user.email,
      'password':new_user.password,
      'createdAt':new_user.createdAt
   })

   return jsonify({'success':True, 'message':'Signup successfull'}), 201


@app.route('/login', methods=['POST'])
def login():
   data = request.json
   email = data.get('email')
   password = data.get('password')

   if not email or not password:
      return jsonify({'error':'Enter the missing fields'}), 400
   
   existing_user = db.users.find_one({'email':email})
   if not existing_user:
      return jsonify({'error':'Email does not exist'}), 401
   
   if User.verify_password(password, existing_user['password']):
      existing_user['_id'] = str(existing_user['_id'])
      return jsonify({'success':True, 'user':existing_user}), 200
   else:
      return jsonify({'error':'Invalid credentials'}), 401
   

@app.route('/new', methods=['POST'])
def newpackage():
   data = request.json
   data['createdAt'] = datetime.now()
   new_package = db.packages.insert_one(data)
   if not new_package.inserted_id:
      return jsonify({'error':'Error occurred'}), 400
   else:
      return jsonify({'success':True, 'message':'Package created successfully'}), 200
   

@app.route('/find', methods=['GET'])
def get_packages():
   packages = list(db.packages.find().sort('createdAt', DESCENDING))
   if not packages:
      return jsonify({'error':'No packages found'}), 404
   
   for package in packages:
      package['_id'] = str(package['_id'])

   return json_util.dumps(packages), 200

@app.route('/find/<id>/', methods=['GET'])
def get_package(id):
   query = {
      "_id":ObjectId(id)
   }
   package = db.packages.find_one(query)
   if not package:
      return jsonify({'error':'Package not found'}), 404
   
   package['_id'] = str(package['_id'])
   return jsonify({'package':package}), 200


@app.route('/update/<id>/', methods=['PUT'])
def update_package(id):
   query = {
      "_id":ObjectId(id)
   }
   data = { "$set": dict(request.json) }
   result = db.packages.update_one(query, data)
   if not result.matched_count:
      return jsonify({'message':'Failed to update. Record not found'}), 404
   elif not result.modified_count:
      return jsonify({'message':'Failed to update'}),  500
   
   return jsonify({'success':True, 'message':'Package updated successfully'})

   

@app.route('/delete/<package_id>/', methods=['DELETE'])
def delete_package(package_id):
   query = {
      "_id": ObjectId(package_id)
   }
   result = db.packages.delete_one(query)

   if not result.deleted_count:
      return jsonify({'error':'Failed to delete package'}), 500
   
   return jsonify({'success':True, 'message':'Package deleted successfully'}), 200