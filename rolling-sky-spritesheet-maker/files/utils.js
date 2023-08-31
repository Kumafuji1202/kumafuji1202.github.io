Number.prototype.clamp = function (min, max) {
    if (min > max) throw new Error("Argument min is larger than max");
    if (this > max) return max;
    if (this < min) return min;
    return this;
}
