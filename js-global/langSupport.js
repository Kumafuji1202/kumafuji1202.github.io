onPageLoad(() => {
    // langSupportBox
    langMgr.addEventListener("langSet", () => {
        console.log("fds");
        for (let elem of Array.from(document.querySelectorAll("[data-language-support]"))) {
            elem.innerHTML = "";
            let dn = new Intl.DisplayNames([langMgr.currentLang], { type: "language" });
            let langCodes = elem.getAttribute("data-language-support").split(",");
            for (let code of langCodes) {
                code = code.trim();
                let e = document.createElement("code");
                let name;
                try {
                    name = dn.of(code);
                } catch (e) {
                    if (code == "art-x-zese") name = "Zese";
                } finally {
                    e.title = "Supports " + name;
                }
                e.style = "border: 1px solid var(--contents-text); border-radius: 3px; margin: 3px; padding: 3px";
                e.innerHTML = code;
                elem.appendChild(e);
            }
        }
    });
    langMgr.initSite(document.getElementById("languageSelectBox"));
});
