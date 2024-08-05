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


@app.route("/wines/<int:list_id>", methods=["GET"])
def get_wines(list_id):
    wines = Wine.query.filter_by(winelist_id=list_id).all()
    # if not wines:
    #     return (
    #         {
    #             jsonify({"message": "Target list id does not exist"}),
    #             400,
    #         }
    #     )
    json_wines = list(map(lambda x: x.to_json(), wines))
    return jsonify({"wines": json_wines})


@app.route("/create_wine_list", methods=["POST"])
def create_wine_list():
    name = request.json.get("name")
    if not name:
        return jsonify({"error": "Name is required"}), 400

    # TODO: remove link when frontend is updated
    link = request.json.get("link")
    if not link:
        return jsonify({"error": "Link is required"}), 400

    new_wine_list = WineList(name=name, link=link)
    db.session.add(new_wine_list)
    db.session.commit()

    return jsonify(new_wine_list.to_json()), 201


if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)
