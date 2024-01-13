const fs = require('fs');
const XLSX = require('xlsx');

//const workbook = XLSX.read(fs.readFileSync('product.xlsx'));
const workbook = XLSX.readFile('product.xlsx');

let worksheets = {};
for (const sheetName of workbook.SheetNames) {
  worksheets[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
}

function fileHandler() {
  fs.writeFile('products.json', JSON.stringify(worksheets.Sheet1), (err) => {
    if (err) throw err;
  });
}

fileHandler();
