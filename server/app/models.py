from datetime import datetime
from flask_bcrypt import Bcrypt 
bcrypt = Bcrypt()

class User:
    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.createdAt = datetime.now()
        self.password = self._generate_password_hash(password)

    @staticmethod    
    def _generate_password_hash(password):
        return bcrypt.generate_password_hash(password).decode('utf-8')

    
    def verify_password(password, storedpassword):
        # Verify the password
        return bcrypt.check_password_hash(storedpassword, password)
    

