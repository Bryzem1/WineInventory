from config import db
from datetime import datetime


class WineList(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now)
    # TODO: remove link when frontend is updated
    link = db.Column(db.String(200), nullable=False)

    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "createdAt": self.created_at,
            "link": self.link,
        }


class Wine(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    vintage = db.Column(db.String(4), nullable=False)
    price = db.Column(db.Float, nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    origin = db.Column(db.String(80), nullable=False)

    # Foreign key linking to the WineList model
    winelist_id = db.Column(db.Integer, db.ForeignKey("wine_list.id"), nullable=False)

    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "vintage": self.vintage,
            "price": self.price,
            "quantity": self.quantity,
            "origin": self.origin,
            "winelist_id": self.winelist_id,
        }
