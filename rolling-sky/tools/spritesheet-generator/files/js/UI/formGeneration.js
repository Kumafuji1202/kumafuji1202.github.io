//新汎用Enemy右上の生成
var hiragana = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみ";
for (let i = 0; i < 11; i++) {
    let rowElem = document.createElement("tr");

    for (let ii = 0; ii < 3; ii++) {
        let regionNum = i * 3 + ii;
        if (regionNum > 31) break;
        let cellElem = document.createElement("th");
        cellElem.innerHTML = `${hiragana.charAt(regionNum)} (${regionNum})`;
        rowElem.appendChild(cellElem);

        for (let iii = 0; iii < 4; iii++) {
            cellElem = document.createElement("td");
            let colorPickerElem = document.createElement("input");
            colorPickerElem.setAttribute("type", "color");
            colorPickerElem.id = "newGeneric_region_" + regionNum + "_tone_" + (iii + 1);
            colorPickerElem.value = enemyNewGeneralTopRightDefault["newGeneric_region_" + regionNum + "_tone_" + (iii + 1)];
            cellElem.appendChild(colorPickerElem);
            rowElem.appendChild(cellElem);
        }
    }
    getElem("newGenericList").appendChild(rowElem);
}
getElem("newGeneric");

let newGenericIdMapCxt = getElem("newGenericIdMap").getContext("2d");
let newGenericIdMapImg = new Image();
newGenericIdMapImg.src = "files/graphics/UI/enemyNewGenericPartIds.png";
newGenericIdMapImg.addEventListener("load", () => {
    newGenericIdMapCxt.drawImage(newGenericIdMapImg, 0, 0);
    newGenericIdMapCxt.font = "24px serif";
    newGenericIdMapCxt.textAlign = "center";
    newGenericIdMapCxt.textBaseline = "middle";
    for (let i in newGenericInfo) {
        if ([0, 2, 5, 7, 8, 10, 12, 14, 17, 19, 21, 23, 24, 26, 29, 31].includes(+i)) {
            newGenericIdMapCxt.fillStyle = "#ffffff";
        } else {
            newGenericIdMapCxt.fillStyle = "#000000";
        }
        newGenericIdMapCxt.fillText(hiragana[i], newGenericInfo[i].left - 192 + 16, newGenericInfo[i].top + 16);
    }
});

//翻転床のselect(flipTile??verseType)にoptionを生成
for (let i of ["flipTileObverseType", "flipTileReverseType"]) {
    for (let ii in flipTileData) {
        let optionElem = document.createElement("option");
        optionElem.setAttribute("value", ii);
        optionElem.setAttribute("tr-key", flipTileData[ii].nameTranslationKey);
        getElem(i).appendChild(optionElem);
    }
    //インポートのやつ
    optionElem = document.createElement("option");
    optionElem.setAttribute("value", "import");
    optionElem.setAttribute("tr-key", "importImages");
    getElem(i).appendChild(optionElem);
}

//結晶系プレビュー用svg
//テトリミノ
//xyxyxyxy
let tetriminoShapes = ["10110102", "01111020", "01112120", "00100111", "00010203", "01111021", "02121110", "00010211"];
for (let tetriminoNum = 0; tetriminoNum < 8; tetriminoNum++) {
    let colorNum = [1, 2, 3, 5, 6, 7, 4, 8][tetriminoNum];
    let tetriminoElem = document.newSVGElem('g');
    tetriminoElem.setAttributes({
        "transform": `translate(${[0,3,7,11,14,16,20,23][tetriminoNum]}, 1)`,
        "data-fill": `crystalCollection${colorNum}Inner`,
        "data-stroke": `crystalCollection${colorNum}Outer`
    });
    for (let tsn = 0; tsn < 4; tsn++) { //tetriminoSectionNum
        tetriminoElem.appendChild(document.newSVGElem('rect').setAttributes({
            "x": tetriminoShapes[tetriminoNum].charAt(tsn * 2),
            "y": tetriminoShapes[tetriminoNum].charAt(tsn * 2 + 1),
            height: 1,
            width: 1
        }));
    }
    getElem("tetriminoShowcase").appendChild(tetriminoElem);
}

//門
for (let topPos = 0; topPos < 7; topPos++) {
    let lineElem = document.newSVGElem('g');
    let colorNum = [5, 3, 2, 1, 7, 6, 8][topPos];
    let posArr = [];
    if (topPos >= 3) posArr = [0, 1, 5, 6];
    if (topPos == 2) posArr = [0, 1, 2, 3, 4, 5, 6];
    if (topPos == 1) posArr = [1, 2, 3, 4, 5];
    if (topPos == 0) posArr = [2, 3, 4];

    for (let leftPos of posArr) {
        let cellElem = document.newSVGElem('rect');
        lineElem.setAttributes({
            "transform": `translate(0,${topPos})`,
            "data-fill": `crystalCollection${colorNum}Inner`,
            "data-stroke": `crystalCollection${colorNum}Outer`
        });
        cellElem.setAttributes({
            "y": "0",
            "width": "1",
            "height": "1",
            "x": leftPos
        });
        lineElem.appendChild(cellElem);
    }
    getElem("crystalGate").appendChild(lineElem);
}
//大きい木
for (var treeLayer = 0; treeLayer < 7; treeLayer++) {
    let layerElem = document.newSVGElem('g');
    let colorNum = [5, 3, 2, 1, 7, 6, 8][treeLayer];
    layerElem.setAttributes({
        "data-fill": `crystalCollection${colorNum}Inner`,
        "data-stroke": `crystalCollection${colorNum}Outer`
    })
    layerElem.appendChild(document.newSVGElem('rect').setAttributes({
        "x": -8 - 2 * treeLayer,
        "y": 12 * treeLayer,
        "width": 4,
        "height": 12
    }));
    layerElem.appendChild(document.newSVGElem('rect').setAttributes({
        "x": -4 - 2 * treeLayer,
        "y": 12 * treeLayer,
        "width": 8 + 4 * treeLayer,
        "height": 12
    }));
    layerElem.appendChild(document.newSVGElem('rect').setAttributes({
        "x": 4 + 2 * treeLayer,
        "y": 12 * treeLayer,
        "width": 4,
        "height": 12
    }));

    getElem("middleCrystalTree").appendChild(layerElem);
}
