var langMgr;
onPageLoad(() => {
    langMgr = new LanguageManager({
        languages: [
            {
                name: "English",
                code: "en"
            },
            {
                name: "日本語",
                code: "ja"
            },/*
            {
                name: "ZESE",
                code: "art-x-zese-Latn",
                lang: "zse-Latn"
            },
            {
                name: "",
                code: "art-x-zese-Qaaz",
                lang: "zse-Zese"
            }*/
        ],
        translations: {
            pageName: {
                en: "Zese font",
                ja: "ゼセフォント",
                "zse-Latn": "Zese [kabi] gaga kaka",
                "zse-Zese": " []  "
            },
            intro: {
                en: "This section of this website is dedicated to a font I made for the conlang Zese.",
                ja: "このサイトのこの部分には僕が作ったゼセという名の人工言語のためのフォントを置いておきます。",
                "zse-Latn": "",
                "zse-Zese": ""
            },
            "latestAt": {
                en: "Latest version created at",
                ja: "更新日時:",
                "zse-Latn": "[Tasu tuko [detu dige]] deda poki take tata tapi",
                "zse-Zese": "[  [ ]]     "
            },
            "aboutThisFont": {
                en: "About this font",
                ja: "このフォントについて",
                "zse-Latn": "Kaka dide poke [kabi] gaga kaka",
                "zse-Zese": "   []  "
            },
            "range": {
                en: "Character range",
                ja: "対応範囲",
                "zse-Latn": "",
                "zse-Zese": ""
            },
            "variants": {
                en: "Variant(s)",
                ja: "変種",
                "zse-Latn": "",
                "zse-Zese": ""
            },
            "samples": {
                en: "Samples",
                ja: "サンプルテキスト",
                "zse-Latn": "",
                "zse-Zese": ""
            },
            "zeseSansUCSUR.latestTime": {
                en: "2025 Jul 25 00:28",
                ja: "2025年7月25日 0時28分",
                "zse-Latn": "",
                "zse-Zese": ""
            },
            "zeseSansUCSUR.about": {
                en: "A simple sans-serif OpenType font. Utilizes kerning feature to increase interverbal space for better legibility " +
                    "while keeping the letters connected. Decreased space after a word ending in " +
                    "U (<span lang=\"qez-Qaaz\" class=\"zese-sans-ucsur\"></span>).",
                ja: "シンプルなOpenTypeのサンセリフ体です。",
                "zse-Latn": "",
                "zse-Zese": ""
            },
            "zeseSansUCSUR.range.1": {
                en: "Supports the 13 Zese letters according to ",
                ja: "",
                "zse-Latn": "",
                "zse-Zese": ""
            },
            "zeseSansUCSUR.range.link": {
                en: "the UCSUR encoding",
                ja: "UCSURによるコード割り当て",
                "zse-Latn": "",
                "zse-Zese": ""
            },
            "zeseSansUCSUR.range.2": {
                en: ", Arabic digits and some punctuation. Does not support Latin letters.",
                ja: "に従ってゼセ文字13字、アラビア数字と幾つかの句読点を収録。",
                "zse-Latn": "",
                "zse-Zese": ""
            },
            "zeseSansUCSUR.variants": {
                en: "Currently has only Regular variant.",
                ja: "現在は標準のみ",
                "zse-Latn": "",
                "zse-Zese": ""
            },
        }
    });
    langMgr.initSite(document.getElementById("languageSelectBox"));
});
