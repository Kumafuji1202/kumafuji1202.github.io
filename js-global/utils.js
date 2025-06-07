Number.prototype.clamp = function (min, max) {
    if (min > max) throw new Error("Argument min is larger than max");
    if (this > max) return max;
    if (this < min) return min;
    return this;
};
String.prototype.isSurrogate = function () {
    return String.fromCharCode(0xd800) <= this.charAt(0) && this.charAt(0) < String.fromCharCode(0xe000);
};
String.prototype.lengthAt = function (position) {
    return (this.charAt(position).isSurrogate()) ? 2 : 1;
};

class Col {
    constructor(r, g, b) {
        this.red = Math.round(Number(r));
        this.green = Math.round(Number(g));
        this.blue = Math.round(Number(b));
    }
    get code() {
        return "#" + (this.red < 16 ? "0" : "") + this.red.toString(16) + (this.green < 16 ? "0" : "") + this.green.toString(16) + (this.blue < 16 ? "0" : "") + this.blue.toString(16);
    }
    get c() {
        return this.code;
    }
    blendWith(anotherColor, ratio = 0.5) {
        let r = ratio.clamp(0, 1);
        return new Col((1 - r) * this.red + r * anotherColor.red, (1 - r) * this.green + r * anotherColor.green, (1 - r) * this.blue + r * anotherColor.blue);
    }
    invert() {
        return new Col(255 - this.red, 255 - this.green, 255 - this.blue);
    }
}
Col.fromColorCode = (colorCode) => {
    if (/^#[0-9A-Fa-f]{6}$/.test(colorCode)) {
        return new Col(eval("0x" + colorCode.substring(1, 3)), eval("0x" + colorCode.substring(3, 5)), eval("0x" + colorCode.substring(5, 7)));
    }
};

function getElem(id) {
    return document.getElementById(id);
}

function onPageLoad(func) {
    return window.addEventListener("load", func);
}

HTMLElement.prototype.setClick = function (callback, bubble = false) {
    this.addEventListener("click", callback, bubble);
};
Element.prototype.setAttributes = function (attributeData) {
    for (let set in attributeData) {
        this.setAttribute(set, attributeData[set]);
    }
    return this;
};
//HTMLInputElement.prototype.v = HTMLInputElement.prototype.value;

document.newSVGElem = name => document.createElementNS('http://www.w3.org/2000/svg', name);

var turn = (x, y, angle) => ({
    x: x * Math.cos(angle) - y * Math.sin(angle),
    y: x * Math.sin(angle) + y * Math.cos(angle)
});
//wiop
Number.prototype.compress = function(middle){
    return Math.acos(8 / (4 + this * this) - 1) / Math.PI;
}
