"""
Docker Workshop - Flask Application

This is the small Python web server used for the workshop.

The purpose of this file is intentionally simple:
1. Create a Flask application.
2. Respond when someone visits the home page.
3. Show the HTML page stored in templates/index.html.

Most of the workshop will focus on Docker rather than Flask,
but these comments are here for anyone who wants to study the
application code afterward.
"""

# Import Flask, which lets us create a small web application.
# render_template() lets Flask display HTML files stored
# inside the "templates" folder.
from flask import Flask, render_template


# Create the Flask application.
#
# __name__ helps Flask determine where this application's
# files, such as templates and static files, are located.
app = Flask(__name__)


# This route controls what happens when someone visits:
#
#     http://localhost:5000/
#
# "/" represents the home page of the website.
@app.route("/")
def home():
    # Flask looks inside the "templates" folder for index.html
    # and sends that page to the user's browser.
    return render_template("index.html")


# This section runs only when we start this file directly
# with:
#
#     python app.py
#
# host="0.0.0.0" allows the Flask server to receive connections
# from outside the Docker container.
#
# port=5000 tells Flask to run the application on port 5000.
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)