var table = document.createElement("table");
for (var i = 0; i < 9; i++) {
    var newTr = table.insertRow(i);
    for (var k = 0; k < 9; k++) {
        var newTd = newTr.insertCell(k);
        newTd.innerHTML = 'GoGo'
        newTd.style.border = '1px solid black';
        newTd.style.padding = '10px';
        newTd.style.background = "lightblue"
    }
}
table.style.borderCollapse = 'collapse';
document.body.appendChild(table);