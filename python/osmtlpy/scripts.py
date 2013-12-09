import sys
import csv

from application import Piscine


def readcsv(filename):
    Piscine.create_table(True)
    data = []
    with open(filename, 'r') as f:
        reader = csv.DictReader(f, delimiter='\t')
        for i, row in enumerate(reader):
            for key in row:
                row[key] = unicode(row[key].decode('iso-8859-1'))
            Piscine.create(id=i,
                           name=row["NOM"],
                           long=row["LONG"],
                           lat=row["LAT"],
                           type=row["TYPE"])
    return data


if __name__ == '__main__':
    readcsv(sys.argv[1])
