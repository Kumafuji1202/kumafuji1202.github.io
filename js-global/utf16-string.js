// this thing
// sample str to use:
// "𐑞𐑦𐑕 𐑦𐑟 𐑩 𐑑𐑧𐑕𐑑"
// "𫞬挛、𫝚り、𫝜子、𫝼音、月𫞂、𫝓力、𫞔滅"
// "𐐘𐐱𐐼 𐐼𐐮𐐼𐑌𐐻 𐑀𐐮𐑂 𐐲𐑅 𐐶𐐴𐑌 𐐺𐐲𐐻 𐑀𐑉𐐩𐐹𐑅."
//

// サロゲート検知メソッド
// 文字列の最初のutf-16文字がサロゲートなら真を返す。
String.prototype.isSurrogate = function () { // 上位・下位両方のサロゲートを検知する
    return String.fromCharCode(0xd800) <= this.charAt(0) && this.charAt(0) <= String.fromCharCode(0xdfff);
};
String.prototype.isHighSurrogate = function () { // 上位サロゲートを検知する
    return String.fromCharCode(0xd800) <= this.charAt(0) && this.charAt(0) < String.fromCharCode(0xdbff);
};
String.prototype.isLowSurrogate = function () { // 下位サロゲートを検知する
    return String.fromCharCode(0xdc00) <= this.charAt(0) && this.charAt(0) < String.fromCharCode(0xdfff);
};

//
String.prototype.lengthAt = function (position) {
    return (this.charAt(position).isSurrogate()) ? 2 : 1;
};

// 指定された位置を含む文字を返す。(位置は通常のjsと同じように指定)
String.prototype.fullCharAt = function (position) {
    if (this.charAt(position).isHighSurrogate()) return this.substr(position, 2);
    if (this.charAt(position).isLowSurrogate()) return this.substr(position - 1, 2);
    return this.charAt(position);
};

// unicode文字毎に分解した配列を返す。
String.prototype.toArray = function (){
    let r = [];
    for (let q = 0; q < this.length; q++){
        if (this.charAt(q).isHighSurrogate()){
            r.push(this.substr(q, 2));
            q++;
        } else {
            r.push(this.charAt(q));
        }
    }
    return r;
};
