//update no. 2
//updateAllSelectFormsのスコープの関係でこの2つのモジュールは1つのJSファイルにある

var dataFormat = [
    {id:"groundColor", prop:"value"},
    {id:"groundLineColor", prop:"value"},
    {id:"groundSideColor", prop:"value"},
    {id:"groundEdgeStyle", prop:"value"},
    {id:"outlinedGroundOutlineColor", prop:"value"},
    {id:"outlinedGroundEdgeColor", prop:"value"},
    {id:"enableVolcanicGradient", prop:"checked"},
    {id:"volcanicGradientColor", prop:"value"},
    {id:"doubleLines", prop:"checked"},
    
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
    
    {id:"fragileColor", prop:"value"},
    {id:"fragileLineColor", prop:"value"},
    {id:"fragileSideColor", prop:"value"},
    {id:"fragileActiveColor", prop:"value"},
    {id:"fragileActiveLineColor", prop:"value"},
    {id:"fragileActiveSideColor", prop:"value"},
    {id:"fragileStyle", prop:"value"},
    {id:"fragileStripeColor", prop:"value"},
    {id:"fragileActiveStripeColor", prop:"value"},
    
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
                    }
                });
                
                if (data.enemyStripes) document.getElementById("stripeJSONData").value=JSON.stringify(data.enemyStripes);
                
                updateAllSelectForms();
            });
            savedDataFileReader.addEventListener("error", function () {
                document.getElementById("loadStatus").innerHTML = lang.callText("loadError");
            });
            savedDataFileReader.readAsText(this.files[0]);
        }
    }, true);

    function generateSaveData() {
        var json = "{";
        dataFormat.forEach(function (set, num) {
            json += "\n\t\"" + set.id + "\": \"" + document.getElementById(set.id)[set.prop] + "\",";
        });
        json += "\n\t\"enemyStripes\": " + document.getElementById("stripeJSONData").value;
        json += "\n}";
        document.getElementById("saveTheme").setAttribute("href", "data:text/plain;base64," + btoa(json));
    }
    document.getElementById("generateButton").addEventListener("click", generateSaveData, true);
    
    dataFormat.forEach(function (set){
        if (!(["src"]).includes(set.prop)) document.getElementById(set.id).addEventListener("change", generateSaveData,true);
    });
}, true);
