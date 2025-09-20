Number.prototype.cut = function(digits){
    return Math.round(this * (10 ** digits)) / (10 ** digits);
};