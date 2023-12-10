const fs = require('fs');

function computeMeanCSV(filename, columnNumber) {
    const data = fs.readFileSync(filename, 'utf8').split('\n');
    let sum = 0;
    let count = 0;

    for (let i = 0; i < data.length; i++) {
        const row = data[i].split(',');
        const value = parseFloat(row[columnNumber]);

        if (!isNaN(value)) {
            sum += value;
            count++;
        }
    }

    if (count > 0) {
        return sum / count;
    } else {
        return null;
    }
}

const filename = 'csv_task4.csv'; // Replace with your CSV file name
const columnNumber = 0; // Replace with the column number (0-indexed)

const mean = computeMeanCSV(filename, columnNumber);
if (mean !== null) {
    console.log(`The mean of column ${columnNumber} is: ${mean}`);
} else {
    console.log('No data or invalid column number provided.');
}
