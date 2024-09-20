var formUpdateFunctions = [];
var generateSaveData = () => {};
window.addEventListener("load", function(){
    function runAllOAFs(){
        for (let func of formUpdateFunctions) {
            func();
        }
    }
    /*自動開閉フォーム*/
    function updateSelectForm(selectFieldsetID){
        var selectedOption = getElem(getElem(selectFieldsetID).getAttribute("data-form-selector")).selectedOptions[0];
        var selectedFormID = selectedOption.hasAttribute("data-option-form") ?
            selectedOption.getAttribute("data-option-form") : getElem(selectFieldsetID).getAttribute("data-default-form");
        for (let formDivElem of document.querySelectorAll("#" + selectFieldsetID + "> *[id]:not(legend)")){
            if (formDivElem.id == selectedFormID){
                if (!(formDivElem.classList.contains("selectedForm"))) formDivElem.classList.add("selectedForm");
            }else{
                if (formDivElem.classList.contains("selectedForm")) formDivElem.classList.remove("selectedForm");
            }
        }
    }
    function updateOffOrInput(checkBoxElem){
        var label = getElem(checkBoxElem.getAttribute("data-off-or-input"));
        var isInverted = checkBoxElem.hasAttribute("data-offorinput-inverted");
        if (!checkBoxElem.checked ^ isInverted){
            if (!label.classList.contains("disabledLabel")){
                label.classList.add("disabledLabel");
                label.control.disabled = true;
            }
        }else{
            if (label.classList.contains("disabledLabel")) label.classList.remove("disabledLabel");
                label.control.disabled = false;
        }
    }
    function updateCustomOrPreset(selectElem){
        var customizationForm = getElem(selectElem.getAttribute("data-customization-form"));
        if(selectElem.value == "custom"){
            customizationForm.classList.remove("notCustom");
        }else{
            customizationForm.classList.add("notCustom");
        }
    }
    function updateAllSelectForms(){
        for(let elem of document.querySelectorAll(".selectForm")){
            updateSelectForm(elem.id);
        }
        for(let elem of document.querySelectorAll("input[data-off-or-input]")){
            updateOffOrInput(elem);
        }
        for(let elem of document.querySelectorAll("select[data-customization-form]")){
            updateCustomOrPreset(elem);
        }
        runAllOAFs();
    }
    function addEventListeners(){
        for(let elem of document.querySelectorAll(".selectForm")){
            elem.addEventListener("input", function(){
                updateSelectForm(elem.id);
            }, true);
        }
        for(let elem of document.querySelectorAll("input[data-off-or-input]")){
            elem.addEventListener("input", function(){
                updateOffOrInput(elem);
            }, true);
        }
        for(let elem of document.querySelectorAll("select[data-customization-form]")){
            elem.addEventListener("input", function(){
                updateCustomOrPreset(elem);
            }, true);
        }
    }
    
    /*saveデータ読込*/
    function applySaveData(dataJSON){
        var data = {};
        try {
            data = JSON.parse(dataJSON);
        } catch (e) {
            throw new Error("JSON syntax error");
        }
        for (let set of saveDataFormat) {
            if (data[set.id]) {
                if (!set.prop || set.prop == "value"){
                    if ((set.id == "flipTileObverseType" || set.id == "flipTileReverseType") && data[set.id] == "smiley"){
                        getElem(set.id).value = (set.id == "flipTileObverseType") ? "smile" : "frown";
                        continue;
                    }
                    getElem(set.id).value = data[set.id];
                } else if (set.prop == "checked") {
                    getElem(set.id).checked = data[set.id] == "true";
                } else if (set.prop == "radio") {
                    console.log("set");
                    document.querySelector(`[name=\"${set.id}\"][value=\"${data[set.id]}\"]`).checked = true;
                    //new FormData(getElem("form-content")).set(set.id, data[set.id]);
                } else {
                    getElem(set.id).setAttribute(set.prop, data[set.id]);
                }
            }else{
                //ここから後方互換性用のコードA, saveDataFormatで要求されたデータが保存データに無いとき[新追加要素など]処理がここに流れてくる。
                //特別に処理がない限り、保存データにあってsaveDataFormatで要求されて[いない]データは無視される。
                if (set.id == "lineStyle"){
                    getElem(set.id).setAttribute(set.prop, data.lineAura == "true" ? "double" : "normal");
                }
                if (set.id == "chinaJumppadPattern"){
                    getElem(set.id).setAttribute(set.prop, data.gspJumppad);
                }
                if (set.id == "chinaJumppadInner"){
                    getElem(set.id).setAttribute(set.prop, data.jumppadColor);
                }
                if (set.id == "floaterInactiveShadowColor"){
                    getElem(set.id).setAttribute(set.prop, data.floaterMainColor);
                }
                if (set.id == "floaterActiveShadowColor"){
                    getElem(set.id).setAttribute(set.prop, data.floaterMainColor);
                }
                if (set.id == "activeJumppadGlow"){
                    getElem(set.id).setAttribute(set.prop, data.disableActiveJumppadGlow ? "none" : "normal");
                }
                //1.1.9からflipTileTypeはflipTileObverseTypeとflipTileReverseTypeに分離された
                if (set.id == "flipTileObverseType"){
                    getElem(set.id).setAttribute(set.prop, data.flipTileType);
                }
                if (set.id == "flipTileReverseType"){
                    getElem(set.id).setAttribute(set.prop, data.flipTileType);
                }
            }
        }
        //ここから特別処理コードB. ここには1つのセーブデータエントリが複数のコントロールを制御する/に制御されている場合などの処理を書く。
        //saveDataFormatに入れなければ、データ生成処理もgenerateSaveDaraUnner()に独自で書かなければならない。
        if (data.enemyStripes) getElem("stripeJSONData").value=JSON.stringify(data.enemyStripes);

        updateAllSelectForms();
        getElem("generateButton").click();
    }

    getElem("loadSavedTheme").addEventListener("change", function () {
        //確認
        if (!window.confirm(lang.callText("loadSavedThemeConfirmation"))) return;
        getElem("themeName").value = this.files[0].name.substring(0, this.files[0].name.lastIndexOf("."));
        var savedDataFileReader = new FileReader();
        savedDataFileReader.addEventListener("loadstart", function () {
            getElem("loadStatus").innerHTML = lang.callText("fileLoading");
        });
        savedDataFileReader.addEventListener("error", function () {
            getElem("loadStatus").innerHTML = lang.callText("loadError");
        });
        savedDataFileReader.addEventListener("loadend", function () {
            getElem("loadStatus").innerHTML = lang.callText("loadFileComplete");
            applySaveData(savedDataFileReader.result);
        });
        savedDataFileReader.readAsText(this.files[0]);
    }, true);

    function generateSaveDataInner() {
        var json = "{\n\t\"version\": \"" + versionName + "\",\n\t\"versionNum\": " + versionNum + ",";
        for(let set of saveDataFormat) {
            //ラジオボタン
            if (set.prop == "radio"){
                console.log("fda");
                json += `\n\t\"${set.id}\": \"${new FormData(getElem("form-content")).get(set.id)}\",`;
                continue;
            }
            if (!getElem(set.id)) {
                console.warn(`saveDataFormat で要求された ID ${set.id} に対応する要素が HTML側に存在しません`);
                continue;
            }
            //TODO: set.idにあってhtmlにないidはここにエラーを出すので開発補助のために何か報告をする
            json += `\n\t\"${set.id}\": \"${getElem(set.id)[set.prop ? set.prop : "value"]}\",`;
        }
        json += "\n\t\"enemyStripes\": " + getElem("stripeJSONData").value;
        json += "\n}";
        getElem("saveTheme").setAttribute("href", "data:text/plain;base64," + btoa(json));
        localStorage.setItem("RSSM::saveData", json);
    }
    getElem("generateButton").setClick(generateSaveDataInner, true);

    //自動でセーブを更新するイベントリスナー
    for(let set of saveDataFormat){
        if (set.prop == "radio") {
            for(let radioElem of Array.from(document.getElementsByName(set.id))){
                radioElem.addEventListener("change", generateSaveDataInner,true);
            }
            continue;
        }
        getElem(set.id).addEventListener("change", generateSaveDataInner,true);
    }

    generateSaveData = generateSaveDataInner;

    let previousSave = localStorage.getItem("RSSM::saveData");
    if (previousSave) applySaveData(previousSave);

    getElem("localStorageDataClearButton").setClick(() => {
        if (!confirm(lang.callText("localStorageClearConfirmation"))) return;
        localStorage.removeItem("RSSM::saveData");
        disableConfirmation = true;
        location.reload();
    });
    
    addEventListeners();
    updateAllSelectForms();
}, true);
