/*Enemy自動トグルフォーム*/
function checkIfCommonObjsAreAvailable() {
    var TRCheck = (checkFrom, attr, formID, unavailableMsg, hiddenInput, inverted = false) => {
        var isAvailable = (inverted ^ getElem(checkFrom).selectedOptions[0].hasAttribute(attr)) == 1;
        getElem(hiddenInput).value = isAvailable;
        if (isAvailable) {
            getElem(unavailableMsg).classList.add("hidden");
            getElem(formID).classList.remove("hidden");
        } else {
            getElem(formID).classList.add("hidden");
            getElem(unavailableMsg).classList.remove("hidden");
        }
        return isAvailable;
    };
    var selectedOptionHasAttribute = (selectElementID, attribute, inverted = false) => {
            return (inverted ^ getElem(selectElementID).selectedOptions[0].hasAttribute(attribute)) == 1;
        },
        setShowCommonObjForm = (isAvailable, formID, unavailableMsg) => {
            if (isAvailable) {
                getElem(unavailableMsg).classList.add("hidden");
                getElem(formID).classList.remove("hidden");
            } else {
                getElem(formID).classList.add("hidden");
                getElem(unavailableMsg).classList.remove("hidden");
            }
            return isAvailable;
        };
    //subB
    setShowCommonObjForm(selectedOptionHasAttribute("topRightType", "data-subB-available"), "subBForm", "subBUnavailableMessage");
    //Flip
    setShowCommonObjForm(selectedOptionHasAttribute("topRightType", "data-flipper-available"), "flipTileForm", "flipTileUnavailableMessage");
    //MiniJ
    setShowCommonObjForm(selectedOptionHasAttribute("topRightType", "data-minijump-available"), "smallJumpForm", "smallJumpUnavailableMessage");
    //BRight
    setShowCommonObjForm(selectedOptionHasAttribute("topRightType", "data-overrides-risers", true) && (selectedOptionHasAttribute("subBType", "data-overrides-risers", true) || selectedOptionHasAttribute("topRightType", "data-subB-available", true)), "bottomRightForm", "bottomRightUnavailableMessage");
}
checkIfCommonObjsAreAvailable();
getElem("topRightType").addEventListener("change", checkIfCommonObjsAreAvailable);
getElem("subBType").addEventListener("change", checkIfCommonObjsAreAvailable);
formUpdateFunctions.push(checkIfCommonObjsAreAvailable);

/*反転床の更新*/

function changeFlipTileForm(face) {
    //模様
    var flipTileType = getElem(`flipTile${face}Type`).value;
    var notTheSamePattern = ["import"];
    //反転床インポート系と色設定系の切り替え
    if (notTheSamePattern.includes(flipTileType)) {
        getElem(`flipper${face}ColorForm`).classList.add("hidden");
        getElem("flipperNoCustomization").classList.add("hidden");
        getElem(`importFlipper${face}CustomizationForm`).classList.remove("hidden");
        return;
    }
    getElem(`flipper${face}ColorForm`).classList.remove("hidden");
    getElem(`importFlipper${face}CustomizationForm`).classList.add("hidden");
    getElem("flipperNoCustomization").classList.add("hidden");
    var currentFlipData = flipTileData[flipTileType];
    //色設定の表示・非表示を切り替え&翻訳設定
    for (let num in Array.from(getElem(`flipper${face}ColorForm`).children)) {
        let div = getElem(`flipper${face}ColorForm`).children[num];
        if (num > currentFlipData.colorCount - 1) {
            div.classList.add("hidden");
            continue;
        }
        div.classList.remove("hidden");
        var labelElem = div.children[0].children[0];
        labelElem.setAttribute("data-translation-key", currentFlipData.translationKeys[num]);
        labelElem.innerHTML = lang.callText(currentFlipData.translationKeys[num]);
    }
}
changeFlipTileForm("Obverse");
changeFlipTileForm("Reverse");
getElem("flipTileObverseType").addEventListener("change", () => changeFlipTileForm("Obverse"));
getElem("flipTileReverseType").addEventListener("change", () => changeFlipTileForm("Reverse"));
formUpdateFunctions.push(() => {
    changeFlipTileForm("Obverse");
    changeFlipTileForm("Reverse")
});

