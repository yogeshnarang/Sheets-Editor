// Defining the function to create empty data

function creatEmptyDataArray(x, y) {
    var arr = new Array(x);
    var i;
    for (i = 0; i < y; i++) {
        arr[i] = new Array(y);
    }
    return arr;
}

var data = creatEmptyDataArray(200, 200);
// var data2 = [
//     ['', 'Ford', 'Tesla', 'Toyota', 'Honda'],
//     ['2017', 10, 11, 12, 13],
//     ['2018', 20, 11, 14, 13],
//     ['2019', 30, 15, 12, 13]
//   ];
data[0][0]="sam";
var startRow, startCol, endRow, endCol;
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