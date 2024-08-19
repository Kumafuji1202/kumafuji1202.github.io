/*
[data-translation-key]または[tr-key]
  翻訳キー
[data-onetime-translation]または[tr-ot]
  論理属性。1回しか使わない翻訳文章用。属性で言語ごとに翻訳を設定する。
[tr-ot-言語ID]
  tr-ot用


langList
    {
        languages:[
            name: "言語のその言語での名前",
            code:"言語コード",
        ]
        translations:[
            <each>{
                key: "翻訳キー", //これはHTML内の要素のdata-translation-key属性に入れる
                value:"翻訳されたテキスト"
            }
        ]
    }

LanguageManagerクラス
メソッド
initSelectBox: 言語設定ボックスを初期化
useLanguage: ページを翻訳
プロパティ
langdatabase: 生のデータベースオブジェクト
initSelectBox: 言語選択ボックスを設定
callText: 翻訳テキストを呼び出し
currentLang: 現在の言語コード
*/

//currentLang = 現在の設定言語コード
function LanguageManager(langList) {
    //言語のデータベース
    this.langDatabase = langList;
    this.currentLang = "";
    //ページ全体を翻訳する
    this.useLanguage = (langCode) => {
        //言語オブジェクト探索
        let foundLang = false;
        for (let i = 0; i < this.langDatabase.languages.length; i++) {
            if (this.langDatabase.languages[i].code == langCode) foundLang = true;
        }
        if (!foundLang) {
            console.log("no language data for language code \"" + langCode + "\" defined");
            return false;
        }
        this.currentLang = langCode;
        document.documentElement.setAttribute("lang", langCode);
        //言語置き換え
        for (let elementToTranslate of Array.from(document.querySelectorAll("*[data-translation-key], *[tr-key], *[data-onetime-translation], *[tr-ot]"))) {
            var propertyToTranslate = "";
            switch (elementToTranslate.tagName) {
                case "AREA":
                case "IMG":
                    propertyToTranslate = "alt";
                    break;
                case "OPTGROUP":
                    propertyToTranslate = "label";
                    break;
                case "BASE":
                case "BR":
                case "COL":
                case "COLGROUP":
                case "COMMAND":
                case "EMBED":
                case "HR":
                case "IFRAME":
                case "KEYGEN":
                case "LINK":
                case "MENUITEM":
                case "META":
                case "PARAM":
                case "SOURCE":
                case "TEMPLATE":
                case "TRACK":
                case "WBR":
                    throw new Error("no text to translate in element \"" + elementToTranslate.tagName + "\"");
                case "INPUT":
                    switch (elementToTranslate.getAttribute("type")) {
                        case "button":
                        case "submit":
                        case "reset":
                            propertyToTranslate = "value";
                            break;
                        case "email":
                        case "number":
                        case "password":
                        case "search":
                        case "tel":
                        case "text":
                        case "url":
                            propertyToTranslate = "placeholder";
                            break;
                        default:
                            throw new Error("\"input\" elements of type \"" + elementToTranslate.getAttribute("type") + "\" have no text to translate.");
                    }
                    break;
                case "TEXTAREA":
                    propertyToTranslate = "placeholder";
                    break;
                default:
                    propertyToTranslate = "innerHTML";
            }
            let translatedText = ""
            if (elementToTranslate.hasAttribute("data-translation-key") || elementToTranslate.hasAttribute("tr-key")) {
                let q = this.langDatabase.translations[elementToTranslate.getAttribute("data-translation-key") || elementToTranslate.getAttribute("tr-key")];
                translatedText = q ? q[this.currentLang] :
                    (propertyToTranslate == "innerHTML" ?
                        "<span style=\"color:red;\">missing <em>" + foundLang.langName + " </em>translation for translation key \"<s>" + elementToTranslate.getAttribute("data-translation-key") + "</s>\"</span>" :
                        "missing " + foundLang.langName + " translation for translation key \"" + elementToTranslate.getAttribute("data-translation-key") + "\"");
            } else if (elementToTranslate.hasAttribute("onetime-translation") || elementToTranslate.hasAttribute("tr-ot")) {
                console.log("fsdafdsafds")
                translatedText = elementToTranslate.getAttribute("tr-ot-" + langCode);
            }

            if (propertyToTranslate === "innerHTML") {
                elementToTranslate.innerHTML = translatedText;
            } else {
                elementToTranslate.setAttribute(propertyToTranslate, translatedText);
            }
        }
        return true;
    };
    //選択ボックスの用意
    this.initSelectBox = (selectFormElement, defaultLang) => {
        this.langDatabase.languages.forEach(function (language) {
            var optionElem = document.createElement("option");
            optionElem.setAttribute("value", language.code);
            optionElem.innerHTML = language.name;
            selectFormElement.appendChild(optionElem);
        });
        selectFormElement.value = defaultLang;
        selectFormElement.addEventListener("input", () => {
            this.useLanguage(selectFormElement.value);
        }, true);
        this.useLanguage(defaultLang);
    };
    this.callText = (key, throwError = false) => {
        if (this.langDatabase.translations[key][this.currentLang] === undefined) {
            if (throwError) {
                throw new Error("No translation key for \"" + key + "\" in \"" + this.currentLang);
            }
            return "No translation key for \"" + key + "\" in \"" + this.currentLang;
        }
        return this.langDatabase.translations[key][this.currentLang];
    };
    this.initSite = (selectFormElement, languageLocalStorageKey = "language", defaultLang = "en") => {
        selectFormElement.addEventListener("change", function () {
            localStorage.setItem("language", selectFormElement.value);
        }, true);
        let langSet = localStorage.getItem(languageLocalStorageKey);
        if (langSet) {
            if (!this.useLanguage(langSet)) langSet = defaultLang;
            selectFormElement.value = langSet;
        } else {
            localStorage.setItem(languageLocalStorageKey, defaultLang);
            langSet = defaultLang;
        }
        this.initSelectBox(selectFormElement, langSet);
    }
}
