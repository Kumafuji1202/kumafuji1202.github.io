onPageLoad(() => {
    var area = getElem("area");
    getElem("copy-raw").setClick(e => {
        navigator.clipboard.writeText(area.value).then(() => {alert("Copied!");});
        e.preventDefault();
    });
    getElem("copy-normalized").setClick(e => {
        navigator.clipboard.writeText(area.value.normalize()).then(() => {alert("Copied!");});
        e.preventDefault();
    });
    area.addEventListener("keydown", (e) => {
        if (e.key.length > 1) return;

        let cursorAfterPos = area.selectionStart;
        let longSelected = cursorAfterPos != area.selectionEnd;
        let newLet = "";
        let consumeLetters = 0;
        let invalidInput = false;

        
        let underscoreJoin = area.value.charAt(area.selectionStart - 1) == "_";

        if (!underscoreJoin && (("a" <= e.key && e.key <= "z" && e.key != "g") || "./".includes(e.key))) {
            //小文字なら何もしないで出力
            return;
        }

        if (!(underscoreJoin || ("A" <= e.key && e.key <= "Z") || "g%':@{}123456789&?<>^!|\"=~+\\`".includes(e.key)))
            return; //他の特殊文字でなければ無視

        //"iyɨᵿɯueøɘɵɤo"
        //
        const implosiveConvertBase = "bdɖɟɡɢptʈckq";
        const underscoreDiacriticCode = '"+-0=>^}~AabcdeGhjklmNnOoqrtuvwXxy12345?';
        console.log("xibgus");
        if (underscoreJoin) {
            //直前の文字が_なら
            if (e.key == "<") {
                //入破音に変化
                if (!implosiveConvertBase.includes(area.value.charAt(cursorAfterPos - 2))) invalidInput = true; //前に変化させられる文字がない

                newLet = ("ɓɗᶑʄɠʛƥƭ𝼉ƈƙʠ").toArray()[implosiveConvertBase.indexOf(area.value.charAt(cursorAfterPos - 2))];
                consumeLetters = 2;
            } else if (e.key == "@") {
                //_@で上下の方向を変換
                const posConvBase = String.fromCharCode(0x033A, 0x033B, 0x032A, 0x0306, 0x0318, 0x0319, 0x031D, 0x031E, 0x031F, 0x0320, 0x0325, 0x0329, 0x032F, 0x033C, 0x033D, 0x0361);
                const posConvTarg = String.fromCharCode(0x1AE3, 0x1AE4, 0x0346, 0x032E, 0x1AE0, 0x1AE1, 0x1DF5, 0x1ADB, 0x1AC8, 0x1AE2, 0x030A, 0x030D, 0x0311, 0x1AE5, 0x0353, 0x035C);
                if (!posConvBase.includes(area.value.charAt(cursorAfterPos - 2))) invalidInput = true; //前に変化させられる文字がない
                newLet = posConvTarg[
                    posConvBase.indexOf(area.value.charAt(cursorAfterPos - 2))
                ];
                consumeLetters = 2;
            } else if (e.key == "s") {
                //_sで上付きに変換
                let superscriptConvertBase =
                    "mpbɸβɱfvʋθðntdszɹrlǃʃʒɕʑɳʂʐɻɭɲcɟʝjɥŋkɡxɣɰwʍʟɴχʁʕʔhɦiyɨʉɯuɪᵻʊeɵoəɛœɜʌɔɐɑɒa";
                if (!superscriptConvertBase.includes(area.value.charAt(cursorAfterPos - 2))) invalidInput = true; //前に変化させられる文字がない
                newLet = "ᵐᵖᵇᶲᵝᶬᶠᵛᶹᶿᶞⁿᵗᵈˢᶻʴʳˡꜝᶴᶾᶝᶽᶯᶳᶼʵᶩᶮᶜᶡᶨʲᶣᵑᵏᶢˣˠᶭʷꭩᶫᶰᵡʶˤˀʰʱⁱʸᶤᶶᵚᵘᶦᶧᶷᵉᶱᵒᵊᵋꟹᶟᶺᵓᵄᵅᶛᵃ"[
                    superscriptConvertBase.indexOf(area.value.charAt(cursorAfterPos - 2))
                ];
                consumeLetters = 2;
            } else if (e.key == "S") {
                //声調記号反転(連声用)
                if (!"˩˨˧˦˥꜌꜋꜊꜉꜈".includes(area.value.charAt(cursorAfterPos - 2))) invalidInput = true;

                newLet = "꜖꜕꜔꜓꜒꜑꜐꜏꜎꜍"["˩˨˧˦˥꜌꜋꜊꜉꜈".indexOf(area.value.charAt(cursorAfterPos - 2))];
                consumeLetters = 2;
            } else if (e.key == "Q") {
                //軽声用声調記号
                if (!"˩˨˧˦˥꜖꜕꜔꜓꜒".includes(area.value.charAt(cursorAfterPos - 2))) invalidInput = true;

                newLet = "꜌꜋꜊꜉꜈꜑꜐꜏꜎꜍"["˩˨˧˦˥꜖꜕꜔꜓꜒".indexOf(area.value.charAt(cursorAfterPos - 2))];
                consumeLetters = 2;
            } else if (e.key == "U") {
                //上付き数字声調表記
                if (!"˩˨˧˦˥".includes(area.value.charAt(cursorAfterPos - 2))) invalidInput = true;

                newLet = "¹²³⁴⁵"["˩˨˧˦˥".indexOf(area.value.charAt(cursorAfterPos - 2))];
                consumeLetters = 2;
            } else if ("THMLBRF/\\".includes(e.key)) {
                //声調補助記号関連
                let toneLetters = String.fromCharCode(0x030b, 0x0301, 0x0304, 0x0300, 0x030f, 0x030c, 0x0302); //THMLBRF/\の順
                //前が声調記号ならそれにつなげる
                if (area.value.charAt(cursorAfterPos - 2) == toneLetters[0]) {
                    //前がTなら
                    if (e.key == "H") {
                        newLet = String.fromCharCode(0x1dc7);
                        consumeLetters = 2;
                    } else invalidInput = true;
                } else if (area.value.charAt(cursorAfterPos - 2) == toneLetters[1]) {
                    //前がHなら
                    if (e.key == "T" || e.key == "L") {
                        newLet = e.key == "T" ? String.fromCharCode(0x1dc4) : toneLetters[6];
                        consumeLetters = 2;
                    } else invalidInput = true;
                } else if (area.value.charAt(cursorAfterPos - 2) == toneLetters[3]) {
                    //前がLなら
                    if (e.key == "B" || e.key == "H") {
                        newLet = e.key == "B" ? String.fromCharCode(0x1dc6) : toneLetters[5];
                        consumeLetters = 2;
                    } else invalidInput = true;
                } else if (area.value.charAt(cursorAfterPos - 2) == toneLetters[4]) {
                    //前がBなら
                    if (e.key == "L") {
                        newLet = String.fromCharCode(0x1dc5);
                        consumeLetters = 2;
                    } else invalidInput = true;
                } else if (area.value.charAt(cursorAfterPos - 2) == toneLetters[5]) {
                    //前がRなら
                    if (e.key == "F" || e.key == "\\") {
                        newLet = String.fromCharCode(0x1dc8);
                        consumeLetters = 2;
                    } else invalidInput = true;
                } else if (area.value.charAt(cursorAfterPos - 2) == toneLetters[6]) {
                    //前がFなら
                    if (e.key == "R" || e.key == "/") {
                        newLet = String.fromCharCode(0x1dc9);
                        consumeLetters = 2;
                    } else invalidInput = true;
                } else {
                    newLet = toneLetters["THMLBRF/\\".indexOf(e.key) - 2 * (e.key == "/" || e.key == "\\")];
                    consumeLetters = 1;
                }
            } else {
                if (!underscoreDiacriticCode.includes(e.key)) invalidInput = true;

                newLet =
                    `${String.fromCharCode(0x0308, 0x031f, 0x0320, 0x0325, 0x0329)}ʼ${String.fromCharCode(0x032f, 0x031a, 0x0303, 0x0318, 0x033a)}ᵝ${String.fromCharCode(0x031c, 0x032a, 0x0334)}ˠʰʲ${String.fromCharCode(0x0330)}ˡ${String.fromCharCode(0x033b, 0x033c)}ⁿ${String.fromCharCode(0x0339, 0x031e, 0x0319, 0x031d, 0x0324)}ᶹ${String.fromCharCode(0x032c)}ʷ${String.fromCharCode(0x0306, 0x033d)}ᶣ˩˨˧˦˥ˀ`[
                        underscoreDiacriticCode.indexOf(e.key)
                    ];
                consumeLetters = 1;
            }
        } else if (("A" <= e.key) & (e.key <= "Z") || "g%':@{}123456789&?<>^!|\"=~+".includes(e.key)) {
            //単純に別の文字が出るもの
            newLet = ("ɑβçðɛɱɣɡɥɪɲɬʎɯŋɔʋɒʁʃθʊʌʍχʏʒˌʲːəæʉɨøɜɾɫɐɤɵœɶʔ⟨⟩ꜛꜜ|ˈ" +
                String.fromCharCode(0x0329, 0x0303, 0x0361))[
                "ABCDEFGgHIJKLMNOPQRSTUVWXYZ%':@{}123456789&?<>^!|\"=~+".indexOf(e.key)
            ];
            consumeLetters = 0;
        } else if ("\\`".includes(e.key)) {
            //前の1文字を変化
            let formula = {
                bfore: "",
                after: ""
            };
            if (e.key == "\\") {
                //\で通常派生
                formula.bfore = "abcçdeɡhjklnoprstvxyzβðɣɥɪɲɬʎɯŋɔʋʁʃθʊχːəɜɾɫʔ⟨⟩ꜜ|-ʰˀ" + String.fromCharCode(0x0329);
                formula.after = ("ᴀⱱʗ𝼆ȡᴇ𝼄ɦʝʞɺȵꭥɸɹɕȶʋɧʮʑʙȸɢʜᵻɟɮʟɰɴʘȹʀƛʇᵿħˑɘɞɿȴʕʢʡǃǀ‿ʱˁǂ").toArray();
            } else if (e.key == "`") {
                //そり舌音
                formula.bfore = "dnrɹstzəɜlɬɮɺɿʮǃ";
                formula.after = ("ɖɳɽɻʂʈʐɚɝɭꞎ𝼅𝼈ʅʯ𝼊").toArray();
            }
            let predLet = area.value.fullCharAt(cursorAfterPos - 1);
            consumeLetters = predLet.length;

            if (!formula.bfore.includes(predLet)) {
                //変換対象にないとき
                if (e.key == "`") {
                    newLet = "˞";
                    consumeLetters = 0;
                } else {
                    invalidInput = true;
                }
            } else {
                newLet = formula.after[formula.bfore.indexOf(predLet)];
            }
        }
        
        
        e.preventDefault();
        if (invalidInput || cursorAfterPos <= consumeLetters - 1) return;
        if (longSelected) {
            area.value = area.value.substr(0, cursorAfterPos) + area.value.substr(area.selectionEnd, area.value.length);
            area.setSelectionRange(cursorAfterPos + newLet.length, cursorAfterPos + newLet.length);
        }
        area.value =
            area.value.substr(0, cursorAfterPos - consumeLetters) +
            newLet +
            area.value.substr(cursorAfterPos, area.value.length);
        area.setSelectionRange(cursorAfterPos + newLet.length - consumeLetters, cursorAfterPos + newLet.length - consumeLetters);
    });
});
