//updateAllSelectFormsのスコープの関係でこの2つのモジュールは1つのJSファイルにある

var versionName = "1.1.7";
var versionNum = 17;
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
    {id:"activeJumppadGlow", prop:"value"},
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
    {id:"linearLightStyle", prop:"value"},
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
    //px
    {id:"1UpPrimaryGradationTop", prop:"value"},
    {id:"1UpPrimaryGradationBottom", prop:"value"},
    {id:"1UpSecondaryGradationLeft", prop:"value"},
    {id:"1UpSecondaryGradationRight", prop:"value"},
    {id:"1UpInvaderEyeSurroundingInner", prop:"value"},
    {id:"1UpInvaderEyeSurroundingOuter", prop:"value"},
    {id:"1UpInvaderEyeSurroundingHasGradation", prop:"checked"},
    {id:"1UpConsoleDoubleButtonsInner", prop:"value"},
    {id:"1UpConsoleDoubleButtonsOuter", prop:"value"},
    {id:"1UpInvaderEyeSurroundingHasGradation", prop:"checked"},
    {id:"1UpConsoleSextupleButtonsInner", prop:"value"},
    {id:"1UpConsoleSextupleButtonsOuter", prop:"value"},
    {id:"1UpInvaderEyeSurroundingHasGradation", prop:"checked"},
    {id:"1UpBeeEyes", prop:"value"},
    {id:"1UpBeeWingsFront", prop:"value"},
    {id:"1UpBeeWingsEdge", prop:"value"},
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
    //bd
    {id:"HBDPaletteA1", prop:"value"},
    {id:"HBDPaletteA2", prop:"value"},
    {id:"HBDPaletteA3", prop:"value"},
    {id:"HBDPaletteA4", prop:"value"},
    {id:"HBDPaletteB1", prop:"value"},
    {id:"HBDPaletteB2", prop:"value"},
    {id:"HBDPaletteB3", prop:"value"},
    {id:"HBDPaletteB4", prop:"value"},
    {id:"HBDGradationTop", prop:"value"},
    {id:"HBDGradationBottom", prop:"value"},
    {id:"HBDRainbow1", prop:"value"},
    {id:"HBDRainbow2", prop:"value"},
    {id:"HBDRainbow3", prop:"value"},
    {id:"HBDRainbow4", prop:"value"},
    {id:"HBDRainbow5", prop:"value"},
    {id:"HBDRainbow6", prop:"value"},
    //t4a
    {id:"t4aBalloonGradationTop", prop:"value"},
    {id:"t4aBalloonGradationBottom", prop:"value"},
    {id:"t4aBase1", prop:"value"},
    {id:"t4aBase2", prop:"value"},
    {id:"t4aAccent1", prop:"value"},
    {id:"t4aAccent2", prop:"value"},
    {id:"t4aAccent3", prop:"value"},
    {id:"t4aAccent4", prop:"value"},
    {id:"t4aAccent5", prop:"value"},
    {id:"t4aCheckedColorA1", prop:"value"},
    {id:"t4aCheckedColorB1", prop:"value"},
    {id:"t4aCheckedColorA2", prop:"value"},
    {id:"t4aCheckedColorB2", prop:"value"},
    {id:"t4aCheckedColorA3", prop:"value"},
    {id:"t4aCheckedColorB3", prop:"value"},
    {id:"t4aMainQuadPaletteA1", prop:"value"},
    {id:"t4aMainQuadPaletteB1", prop:"value"},
    {id:"t4aMainQuadPaletteC1", prop:"value"},
    {id:"t4aMainQuadPaletteD1", prop:"value"},
    {id:"t4aMainQuadPaletteA2", prop:"value"},
    {id:"t4aMainQuadPaletteB2", prop:"value"},
    {id:"t4aMainQuadPaletteC2", prop:"value"},
    {id:"t4aMainQuadPaletteD2", prop:"value"},
    {id:"t4aMainQuadPaletteA3", prop:"value"},
    {id:"t4aMainQuadPaletteB3", prop:"value"},
    {id:"t4aMainQuadPaletteC3", prop:"value"},
    {id:"t4aMainQuadPaletteD3", prop:"value"},
    {id:"t4aSubQuadPaletteA1", prop:"value"},
    {id:"t4aSubQuadPaletteB1", prop:"value"},
    {id:"t4aSubQuadPaletteC1", prop:"value"},
    {id:"t4aSubQuadPaletteD1", prop:"value"},
    {id:"t4aSubQuadPaletteA2", prop:"value"},
    {id:"t4aSubQuadPaletteB2", prop:"value"},
    {id:"t4aSubQuadPaletteC2", prop:"value"},
    {id:"t4aSubQuadPaletteD2", prop:"value"},
    {id:"t4aSubQuadPaletteA3", prop:"value"},
    {id:"t4aSubQuadPaletteB3", prop:"value"},
    {id:"t4aSubQuadPaletteC3", prop:"value"},
    {id:"t4aSubQuadPaletteD3", prop:"value"},
    {id:"t4aCakeStripe1", prop:"value"},
    {id:"t4aCakeStripe2", prop:"value"},
    {id:"t4aCakeStripe3", prop:"value"},
    {id:"t4aCakeStripe4", prop:"value"},
    //ss
    {id:"sunshineMain1", prop:"value"},
    {id:"sunshineMain2", prop:"value"},
    {id:"sunshineMain3", prop:"value"},
    {id:"sunshineDark1", prop:"value"},
    {id:"sunshineDark2", prop:"value"},
    {id:"sunshineDark3", prop:"value"},
    {id:"sunshineAccent1", prop:"value"},
    {id:"sunshineAccent2", prop:"value"},
    {id:"sunshineAccent3", prop:"value"},
    //kp
    {id:"keplerPaletteB6BL-1", prop:"value"},
    {id:"keplerPaletteB6BL-2", prop:"value"},
    {id:"keplerPaletteB6BL-3", prop:"value"},
    {id:"keplerPaletteB6BL-4", prop:"value"},
    {id:"keplerPaletteB6BL-5", prop:"value"},
    {id:"keplerPaletteB6BL-6", prop:"value"},
    {id:"keplerPaletteB4TR-1", prop:"value"},
    {id:"keplerPaletteB4TR-2", prop:"value"},
    {id:"keplerPaletteB4TR-3", prop:"value"},
    {id:"keplerPaletteB4TR-4", prop:"value"},
    {id:"keplerPaletteB4-1", prop:"value"},
    {id:"keplerPaletteB4-2", prop:"value"},
    {id:"keplerPaletteB4-3", prop:"value"},
    {id:"keplerPaletteB11-1", prop:"value"},
    {id:"keplerPaletteB11-2", prop:"value"},
    {id:"keplerGradationTop", prop:"value"},
    {id:"keplerGradationBottom", prop:"value"},
    //
    {id:"neonBoxSign", prop: "value"},
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
    
    {id:"halloweenMultiPurposeGradationLeft", prop:"value"},
    {id:"halloweenMultiPurposeGradationRight", prop:"value"},
    {id:"halloweenGateSkullGradationLeft", prop:"value"},
    {id:"halloweenGateSkullGradationRight", prop:"value"},
    {id:"halloweenPumpkinGradationLeft", prop:"value"},
    {id:"halloweenPumpkinGradationRight", prop:"value"},
    {id:"halloweenPumpkinGradationLineLeft", prop:"value"},
    {id:"halloweenPumpkinGradationLineRight", prop:"value"},
    
    {id:"chrisB11-1", prop:"value"},
    {id:"chrisB11-2", prop:"value"},
    {id:"chrisB11-3", prop:"value"},
    {id:"chrisB11-4", prop:"value"},
    {id:"chrisB12-1", prop:"value"},
    {id:"chrisB12-2", prop:"value"},
    {id:"chrisB12-3", prop:"value"},
    {id:"chrisB12-4", prop:"value"},
    {id:"chrisB13-1", prop:"value"},
    {id:"chrisB13-2", prop:"value"},
    {id:"chrisB13-3", prop:"value"},
    {id:"chrisB13-4", prop:"value"},
    {id:"chrisUpperGradationLeft", prop:"value"},
    {id:"chrisUpperGradationRight", prop:"value"},
    {id:"chrisLowerGradationLeft", prop:"value"},
    {id:"chrisLowerGradationRight", prop:"value"},
    {id:"ChrisPaletteATone1Face", prop:"value"},
    {id:"ChrisPaletteATone2Face", prop:"value"},
    {id:"ChrisPaletteATone3Face", prop:"value"},
    {id:"ChrisPaletteATone1Line", prop:"value"},
    {id:"ChrisPaletteATone2Line", prop:"value"},
    {id:"ChrisPaletteATone3Line", prop:"value"},
    {id:"ChrisPaletteBTone1Line", prop:"value"},
    {id:"ChrisPaletteBTone2Line", prop:"value"},
    {id:"ChrisPaletteBTone3Line", prop:"value"},
    {id:"ChrisPaletteBTone1Face", prop:"value"},
    {id:"ChrisPaletteBTone2Face", prop:"value"},
    {id:"ChrisPaletteBTone3Face", prop:"value"},
    //Flip
    {id:"flipTileObverseType", prop:"value"},
    {id:"flipTileReverseType", prop:"value"},
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
        for (let func of otherUpdateFunctions) {
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
    addEventListeners();
    updateAllSelectForms();
    
    /*開閉するやつ*/{
        function toggleAccordion(id){
            let elem = getElem(id);
            if (elem.hasAttribute("data-accordion-collapsed")){
                setAccordion(elem, true);
            }else{
                setAccordion(elem, false);
            }
        }
        function setAccordion(elem, makeOpen){
            if (makeOpen){
                elem.removeAttribute("data-accordion-collapsed");
            }else{
                elem.setAttribute("data-accordion-collapsed", "");
            }
        }
        for(let each of document.querySelectorAll("[data-accordion-controls]")) {
            each.setClick(() => {
                toggleAccordion(each.getAttribute("data-accordion-controls"));
            });
        };
        for(let each of ["general", "fragile", "fragileActive", "mover", "moverAuto"]){
            getElem(each + "Overlay").setClick(() => {
                for(let fach of document.querySelectorAll("#tilesForm [data-opened-by]")){
                    setAccordion(fach, fach.getAttribute("data-opened-by").includes(each));
                }
            });
        }
    }
    
    /*saveデータ読込*/{
        function applySaveData(dataJSON){
            var data = {};
            try {
                data = JSON.parse(dataJSON);
            } catch (e) {
                throw new Error("JSON syntax error");
            }
            for (let set of dataFormat) {
                if (data[set.id]) {
                    switch (set.prop) {
                        case "value":
                            getElem(set.id).value = data[set.id];
                            break;
                        case "checked":
                            getElem(set.id).checked = data[set.id] == "true";
                            break;
                        default:
                            getElem(set.id).setAttribute(set.prop, data[set.id]);
                    }
                }else{
                    //ここから後方互換性用のコードA, dataFormatで要求されたデータが保存データに無いとき[新追加要素など]処理がここに流れてくる。
                    //特別に処理がない限り、保存データにあってdataFormatで要求されて[いない]データは無視される。
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
            //dataFormatに入れなければ、データ生成処理もgenerateSaveDaraUnner()に独自で書かなければならない。
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
            for(let set of dataFormat) {
                json += "\n\t\"" + set.id + "\": \"" + getElem(set.id)[set.prop] + "\",";
            }
            json += "\n\t\"enemyStripes\": " + getElem("stripeJSONData").value;
            json += "\n}";
            getElem("saveTheme").setAttribute("href", "data:text/plain;base64," + btoa(json));
            localStorage.setItem("RSSM::saveData", json);
        }
        getElem("generateButton").setClick(generateSaveDataInner, true);
    
        for(let set of dataFormat){
            console.log(set.id);
            if (!(["src"]).includes(set.prop)) getElem(set.id).addEventListener("change", generateSaveDataInner,true);
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
    }
    
    //ここからhtml各セクションのスクリプト
    /*Fragile range-number連動*/{
        let copyFAlphaFrRange2Num = () => {
            getElem("fragileAlphaNum").value = getElem("fragileAlpha").value;
            getElem("fragileActiveAlphaNum").value = getElem("fragileActiveAlpha").value;
        };
        otherUpdateFunctions.push(copyFAlphaFrRange2Num);
        getElem("fragileAlphaNum").addEventListener("input", function(){
            getElem("fragileAlpha").value = getElem("fragileAlphaNum").value = Number(getElem("fragileAlphaNum").value).clamp(0,255);
        });
        getElem("fragileAlpha").addEventListener("input", function(){
            getElem("fragileAlphaNum").value = getElem("fragileAlpha").value;
        });
        getElem("fragileActiveAlphaNum").addEventListener("input", function(){
            getElem("fragileActiveAlpha").value = getElem("fragileActiveAlphaNum").value = Number(getElem("fragileActiveAlphaNum").value).clamp(0,255);
        });
        getElem("fragileActiveAlpha").addEventListener("input", function(){
            getElem("fragileActiveAlphaNum").value = getElem("fragileActiveAlpha").value;
        });
    }
    
    /*Enemy自動トグルフォーム*/{
        function checkIfCommonObjsAreAvailable() {
            var TRCheck = (checkFrom, attr, formID, unavailableMsg, hiddenInput, inverted = false) => {
                var isAvailable = (inverted^getElem(checkFrom).selectedOptions[0].hasAttribute(attr)) == 1;
                getElem(hiddenInput).value = isAvailable;
                if (isAvailable) {
                    getElem(unavailableMsg).classList.add("hidden");
                    getElem(formID).classList.remove("hidden");
                }else{
                    getElem(formID).classList.add("hidden");
                    getElem(unavailableMsg).classList.remove("hidden");
                }
                return isAvailable;
            };
            var selectedOptionHasAttribute = (selectElementID, attribute, inverted = false) => {
                return (inverted^getElem(selectElementID).selectedOptions[0].hasAttribute(attribute)) == 1;
            }, setShowCommonObjForm = (isAvailable, formID, unavailableMsg) => {
                if (isAvailable) {
                    getElem(unavailableMsg).classList.add("hidden");
                    getElem(formID).classList.remove("hidden");
                }else{
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
            setShowCommonObjForm(selectedOptionHasAttribute("topRightType", "data-overrides-risers", true) && selectedOptionHasAttribute("subBType", "data-overrides-risers", true), "bottomRightForm", "bottomRightUnavailableMessage");
        }
        checkIfCommonObjsAreAvailable();
        getElem("topRightType").addEventListener("change", checkIfCommonObjsAreAvailable);
        getElem("subBType").addEventListener("change", checkIfCommonObjsAreAvailable);
        otherUpdateFunctions.push(checkIfCommonObjsAreAvailable);
    }
    
    /*ダイアログウィンドウ用*/{
        window.closeAllWindow = () => {
            getElem("windowGroup").removeAttribute("opened");
            for (let each of document.querySelectorAll("window-positioner[opened]")) each.removeAttribute("opened");
        };
        for (let each of document.querySelectorAll("[data-window-close-button]")) each.setClick(closeAllWindow);
        for (let each of document.querySelectorAll("[data-window-open-button]")){
            each.setClick(function(){
                getElem(each.getAttribute("data-window-open-button")).setAttribute("opened", "");
                getElem("windowGroup").setAttribute("opened", "settings");
            });
        }
    }
    
    /*反転床の更新*/{
            //反転床の翻訳・色数データ
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
                colorCount: 4,
                translationKeys: [
                    "backgroundColor",
                    "flipperFrameColor",
                    "rhombusFlipperRhombusColor",
                    "flipperFrameBackgroundColor"
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
            "fortune": {
                colorCount: 2,
                translationKeys: [
                    "backgroundColor",
                    "patternColor"
                ]
            },
            "ring": {
                colorCount: 2,
                translationKeys: [
                    "backgroundColor",
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
            "sakura": {
                colorCount: 3,
                translationKeys: [
                    "backgroundColor",
                    "flipperFrameColor",
                    "patternColor"
                ]
            },
            "shootingstars": {
                colorCount: 3,
                translationKeys: [
                    "backgroundColor",
                    "flipperFrameColor",
                    "patternColor"
                ]
            },
            "smiley": {
                colorCount: 2,
                translationKeys: [
                    "backgroundColor",
                    "patternColor"
                ]
            },
            "needle": {
                colorCount: 2,
                translationKeys: [
                    "backgroundColor",
                    "patternColor"
                ]
            },
            "hourglass": {
                colorCount: 3,
                translationKeys: [
                    "backgroundColor",
                    "flipperFrameColor",
                    "patternColor"
                ]
            },
            "club": {
                colorCount: 4,
                translationKeys: [
                    "backgroundColor",
                    "flipperFrameColor",
                    "flipperInnerFrameColor",
                    "patternColor"
                ]
            },
            "sparkle": {
                colorCount: 3,
                translationKeys: [
                    "backgroundColor",
                    "flipperFrameColor",
                    "patternColor"
                ]
            },
            "brazil": {
                colorCount: 3,
                translationKeys: [
                    "backgroundColor",
                    "flipperFrameColor",
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
            },
            "sunshine": {
                colorCount: 3,
                translationKeys: [
                    "sunshineMain",
                    "sunshineDarker",
                    "sunshineAccent"
                ]
            }
        }
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
            for (let num in Array.from(getElem(`flipper${face}ColorForm`).children)){
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
        otherUpdateFunctions.push(() => {changeFlipTileForm("Obverse"); changeFlipTileForm("Reverse")});
    }
    
    /*メインストライプの更新*/{
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
        otherUpdateFunctions.push(updateMSCF);
        getElem("mainStripeColorSteps").addEventListener("change", updateMSCF, true);
    }
    
    /*左下の線の更新*/{
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
            for(let pos in Array.from(rowList.children)) {
                let row = rowList.children[pos];
                json += "{\"light\": \"" + row.children[0].children[0].value + "\", \"medium\": \"" + row.children[1].children[0].value + "\", \"dark\": \"" + row.children[2].children[0].value + "\", \"width\": \"" + row.children[3].children[0].value + "\"}";
                if (pos + 1 != rowList.children.length) json += ", ";
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
        otherUpdateFunctions.push(updateFormFromJSON);
    }
    
    /*Enemyテーマ部のためのプリセット*/{
        let dataPresetHandler = function(){
            if (!confirm(lang.callText("settingChangeConfirmation"))) return;

            let preset = each.getAttribute("data-preset");
            for (let fach of document.querySelectorAll("[data-preset-" + preset + "]")){
                let attr = "value";
                if (fach.hasAttribute("data-preset-attribute")) attr = fach.getAttribute("data-preset-attribute");
                if (attr == "checked") {fach.checked = (fach.getAttribute("data-preset-" + preset) == "true"); return;}
                //fach.setAttribute("value", fach.getAttribute("data-preset-" + preset));
                fach.value = fach.getAttribute("data-preset-" + preset);
            }
        };
        for(let each of document.querySelectorAll("[data-preset]")){
            each.setClick(dataPresetHandler);
        }
    }
    
    /*Enemy色抽出*/{
        function extractColors(colors){
            getElem("extractColorTableBody").innerHTML = "";
            let context = getElem("textureColorExtractCanvas").getContext("2d", {willReadFrequently: true});
            for (let each of colors) {
                let pixelData = context.getImageData(each.x, each.y, 1, 1);
                let pixelHex = "#";
                for(let i = 0; i < 3; i++){
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
            extractColors([
                {id: "middleLeftTone1Line", x: 140, y: 220},
                {id: "middleLeftTone1Face", x: 158, y: 220},
                {id: "middleLeftTone2Line", x: 204, y: 220},
                {id: "middleLeftTone2Face", x: 232, y: 220},
                {id: "middleLeftTone3Line", x: 140, y: 284},
                {id: "middleLeftTone3Face", x: 158, y: 284},
                {id: "middleLeftTone4Line", x: 204, y: 284},
                {id: "middleLeftTone4Face", x: 232, y: 284},
                {id: "middleLeftTone5Line", x: 140, y: 348},
                {id: "middleLeftTone5Face", x: 158, y: 348},
                {id: "middleLeftTone6Line", x: 204, y: 348},
                {id: "middleLeftTone6Face", x: 198, y: 336},
                {id: "middleLeftTone7", x: 223, y: 350},
                {id: "middleRightTone1Line", x: 268, y: 220},
                {id: "middleRightTone1Face", x: 286, y: 220},
                {id: "middleRightTone2Line", x: 332, y: 220},
                {id: "middleRightTone2Face", x: 350, y: 220},
                {id: "middleRightTone3Line", x: 268, y: 284},
                {id: "middleRightTone3Face", x: 286, y: 284},
                {id: "middleRightTone4Line", x: 332, y: 284},
                {id: "middleRightTone4Face", x: 350, y: 284},
                {id: "middleRightTone5Line", x: 268, y: 348},
                {id: "middleRightTone5Face", x: 286, y: 348},
                {id: "middleRightTone6Line", x: 332, y: 348},
                {id: "middleRightTone6Face", x: 350, y: 348}
            ]);
        });
        getElem("useExtractedColors").setClick(() => {
            if (!window.confirm(lang.callText("settingChangeConfirmation"))) return;
            closeAllWindow();
            for (let colorRow of getElem("extractColorTableBody").children) {
                getElem(colorRow.children[0].innerHTML).value = colorRow.children[1].innerHTML;
            }
            getElem("generateButton").click();
        });
    }
    
    /*アプデ通知*/{
        localStorage.setItem("RSSM::lastVersion", versionNum);
    }
}, true);
