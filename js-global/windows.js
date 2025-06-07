window.addEventListener("load", function () {
    window.closeAllWindows = (e) => {
        e.preventDefault();
        getElem(windowManager.windowGroupID).removeAttribute("opened");
        for (let each of document.querySelectorAll("window-positioner[opened]")) each.removeAttribute("opened");
    };
    for (let each of document.querySelectorAll("[data-is-window-close-button]")) each.setClick(closeAllWindows);
    for (let each of document.querySelectorAll("[data-opens-window]")) each.setClick(openWindowButtonOnClick);
});

/*ダイアログウィンドウ用*/
var windowManager = {
    windowGroupID: "windowGroup"
};
function openWindowButtonOnClick(e) {
    e.preventDefault();
    openWindow(e.target.getAttribute("data-opens-window"));
}
function openWindow(id){
    console.log("opening window" + id);
    for (let each of document.querySelectorAll("window-positioner[opened]")) each.removeAttribute("opened");
    getElem(id).setAttribute("opened", "");
    getElem(windowManager.windowGroupID).setAttribute("opened", "settings");
    getElem(id).dispatchEvent(new Event("windowopened"));
}
