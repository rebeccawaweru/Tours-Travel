from app import app, mongo
from flask import request, jsonify, make_response
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

   return jsonify({'success':True, 'message':'Signup successful'}), 201


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


@app.route('/users', methods=['GET'])
def get_users():
   users = list(db.users.find().sort('createdAt', DESCENDING))
   for user in users:
      user['_id'] = str(user['_id'])

   return json_util.dumps(users), 200


@app.route('/find', methods=['GET'])
def get_packages():
   packages = list(db.packages.find().sort('createdAt', DESCENDING))
   if not packages:
      return jsonify({'error':'No packages found'}), 404
   
   for package in packages:
      package['_id'] = str(package['_id'])

   return json_util.dumps(packages), 200

@app.route('/<id>', methods=['GET'])
def get_package(id):
   query = {
      "_id":ObjectId(id)
   }
   package = db.packages.find_one(query)
   if not package:
      return jsonify({'error':'Package not found'}), 404
   
   package['_id'] = str(package['_id'])
   return jsonify({'package':package}), 200


@app.route('/update/<id>', methods=['PUT'])
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
   
   return jsonify({'success':True, 'message':'Package updated successfully'}), 200

   

@app.route('/delete/<id>', methods=['DELETE','OPTIONS'])
def delete_package(id):
    if request.method == 'OPTIONS':
        # This is a preflight request, respond with the appropriate headers
        response = make_response()
        response.headers.add("Access-Control-Allow-Origin", "https://denzetoursandtravels.netlify.app")
        response.headers.add("Access-Control-Allow-Methods", "DELETE")
        response.headers.add("Access-Control-Allow-Headers", "Content-Type")
        return response
     
    query = {
      "_id": ObjectId(id)
    }
    result = db.packages.delete_one(query)

    if not result.deleted_count:
      return jsonify({'error':'Failed to delete package'}), 500
   
    return jsonify({'success':True, 'message':'Package deleted successfully'}), 200


#Referrals

@app.route('/new/referral', methods=['POST'])
def newreferral():
   data = request.json
   data['createdAt'] = datetime.now()
   data['clicks'] = 0
   new_package = db.referrals.insert_one(data)
   if not new_package.inserted_id:
      return jsonify({'error':'Error occurred'}), 400
   else:
      return jsonify({'success':True, 'message':'Referral  created successfully'}), 200
   
@app.route('/find/referrals', methods=['GET'])
def get_referrals():
   referrals = list(db.referrals.find().sort('createdAt', DESCENDING))
   # if not referrals:
   #    return jsonify({'error':'No referrals found'}), 404
   
   for referral in referrals:
      referral['_id'] = str(referral['_id'])

   return json_util.dumps(referrals), 200

@app.route('/find/referral/<id>', methods=['GET'])
def get_referral(id):
   query = {
      "_id":ObjectId(id)
   }
   referral = db.referrals.find_one(query)
   if not referral:
      return jsonify({'error':'Referral not found'}), 404
   
   referral['_id'] = str(referral['_id'])
   return jsonify({'referral':referral}), 200

@app.route('/update/referral/<id>', methods=['PUT'])
def update_referral(id):
   query = {
      "_id":ObjectId(id)
   }
   data = { "$set": dict(request.json) }
   result = db.referrals.update_one(query, data)
   if not result.matched_count:
      return jsonify({'message':'Failed to update. Record not found'}), 404
   elif not result.modified_count:
      return jsonify({'message':'Failed to update'}),  500
   
   return jsonify({'success':True, 'message':'Referral updated successfully'}), 200

@app.route('/delete/referral/<id>', methods=['DELETE','OPTIONS'])
def delete_referral(id):
    if request.method == 'OPTIONS':
        # This is a preflight request, respond with the appropriate headers
        response = make_response()
        response.headers.add("Access-Control-Allow-Origin", "https://denzetoursandtravels.netlify.app")
        response.headers.add("Access-Control-Allow-Methods", "DELETE")
        response.headers.add("Access-Control-Allow-Headers", "Content-Type")
        return response
     
    query = {
      "_id": ObjectId(id)
    }
    result = db.referrals.delete_one(query)

    if not result.deleted_count:
      return jsonify({'error':'Failed to delete referral'}), 500
   
    return jsonify({'success':True, 'message':'Referral deleted successfully'}), 200