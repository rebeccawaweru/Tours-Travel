# Use a Python base image
FROM python:3.8

# Set the working directory in the container
WORKDIR /server

# Copy the contents of the current directory into the container at /app
COPY . /server

# Install Flask (assuming it's not already installed in your environment)
RUN pip install Flask pymongo

# Expose the port that the Flask app runs on
EXPOSE 5000

# Run the Flask application
CMD ["python", "run.py"]
