import sys

from flask import Flask, render_template, json
from peewee import SqliteDatabase, Model, IntegerField, CharField, FloatField

app = Flask(__name__)

db = SqliteDatabase("data.db", threadlocals=True)


class Piscine(Model):
    class Meta:
        database = db
    id = IntegerField()
    name = CharField()
    long = FloatField()
    lat = FloatField()
    type = CharField(null=True)


@app.route("/")
def root():
    return render_template("index.html")


@app.route("/piscines")
def piscines():
    data = []
    for p in Piscine.select():
        data.append({
            "id": p.id,
            "name": p.name,
            "long": p.long,
            "lat": p.lat,
            "type": p.type
        })
    return json.jsonify(result=data)


def main():
    db.connect()
    Piscine.create_table(True)
    app.debug = True
    app.run()


if __name__ == "__main__":
    sys.exit(main())
