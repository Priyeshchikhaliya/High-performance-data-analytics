import sys
import csv
import statistics

def computeMeanCSV(filename, column_number):
    data = []
    with open(filename, newline='') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            try:
                data.append(float(row[column_number]))
            except (ValueError, IndexError):
                pass
    
    if data:
        mean = statistics.mean(data)
        return mean
    else:
        return None


if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python csv.py [FILE] [COLUMN_NUMBER]")
        sys.exit(1)
    
    filename = sys.argv[1]
    column_number = int(sys.argv[2])
    
    mean = computeMeanCSV(filename, column_number)
    if mean is not None:
        print(f"The mean of column {column_number} is: {mean}")
    else:
        print("No data or invalid column number provided.")
