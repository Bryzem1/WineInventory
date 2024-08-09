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

@app.route("/create_wine_list", methods=["POST"])
def create_wine_list():
    name = request.json.get("name")
    if not name:
        return jsonify({"error": "Name is required"}), 400

    new_wine_list = WineList(name=name)
    db.session.add(new_wine_list)
    db.session.commit()

    return jsonify(new_wine_list.to_json()), 201

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

@app.route("/update_wines", methods=["PATCH"])
def update_wines():
    data = request.json

    if not isinstance(data, list):
        return jsonify({"error": "Input should be a list of wine objects"}), 400

    for wine_data in data:
        wine_id = wine_data.get("id")
        if not wine_id:
            continue

        wine = Wine.query.get(wine_id)
        if not wine:
            continue

        wine.name = wine_data.get("name", wine.name)
        wine.vintage = wine_data.get("vintage", wine.vintage)
        wine.price = wine_data.get("price", wine.price)
        wine.quantity = wine_data.get("quantity", wine.quantity)
        wine.origin = wine_data.get("origin", wine.origin)

    db.session.commit()

    return jsonify({"message": "Wines Updated"}), 200

@app.route("/delete_wine/<int:wine_id>", methods=["DELETE"])
def delete_wine(wine_id):
    wine = Wine.query.get(wine_id)
    if not wine:
        return jsonify({"error": "Wine not found"}), 404

    db.session.delete(wine)
    db.session.commit()

    return jsonify({"message": "Wine Deleted"}), 200

if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)
