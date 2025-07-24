// writing js is a million times more fun than trying to understand excel graphs yk
var statData = [1, 2, 3, 4]; // default sample data

function onListValUpdate() {
    const accuracy = 6;
    let sum = 0;
    let sqsum = 0;
    let avg = 0;
    let min = Infinity;
    let max = -Infinity;
    let entries = getElem("data-table").children.length;
    getElem("data-entries").innerHTML = entries;
    let i = 1;
    for (let dataRow of getElem("data-table").children) {
        let cells = dataRow.children;
        cells[0].innerHTML = i;
        let datum = +cells[1].innerHTML;
        sum += datum;
        sqsum += datum ** 2;
        cells[5].innerHTML = (datum ** 2).cut(accuracy);
        if (datum < min) min = datum;
        if (datum > max) max = datum;
        i++;
    }
    avg = sum / entries;
    getElem("data-sum").innerHTML = sum.cut(accuracy);
    getElem("data-sqsum").innerHTML = sqsum.cut(accuracy);
    getElem("data-sqrtsqsum").innerHTML = Math.sqrt(sqsum).cut(accuracy);
    getElem("data-avg").innerHTML = (entries == 0) ? "N/A" : avg.cut(accuracy);
    getElem("data-max").innerHTML = (entries == 0) ? "N/A" : max;
    getElem("data-min").innerHTML = (entries == 0) ? "N/A" : min;

    let varsum = 0;
    i = 1;
    for (let dataRow of getElem("data-table").children) {
        let cells = dataRow.children;
        let dev = +cells[1].innerHTML - avg;
        cells[3].innerHTML = dev.cut(accuracy);
        cells[4].innerHTML = (dev ** 2).cut(accuracy);
        varsum += dev ** 2;
        i++;
    }
    getElem("sum-squared-deviation").innerHTML = varsum.cut(accuracy);
    getElem("variance").innerHTML = (entries == 0) ? "N/A" : (varsum / entries).cut(accuracy);
    getElem("data-sd").innerHTML = (entries == 0) ? "N/A" : Math.sqrt(varsum / entries).cut(accuracy);
    getElem("data-uv").innerHTML = (entries < 2) ? "N/A" : (varsum / (entries - 1)).cut(accuracy);
    getElem("data-ud").innerHTML = (entries < 2) ? "N/A" : Math.sqrt(varsum / (entries - 1)).cut(accuracy);
    getElem("data-unc").innerHTML = (entries < 2) ? "N/A" :  Math.sqrt(varsum / (entries * (entries - 1))).cut(accuracy);
}

function deployData() {
    getElem("data-table").innerHTML = "";
    for (let datum of statData) {
        addNewRow(datum);
    }
}

function addNewRow(val = 0) {
    let v = val;
    if (typeof val != "number") v = 0;
    let rowID = "row-" + (Math.random() * 2 * 16 ** 13).toString(16);
    let rowElem = document.createElement("tr");
    rowElem.id = rowID;
    let cellElem = document.createElement("th");
    cellElem.innerHTML = "#";
    rowElem.appendChild(cellElem);
    cellElem = document.createElement("td");
    cellElem.innerHTML = v;
    cellElem.classList.add("number");
    cellElem.setClick(editableElementDblClickCallback);
    rowElem.appendChild(cellElem);

    cellElem = document.createElement("td");
    let buttonElem = document.createElement("button");

    buttonElem.innerHTML = "x";
    buttonElem.title = "remove";
    buttonElem.setClick(() => {
        rowElem.remove();
        onListValUpdate();
    });
    cellElem.appendChild(buttonElem);

    buttonElem = document.createElement("button");
    buttonElem.innerHTML = "↑";
    buttonElem.title = "move up";
    buttonElem.setClick(() => {
        getElem("data-table").insertBefore(rowElem, document.querySelector("tr:has(+ tr#" + rowID + ")"));
        onListValUpdate();
    });
    cellElem.appendChild(buttonElem);

    buttonElem = document.createElement("button");
    buttonElem.innerHTML = "↓";
    buttonElem.title = "move down";
    buttonElem.setClick(() => {
        getElem("data-table").insertBefore(document.querySelector("tr#" + rowID + " + tr"), rowElem);
        onListValUpdate();
    });
    cellElem.appendChild(buttonElem);

    buttonElem = document.createElement("button");
    buttonElem.innerHTML = "x2";
    buttonElem.title = "duplicate";
    buttonElem.setClick(() => {
        getElem("data-table").insertBefore(
            addNewRow(+rowElem.children[1].innerHTML),
            rowElem
        );
        onListValUpdate();
    });
    cellElem.appendChild(buttonElem);
    rowElem.appendChild(cellElem);

    for (let i = 0; i < 3; i++) {
        cellElem = document.createElement("td");
        cellElem.classList.add("number");
        rowElem.appendChild(cellElem);
    }

    getElem("data-table").appendChild(rowElem);
    onListValUpdate();
}

function editableElementDblClickCallback(e) {
    let input = document.createElement("input");
    input.type = "number";
    input.value = +e.target.innerHTML;
    input.step = "any";
    let cellBlurCallback = function (f) {
        let v = +f.target.value;
        f.target.remove();
        e.target.innerHTML = v;
        onListValUpdate();
    };
    input.addEventListener("blur", cellBlurCallback);
    input.addEventListener("keypress", (e) => {
        if (e.keyCode == 13) cellBlurCallback(e);
    });
    e.target.innerHTML = "";
    e.target.appendChild(input);
    input.focus();
    input.select();
}

onPageLoad(() => {
    deployData();
    onListValUpdate();
    getElem("add-data-row").setClick(addNewRow);
    getElem("remove-data-rows").setClick(() => {
        if (!confirm("本当にデータを全部削除しますか?")) return;
        let i = 0,
            j;
        for (j = getElem("data-table").children.length; i < j; i++) getElem("data-table").children[0].remove();
        onListValUpdate();
    });
});