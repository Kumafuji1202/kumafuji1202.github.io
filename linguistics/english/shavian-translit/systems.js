const extEscape = [
    ["𐑒", "\ue000"],
    ["𐑜", "\ue001"],
    ["𐑢", "\ue002"],
    ["𐑤", "\ue003"],
    ["𐑺", "\ue004"],
    ["𐑻", "\ue005"]
];

const shavianTranslit = [
    {
        name: "orthodox‐like",
        "𐑒": "k", "𐑜": "g", "𐑙": "n͡g", "𐑣": "h",
        "𐑗": "c͜h", "𐑡": "j", "𐑖": "s͜h", "𐑠": "z͜h",
        "𐑑": "t", "𐑛": "d", "𐑕": "s", "𐑟": "z", "𐑯": "n", "𐑮": "r",
        "𐑔": "t͜h", "𐑞": "d͜h", "𐑤": "l",
        "𐑐": "p", "𐑚": "b", "𐑓": "f", "𐑝": "v", "𐑥": "m",
        "𐑢": "w", "𐑘": "y",
        "𐑰": "e͡e", "𐑵": "o͡o",
        "𐑦": "i", "𐑫": "ô͜o",
        "𐑱": "a͡y", "𐑴": "o͡a",
        "𐑧": "e", "𐑷": "a͡w",
        "𐑨": "a", "𐑪": "o",
        "𐑩": "u", "𐑳": "ú",
        "𐑭": "a͜h",
        "𐑿": "yo͡o", "𐑲": "i͜e",
        "𐑬": "o͡w", "𐑶": "o͡y",
        "𐑾": "i͜a",
        "𐑻": "úr", "𐑽": "e͡er", "𐑺": "a͜ir", "𐑸": "ar", "𐑹": "or", "𐑼": "ur",
        "\ue000": "k͜h", "\ue001": "gh", "\ue002": "w͜h",
        "\ue003": "l͜h", "\ue004": "eah", "\ue005": "ö",
    },
    {
        name: "conventional IPA‐like",
        "𐑒": "k", "𐑜": "ɡ", "𐑙": "ŋ", "𐑣": "h",
        "𐑗": "t͡ʃ", "𐑡": "d͡ʒ", "𐑖": "ʃ", "𐑠": "ʒ",
        "𐑑": "t", "𐑛": "d", "𐑕": "s", "𐑟": "z", "𐑯": "n", "𐑮": "r",
        "𐑔": "θ", "𐑞": "ð", "𐑤": "l",
        "𐑐": "p", "𐑚": "b", "𐑓": "f", "𐑝": "v", "𐑥": "m",
        "𐑢": "w", "𐑘": "j",
        "𐑰": "iː", "𐑵": "uː",
        "𐑦": "ɪ", "𐑫": "ʊ",
        "𐑱": "eɪ̯", "𐑴": "oʊ̯",
        "𐑧": "ɛ", "𐑷": "ɔː",
        "𐑨": "æ", "𐑪": "ɒ",
        "𐑩": "ə", "𐑳": "ʌ",
        "𐑭": "ɑː",
        "𐑿": "juː", "𐑲": "aɪ̯",
        "𐑬": "aʊ̯", "𐑶": "ɔɪ̯",
        "𐑾": "ɪə",
        "𐑻": "ɜːr", "𐑽": "ɪər", "𐑺": "ɛər", "𐑸": "ɑːr", "𐑹": "ɔːr", "𐑼": "ər",
        "\ue000": "x", "\ue001": "ɣ", "\ue002": "ʍ",
        "\ue003": "ɬ", "\ue004": "ɛə", "\ue005": "ɜː",
    }/*,
    {
        name: "original",
        "𐑒": "k", "𐑜": "g", "𐑙": "ŋ", "𐑣": "h",
        "𐑗": "ĉ", "𐑡": "ĝ", "𐑖": "ŝ", "𐑠": "ĵ",
        "𐑑": "t", "𐑛": "d", "𐑕": "s", "𐑟": "z", "𐑯": "n", "𐑮": "r",
        "𐑔": "þ", "𐑞": "ð", "𐑤": "l",
        "𐑐": "p", "𐑚": "b", "𐑓": "f", "𐑝": "v", "𐑥": "m",
        "𐑢": "w", "𐑘": "j",
        "𐑰": "i͜j", "𐑵": "u͜w",
        "𐑦": "i", "𐑫": "u",
        "𐑱": "e͜j", "𐑴": "o͜w",
        "𐑧": "e", "𐑷": "o",
        "𐑨": "æ", "𐑪": "å",
        "𐑩": "ə", "𐑳": "ă",
        "𐑭": "a",
        "𐑿": "j͜u͜w", "𐑲": "a͜j",
        "𐑬": "a͜w", "𐑶": "o͜j",
        "𐑾": "i͜ə",
        "𐑻": "ŕ",
        "𐑽": "i͜r", "𐑺": "e͜r", "𐑸": "a͜r", "𐑹": "o͜r", "𐑼": "ə͜r",
        "\ue000": "ĥ", "\ue001": "ğ", "\ue002": "ʍ",
        "\ue003": "ɬ", "\ue004": "ɛ͜ə", "\ue005": "ə́"
    }*/
];
function translit(original, sysid, encloseLatin = ["", ""]){
    let o = original;
    if (o.includes("\ufe00")){
        for (let e of extEscape){
            o = o.replaceAll(e[0] + "\ufe00", e[1]);
        }
    }
    let translitSystem = shavianTranslit[sysid];
    let romanized = "";
    let lastLetterWasVowel = false;
    let lastLetterWasLatin = false;
    for(let letter of o){
        if ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(letter)){
            if (!lastLetterWasLatin){
                romanized += encloseLatin[0];
                lastLetterWasLatin = true;
            }
        } else{
            if (lastLetterWasLatin){
                romanized += encloseLatin[1];
                lastLetterWasLatin = false;
            }
        }
        if (translitSystem[letter]){
            /*if ("𐑰𐑵𐑦𐑫𐑱𐑴𐑧𐑷𐑨𐑪𐑭𐑳𐑩𐑾𐑿𐑲𐑬𐑶𐑽𐑺𐑸𐑹𐑼𐑻".includes(letter)){
                if (lastLetterWasVowel){
                    romanized += "’";
                } else lastLetterWasVowel = true;
            } else{
                lastLetterWasVowel = false;
            }*/
            romanized += translitSystem[letter];
        } else {
            // lastLetterWasVowel = false;
            romanized += letter;
        }
    }
    if (lastLetterWasLatin) romanized += encloseLatin[1];
    return romanized;
}