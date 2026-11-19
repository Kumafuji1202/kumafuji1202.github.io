/*ダイアログウィンドウ用*/
function openWindowButtonOnClick(e){
    getElem(e.target.getAttribute("data-window-open-button")).setAttribute("opened", "");
    getElem("windowGroup").setAttribute("opened", "settings");
    getElem(e.target.getAttribute("data-window-open-button")).dispatchEvent(new Event("windowopened"));
}
window.closeAllWindows = () => {
    getElem("windowGroup").removeAttribute("opened");
    for (let each of document.querySelectorAll("window-positioner[opened]")) each.removeAttribute("opened");
};
for (let each of document.querySelectorAll("[data-window-close-button]")) each.setClick(closeAllWindows);
for (let each of document.querySelectorAll("[data-window-open-button]")) each.setClick(openWindowButtonOnClick);

document.getElementById("themeName").addEventListener("input", function () {
    document.getElementById("saveTheme").setAttribute("download", document.getElementById("themeName").value + ".rstheme");
}, true);

getElem("downloadZip").setClick(function () {
    let themeName = getElem("themeName").value;
    fetch(getElem("saveTheme").getAttribute("href"))
        .then((r) => saveZip.file(themeName + ".rstheme", r.blob()))
        .then((s) => {
            s.generateAsync({
                type: "blob"
            }).then(function (blob) {
                saveAs(blob, themeName + ".zip");
            });
        });
});