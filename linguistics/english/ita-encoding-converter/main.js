// 内部的に使用する非文字:
// u+fdd0: half a 用
// u+fdd1: 大文字セクション開始
// u+fdd2: 大文字セクション終了
function convert(
    text,
    origid,
    destid = 0,
    startcaps = "",
    endcaps = "",
    scriptGInOutput = false,
    dInOutput = "u0064"
) {
    let output = "";
    if (origid != destid) {
        let detectCaps =
            !systems[origid].supportsCaps && systems[destid].supportsCaps && startcaps != "" && endcaps != "";
        let encloseCaps = systems[origid].supportsCaps && !systems[destid].supportsCaps;
        let capStartMarkAndEndMarkAreIdentical = startcaps == endcaps;
        if (detectCaps) {
            // 大文字を検知して大文字に変換
            if (startcaps.length < endcaps.length) {
                text = text.replaceAll(endcaps, "\ufdd2");
                text = text.replaceAll(startcaps, "\ufdd1");
            } else {
                text = text.replaceAll(startcaps, "\ufdd1");
                text = text.replaceAll(endcaps, "\ufdd2");
            }
        }
        let origtext = text.replaceAll("ɡ", "g").replaceAll("ɖ", "d");
        // 上の行は、万が一 U+0067 と U+0261 に別の ITA 文字を当てるフォントをサポートしなくてはならなくなった場合、書き換える
        let lastCharWasCap = false;
        let useCapsIfPossible = false;
        for (let rawchar of [...origtext]) {
            let char = rawchar;

            // 大文字と小文字の変換が必要かを確認
            if (detectCaps) {
                if (char == "\ufdd1") {
                    if (startcaps == endcaps) useCapsIfPossible = !useCapsIfPossible;
                    else useCapsIfPossible = true;
                    continue;
                }
                if (char == "\ufdd2") {
                    useCapsIfPossible = false;
                    continue;
                }
            }
            // 小文字に変換
            if (encloseCaps) {
                char = char.toLowerCase();
                let thisCharIsCap = char != rawchar;
                if (thisCharIsCap && !lastCharWasCap) output += startcaps;
                if (!thisCharIsCap && lastCharWasCap) output += endcaps;
                lastCharWasCap = thisCharIsCap;
            }

            if (systems[origid].letters.includes(char)) {
                let corr = systems[destid].letters[systems[origid].letters.indexOf(char)];
                if (detectCaps && useCapsIfPossible) output += corr.toUpperCase();
                else output += corr;
            } else {
                if (detectCaps && useCapsIfPossible) output += char.toUpperCase();
                else output += char;
            }
        }
        // 大文字で終わった場合
        if (lastCharWasCap) output += endcaps;
    } else {
        output = text;
    }
    if (scriptGInOutput) output = output.replaceAll("g", "ɡ");
    if (dInOutput != "dedic") output = output.replaceAll(systems[destid].letters[systems["pit"].letters.indexOf("d")], "d");
    if (dInOutput == "u0256") output = output.replaceAll("d", "ɖ");
    return output;
}
onPageLoad(() => {
    function updateOutput() {
        let destid = getElem("destsystem").value;
        let origid = getElem("originsystem").value;
        let output = convert(
            getElem("input").value,
            origid,
            destid,
            getElem("startcaps").value,
            getElem("endcaps").value,
            getElem("gay").value == "u0261",
            getElem("did").value
        );
        if (getElem("bath").value == "trap") output = output.replaceAll("\ufdd0", "a");
        else output = output.replaceAll("\ufdd0", "q");
        // HTMLに出力
        getElem("output").innerHTML = output.cleanse();
    }
    function updateInputEncoding() {
        getElem("input").setAttribute("class", getElem("originsystem").value + "-ita");
        getElem("input").setAttribute(
            "placeholder",
            convert("inpõt sum ITA tekst hér...", "pit", getElem("originsystem").value)
        );
        updateOutput();
    }
    function updateOutputEncoding() {
        let destsys = systems[getElem("destsystem").value];
        getElem("output").setAttribute("class", getElem("destsystem").value + "-ita");
        if (destsys.supportsU0261) {
            getElem("opt-scriptg").removeAttribute("disabled");
        } else {
            getElem("opt-scriptg").setAttribute("disabled", "");
        }
        if (destsys.defaultU0261) {
            getElem("gay").value = "u0261";
        } else {
            getElem("gay").value = "u0067";
        }
        if (destsys.supportsU0256) {
            getElem("opt-dtail").removeAttribute("disabled");
        } else {
            getElem("opt-dtail").setAttribute("disabled", "");
        }
        if (destsys.letters[systems["pit"].letters.indexOf("d")] == "d") {
            getElem("opt-dedic").setAttribute("disabled", "");
            getElem("did").value = "u0064";
        } else {
            getElem("opt-dedic").removeAttribute("disabled");
            getElem("did").value = "dedic";
        }
        updateOutput();
    }

    for (let sysid in systems) {
        let sys = systems[sysid];
        pack("option", sys.name).setAttributes({ value: sysid }).addTo(getElem("originsystem"));
        pack("option", sys.name).setAttributes({ value: sysid }).addTo(getElem("destsystem"));
    }
    getElem("originsystem").addEventListener("change", updateInputEncoding);
    getElem("destsystem").addEventListener("change", updateOutputEncoding);
    getElem("startcaps").addEventListener("change", updateOutput);
    getElem("endcaps").addEventListener("change", updateOutput);
    getElem("bath").addEventListener("change", updateOutput);
    getElem("gay").addEventListener("change", updateOutput);
    getElem("did").addEventListener("change", updateOutput);
    updateInputEncoding();
    updateOutputEncoding();
    getElem("input").addEventListener("input", updateOutput);
    getElem("toClipboard").setClick(() => navigator.clipboard.writeText(getElem("output").innerHTML));
});
