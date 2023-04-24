//update no. 1
var currentGridStyle = 3,
    currentCanvasSize = 512;
window.addEventListener("load", function () {
    function changeGridStyle() {
        var w = document.getElementById("main").offsetWidth,
            h = document.getElementById("main").offsetHeight,
            link2 = document.getElementById("gridLayout2"),
            link3 = document.getElementById("gridLayout3"),
            gridStyle = 3;
        //縦2つのレイアウト
        //Formの望ましい最低限の横幅は500px
        if (w - h * 7 / 4 >= 500) {
            gridStyle = 2;
        } else {
            gridStyle = 3;
        }
        if (currentGridStyle !== gridStyle) {
            if (gridStyle == 2) {
                link2.setAttribute("media", "all");
                link3.setAttribute("media", "not all");
            } else {
                link2.setAttribute("media", "not all");
                link3.setAttribute("media", "all");
            }
            currentGridStyle = gridStyle;
        }
    }

    function transformCanvases() {
        var h = document.getElementById("generalTextureOutput").offsetWidth - 14;
        if (h !== currentCanvasSize) {
            document.querySelectorAll("#output>*>canvas").forEach(function (the) {
                the.setAttribute("style", "transform: scale(" + h / 512 + ");");
            });
            currentCanvasSize = currentCanvasSize
        }
    }
    window.addEventListener("resize", function(){
        changeGridStyle();
        window.setTimeout(transformCanvases, 100);
    }, true);
    changeGridStyle();
    transformCanvases();
}, true);
