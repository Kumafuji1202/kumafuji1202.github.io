//update no. 4
//updateAllSelectFormsのスコープの関係でこの2つのモジュールは1つのJSファイルにある

var versionName = "1.0.8";
var versionNum = 8;
var dataFormat = [
    {id:"groundColor", prop:"value"},
    {id:"groundLineColor", prop:"value"},
    {id:"groundSideColor", prop:"value"},
    {id:"groundEdgeStyle", prop:"value"},
    {id:"outlinedGroundOutlineColor", prop:"value"},
    {id:"outlinedGroundEdgeColor", prop:"value"},
    {id:"enableVolcanicGradient", prop:"checked"},
    {id:"volcanicGradientColor", prop:"value"},
    
    {id:"jumppadColor", prop:"value"},
    {id:"jumppadColorActive", prop:"value"},
    {id:"jumppadLineColor", prop:"value"},
    {id:"jumppadLineColorActive", prop:"value"},
    {id:"jumppadSideColor", prop:"value"},
    {id:"jumppadSideColorActive", prop:"value"},
    {id:"disableActiveJumppadGlow", prop:"checked"},
    {id:"jumppadStyle", prop:"value"},
    {id:"inactiveGridColor", prop:"value"},
    {id:"activeOnlyGrid", prop:"checked"},
    {id:"squaresJumppadInactiveInner", prop:"value"},
    {id:"squaresJumppadInactiveOuter", prop:"value"},
    {id:"squaresJumppadActiveInner", prop:"value"},
    {id:"squaresJumppadActiveOuter", prop:"value"},
    {id:"checkerJumppadInactiveEdge", prop:"value"},
    {id:"checkerJumppadActiveEdge", prop:"value"},
    {id:"inactiveJumppadGlow", prop:"checked"},
    {id:"inactiveJumppadGlowColor", prop:"value"},
    {id:"gspJumppad", prop:"value"},
    {id:"gpJumppadInactive", prop:"value"},
    {id:"gpJumppadActive", prop:"value"},
    {id:"lineStyle", prop:"value"},
    {id:"jumppadActiveImg", prop:"src"},
    {id:"jumppadInactiveImg", prop:"src"},
    
    {id:"fragileColor", prop:"value"},
    {id:"fragileLineColor", prop:"value"},
    {id:"fragileAlpha", prop:"value"},
    {id:"fragileActiveAlpha", prop:"value"},
    {id:"fragileSideColor", prop:"value"},
    {id:"fragileActiveColor", prop:"value"},
    {id:"fragileActiveLineColor", prop:"value"},
    {id:"fragileActiveSideColor", prop:"value"},
    {id:"fragileStyle", prop:"value"},
    {id:"fragileStripeColor", prop:"value"},
    {id:"fragileActiveStripeColor", prop:"value"},
    {id:"fragileInnerStyle", prop:"value"},
    {id:"fragileInnerInactiveDecoColor", prop:"value"},
    {id:"fragileInnerActiveDecoColor", prop:"value"},
    
    {id:"groundVariation1", prop:"value"},
    {id:"groundVariation2", prop:"value"},
    {id:"groundVariation3", prop:"value"},
    {id:"groundVariation4", prop:"value"},
    {id:"fragileVariation1", prop:"value"},
    {id:"fragileVariation2", prop:"value"},
    {id:"fragileVariation3", prop:"value"},
    {id:"frgActiveVariation1", prop:"value"},
    {id:"frgActiveVariation2", prop:"value"},
    {id:"frgActiveVariation3", prop:"value"},
    
    {id:"moverSameColor", prop:"checked"},
    {id:"moverNoOutlines", prop:"checked"},
    {id:"moverMainColor", prop:"value"},
    {id:"moverLineColor", prop:"value"},
    {id:"moverAutoLineColor", prop:"value"},
    {id:"moverOutlineColor", prop:"value"},
    {id:"moverAutoOutlineColor", prop:"value"},
    {id:"moverOutlineBorderColor", prop:"value"},
    {id:"moverAutoOutlineBorderColor", prop:"value"},
    {id:"moverSideColor", prop:"value"},
    {id:"moverAutoSideColor", prop:"value"},
    {id:"moverActiveArrowColor", prop:"value"},
    {id:"moverAutoActiveArrowColor", prop:"value"},
    {id:"moverActiveArrowBorderColor", prop:"value"},
    {id:"moverAutoActiveArrowBorderColor", prop:"value"},
    {id:"moverArrowTopColor", prop:"value"},
    {id:"moverArrowUpperSideColor", prop:"value"},
    {id:"moverArrowSideColor", prop:"value"},
    
    {id:"midGroundTopColor", prop:"value"},
    {id:"midGroundBottomColor", prop:"value"},
    {id:"midGroundWindows", prop:"checked"},
    {id:"midGroundWindowsTop", prop:"value"},
    {id:"midGroundWindowsMiddle", prop:"value"},
    {id:"midGroundWindowsBottom", prop:"value"},
    
    {id:"finishLineInactiveColorA", prop:"value"},
    {id:"finishLineInactiveColorB", prop:"value"},
    {id:"finishLineActiveColorA", prop:"value"},
    {id:"finishLineActiveColorB", prop:"value"},
    {id:"finishLineActiveLine", prop:"value"},
    
    {id:"gemColor", prop:"value"},
    {id:"gemLineColor", prop:"value"},
    {id:"gemLightColor", prop:"value"},
    
    //ここからEnemy,
    //A
    {id:"radialLightOuter", prop:"value"},
    {id:"radialLightInner", prop:"value"},
    {id:"linearLightSameColor", prop:"checked"},
    {id:"linearLightAOuter", prop:"value"},
    {id:"linearLightAInner", prop:"value"},
    {id:"linearLightBOuter", prop:"value"},
    {id:"linearLightBInner", prop:"value"},
    //B
    {id:"topRightType", prop:"value"},
    //fl
    {id:"floaterMainColor", prop:"value"},
    {id:"floaterSpikeInnerColor", prop:"value"},
    {id:"floaterInactiveEdgeColor", prop:"value"},
    {id:"floaterActiveEdgeColor", prop:"value"},
    {id:"floaterInactiveShadowColor", prop:"value"},
    {id:"floaterActiveShadowColor", prop:"value"},
    //cr
    {id:"russianTowerTop", prop:"value"},
    {id:"russianTowerMiddleTop", prop:"value"},
    {id:"russianTowerLowerTop", prop:"value"},
    {id:"tetriminoOuterSameColor", prop:"checked"},
    {id:"tetriminoGradient", prop:"checked"},
    {id:"crystalCollection1Inner", prop:"value"},
    {id:"crystalCollection1Outer", prop:"value"},
    {id:"crystalCollection2Inner", prop:"value"},
    {id:"crystalCollection2Outer", prop:"value"},
    {id:"crystalCollection3Inner", prop:"value"},
    {id:"crystalCollection3Outer", prop:"value"},
    {id:"crystalCollection4Inner", prop:"value"},
    {id:"crystalCollection4Outer", prop:"value"},
    {id:"crystalCollection5Inner", prop:"value"},
    {id:"crystalCollection5Outer", prop:"value"},
    {id:"crystalCollection6Inner", prop:"value"},
    {id:"crystalCollection6Outer", prop:"value"},
    {id:"crystalCollection7Inner", prop:"value"},
    {id:"crystalCollection7Outer", prop:"value"},
    {id:"crystalCollection8Inner", prop:"value"},
    {id:"crystalCollection8Outer", prop:"value"},
    //cb
    {id:"cubeStructureType", prop:"value"},
    {id:"originalCubeStructureTopBackground", prop:"value"},
    {id:"originalCubeStructureFrontBackground", prop:"value"},
    {id:"originalCubeStructureTopPattern", prop:"value"},
    {id:"originalCubeStructureFrontPattern", prop:"value"},
    {id:"cubeStructureTopImg", prop:"src"},
    {id:"cubeStructureFrontImg", prop:"src"},
    {id:"cubeStructureFrame", prop:"checked"},
    {id:"cubeStructureFrameColor", prop:"value"},
    {id:"spinCubeType", prop:"value"},
    {id:"originalSpinCubeColorA", prop:"value"},
    {id:"originalSpinCubeColorB", prop:"value"},
    {id:"spinCubeImg", prop:"src"},
    //dz
    {id:"neonAccentA", prop:"value"},
    {id:"neonAccentB1", prop:"value"},
    {id:"neonAccentB2", prop:"value"},
    {id:"neonAccentB3", prop:"value"},
    {id:"neonAccentC1", prop:"value"},
    {id:"neonAccentC2", prop:"value"},
    {id:"neonAccentD", prop:"value"},
    {id:"neonRobotGear1", prop:"value"},
    {id:"neonRobotGear2", prop:"value"},
    {id:"neonRobotGear3", prop:"value"},
    {id:"neonRobotGear4", prop:"value"},
    {id:"neonRobotGear5", prop:"value"},
    {id:"neonRobotCordFront", prop:"value"},
    {id:"neonRobotCordSide", prop:"value"},
    //subB
    {id:"subBType", prop:"value"},
    {id:"noPatternSubBColor", prop:"value"},
    {id:"doubleRollerLines", prop:"checked"},
    {id:"classicalRollerMainColor", prop:"value"},
    {id:"classicalRollerLineColor", prop:"value"},
    {id:"palmTreeTrunk1", prop:"value"},
    {id:"palmTreeTrunk2", prop:"value"},
    {id:"palmTreeTrunk3", prop:"value"},
    {id:"palmTreeTrunk4", prop:"value"},
    //Flip
    {id:"flipTileType", prop:"value"},
    {id:"flipperColor1Obverse", prop:"value"},
    {id:"flipperColor1Reverse", prop:"value"},
    {id:"flipperColor2Obverse", prop:"value"},
    {id:"flipperColor2Reverse", prop:"value"},
    {id:"flipperColor3Obverse", prop:"value"},
    {id:"flipperColor3Reverse", prop:"value"},
    {id:"flipperColor4Obverse", prop:"value"},
    {id:"flipperColor4Reverse", prop:"value"},
    {id:"flipperColor5Obverse", prop:"value"},
    {id:"flipperColor5Reverse", prop:"value"},
    {id:"flipperObverseImg", prop:"src"},
    {id:"flipperReverseImg", prop:"src"},
    //ミニジャンプ
    {id:"smallJumpInactiveTop", prop:"value"},
    {id:"smallJumpInactiveSide", prop:"value"},
    {id:"smallJumpActiveTop", prop:"value"},
    {id:"smallJumpActiveSide", prop:"value"},
    //C
    {id:"mainStripeThickness", prop:"value"},
    {id:"mainStripeCustomThickness", prop:"value"},
    {id:"mainStripeCustomInterval", prop:"value"},
    {id:"mainStripeCustomStart", prop:"value"},
    {id:"mainStripeColorSteps", prop:"value"},
    {id:"mainStripeTone1Back", prop:"value"},
    {id:"mainStripeTone1Front", prop:"value"},
    {id:"mainStripeTone2Back", prop:"value"},
    {id:"mainStripeTone2Front", prop:"value"},
    {id:"mainStripeTone3Back", prop:"value"},
    {id:"mainStripeTone3Front", prop:"value"},
    {id:"mainStripe1ToneBack", prop:"value"},
    {id:"mainStripe1ToneFront", prop:"value"},
    {id:"addCenterLine", prop:"checked"},
    //D
    {id:"middleLeftTone1Face", prop:"value"},
    {id:"middleLeftTone1Line", prop:"value"},
    {id:"middleLeftTone2Face", prop:"value"},
    {id:"middleLeftTone2Line", prop:"value"},
    {id:"middleLeftTone3Face", prop:"value"},
    {id:"middleLeftTone3Line", prop:"value"},
    {id:"middleLeftTone4Face", prop:"value"},
    {id:"middleLeftTone4Line", prop:"value"},
    {id:"middleLeftTone5Face", prop:"value"},
    {id:"middleLeftTone5Line", prop:"value"},
    {id:"middleLeftTone6Face", prop:"value"},
    {id:"middleLeftTone6Line", prop:"value"},
    {id:"middleLeftTone7", prop:"value"},
    {id:"middleLeftLineThickness", prop:"value"},
    //E
    {id:"middleRightTone1Face", prop:"value"},
    {id:"middleRightTone1Line", prop:"value"},
    {id:"middleRightTone2Face", prop:"value"},
    {id:"middleRightTone2Line", prop:"value"},
    {id:"middleRightTone3Face", prop:"value"},
    {id:"middleRightTone3Line", prop:"value"},
    {id:"middleRightTone4Face", prop:"value"},
    {id:"middleRightTone4Line", prop:"value"},
    {id:"middleRightTone5Face", prop:"value"},
    {id:"middleRightTone5Line", prop:"value"},
    {id:"middleRightTone6Face", prop:"value"},
    {id:"middleRightTone6Line", prop:"value"},
    {id:"middleRightLineThickness", prop:"value"},
    //F
    {id:"bottomLeftType", prop:"value"},
    {id:"BLGradationTopLightColor", prop:"value"},
    {id:"BLGradationTopMediumColor", prop:"value"},
    {id:"BLGradationTopDarkColor", prop:"value"},
    {id:"BLGradationBottomLightColor", prop:"value"},
    {id:"BLGradationBottomMediumColor", prop:"value"},
    {id:"BLGradationBottomDarkColor", prop:"value"},
    //todo 通常モードのbottomleft縞部分のコード
    //{id:"stripeJSONData", prop:"value"},
    {id:"BLStripeLine", prop:"checked"},
    {id:"BLStripeLineColor", prop:"checked"},
    {id:"fillBottommost", prop:"checked"},
    //天空の城スタイル
    {id:"skyCastleBLGradationTopLightColor", prop:"value"},
    {id:"skyCastleBLGradationTopMediumColor", prop:"value"},
    {id:"skyCastleBLGradationTopDarkColor", prop:"value"},
    {id:"skyCastleBLGradationBottomLightColor", prop:"value"},
    {id:"skyCastleBLGradationBottomMediumColor", prop:"value"},
    {id:"skyCastleBLGradationBottomDarkColor", prop:"value"},
    {id:"skyCastleBLTriangleLightColor", prop:"value"},
    {id:"skyCastleBLTriangleMediumColor", prop:"value"},
    {id:"skyCastleBLTriangleDarkColor", prop:"value"},
    //G
    {id:"bottomRightType", prop:"value"},
    //outlined
    {id:"riserTopMain", prop:"value"},
    {id:"riserTopInactiveLine", prop:"value"},
    {id:"riserTopActiveLine", prop:"value"},
    {id:"riserLine", prop:"value"},
    //round
    {id:"riserTopOuter", prop:"value"},
    {id:"riserInactiveTopLine", prop:"value"},
    {id:"riserActiveTopLine", prop:"value"},
    {id:"riserInactiveTopInner", prop:"value"},
    {id:"riserActiveTopInner", prop:"value"},
    {id:"useRiserLine", prop:"checked"},
    {id:"riserLine2", prop:"value"},
];
var otherUpdateFunctions = [];
var generateSaveData = () => {};
window.addEventListener("load", function(){
    function runAllOAFs(){
        otherUpdateFunctions.forEach(function(func){
            func();
        });
    }
    function updateSelectForm(selectFieldsetID){
        var selectedOption = document.getElementById(document.getElementById(selectFieldsetID).getAttribute("data-form-selector")).selectedOptions[0];
        var selectedFormID = selectedOption.hasAttribute("data-option-form") ?
            selectedOption.getAttribute("data-option-form") : document.getElementById(selectFieldsetID).getAttribute("data-default-form");
        document.querySelectorAll("#" + selectFieldsetID + "> *[id]:not(legend)").forEach(function(formDivElem){
            if (formDivElem.id == selectedFormID){
                if (!(formDivElem.classList.contains("selectedForm"))) formDivElem.classList.add("selectedForm");
            }else{
                if (formDivElem.classList.contains("selectedForm")) formDivElem.classList.remove("selectedForm");
            }
        });
    }
    function updateOffOrInput(checkBoxElem){
        var label = document.getElementById(checkBoxElem.getAttribute("data-off-or-input"));
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
        var customizationForm = document.getElementById(selectElem.getAttribute("data-customization-form"));
        if(selectElem.value == "custom"){
            customizationForm.classList.remove("notCustom");
        }else{
            customizationForm.classList.add("notCustom");
        }
    }
    function updateAllSelectForms(){
        document.querySelectorAll(".selectForm").forEach(function(elem){
            updateSelectForm(elem.id);
        });
        document.querySelectorAll("input[data-off-or-input]").forEach(function(elem){
            updateOffOrInput(elem);
        });
        document.querySelectorAll("select[data-customization-form]").forEach(function(elem){
            updateCustomOrPreset(elem);
        });
        runAllOAFs();
    }
    function addEventListeners(){
        document.querySelectorAll(".selectForm").forEach(function(elem){
            elem.addEventListener("input", function(){
                updateSelectForm(elem.id);
            }, true);
        });
        document.querySelectorAll("input[data-off-or-input]").forEach(function(elem){
            elem.addEventListener("input", function(){
                updateOffOrInput(elem);
            }, true);
        });
        document.querySelectorAll("select[data-customization-form]").forEach(function(elem){
            elem.addEventListener("input", function(){
                updateCustomOrPreset(elem);
            }, true);
        });
    }
    addEventListeners();
    updateAllSelectForms();
    
    //ここからSavedata
    document.getElementById("loadSavedTheme").addEventListener("change", function () {
        if (window.confirm(lang.callText("loadSavedThemeConfirmation"))) {
            var savedDataFileReader = new FileReader();
            savedDataFileReader.addEventListener("loadstart", function () {
                document.getElementById("loadStatus").innerHTML = lang.callText("fileLoading");
            });
            savedDataFileReader.addEventListener("loadend", function () {
                document.getElementById("loadStatus").innerHTML = lang.callText("loadFileComplete");
                var data = {};
                try {
                    data = JSON.parse(savedDataFileReader.result);
                } catch (e) {
                    throw new Error("JSON syntax error");
                }

                dataFormat.forEach(function (set) {
                    if (data[set.id]) {
                        switch (set.prop) {
                            case "value":
                                document.getElementById(set.id).value = data[set.id];
                                break;
                            case "checked":
                                document.getElementById(set.id).checked = data[set.id] == "true";
                                break;
                            default:
                                document.getElementById(set.id).setAttribute(set.prop, data[set.id]);
                        }
                    }else{
                        //ここから互換性用のコードA, dataFormatで要求されたデータが保存データに無いとき処理がここに流れてくる。
                        //特別に処理がない限り、保存データにあってdataFormatで要求されて[いない]データは無視される。
                        if (set.id == "lineStyle"){
                            document.getElementById(set.id).setAttribute(set.prop, data.lineAura == "true" ? "double" : "normal");
                        }
                        if (set.id == "chinaJumppadPattern"){
                            document.getElementById(set.id).setAttribute(set.prop, data.gspJumppad);
                        }
                        if (set.id == "chinaJumppadInner"){
                            document.getElementById(set.id).setAttribute(set.prop, data.jumppadColor);
                        }
                        if (set.id == "floaterInactiveShadowColor"){
                            document.getElementById(set.id).setAttribute(set.prop, data.floaterMainColor);
                        }
                        if (set.id == "floaterActiveShadowColor"){
                            document.getElementById(set.id).setAttribute(set.prop, data.floaterMainColor);
                        }
                    }
                });
                //ここから特別処理コードB. ここには1つのセーブデータエントリが複数のコントロールを制御する/に制御されている場合などの処理を書く。
                //dataFormatに入れなければ、データ生成処理もgenerateSaveDaraUnner()に独自で書かなければならない。
                if (data.enemyStripes) document.getElementById("stripeJSONData").value=JSON.stringify(data.enemyStripes);
                
                updateAllSelectForms();
            });
            savedDataFileReader.addEventListener("error", function () {
                document.getElementById("loadStatus").innerHTML = lang.callText("loadError");
            });
            savedDataFileReader.readAsText(this.files[0]);
        }
    }, true);

    function generateSaveDataInner() {
        var json = "{\n\t\"version\": \"" + versionName + "\",\n\t\"versionNum\": " + versionNum + ",";
        dataFormat.forEach(function (set, num) {
            json += "\n\t\"" + set.id + "\": \"" + document.getElementById(set.id)[set.prop] + "\",";
        });
        json += "\n\t\"enemyStripes\": " + document.getElementById("stripeJSONData").value;
        json += "\n}";
        document.getElementById("saveTheme").setAttribute("href", "data:text/plain;base64," + btoa(json));
    }
    document.getElementById("generateButton").addEventListener("click", generateSaveDataInner, true);
    
    dataFormat.forEach(function (set){
        if (!(["src"]).includes(set.prop)) document.getElementById(set.id).addEventListener("change", generateSaveDataInner,true);
    });
    
    generateSaveData = generateSaveDataInner;
    
    //ここからhtml各セクションのスクリプト
    //Fragile
    let copyFAlphaFrRange2Num = () => {
        document.getElementById("fragileAlphaNum").value = document.getElementById("fragileAlpha").value;
        document.getElementById("fragileActiveAlphaNum").value = document.getElementById("fragileActiveAlpha").value;
    };
    otherUpdateFunctions.push(copyFAlphaFrRange2Num);
    document.getElementById("fragileAlphaNum").addEventListener("input", function(){
        document.getElementById("fragileAlpha").value = document.getElementById("fragileAlphaNum").value = Number(document.getElementById("fragileAlphaNum").value).clamp(0,255);
    });
    document.getElementById("fragileAlpha").addEventListener("input", function(){
        document.getElementById("fragileAlphaNum").value = document.getElementById("fragileAlpha").value;
    });
    document.getElementById("fragileActiveAlphaNum").addEventListener("input", function(){
        document.getElementById("fragileActiveAlpha").value = document.getElementById("fragileActiveAlphaNum").value = Number(document.getElementById("fragileActiveAlphaNum").value).clamp(0,255);
    });
    document.getElementById("fragileActiveAlpha").addEventListener("input", function(){
        document.getElementById("fragileActiveAlphaNum").value = document.getElementById("fragileActiveAlpha").value;
    });
    //ここからEnem
    function checkIfCommonObjsAreAvailable() {
        var TRCheck = (checkFrom, attr, formID, unavailableMsg, hiddenInput, inverted = false) => {
            var isAvailable = (inverted^document.getElementById(checkFrom).selectedOptions[0].hasAttribute(attr)) == 1;
            document.getElementById(hiddenInput).value = isAvailable;
            if (isAvailable) {
                document.getElementById(unavailableMsg).classList.add("hidden");
                document.getElementById(formID).classList.remove("hidden");
            }else{
                document.getElementById(formID).classList.add("hidden");
                document.getElementById(unavailableMsg).classList.remove("hidden");
            }
            return isAvailable;
        };
        //subB
        TRCheck("topRightType", "data-subB-available", "subBForm", "subBUnavailableMessage", "subBAvailable");
        //Flip
        TRCheck("topRightType", "data-flipper-available", "flipTileForm", "flipTileUnavailableMessage", "flipTileAvailable");
        //MiniJ
        TRCheck("topRightType", "data-minijump-available", "smallJumpForm", "smallJumpUnavailableMessage", "smallJumpAvailable");
        //BRight
        TRCheck("subBType", "data-override-risers", "bottomRightForm", "bottomRightUnavailableMessage", "bottomRightAvailable", true);
    }
    checkIfCommonObjsAreAvailable();
    document.getElementById("topRightType").addEventListener("change", checkIfCommonObjsAreAvailable);
    document.getElementById("subBType").addEventListener("change", checkIfCommonObjsAreAvailable);
    otherUpdateFunctions.push(checkIfCommonObjsAreAvailable);
    
    //
    
    //反転床の更新
    function changeFlipTileForm() {
        var flipTileType = document.getElementById("flipTileType").value;
        var notTheSamePattern = ["import"];
        if (notTheSamePattern.includes(flipTileType)) {
            document.getElementById("flipperColorForm").classList.add("hidden");
            document.getElementById("flipperNoCustomization").classList.add("hidden");
            document.getElementById("importFlipperCustomizationForm").classList.remove("hidden");
            return;
        }
        document.getElementById("flipperColorForm").classList.remove("hidden");
        document.getElementById("importFlipperCustomizationForm").classList.add("hidden");
        document.getElementById("flipperNoCustomization").classList.add("hidden");
        var flipTileData = {
            "cube": {
                colorCount: 2,
                translationKeys: [
                    "cubeFlipperColorA",
                    "cubeFlipperColorB"
                ]
            },
            "checker": {
                colorCount: 2,
                translationKeys: [
                    "checkerFlipperColorA",
                    "checkerFlipperColorB"
                ]
            },
            "holly": {
                colorCount: 5,
                translationKeys: [
                    "backgroundColor",
                    "flipperFrameColor",
                    "hollyFlipperPetalColor1",
                    "hollyFlipperPetalColor2",
                    "hollyFlipperSpotColor"
                ]
            },
            "rhombus": {
                colorCount: 3,
                translationKeys: [
                    "backgroundColor",
                    "flipperFrameColor",
                    "rhombusFlipperRhombusColor"
                ]
            },
            "squares": {
                colorCount: 2,
                translationKeys: [
                    "backgroundColor",
                    "patternColor"
                ]
            },
            "uLines": {
                colorCount: 2,
                translationKeys: [
                    "backgroundColor",
                    "patternColor"
                ]
            },
            "star": {
                colorCount: 2,
                translationKeys: [
                    "backgroundColor",
                    "patternColor"
                ]
            },
            "semicircles": {
                colorCount: 3,
                translationKeys: [
                    "demisemicirclesFlipperCenterColor",
                    "demisemicirclesFlipperColorB",
                    "demisemicirclesFlipperColorC"
                ]
            },
            "ring": {
                colorCount: 3,
                translationKeys: [
                    "backgroundColor",
                    "flipperFrameColor",
                    "patternColor"
                ]
            },
            "cross": {
                colorCount: 3,
                translationKeys: [
                    "backgroundColor",
                    "flipperFrameColor",
                    "patternColor"
                ]
            },
            "nuclear": {
                colorCount: 3,
                translationKeys: [
                    "backgroundColor",
                    "flipperFrameColor",
                    "patternColor"
                ]
            },
            "biohazard": {
                colorCount: 3,
                translationKeys: [
                    "backgroundColor",
                    "flipperFrameColor",
                    "patternColor"
                ]
            },
            "eight": {
                colorCount: 2,
                translationKeys: [
                    "backgroundColor",
                    "patternColor"
                ]
            },
            "checkeredged": {
                colorCount: 2,
                translationKeys: [
                    "alternatingEdgeColsFlipperColorA",
                    "alternatingEdgeColsFlipperColorB"
                ]
            },
            "heart": {
                colorCount: 3,
                translationKeys: [
                    "backgroundColor",
                    "flipperFrameColor",
                    "patternColor"
                ]
            },
            "cits": {
                colorCount: 3,
                translationKeys: [
                    "backgroundColor",
                    "flipperFrameColor",
                    "patternColor"
                ]
            },
            "fakeground": {
                colorCount: 2,
                translationKeys: [
                    "backgroundColor",
                    "flipperFrameColor"
                ]
            }
        };
        var currentFlipData = flipTileData[flipTileType];
        Array.from(document.getElementById("flipperColorForm").children).forEach(function (div, num) {
            if (num > currentFlipData.colorCount - 1) {
                div.classList.add("hidden");
                return;
            }
            div.classList.remove("hidden");
            var labelElem = div.children[0];
            labelElem.setAttribute("data-translation-key", currentFlipData.translationKeys[num]);
            labelElem.innerHTML = lang.callText(currentFlipData.translationKeys[num]);
        });
    }
    changeFlipTileForm();
    document.getElementById("flipTileType").addEventListener("change", changeFlipTileForm);
    otherUpdateFunctions.push(changeFlipTileForm);
    
    //
    
    //メインストライプの更新
    
    function updateMSCF() {
        var code = "0000";
        switch (document.getElementById("mainStripeColorSteps").value) {
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
                document.getElementById("mainStripeColorForm" + (i + 1)).classList.add("hidden");
            } else {
                document.getElementById("mainStripeColorForm" + (i + 1)).classList.remove("hidden");
            }
        }
    }
    updateMSCF();
    otherUpdateFunctions.push(updateMSCF);
    document.getElementById("mainStripeColorSteps").addEventListener("change", updateMSCF, true);
    
    //
    
    //左下の線の更新
    var rowList = document.getElementById("BLStripes");

    function initRow(rowElem) {
        if (rowElem.nodeType !== Node.ELEMENT_NODE) return;
        for (let control = 0; control < 3; control++) {
            rowElem.children[control].children[0].addEventListener("change", updateJSONFromForm);
        }
        var buttons = rowElem.children[4].children;

        //「上に移動」ボタン
        buttons[0].addEventListener("click", function () {
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
        buttons[1].addEventListener("click", function () {
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
        buttons[2].addEventListener("click", function () {
            var newRow = rowElem.cloneNode(true);
            rowList.insertBefore(newRow, rowElem);
            initRow(newRow);
            updateJSONFromForm();
        }, true);
        //「削除」ボタン
        buttons[3].addEventListener("click", function () {
            if (window.confirm(lang.callText("rowRemovalConfirmation"))) rowElem.remove();
            updateJSONFromForm();
        }, true);
    }

    function updateJSONFromForm() {
        var json = "[";
        Array.from(rowList.children).forEach(function (row, pos, arr) {
            json += "{\"light\": \"" + row.children[0].children[0].value + "\", \"medium\": \"" + row.children[1].children[0].value + "\", \"dark\": \"" + row.children[2].children[0].value + "\", \"width\": \"" + row.children[3].children[0].value + "\"}";
            if (pos + 1 != arr.length) json += ", ";
        });
        json += "]";
        document.getElementById("stripeJSONData").value = json;
        generateSaveData();
    }

    function updateFormFromJSON() {
        var jsonObj = JSON.parse(document.getElementById("stripeJSONData").value);
        rowList.innerHTML = "";
        jsonObj.forEach(function (row) {
            var newRow = addNewRow();
            newRow.children[0].children[0].value = row.light;
            newRow.children[1].children[0].value = row.medium;
            newRow.children[2].children[0].value = row.dark;
            newRow.children[3].children[0].value = row.width;
        });
    }

    Array.from(rowList.children).forEach(function (row) {
        initRow(row);
    });

    function addNewRow() {
        var newRow = document.createElement("tr");
        newRow.innerHTML = document.getElementById("BLStripeRowTemplate").innerHTML;
        rowList.appendChild(newRow);
        initRow(newRow);
        return newRow;
    }
    document.getElementById("addStripe").addEventListener("click", function () {
        initRow(addNewRow());
    }, true);
    otherUpdateFunctions.push(updateFormFromJSON);
}, true);
