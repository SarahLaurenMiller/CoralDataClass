from flask import Flask, jsonify, render_template

### create a flask instance
app = Flask(__name__)

### one of your APIs
@app.route("/api/top5Corals")
def top5corals():
    return jsonify(finalcorals.json)

### another potential API
@app.route("/api/coralObservations")
def coralObservations():
    return jsonify(finalcorals.json)

### another potential API
@app.route("/api/coralDepth")
def coralDepth():
    return jsonify(finalcorals.json)

### another potential API
@app.route("/api/coralLocations")
def coralLocations():
    return jsonify(finalcorals.json)

### the 'home' route. 
### NOTE: This allows sending data to the HTML through templating
## But you'll likely not need it since most of what you're doing is AJAX APIs
@app.route("/")
def home():
    message = "Save the Earth!"
    return render_template('index.html', message=message)


### A required way of saying "Start the server"
if __name__ == "__main__":
    app.run(debug=True)
