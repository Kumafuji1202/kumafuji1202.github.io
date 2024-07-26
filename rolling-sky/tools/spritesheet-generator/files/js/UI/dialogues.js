/*ダイアログウィンドウ用*/
window.closeAllWindow = () => {
    getElem("windowGroup").removeAttribute("opened");
    for (let each of document.querySelectorAll("window-positioner[opened]")) each.removeAttribute("opened");
};
for (let each of document.querySelectorAll("[data-window-close-button]")) each.setClick(closeAllWindow);
for (let each of document.querySelectorAll("[data-window-open-button]")) {
    each.setClick(function () {
        getElem(each.getAttribute("data-window-open-button")).setAttribute("opened", "");
        getElem("windowGroup").setAttribute("opened", "settings");
    });
}

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