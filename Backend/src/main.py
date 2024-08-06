from flask import request, jsonify
from config import app, db
from models import WineList, Wine


@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Welcome to the Wine Inventory API!"})


@app.route("/wine_lists", methods=["GET"])
def get_wine_lists():
    wine_lists = WineList.query.all()
    json_wine_lists = list(map(lambda x: x.to_json(), wine_lists))
    return jsonify({"winelists": json_wine_lists})


@app.route("/wine_list/<int:list_id>", methods=["GET"])
def get_wines(list_id):
    wines = Wine.query.filter_by(winelist_id=list_id).all()
    json_wines = list(map(lambda x: x.to_json(), wines))
    return jsonify({"wines": json_wines})


@app.route("/create_wine/<int:list_id>", methods=["POST"])
def create_wine(list_id):
    name = request.json.get("name")
    if not name:
        return jsonify({"error": "Name is required"}), 400

    vintage = request.json.get("vintage")
    if not vintage:
        return jsonify({"error": "Vintage is required"}), 400

    price = request.json.get("price")
    if not price:
        return jsonify({"error": "Price is required"}), 400

    quantity = request.json.get("quantity")
    if not quantity:
        return jsonify({"error": "Quantity is required"}), 400

    origin = request.json.get("origin")
    if not origin:
        return jsonify({"error": "Origin is required"}), 400

    new_wine = Wine(
        name=name,
        vintage=vintage,
        price=price,
        quantity=quantity,
        origin=origin,
        winelist_id=list_id,
    )
    db.session.add(new_wine)
    db.session.commit()

    return jsonify(new_wine.to_json()), 201


@app.route("/create_wine_list", methods=["POST"])
def create_wine_list():
    name = request.json.get("name")
    if not name:
        return jsonify({"error": "Name is required"}), 400

    new_wine_list = WineList(name=name)
    db.session.add(new_wine_list)
    db.session.commit()

    return jsonify(new_wine_list.to_json()), 201


if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)
