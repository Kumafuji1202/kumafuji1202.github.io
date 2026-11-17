// 内部的に使用する非文字:
// u+fdd0: half a 用
// u+fdd1: 大文字セクション開始
// u+fdd2: 大文字セクション終了
function convert(text, origid, destid, startcaps = "", endcaps = "", scriptGInOutput = false, dInOutput = "u0064") {
    let output = ""; // 出力
    if (origid != destid) {
        let detectCaps =
            !systems[origid].supportsCaps && systems[destid].supportsCaps && startcaps != "" && endcaps != "";
                // 変換元が大文字をサポートせず、変換先が大文字をサポートしていて、変換元のテキストで大文字が何かで囲まれている場合
        let encloseCaps = systems[origid].supportsCaps && !systems[destid].supportsCaps;
            // 変換元が大文字をサポートしていて、変換先が大文字をサポートせず、従って大文字を小文字に変換し、それを囲まなければならない場合
        let capStartMarkAndEndMarkAreIdentical = startcaps == endcaps;
            // 大文字開始マークと大文字終了マークが同じである場合
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
        let origtext = text.replaceAll("ɡ", "g").replaceAll("ɖ", "d").replaceAll("ꬼ", "ŋ");
        // 上の行は、万が一 U+0067 と U+0261 に別の ITA 文字を当てるフォントをサポートしなくてはならなくなった場合、書き換える
        let lastCharWasCap = false;
        let useCapsIfPossible = false;
            // 現在の位置で大文字を使用する指示があるか
        for (let rawchar of [...origtext]) {
            // 元テキストの文字毎に
            let char = rawchar; // 個々の文字
            
            //　変換前の文字を特定
            let charIndex = -1;
            let thisCharIsCap = false;
            if (systems[origid].letters.includes(char)) {
                // 小文字である
                charIndex = systems[origid].letters.indexOf(char);
            } else if (systems[origid].capsEnco == "o"){
                // 変換元が大文字をサポートしている
                if (systems[origid].capitals.includes(char)) {
                    charIndex = systems[origid].capitals.indexOf(char);
                    thisCharIsCap = true;
                }
            } else if (systems[origid].capsEnco == "u"){
                // 変換元が大文字をサポートしている
                if (systems[origid].letters.includes(char.toLowerCase())) {
                    charIndex = systems[origid].letters.indexOf(char.toLowerCase());
                    thisCharIsCap = true;
                }
            }

            // 小文字→大文字の変換が必要かを確認
            if (detectCaps) {
                if (char == "\ufdd1") {
                    if (startcaps == endcaps) thisCharIsCap = !thisCharIsCap;
                    else useCapsIfPossible = true;
                    continue;
                }
                if (char == "\ufdd2") {
                    useCapsIfPossible = false;
                    continue;
                }
            }
            
            // 大文字を小文字に変換
            if (encloseCaps) {
                if (thisCharIsCap && !lastCharWasCap) output += startcaps;
                if (!thisCharIsCap && lastCharWasCap) output += endcaps;
                lastCharWasCap = thisCharIsCap;
            }

            // 小文字を大文字に変換
            if (charIndex != -1) {
                if (!systems[destid].letters[charIndex]){
                    if (names[charIndex] == "ask") {
                        // ask が無いエンコーディングの場合
                        if (getElem("bath").value == "trap") charIndex = names.indexOf("at");
                        else charIndex = names.indexOf("ahd");
                    }
                }
                // 対応表にある文字
                let corr = systems[destid].letters[charIndex];
                if (systems[destid].capsEnco == "n" || (!useCapsIfPossible && !thisCharIsCap)) output += systems[destid].letters[charIndex];
                else if (systems[destid].capsEnco == "u") output += systems[destid].letters[charIndex].toUpperCase();
                else if (systems[destid].capsEnco == "o") output += systems[destid].capitals[charIndex];
            } else {
                // 対応表に無い文字
                output += char;
            }
        }
        // 大文字で終わった場合
        if (lastCharWasCap) output += endcaps;
    } else {
        output = text;
    }
    if (scriptGInOutput) output = output.replaceAll("g", "ɡ");
    else output = output.replaceAll("ɡ", "g");
    if (dInOutput != "dedic")
        output = output.replaceAll(systems[destid].letters[systems["pit"].letters.indexOf("d")], "d");
    if (dInOutput == "u0256") output = output.replaceAll("d", "ɖ");
    if (getElem("uAB3C").checked && destid == "uni") output = output.replaceAll("ŋ", "ꬼ");
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
        // HTMLに出力
        getElem("output").innerHTML = output.cleanse();
    }
    function updateInputEncoding() {
        let system = getElem("originsystem").value;
        getElem("input").setAttribute("class", system + "-ita");
        getElem("input").setAttribute("placeholder", convert("inpõt sum ITA tekst hér...", "pit", system));
        if (systems[system].font) getElem("input").setAttribute("style", "font-family: " + systems[system].font);
        updateOutput();
    }
    function updateOutputEncoding() {
        let destsys = systems[getElem("destsystem").value];
        if (destsys.font) getElem("output").setAttribute("style", "font-family: " + destsys.font);
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

    /* UIを生成 */
    for (let sysid in systems) {
        let sys = systems[sysid];
        let dispName = sys.name;
        if (sys.encoVersion) dispName += " (" + sys.encoVersion + ")";
        pack("option", dispName).setAttributes({ value: sysid }).addTo(getElem("originsystem"));
        pack("option", dispName).setAttributes({ value: sysid }).addTo(getElem("destsystem"));
    }
    getElem("originsystem").addEventListener("change", updateInputEncoding);
    getElem("destsystem").addEventListener("change", updateOutputEncoding);
    getElem("startcaps").addEventListener("change", updateOutput);
    getElem("endcaps").addEventListener("change", updateOutput);
    getElem("bath").addEventListener("change", updateOutput);
    getElem("gay").addEventListener("change", updateOutput);
    getElem("did").addEventListener("change", updateOutput);
    getElem("uAB3C").addEventListener("change", updateOutput);
    updateInputEncoding();
    updateOutputEncoding();
    getElem("input").addEventListener("input", updateOutput);
    getElem("toClipboard").setClick(() => {
        navigator.clipboard.writeText(
            getElem("output")
                .innerHTML.replaceAll("&lt;", "<")
                .replaceAll("&gt;", ">")
                .replaceAll("&amp;", "&")
                .replaceAll("<br>", "\n")
        ).then(
            () => window.alert("copy successful"),
            () => window.alert("copy failed")
        );
    });
});
