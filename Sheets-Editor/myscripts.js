//defining doc name

var docName = "Untitled Spreadsheet (Click to Edit) ";
document.getElementById("doc_name").innerHTML = docName;
document.querySelector('#doc_name').addEventListener('click', function () {
   docName = prompt("Please enter name of Document ", "<name goes here>");
    if (docName!= null) {
    document.getElementById("doc_name").innerHTML = docName;
    }
});

// Defining the function to create empty data

function creatEmptyDataArray(x, y) {
    var arr = new Array(x);
    var i;
    for (i = 0; i < y; i++) {
        arr[i] = new Array(y);
    }
    return arr;
}

var data = creatEmptyDataArray(40, 20);

// var data2 = [
//     ['', 'Ford', 'Tesla', 'Toyota', 'Honda'],
//     ['2017', 10, 11, 12, 13],
//     ['2018', 20, 11, 14, 13],
//     ['2019', 30, 15, 12, 13]
//   ];
var startRow, startCol, endRow, endCol;

var dataSaved=creatEmptyDataArray(20,40);

var container = document.getElementById('example');
var hot = new Handsontable(container, {
    data: data,
    rowHeaders: true,
    colHeaders: true,
    filters: true,
    dropdownMenu: true,
    manualColumnResize: true,
    manualRowResize: true,
    licenseKey: 'non-commercial-and-evaluation',
    afterSelectionEnd: function (r, c, r2, c2) {
        startRow = r;
        startCol = c;
        endRow = r2;
        endCol = c2;
    }
});
num_rows = $("example").handsontable('countRows');

// Use 2D Array of Strings to set className formatting
// Use 2D Array of Strings to set Data in cells

//Make Text bold
document.querySelector('.bold').addEventListener('click', function () {
    for (var j = 0; j < (endCol - startCol + 1); j++) {
        for (var i = 0; i < (endRow - startRow + 1); i++) {
            hot.setCellMeta(startRow + i, startCol + j, 'className', hot.getCellMeta(startRow + i, startCol + j).className + ' bold')
        }
    }
    hot.render();
});

//Make text Italics
document.querySelector('.italic').addEventListener('click', function () {
    for (var j = 0; j < (endCol - startCol + 1); j++) {
        for (var i = 0; i < (endRow - startRow + 1); i++) {
            hot.setCellMeta(startRow + i, startCol + j, 'className', hot.getCellMeta(startRow + i, startCol + j).className + ' italic')
        }
    }
    hot.render();
});

//Make text Underline
document.querySelector('.underline').addEventListener('click', function () {
    for (var j = 0; j < (endCol - startCol + 1); j++) {
        for (var i = 0; i < (endRow - startRow + 1); i++) {
            hot.setCellMeta(startRow + i, startCol + j, 'className', hot.getCellMeta(startRow + i, startCol + j).className + ' underline')
        }
    }
    hot.render();
});

//Make text Linethrough
document.querySelector('.linethrough').addEventListener('click', function () {
    for (var j = 0; j < (endCol - startCol + 1); j++) {
        for (var i = 0; i < (endRow - startRow + 1); i++) {
            hot.setCellMeta(startRow + i, startCol + j, 'className', hot.getCellMeta(startRow + i, startCol + j).className + ' linethrough')
        }
    }
    hot.render();
});

//Make text Align_Left
document.querySelector('.align_left').addEventListener('click', function () {
    for (var j = 0; j < (endCol - startCol + 1); j++) {
        for (var i = 0; i < (endRow - startRow + 1); i++) {
            hot.setCellMeta(startRow + i, startCol + j, 'className', hot.getCellMeta(startRow + i, startCol + j).className + ' align_left')
        }
    }
    hot.render();
});

//Make text Align_Right
document.querySelector('.align_right').addEventListener('click', function () {
    for (var j = 0; j < (endCol - startCol + 1); j++) {
        for (var i = 0; i < (endRow - startRow + 1); i++) {
            hot.setCellMeta(startRow + i, startCol + j, 'className', hot.getCellMeta(startRow + i, startCol + j).className + ' align_right')
        }
    }
    hot.render();
});

//Make text Align_center
document.querySelector('.align_center').addEventListener('click', function () {
    for (var j = 0; j < (endCol - startCol + 1); j++) {
        for (var i = 0; i < (endRow - startRow + 1); i++) {
            hot.setCellMeta(startRow + i, startCol + j, 'className', hot.getCellMeta(startRow + i, startCol + j).className + ' align_center')
        }
    }
    hot.render();
});



//Implementing the Save Functionality/button
document.querySelector('.save').addEventListener('click', function () {
    console.log("Save")
    dataSaved = hot.getData();
    hot.render();
    //To Store in Backend use JSON.stringify method on hot.getData() and hot.getCellMeta
});
//Implementing the Load Functionality/button
document.querySelector('.load').addEventListener('click', function () {
    //dataSaved;
    console.log("Load");
    hot.loadData(dataSaved);
    data=dataSaved;
    hot.render();
});

