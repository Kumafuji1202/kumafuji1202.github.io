var sk = {
    inputArea: null,
    defaultKeyHandlers: {
        //既定のキーハンドラ。キーの中身をそのまま出力する。
        letter: (e) => {
            e.preventDefault();
            let cursorAfterPos = sk.inputArea.selectionStart;
            let output = e.target.getAttribute("data-output") || e.target.innerHTML;
            sk.inputArea.value =
                sk.inputArea.value.substring(0, cursorAfterPos) +
                output +
                sk.inputArea.value.substring(sk.inputArea.selectionEnd);
            //強制的にフォーカスを戻す
            sk.inputArea.focus({ focusVisible: false });
            sk.inputArea.selectionEnd = sk.inputArea.selectionStart = cursorAfterPos + output.length;
        },
        enter: (e) => {
            e.preventDefault();
            sk.inputArea.value =
                sk.inputArea.value.substring(0, sk.inputArea.selectionStart) +
                "\n" +
                sk.inputArea.value.substring(sk.inputArea.selectionEnd);
            //強制的にフォーカスを戻す
            sk.inputArea.focus({ focusVisible: false });
            sk.inputArea.selectionEnd = ++sk.inputArea.selectionStart;
        },
        //カーソルを移動させるキー
        moveLeft: (e) => {
            e.preventDefault();
            //強制的にフォーカスを戻す
            sk.inputArea.focus({ focusVisible: false });
            sk.inputArea.selectionEnd = sk.inputArea.selectionStart -= sk.inputArea.value
                .charAt(sk.inputArea.selectionStart - 1)
                .isSurrogate()
                ? 2
                : 1;
        },
        moveRight: (e) => {
            e.preventDefault();
            //強制的にフォーカスを戻す
            sk.inputArea.focus({ focusVisible: false });
            sk.inputArea.selectionEnd = sk.inputArea.selectionStart += sk.inputArea.value
                .charAt(sk.inputArea.selectionStart)
                .isSurrogate()
                ? 2
                : 1;
        },
        //1文字左を削除
        delPrev: (e) => {
            e.preventDefault();
            let cursorAfterPos = sk.inputArea.selectionStart;
            if (cursorAfterPos != 0) {
                //入力テキストの始めにカーソルがあるなら何もしない
                //前がutf16で2バイト文字か4バイト文字かを判定(カーソルの直前のバイトがサロゲートか判定)
                let removeStringSize = sk.inputArea.value.charAt(cursorAfterPos - 1).isSurrogate() ? 2 : 1;
                sk.inputArea.value =
                    sk.inputArea.value.substring(0, cursorAfterPos - removeStringSize) +
                    sk.inputArea.value.substring(sk.inputArea.selectionEnd);
                sk.inputArea.selectionEnd = sk.inputArea.selectionStart = cursorAfterPos - removeStringSize;
            }
            //強制的にフォーカスを戻す
            sk.inputArea.focus({ focusVisible: false });
        }
    },
    prepareKeyboard: function (id, keyArea) {
        let k = keyboardInfo[id];
        if (k.style == "grid") {
            //css用意
            keyArea.classList.add("gridKeyboard");
            keyArea.style.height = `calc(${k.size.height} * var(--key-height)`; // k.size.height;
            {
                let t = "1fr";
                for (let i = 0; i < k.size.width - 1; i++) {
                    t += " 1fr";
                }
                keyArea.style["grid-template-columns"] = t;
            }

            //キー配置
            for (let key of k.keys) {
                let keySlotElem = document.createElement("div");
                keyArea.appendChild(keySlotElem);
                keySlotElem.classList.add("keySlot");
                if (typeof key == "string") {
                    keySlotElem.innerHTML = key;
                } else {
                    keySlotElem.innerHTML = key.display;
                    if (key.position) keySlotElem.style["grid-area"] = key.position;
                    //keySlotElem.style["grid-area"] = (key.position.y + 1) + " / " + (key.position.x + 1);

                    if (key.display === null) {
                        keySlotElem.classList.add("notKey");
                        if (!key.handler) continue;
                    }
                }
                keyArea.appendChild(keySlotElem);

                //ハンドラ設定
                if (key.handler) {
                    keySlotElem.setClick(key.handler);
                    continue;
                }
                if (k.handler) {
                    keySlotElem.setClick(k.handler);
                    continue;
                }
                keySlotElem.setClick(sk.defaultKeyHandlers.letter);
            }
        }
    }
};
