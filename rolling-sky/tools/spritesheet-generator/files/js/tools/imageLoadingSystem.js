for (let elem of document.querySelectorAll("input[type=file][data-loading-process]")) {
    elem.addEventListener("change", function () {
        var frd = new FileReader();
        var prc = document.getElementById(elem.getAttribute("data-loading-process"));
        frd.addEventListener("loadstart", function () {
            prc.innerHTML = lang.callText("fileLoading");
        });
        frd.addEventListener("error", function () {
            prc.innerHTML = lang.callText("loadError");
        });
        frd.addEventListener("loadend", function () {
            prc.innerHTML = lang.callText("loadFileComplete");
            document.getElementById(elem.getAttribute("data-load-destination")).setAttribute("src", frd.result);
        });
        frd.readAsDataURL(elem.files[0]);
    }, true);
    if (elem.hasAttribute("data-img-clear-button")) {
        document.getElementById(elem.getAttribute("data-img-clear-button")).classList.add("formSmallButton");
        document.getElementById(elem.getAttribute("data-img-clear-button")).addEventListener("click", function () {
            if (window.confirm(lang.callText("imgRemoveConfirmation"))) {
                document.getElementById(elem.getAttribute("data-load-destination")).removeAttribute("src");
            }
        });
    }
}
