# Use a Python base image
FROM python:3.12

# Set the working directory in the container
WORKDIR /server

# Copy the contents of the current directory into the container at /app
COPY . /server

# Install dependencies from requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Expose the port that the Flask app runs on
EXPOSE 8080

# Set environment variable for Flask to use the provided port
ENV PORT=8080
ENV MONGO_URI=mongodb+srv://denze:denze2024@cluster0.zmrsqgg.mongodb.net/Tours?retryWrites=true&w=majority
ENV CONVERSION_KEY=d945a3b6e2327ac5b702a8f8

# Run the Flask application
CMD ["gunicorn", "-b", "0.0.0.0:8080", "app:app"]