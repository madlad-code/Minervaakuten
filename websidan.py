from flask import Flask, request, jsonify
import mysql.connector
from flask import escape
from flask import g

app = Flask(__name__)

# Database connection
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="website"
) 
cursor = db.cursor()

@app.route('/submit', methods=['POST'])
def submit():
    try:
        data = request.form
        name = escape(data['name'])  # Sanitize input
        email = escape(data['email'])

        with open('path/to/your/file.sql', 'r') as file:
            sql = file.read()
            cursor.execute(sql, multi=True)
            db.commit()

            # Retrieve data
            cursor.execute("SELECT * FROM your_table")
            rows = cursor.fetchall()

            for row in rows:
                print(row)

        return jsonify({"message": "Data inserted successfully"})

    except Exception as e:
        return jsonify({"message": f"An error occurred: {str(e)}"}),500

@app.teardown_appcontext
def close_connection(exception):
    if 'db' in g:
        g.db.close()

if __name__ == "__main__":
    app.run(debug=True)
