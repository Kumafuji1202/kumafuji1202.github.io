getElem("swapMainPalette").setClick(function () {
    for (let leftnum = 1; leftnum <= 6; leftnum++) {
        let rightnum = [2, 1, 4, 3, 6, 5][leftnum - 1];
        let temp = getElem("middleLeftTone" + leftnum + "Face").value;
        getElem("middleLeftTone" + leftnum + "Face").value = getElem("middleRightTone" + rightnum + "Face").value;
        getElem("middleRightTone" + rightnum + "Face").value = temp;
        temp = getElem("middleLeftTone" + leftnum + "Line").value;
        getElem("middleLeftTone" + leftnum + "Line").value = getElem("middleRightTone" + rightnum + "Line").value;
        getElem("middleRightTone" + rightnum + "Line").value = temp;
    }
    getElem("middleLeftTone7").value = getElem("middleLeftTone6Face").value;
    generateEnemy();
});
