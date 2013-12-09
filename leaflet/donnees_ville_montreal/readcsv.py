import sys
import csv

def readcsv(filename):
    data = []
    with open(filename, 'r') as f:
        reader = csv.DictReader(f, delimiter='\t')
        # For each row in the CSV file, read row as a dictionary
        for row in reader:
            # For each key in the dictionary
            for key in row:
                # Convert the value into an unicode string
                row[key] = unicode(row[key].decode('iso-8859-1'))
            data.append(row)
    return data


if __name__ == '__main__':
    print readcsv(sys.argv[1])
