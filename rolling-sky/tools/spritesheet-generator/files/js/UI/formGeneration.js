
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