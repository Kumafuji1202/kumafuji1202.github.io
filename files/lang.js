/*
langList[
    <各自の要素>
    {
        langName:"言語のその言語での名前",
        langCode:"言語コード",
        translations:[
            textKey:"翻訳キー", //これはHTML内の要素のdata-translation-key属性に入れる
            textValue:"翻訳されたテキスト"
        ]
    }
]

LanguageManagerクラス
プロパティ
langdatabase: 生のデータベースオブジェクト
useLanguage: ページを翻訳
initSelectBox: 言語選択ボックスを設定
callText: 翻訳テキストを呼び出し
*/
function LanguageManager(langList) {
    //言語のデータベース
    this.langDatabase = langList;
    var ldb = this.langDatabase;
    this.currentLang = {};
    var cl = this.currentLang;
    //ページ全体を翻訳する
    this.useLanguage = function (langCode) {
        //言語オブジェクト探索
        var foundLang = null;
        ldb.forEach(function (value) {
            if (value.langCode === langCode) {
                foundLang = value;
            }
        });
        if (foundLang === null) throw new Error("no language data for language code \"" + langCode + "\" defined");
        cl = foundLang;
        //言語置き換え
        document.querySelectorAll("*[data-translation-key]").forEach(function (elementToTranslate) {
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
                default:
                    propertyToTranslate = "innerHTML";
            }
            var translatedText = foundLang.translations[elementToTranslate.getAttribute("data-translation-key")] ||
                (propertyToTranslate == "innerHTML" ?
                    "<span style=\"color:red;\">missing <em>" + foundLang.langName + " </em>translation for translation key \"<s>" + elementToTranslate.getAttribute("data-translation-key") + "</s>\"</span>" :
                    "missing " + foundLang.langName + " translation for translation key \"" + elementToTranslate.getAttribute("data-translation-key") + "\"");
            if (propertyToTranslate === "innerHTML") {
                elementToTranslate.innerHTML = translatedText;
            } else {
                elementToTranslate.setAttribute(propertyToTranslate, translatedText);
            }
        });
    };
    var ul = this.useLanguage;
    //選択ボックスの用意
    this.initSelectBox = function (selectFormElement, defaultLang) {
        ldb.forEach(function (value) {
            var optionElem = document.createElement("option");
            optionElem.setAttribute("value", value.langCode);
            optionElem.innerHTML = value.langName;
            selectFormElement.appendChild(optionElem);
        });
        selectFormElement.value = defaultLang;
        selectFormElement.addEventListener("input", function () {
            ul(this.value);
        }, true);
    };
    this.callText = function (key) {
        return cl.translations[key];
    };
}
