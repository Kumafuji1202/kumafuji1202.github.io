/*Enemy色抽出*/
function extractColors(colors) {
    getElem("extractColorTableBody").innerHTML = "";
    let context = getElem("textureColorExtractCanvas").getContext("2d", {
        willReadFrequently: true
    });
    for (let each of colors) {
        let pixelData = context.getImageData(each.x, each.y, 1, 1);
        let pixelHex = "#";
        for (let i = 0; i < 3; i++) {
            let colorAspect = pixelData.data[i];
            pixelHex += (colorAspect < 16 ? "0" : "") + colorAspect.toString(16);
        }
        let rowElem = document.createElement("tr");
        rowElem.innerHTML += "<td>" + each.id + "</td>";
        rowElem.innerHTML += "<td>" + pixelHex + "</td>";
        rowElem.innerHTML += "<td style=\"color: " + pixelHex + ";\">■</td>";
        getElem("extractColorTableBody").appendChild(rowElem);
    };
}
getElem("extractTextureColors").setClick(() => {
    getElem("textureColorExtractCanvas").getContext("2d").drawImage(getElem("enemyColorImportImg"), 0, 0);
    extractColors(colorExtractorData[getElem("colorExtractorDatasetId").innerHTML]);
});
getElem("useExtractedColors").setClick(() => {
    if (!window.confirm(lang.callText("settingChangeConfirmation"))) return;
    closeAllWindow();
    for (let colorRow of getElem("extractColorTableBody").children) {
        getElem(colorRow.children[0].innerHTML).value = colorRow.children[1].innerHTML;
    }
    getElem("generateButton").click();
});

getElem("importMiddleColors").setClick(() => {
    getElem("colorExtractorDatasetId").innerHTML = "enemyMiddle";
});
getElem("importNewGenericColors").setClick(() => {
    getElem("colorExtractorDatasetId").innerHTML = "enemyNewGeneric";
});