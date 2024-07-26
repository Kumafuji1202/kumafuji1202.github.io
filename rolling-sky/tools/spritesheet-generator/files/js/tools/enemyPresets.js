/*Enemyテーマ部のためのプリセット*/
let dataPresetHandler = function (e) {
    if (!confirm(lang.callText("settingChangeConfirmation"))) return;

    let preset = e.target.getAttribute("data-preset");
    for (let fach of document.querySelectorAll("[data-preset-" + preset + "]")) {
        let attr = "value";
        if (fach.hasAttribute("data-preset-attribute")) attr = fach.getAttribute("data-preset-attribute");
        if (attr == "checked") {
            fach.checked = (fach.getAttribute("data-preset-" + preset) == "true");
            return;
        }
        //fach.setAttribute("value", fach.getAttribute("data-preset-" + preset));
        fach.value = fach.getAttribute("data-preset-" + preset);
    }
};
for (let each of document.querySelectorAll("[data-preset]")) {
    each.setClick(dataPresetHandler);
}