/*メインストライプの更新*/
function updateMSCF() {
    var code = "0000";
    switch (getElem("mainStripeColorSteps").value) {
        case "monotone":
            code = "0001";
            break;
        case "twotones":
            code = "1100";
            break;
        case "threetonesthickmiddle":
        case "threetonesthinmiddle":
            code = "1110";
    }
    for (var i = 0; i < 4; i++) {
        if (code.charAt(i) === "0") {
            getElem("mainStripeColorForm" + (i + 1)).classList.add("hidden");
        } else {
            getElem("mainStripeColorForm" + (i + 1)).classList.remove("hidden");
        }
    }
}
updateMSCF();
formUpdateFunctions.push(updateMSCF);
getElem("mainStripeColorSteps").addEventListener("change", updateMSCF, true);

/*左下の線の更新*/
var rowList = getElem("BLStripes");

function initRow(rowElem) {
    if (rowElem.nodeType !== Node.ELEMENT_NODE) return;
    for (let control = 0; control < 3; control++) {
        rowElem.children[control].children[0].addEventListener("change", updateJSONFromForm);
    }
    var buttons = rowElem.children[4].children;

    //「上に移動」ボタン
    buttons[0].setClick(function () {
        var previousElem = null;
        previousElem = rowElem.previousElementSibling;
        /*while (previousElem !== null && previousElem.nodeType !== Node.ELEMENT_NODE) {
            previousElem = previousElem.previousSibling;
        }*/
        if (previousElem !== null) {
            rowList.insertBefore(rowElem, previousElem);
        }
        updateJSONFromForm();
    }, true);

    //「下に移動」ボタン
    buttons[1].setClick(function () {
        var nextElem = null;
        nextElem = rowElem.nextElementSibling;
        if (nextElem == null) return; //すでに最後なら何もする必要はない
        var nextNextElem = nextElem.nextElementSibling;
        if (nextNextElem == null) { //2つ後の要素が無いなら最後尾に移動することになる
            rowList.appendChild(rowElem);
        } else {
            rowList.insertBefore(rowElem, nextNextElem);
        }
        updateJSONFromForm();
    }, true);

    //「複製」ボタン
    buttons[2].setClick(function () {
        var newRow = rowElem.cloneNode(true);
        rowList.insertBefore(newRow, rowElem);
        initRow(newRow);
        updateJSONFromForm();
    }, true);
    //「削除」ボタン
    buttons[3].setClick(function () {
        if (window.confirm(lang.callText("rowRemovalConfirmation"))) rowElem.remove();
        updateJSONFromForm();
    }, true);
}

function updateJSONFromForm() {
    var json = "[";
    let hasBefore = false;
    for (let pos in Array.from(rowList.children)) {
        if (hasBefore) json += ", ";
        console.log("ieuagbiaeug");
        let row = rowList.children[pos];
        json += `{\"light\": \"${row.children[0].children[0].value}\", \"medium\": \"${row.children[1].children[0].value}\", \"dark\": \"${row.children[2].children[0].value}\", \"width\": \"${row.children[3].children[0].value}\"}`;
        hasBefore = true;
    }
    json += "]";
    getElem("stripeJSONData").value = json;
    generateSaveData();
}

function updateFormFromJSON() {
    var jsonObj = JSON.parse(getElem("stripeJSONData").value);
    rowList.innerHTML = "";
    for (let row of jsonObj) {
        var newRow = addNewRow();
        newRow.children[0].children[0].value = row.light;
        newRow.children[1].children[0].value = row.medium;
        newRow.children[2].children[0].value = row.dark;
        newRow.children[3].children[0].value = row.width;
    };
}

for (let row of rowList.children) {
    initRow(row);
};

function addNewRow() {
    var newRow = document.createElement("tr");
    newRow.innerHTML = getElem("BLStripeRowTemplate").innerHTML;
    rowList.appendChild(newRow);
    initRow(newRow);
    return newRow;
}
getElem("addStripe").setClick(function () {
    initRow(addNewRow());
}, true);

formUpdateFunctions.push(updateFormFromJSON);
