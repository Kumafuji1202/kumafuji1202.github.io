/*Fragile range-number連動*/
let copyFAlphaFrRange2Num = () => {
    getElem("fragileAlphaNum").value = getElem("fragileAlpha").value;
    getElem("fragileActiveAlphaNum").value = getElem("fragileActiveAlpha").value;
};
getElem("fragileAlphaNum").addEventListener("input", function () {
    getElem("fragileAlpha").value = getElem("fragileAlphaNum").value = Number(getElem("fragileAlphaNum").value).clamp(0, 255);
});
getElem("fragileAlpha").addEventListener("input", function () {
    getElem("fragileAlphaNum").value = getElem("fragileAlpha").value;
});
getElem("fragileActiveAlphaNum").addEventListener("input", function () {
    getElem("fragileActiveAlpha").value = getElem("fragileActiveAlphaNum").value = Number(getElem("fragileActiveAlphaNum").value).clamp(0, 255);
});
getElem("fragileActiveAlpha").addEventListener("input", function () {
    getElem("fragileActiveAlphaNum").value = getElem("fragileActiveAlpha").value;
});

formUpdateFunctions.push(copyFAlphaFrRange2Num);