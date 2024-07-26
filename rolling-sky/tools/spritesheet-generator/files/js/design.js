//言語設定の地球儀のアイコンを回転させるだけ

var globeEmojis = ["🌏", "🌎", "🌍"];
var globeRotat = 0;
setInterval(function () {
    document.getElementById("globeEmoji").innerHTML = globeEmojis[globeRotat++ % 3];
}, 500);

//デザインモード切替

document.getElementById("designSelectBox").addEventListener("change", function () {
    document.documentElement.setAttribute("data-theme", document.getElementById("designSelectBox").value);
    localStorage.setItem("colorTheme", document.getElementById("designSelectBox").value);
}, true);
var themCol = localStorage.getItem("colorTheme");
if (themCol) {
    document.documentElement.setAttribute("data-theme", themCol);
    document.getElementById("designSelectBox").value = themCol;
}

document.getElementById("languageSelectBox").addEventListener("change", function () {
    localStorage.setItem("language", document.getElementById("languageSelectBox").value);
}, true);
var langSet = localStorage.getItem("language");
if (langSet) {
    lang.useLanguage(langSet);
    document.getElementById("languageSelectBox").value = langSet;
}

//TODO
/*アプデ通知*/{
    localStorage.setItem("RSSM::lastVersion", versionNum);
}