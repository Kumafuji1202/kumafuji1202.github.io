//ESLintの警告防止用
var document = document;
var window = window;
var Path2D = Path2D;

//本体
var canvasGeneral = getElem("generalOutput"),
    contextGeneral = canvasGeneral.getContext("2d"),
    canvasFragile = getElem("fragileOutput"),
    contextFragile = canvasFragile.getContext("2d"),
    canvasFragileActive = getElem("fragileActiveOutput"),
    contextFragileActive = canvasFragileActive.getContext("2d"),
    canvasMover = getElem("moverOutput"),
    contextMover = canvasMover.getContext("2d"),
    canvasMoverAuto = getElem("moverAutoOutput"),
    contextMoverAuto = canvasMoverAuto.getContext("2d"),
    canvasEnemy = getElem("enemyOutput"),
    contextEnemy = canvasEnemy.getContext("2d");


var sixSquares = new Path2D();
sixSquares.rect(353.5, 12.5, 145.5, 145.5); //右上
sixSquares.rect(12.5, 183.25, 145.5, 145.5); //左中
sixSquares.rect(353.5, 183.25, 145.5, 145.5); //右中
sixSquares.rect(12.5, 354, 145.5, 145.5); //左下
sixSquares.rect(183.25, 354, 145.5, 145.5); //中下
sixSquares.rect(353.5, 354, 145.5, 145.5); //右下
//x: 12.5 -> 158 | 183.25 -> 328.75 | 353.5 -> 499
//y: 12.5 -> 158 | 183.25 -> 328.75 | 354 -> 499.5
//General, Fragile, FragileActive, Mover, MoverAutoで使用する床の端のパス
var tileOutlinePath = new Path2D(); {
    let inwardWidth = 18.5;
    let firstTileLow = 12 + inwardWidth;
    let firstTileHigh = 158.5 - inwardWidth;
    let middleTileLow = 183.25 + inwardWidth;
    let middleTileHigh = 329.25 - inwardWidth;
    let rightTileLeft = 353.5 + inwardWidth;
    let rightTileRight = 500 - inwardWidth;
    let bottomTileTop = 353 + inwardWidth;
    let bottomTileBottom = 500 - inwardWidth;
    //左
    tileOutlinePath.rect(firstTileLow, firstTileHigh, -61, bottomTileTop - firstTileHigh); //(-30.5, 139.5) (30.5, 371.5)
    //左下
    tileOutlinePath.rect(-30, bottomTileBottom, middleTileLow + 30, 61); //(-30.5, 481.5) (201.5, 543)
    //右下
    tileOutlinePath.rect(middleTileHigh, bottomTileBottom, 200, 61);
    //右上内部
    tileOutlinePath.rect(rightTileLeft, firstTileHigh, -30, middleTileLow - firstTileHigh);
    //右上
    tileOutlinePath.moveTo(middleTileHigh, -30.5);
    tileOutlinePath.lineTo(middleTileHigh, firstTileLow);
    tileOutlinePath.lineTo(rightTileRight, firstTileLow);
    tileOutlinePath.lineTo(rightTileRight, bottomTileTop);
    tileOutlinePath.lineTo(542, rightTileLeft);
    tileOutlinePath.lineTo(542, -30.5);
    tileOutlinePath.closePath();
}

var sixSquares = new Path2D();
sixSquares.rect(353.5, 12.5, 145.5, 145.5);
sixSquares.rect(12.5, 183.25, 145.5, 145.5);
sixSquares.rect(353.5, 183.25, 145.5, 145.5);
sixSquares.rect(12.5, 354, 145.5, 145.5);
sixSquares.rect(183.25, 354, 145.5, 145.5);
sixSquares.rect(353.5, 354, 145.5, 145.5);

var fiveSquares = new Path2D();
fiveSquares.moveTo(328, 212.5);
fiveSquares.lineTo(328, 183.5);
fiveSquares.lineTo(237, 183.5);
fiveSquares.lineTo(237, 212.5);
fiveSquares.lineTo(268.5, 212.5);
fiveSquares.lineTo(268.5, 243.5);
fiveSquares.lineTo(328, 243.5);
fiveSquares.lineTo(328, 212.5);
fiveSquares.lineTo(268.5, 212.5);
fiveSquares.lineTo(268.5, 183.5);
fiveSquares.moveTo(298, 183.5);
fiveSquares.lineTo(298, 243.5);

const lineThickness = {
    "normal": {
        width: [2],
        alpha: [1]
    },
    "thick": {
        width: [6, 3, 1],
        alpha: [0.25, 0.25, 1]
    },
    "thin": {
        width: [1],
        alpha: [1]
    },
    "glow": {
        width: [20, 16, 12, 8, 4, 2, 1],
        alpha: [0.0625, 0.0625, 0.128, 0.1905, 0.1905, 0.25, 1]
    }
};

function multipleLines(lineWidthArray, alphaArray, context, path) {
    context.save();
    for (var i = 0; i < lineWidthArray.length; i++) {
        context.lineWidth = lineWidthArray[i];
        context.globalAlpha = alphaArray[i];
        context.stroke(path);
    }
    context.restore();
}

function rectInnerGlow(sx, sy, width, height, gradationInnerWidth, gradationWidth, outerColor, context) {
    var gradWidIn = gradationInnerWidth; //グラデーションの内側の端が縁部分からどれだけ離れているか
    var gradWidOut = gradationWidth; //グラデーションオブジェクト自体の長さ35,69
    var ex = sx + width;
    var ey = sy + height;
    var grad = [ //内から外へ
                contextGeneral.createLinearGradient(sx + gradWidIn, 0, sx + gradWidIn - gradWidOut, 0), //左
                contextGeneral.createLinearGradient(0, sy + gradWidIn, 0, sy + gradWidIn - gradWidOut), //上
                contextGeneral.createLinearGradient(ex - gradWidIn, 0, ex - gradWidIn + gradWidOut, 0), //右
                contextGeneral.createLinearGradient(0, ey - gradWidIn, 0, ey - gradWidIn + gradWidOut), //下
                contextGeneral.createRadialGradient(sx + gradWidIn, sy + gradWidIn, 0, sx + gradWidIn, sy + gradWidIn, gradWidOut), //左上
                contextGeneral.createRadialGradient(ex - gradWidIn, sy + gradWidIn, 0, ex - gradWidIn, sy + gradWidIn, gradWidOut), //右上
                contextGeneral.createRadialGradient(sx + gradWidIn, ey - gradWidIn, 0, sx + gradWidIn, ey - gradWidIn, gradWidOut), //左下
                contextGeneral.createRadialGradient(ex - gradWidIn, ey - gradWidIn, 0, ex - gradWidIn, ey - gradWidIn, gradWidOut), //右下
            ];
    for (let each of grad) {
        each.addColorStop(0, outerColor + "00");
        each.addColorStop(0.25, outerColor + "20");
        each.addColorStop(1, outerColor);
    }
    context.fillStyle = grad[0];
    context.fillRect(sx, sy + gradWidIn, gradWidIn, height - 2 * gradWidIn);
    context.fillStyle = grad[2];
    context.fillRect(ex, sy + gradWidIn, -gradWidIn, height - 2 * gradWidIn);

    context.fillStyle = grad[1];
    context.fillRect(sx + gradWidIn, sy, width - 2 * gradWidIn, gradWidIn);
    context.fillStyle = grad[3];
    context.fillRect(sx + gradWidIn, ey, width - 2 * gradWidIn, -gradWidIn);

    context.fillStyle = grad[4];
    context.fillRect(sx, sy, gradWidIn, gradWidIn);
    context.fillStyle = grad[5];
    context.fillRect(ex, sy, -gradWidIn, gradWidIn);
    context.fillStyle = grad[6];
    context.fillRect(sx, ey, gradWidIn, -gradWidIn);
    context.fillStyle = grad[7];
    context.fillRect(ex, ey, -gradWidIn, -gradWidIn);
}

function createHexagonPath(x, y, circumscribedCircleRadius) {
    var path = new Path2D();
    for (var i = 0; i < 6; i++) {
        path.lineTo(x + circumscribedCircleRadius * Math.cos(Math.PI * i / 3), y + circumscribedCircleRadius * Math.sin(Math.PI * i / 3));
    }
    path.closePath();
    return path;
}

function drawTilePatterns(context, colors, func) {
    //func(context, xpos(center), ypos(center), colors)
    for (let i = 0; i < 7; i++) {
        func(context, 85 + 171 * ([2, 0, 2, 0, 1, 2])[i], 85 + 171 * ([0, 1, 1, 2, 2, 2])[i], colors);
    }
    context.save();
    context.beginPath();
    context.moveTo(170, 170);
    context.lineTo(170, 340);
    context.lineTo(340, 340);
    context.closePath();
    context.clip();
    func(context, 255, 255, colors);
    context.restore();
}

function getColObj(inputID) {
    return Col.fromColorCode(getElem(inputID).value);
}

//Enemyのneonbox部分を描画する
function drawNeonboxPart(reduction = 0, useInvisBox = false) {
    contextEnemy.fillStyle = "#434A5B";
    contextEnemy.fillRect(448, 0, 64, 16);
    contextEnemy.fillStyle = getColObj("neonBoxSign").c;
    contextEnemy.fillRect(448, 16, 64, 16);

    let grad = contextEnemy.createLinearGradient(448, 0, 512, 0);
    grad.addColorStop(0, "#0A6DED");
    grad.addColorStop(1, "#50E2FA");
    contextEnemy.fillStyle = grad;
    contextEnemy.fillRect(448, 32, 64, 32);

    grad = contextEnemy.createLinearGradient(448, 0, 512, 0);
    grad.addColorStop(0, "#FF8002");
    grad.addColorStop(1, "#F8FB8F");
    contextEnemy.fillStyle = grad;
    contextEnemy.fillRect(448, 64, 64, 32);

    if (!useInvisBox) {
        grad = contextEnemy.createLinearGradient(448, 0, 512, 0);
        grad.addColorStop(0, "#A826F9");
        grad.addColorStop(1, "#FE7EDB");
        contextEnemy.fillStyle = grad;
        contextEnemy.fillRect(448, 96, 64, 32);
    }

    grad = contextEnemy.createLinearGradient(448, 0, 512, 0);
    grad.addColorStop(0, "#058865");
    grad.addColorStop(1, "#B0DE59");
    contextEnemy.fillStyle = grad;
    if (!useInvisBox) contextEnemy.fillRect(448, 128, 64, 32);
    else contextEnemy.fillRect(448, 96, 64, 32);
    //contextEnemy.drawImage(neonBoxImg, 448, 0);// なぜかこれを使うと画像が保存できない 念のため保存

    if (reduction == 0) {
        //デフォルトでB10下半分を埋める
        oneUpGradation = contextEnemy.createLinearGradient(448, 0, 512, 0);
        oneUpGradation.addColorStop(0, getElem("1UpSecondaryGradationLeft").value);
        oneUpGradation.addColorStop(1, getElem("1UpSecondaryGradationRight").value);
        contextEnemy.fillStyle = oneUpGradation;
        contextEnemy.fillRect(448, 160, 64, 32);
    }
}


//関数名。
function theSunsetGlowThing(left, top, mainCol, darkCol, accCol, type) {
    contextEnemy.fillStyle = mainCol;
    contextEnemy.fillRect(left, top, 64, 64);
    contextEnemy.fillStyle = darkCol;
    switch (type) {
        case 0:
            contextEnemy.beginPath();
            contextEnemy.moveTo(left + 11, top + 11);
            contextEnemy.lineTo(left + 32, top + 11);
            contextEnemy.lineTo(left + 11, top + 32);
            contextEnemy.closePath();
            contextEnemy.moveTo(left + 53, top + 11);
            contextEnemy.lineTo(left + 53, top + 32);
            contextEnemy.lineTo(left + 32, top + 11);
            contextEnemy.closePath();
            contextEnemy.moveTo(left + 11, top + 53);
            contextEnemy.lineTo(left + 11, top + 32);
            contextEnemy.lineTo(left + 32, top + 53);
            contextEnemy.closePath();
            contextEnemy.moveTo(left + 53, top + 53);
            contextEnemy.lineTo(left + 32, top + 53);
            contextEnemy.lineTo(left + 53, top + 32);
            contextEnemy.closePath();
            contextEnemy.moveTo(left + 32, top + 21);
            contextEnemy.lineTo(left + 43, top + 32);
            contextEnemy.lineTo(left + 32, top + 43);
            contextEnemy.lineTo(left + 21, top + 32);
            contextEnemy.closePath();
            contextEnemy.fill();
            break;
        case 1:
            contextEnemy.beginPath();
            contextEnemy.moveTo(left + 32, top);
            contextEnemy.lineTo(left + 48, top + 16);
            contextEnemy.lineTo(left + 16, top + 16);
            contextEnemy.closePath();
            contextEnemy.moveTo(left + 32, top + 64);
            contextEnemy.lineTo(left + 16, top + 48);
            contextEnemy.lineTo(left + 48, top + 48);
            contextEnemy.closePath();
            contextEnemy.moveTo(left, top + 32);
            contextEnemy.lineTo(left + 16, top + 16);
            contextEnemy.lineTo(left + 16, top + 48);
            contextEnemy.closePath();
            contextEnemy.moveTo(left + 64, top + 32);
            contextEnemy.lineTo(left + 48, top + 48);
            contextEnemy.lineTo(left + 48, top + 16);
            contextEnemy.closePath();
            contextEnemy.moveTo(left + 16, top + 32);
            contextEnemy.lineTo(left + 32, top + 16);
            contextEnemy.lineTo(left + 48, top + 32);
            contextEnemy.lineTo(left + 32, top + 48);
            contextEnemy.closePath();
            contextEnemy.fill();
            break;
        case 2:
            contextEnemy.fillRect(left + 11, top + 11, 42, 11);
            contextEnemy.fillRect(left + 11, top + 42, 42, 11);
            break;
        case 3:
            contextEnemy.beginPath();
            contextEnemy.moveTo(left, top);
            contextEnemy.lineTo(left + 64, top);
            contextEnemy.lineTo(left + 53, top + 11);
            contextEnemy.lineTo(left + 11, top + 11);
            contextEnemy.lineTo(left + 11, top + 53);
            contextEnemy.lineTo(left, top + 64);
            contextEnemy.closePath();
            contextEnemy.moveTo(left + 53, top + 11);
            contextEnemy.lineTo(left + 53, top + 53);
            contextEnemy.lineTo(left + 11, top + 53);
            contextEnemy.closePath();
            contextEnemy.fill();
            break;
    }
    contextEnemy.lineWidth = 3;
    contextEnemy.strokeStyle = contextEnemy.fillStyle = accCol;
    switch (type) {
        case 0:
            contextEnemy.beginPath();
            contextEnemy.moveTo(left + 32, top + 4);
            contextEnemy.lineTo(left + 60, top + 32);
            contextEnemy.lineTo(left + 32, top + 60);
            contextEnemy.lineTo(left + 4, top + 32);
            contextEnemy.closePath();
            contextEnemy.stroke();
            break;
        case 1:
            contextEnemy.beginPath();
            contextEnemy.moveTo(left, top);
            contextEnemy.lineTo(left + 11, top);
            contextEnemy.lineTo(left, top + 11);
            contextEnemy.closePath();
            contextEnemy.moveTo(left + 64, top);
            contextEnemy.lineTo(left + 64, top + 11);
            contextEnemy.lineTo(left + 53, top);
            contextEnemy.closePath();
            contextEnemy.moveTo(left + 64, top + 64);
            contextEnemy.lineTo(left + 53, top + 64);
            contextEnemy.lineTo(left + 64, top + 53);
            contextEnemy.closePath();
            contextEnemy.moveTo(left, top + 64);
            contextEnemy.lineTo(left, top + 53);
            contextEnemy.lineTo(left + 11, top + 64);
            contextEnemy.closePath();
            contextEnemy.fill();
            break;
        case 2:
            contextEnemy.beginPath();
            contextEnemy.moveTo(left + 5, top);
            contextEnemy.lineTo(left + 10, top + 5);
            contextEnemy.lineTo(left + 5, top + 10);
            contextEnemy.lineTo(left, top + 5);
            contextEnemy.closePath();
            contextEnemy.moveTo(left + 59, top);
            contextEnemy.lineTo(left + 64, top + 5);
            contextEnemy.lineTo(left + 59, top + 10);
            contextEnemy.lineTo(left + 54, top + 5);
            contextEnemy.closePath();
            contextEnemy.moveTo(left + 59, top + 54);
            contextEnemy.lineTo(left + 64, top + 59);
            contextEnemy.lineTo(left + 59, top + 64);
            contextEnemy.lineTo(left + 54, top + 59);
            contextEnemy.closePath();
            contextEnemy.moveTo(left + 5, top + 54);
            contextEnemy.lineTo(left + 10, top + 59);
            contextEnemy.lineTo(left + 5, top + 64);
            contextEnemy.lineTo(left, top + 59);
            contextEnemy.closePath();
            contextEnemy.fill();
            contextEnemy.strokeRect(left + 20, top + 26, 24, 12);
            break;
    }
}

var groundLinesPath;
var lineArrays = {};

//テクスチャを生成
function generateAllTextures() {
    generateGeneral();
    generateFragiles();
    generateMovers();
    generateEnemy();
}

function generateGeneral() {
    //////////////
    //ここからGeneral
    //設定を変数に入れる//
    //通常床
    //groundColor
    var gc = getElem("groundColor").value;
    //ground line
    var gl = getElem("groundLineColor").value;
    //普通床の側面
    var gs = getElem("groundSideColor").value;
    //普通床の模様
    var gStyle = getElem("groundEdgeStyle").value;
    //ジャンプ床の色
    var jc = getColObj("jumppadColor");
    //起動時のジャンプ床の色
    var ajc = getColObj("jumppadColorActive");
    //ジャンプ床の線
    var jl = getElem("jumppadLineColor").value;
    //起動時のジャンプ床の線
    var ajl = getElem("jumppadLineColorActive").value;
    //ジャンプ床の側面
    var js = getElem("jumppadSideColor").value;
    //起動時のジャンプ床の側面
    var ajs = getElem("jumppadSideColorActive").value;
    //ジャンプ床のスタイル
    var jumppadStyle = getElem("jumppadStyle").value;
    //ogp
    var ogp = [getElem("groundVariation1").value, getElem("groundVariation2").value, getElem("groundVariation3").value, getElem("groundVariation4").value];
    //objectGeneralPaletted
    //線スタイル
    var ls = getElem("lineStyle").value;
    //内部スタイル
    var gis = getElem("groundInnerStyle").value;


    //コンテキストの初期化//
    contextGeneral.lineCap = "round";
    contextGeneral.lineJoin = "round";
    contextGeneral.clearRect(0, 0, 512, 512);

    //線の太さを決める
    switch (ls) {
        case "double":
            lineArrays.width = [13, 11, 6, 4];
            lineArrays.alpha = [0.1875, 0.1875, 0.375, 1];
            break;
        case "thin":
            lineArrays.width = [5, 3];
            lineArrays.alpha = [0.125, 1];
            break;
        case "sharp":
            lineArrays.width = [3, 1];
            lineArrays.alpha = [0.5, 1];
            break;
        case "thick":
            lineArrays.width = [10];
            lineArrays.alpha = [1];
            break;
        default: //"normal"もここに属する
            lineArrays.width = [9, 7, 5];
            lineArrays.alpha = [0.25, 0.375, 1];
            break;
    }

    //面の描画//
    //背景//
    contextGeneral.fillStyle = gc;
    contextGeneral.fillRect(0, 0, canvasGeneral.width, canvasGeneral.height);

    //火山スタイルのグラデーション
    if (getElem("enableVolcanicGradient").checked) {
        let spbibok = contextGeneral.createRadialGradient(353.5, 158, 146, 353.5, 158, 206.5);
        spbibok.addColorStop(0, gc);
        spbibok.addColorStop(1, getElem("volcanicGradientColor").value);
        contextGeneral.fillStyle = spbibok;
        contextGeneral.fillRect(353.5, 12.5, 146, 146);
    }

    //線の描画(パス定義)
    groundLinesPath = new Path2D();
    if (gStyle != "cut" && gStyle != "cutonly") {
        groundLinesPath.addPath(sixSquares);
    } else { //角落ちの枠線。
        //ここのコードをローカル関数か何かを使って簡素化できないかな…
        //基本的に左上隅スタート、反時計回り
        if (gStyle == "cut") {
            //右上段
            groundLinesPath.moveTo(353.5, 27);
            groundLinesPath.lineTo(353.5, 144);
            groundLinesPath.lineTo(368, 158.5);
            groundLinesPath.lineTo(485, 158.5);
            groundLinesPath.lineTo(493.5, 149);
            groundLinesPath.lineTo(493.5, 18.5);
            groundLinesPath.lineTo(362, 18.5);
            groundLinesPath.closePath();
            //左中段
            groundLinesPath.moveTo(18.5, 191);
            groundLinesPath.lineTo(18.5, 319);
            groundLinesPath.lineTo(27, 328.5);
            groundLinesPath.lineTo(158.5, 328.5);
            groundLinesPath.lineTo(158.5, 182.5);
            groundLinesPath.lineTo(27, 182.5);
            groundLinesPath.closePath();
            //右中段
            groundLinesPath.moveTo(353.5, 197);
            groundLinesPath.lineTo(353.5, 328.5);
            groundLinesPath.lineTo(485, 328.5);
            groundLinesPath.lineTo(493.5, 319);
            groundLinesPath.lineTo(493.5, 191);
            groundLinesPath.lineTo(485, 182.5);
            groundLinesPath.lineTo(368, 182.5);
            groundLinesPath.closePath();
            //左下段
            groundLinesPath.moveTo(12.5, 368);
            groundLinesPath.lineTo(12.5, 485);
            groundLinesPath.lineTo(21, 493.5);
            groundLinesPath.lineTo(150, 493.5);
            groundLinesPath.lineTo(158.5, 485);
            groundLinesPath.lineTo(158.5, 353.5);
            groundLinesPath.lineTo(27, 353.5);
            groundLinesPath.closePath();
            //右下段
            groundLinesPath.moveTo(353.5, 353.5);
            groundLinesPath.lineTo(353.5, 485);
            groundLinesPath.lineTo(362, 493.5);
            groundLinesPath.lineTo(490, 493.5);
            groundLinesPath.lineTo(498.5, 485);
            groundLinesPath.lineTo(498.5, 368);
            groundLinesPath.lineTo(485, 353.5);
            groundLinesPath.closePath();
        } else {
            //右上段
            groundLinesPath.moveTo(353.5, 27);
            groundLinesPath.lineTo(353.5, 144);
            groundLinesPath.lineTo(368, 158.5);
            groundLinesPath.lineTo(485, 158.5);
            groundLinesPath.lineTo(498.5, 144);
            groundLinesPath.lineTo(498.5, 27);
            groundLinesPath.lineTo(485, 13.5);
            groundLinesPath.lineTo(368, 13.5);
            groundLinesPath.closePath();
            //左中段
            groundLinesPath.moveTo(12.5, 197);
            groundLinesPath.lineTo(12.5, 315);
            groundLinesPath.lineTo(27, 328.5);
            groundLinesPath.lineTo(158.5, 328.5);
            groundLinesPath.lineTo(158.5, 182.5);
            groundLinesPath.lineTo(27, 182.5);
            groundLinesPath.closePath();
            //右中段
            groundLinesPath.moveTo(353.5, 197);
            groundLinesPath.lineTo(353.5, 328.5);
            groundLinesPath.lineTo(485, 328.5);
            groundLinesPath.lineTo(498.5, 315);
            groundLinesPath.lineTo(498.5, 197);
            groundLinesPath.lineTo(485, 182.5);
            groundLinesPath.lineTo(368, 182.5);
            groundLinesPath.closePath();
            //左下段
            groundLinesPath.moveTo(12.5, 368);
            groundLinesPath.lineTo(12.5, 485);
            groundLinesPath.lineTo(26, 498.5);
            groundLinesPath.lineTo(145, 498.5);
            groundLinesPath.lineTo(158.5, 485);
            groundLinesPath.lineTo(158.5, 353.5);
            groundLinesPath.lineTo(27, 353.5);
            groundLinesPath.closePath();
            //右下段
            groundLinesPath.moveTo(353.5, 353.5);
            groundLinesPath.lineTo(353.5, 485);
            groundLinesPath.lineTo(366, 498.5);
            groundLinesPath.lineTo(485, 498.5);
            groundLinesPath.lineTo(498.5, 485);
            groundLinesPath.lineTo(498.5, 368);
            groundLinesPath.lineTo(485, 353.5);
            groundLinesPath.closePath();
        }
        //中下段
        groundLinesPath.moveTo(182.5, 353.5);
        groundLinesPath.lineTo(182.5, 485);
        groundLinesPath.lineTo(196, 498.5);
        groundLinesPath.lineTo(314, 498.5);
        groundLinesPath.lineTo(328.5, 485);
        groundLinesPath.lineTo(328.5, 353.5);
        groundLinesPath.closePath();

    }
    groundLinesPath.moveTo(183.25, 183.25);
    groundLinesPath.lineTo(183.25, 328.75);
    groundLinesPath.lineTo(328.75, 328.75);

    var jumppadInactiveLinesPath = new Path2D();
    jumppadInactiveLinesPath.rect(183.25, 12.5, 145.5, 145.5);
    var jumppadActiveLinesPath = new Path2D();
    jumppadActiveLinesPath.rect(12.5, 12.5, 145.5, 145.5);

    //線の描画(処理)
    if (["glowing", "sharp"].includes(ls)) { //内部に発光させる
        let innerWidth = 0;
        let outerWidth = 0;
        switch (ls) {
            case "glowing":
                innerWidth = 25;
                outerWidth = 40;
                break;
            case "sharp":
                innerWidth = 12;
                outerWidth = 27;
                break;
        }
        for (let i = 0; i < 7; i++) {
            rectInnerGlow(12.5 + 170 * ([2, 0, 1, 2, 0, 1, 2])[i], 12.5 + 170 * ([0, 1, 1, 1, 2, 2, 2])[i], 146, 146, innerWidth, outerWidth, gl, contextGeneral);
        }
    }
    contextGeneral.strokeStyle = gl;
    multipleLines(lineArrays.width, lineArrays.alpha, contextGeneral, groundLinesPath);


    //床模様の描画//
    if (gis == "plates") {
        let drawPlate = (context, xpos, ypos, colors) => {
            context.fillStyle = colors[0];
            context.fillRect(xpos - 57, ypos - 57, 114, 114);
            context.fillStyle = colors[1];
            context.strokeStyle = colors[2];
            context.lineWidth = 1;
            for (let x = -1; x < 2; x += 2) {
                for (let y = -1; y < 2; y += 2) {
                    context.beginPath();
                    context.arc(xpos + 61 * x, ypos + 61 * y, 4, 0, 2 * Math.PI);
                    context.fill();
                    context.stroke();
                }
            }
            context.lineCap = "butt";
            context.beginPath(); //146
            context.moveTo(xpos, ypos - 56.5);
            context.lineTo(xpos, ypos + 56.5);
            context.moveTo(xpos - 56.5, ypos);
            context.lineTo(xpos + 56.5, ypos);
            context.lineWidth = 7;
            context.strokeStyle = getElem("groundInnerDecoPlatePartition").value;
            context.stroke();
            context.lineWidth = 4;
            context.strokeStyle = gc;
            context.stroke();
        };
        drawTilePatterns(contextGeneral, [getElem("groundInnerDecoPlates").value, getElem("groundInnerDecoScrewsInner").value, getElem("groundInnerDecoScrewsBorder").value], drawPlate);
    }
    //立体用パレット//

    contextGeneral.fillStyle = ogp[0];
    contextGeneral.fillRect(237, 183, 31, 31);
    contextGeneral.fillStyle = ogp[1];
    contextGeneral.fillRect(268, 183, 31, 31);
    contextGeneral.fillStyle = ogp[2];
    contextGeneral.fillRect(268, 213, 31, 31);
    contextGeneral.strokeStyle = gl;
    multipleLines([7, 5, 3, 1], [0.25, 0.5, 0.75, 1], contextGeneral, fiveSquares);

    contextGeneral.globalAlpha = 1;
    contextGeneral.fillStyle = gs;
    contextGeneral.fillRect(299, 183, 31, 31);
    contextGeneral.fillStyle = ogp[3];
    contextGeneral.fillRect(299, 214, 31, 31);

    function drawCutCorner(isLeft, isTop, x, y) {
        var xSize = isLeft ? 43 : -43;
        var ySize = isTop ? 43 : -43;
        contextGeneral.beginPath();
        contextGeneral.moveTo(x, y);
        contextGeneral.lineTo(x, y + ySize);
        contextGeneral.lineTo(x + xSize, y);
        contextGeneral.closePath();
        contextGeneral.fill();
    }

    //角落ち床の描画
    if (gStyle == "cut") {
        contextGeneral.fillStyle = gl;
        //左の太い線
        contextGeneral.fillRect(4.5, 192, 16, 128);
        //下の太い線
        contextGeneral.fillRect(22, 491.5, 128, 16);
        contextGeneral.fillRect(363, 491.5, 128, 16);
        //右の太い線
        contextGeneral.fillRect(491.5, 20, 16, 299);
        //上の太い線
        contextGeneral.fillRect(363, 4.5, 128, 16);
    }

    if (["cut", "cutonly"].includes(gStyle)) {
        contextGeneral.fillStyle = gl;
        //左中段
        drawCutCorner(true, true, 0, 171);
        drawCutCorner(true, false, 0, 340);
        //左下段
        drawCutCorner(true, true, 0, 341);
        drawCutCorner(true, false, 0, 512);
        drawCutCorner(false, false, 170, 512);
        //中下段
        drawCutCorner(true, false, 171, 512);
        drawCutCorner(false, false, 340, 512);
        //右上段
        drawCutCorner(true, true, 341, 0);
        drawCutCorner(true, false, 341, 170);
        drawCutCorner(false, true, 512, 0);
        drawCutCorner(false, false, 512, 170);
        //右中段
        drawCutCorner(true, true, 341, 171);
        drawCutCorner(false, true, 512, 171);
        drawCutCorner(false, false, 512, 340);
        //右下段
        drawCutCorner(true, false, 341, 512);
        drawCutCorner(false, true, 512, 341);
        drawCutCorner(false, false, 512, 512);
    }

    //縁取り付き床の描画
    if (gStyle == "outlined") {
        contextGeneral.fillStyle = getElem("outlinedGroundOutlineColor").value;
        contextGeneral.strokeStyle = getElem("outlinedGroundEdgeColor").value;
        contextGeneral.fill(tileOutlinePath);
        multipleLines([4, 1], [0.5, 1], contextGeneral, tileOutlinePath);
        contextGeneral.save();
        contextGeneral.clip(tileOutlinePath);
        multipleLines([4, 1], [0.5, 1], contextGeneral, sixSquares);
        contextGeneral.restore();
    }

    let jpPrevCxt = getElem("jumpPadPreview").getContext("2d");
    //ジャンプ床//
    if (jumppadStyle != "import") {
        contextGeneral.fillStyle = jc.c;
        contextGeneral.fillRect(183.25, 12.5, 145.5, 145.5);
        contextGeneral.fillStyle = ajc.c;
        contextGeneral.fillRect(12.5, 12.5, 145.5, 145.5);
    } else { //インポートジャンプ床
        contextGeneral.drawImage(getElem("jumppadInactiveImg"), 183.25, 12.5, 145.5, 145.5);
        contextGeneral.drawImage(getElem("jumppadActiveImg"), 12.5, 12.5, 145.5, 145.5);

        jpPrevCxt.clearRect(0, 0, jpPrevCxt.canvas.width, jpPrevCxt.canvas.height);

        jpPrevCxt.fillStyle = gc;
        jpPrevCxt.fillRect(12, 27, 146, 146);
        jpPrevCxt.fillRect(182, 27, 146, 146);

        jpPrevCxt.textBaseline = "alphabetic";
        jpPrevCxt.fillStyle = "#000000";
        jpPrevCxt.textAlign = "center";
        jpPrevCxt.font = "18px Sen";
        jpPrevCxt.fillText(lang.callText("active"), 85, 20, 300);
        jpPrevCxt.fillText(lang.callText("inactive"), 255, 20, 300);

        let activeJPCenterX = 85;
        let activeJPCenterY = 100;
        let inactiveJPCenterX = 255;
        let inactiveJPCenterY = 100;
        //起動左上
        jpPrevCxt.save();
        jpPrevCxt.translate(activeJPCenterX, activeJPCenterY);
        jpPrevCxt.rotate(Math.PI / 2);
        jpPrevCxt.translate(-activeJPCenterX, -activeJPCenterY);
        jpPrevCxt.beginPath();
        jpPrevCxt.moveTo(activeJPCenterX - 73, activeJPCenterY - 73);
        jpPrevCxt.lineTo(activeJPCenterX - 73, activeJPCenterY + 73);
        jpPrevCxt.lineTo(activeJPCenterX + 73, activeJPCenterY + 73);
        jpPrevCxt.closePath();
        jpPrevCxt.clip();
        jpPrevCxt.drawImage(getElem("jumppadActiveImg"), activeJPCenterX - 73, activeJPCenterY - 73, 146, 146);
        jpPrevCxt.restore();

        //右下
        jpPrevCxt.save();
        jpPrevCxt.translate(activeJPCenterX, activeJPCenterY);
        jpPrevCxt.rotate(-Math.PI / 2);
        jpPrevCxt.translate(-activeJPCenterX, -activeJPCenterY);
        jpPrevCxt.beginPath();
        jpPrevCxt.moveTo(activeJPCenterX - 73, activeJPCenterY - 73);
        jpPrevCxt.lineTo(activeJPCenterX - 73, activeJPCenterY + 73);
        jpPrevCxt.lineTo(activeJPCenterX + 73, activeJPCenterY + 73);
        jpPrevCxt.closePath();
        jpPrevCxt.clip();
        jpPrevCxt.drawImage(getElem("jumppadActiveImg"), activeJPCenterX - 73, activeJPCenterY - 73, 146, 146);
        jpPrevCxt.restore();


        //未起動左上
        jpPrevCxt.save();
        jpPrevCxt.translate(inactiveJPCenterX, inactiveJPCenterY);
        jpPrevCxt.rotate(Math.PI / 2);
        jpPrevCxt.translate(-inactiveJPCenterX, -inactiveJPCenterY);
        jpPrevCxt.beginPath();
        jpPrevCxt.moveTo(inactiveJPCenterX - 73, inactiveJPCenterY - 73);
        jpPrevCxt.lineTo(inactiveJPCenterX - 73, inactiveJPCenterY + 73);
        jpPrevCxt.lineTo(inactiveJPCenterX + 73, inactiveJPCenterY + 73);
        jpPrevCxt.closePath();
        jpPrevCxt.clip();
        jpPrevCxt.drawImage(getElem("jumppadInactiveImg"), inactiveJPCenterX - 73, inactiveJPCenterY - 73, 146, 146);
        jpPrevCxt.restore();

        //右下
        jpPrevCxt.save();
        jpPrevCxt.translate(inactiveJPCenterX, inactiveJPCenterY);
        jpPrevCxt.rotate(-Math.PI / 2);
        jpPrevCxt.translate(-inactiveJPCenterX, -inactiveJPCenterY);
        jpPrevCxt.beginPath();
        jpPrevCxt.moveTo(inactiveJPCenterX - 73, inactiveJPCenterY - 73);
        jpPrevCxt.lineTo(inactiveJPCenterX - 73, inactiveJPCenterY + 73);
        jpPrevCxt.lineTo(inactiveJPCenterX + 73, inactiveJPCenterY + 73);
        jpPrevCxt.closePath();
        jpPrevCxt.clip();
        jpPrevCxt.drawImage(getElem("jumppadInactiveImg"), inactiveJPCenterX - 73, inactiveJPCenterY - 73, 146, 146);
        jpPrevCxt.restore();
    }

    //市松模様のジャンプ床の描画
    if (jumppadStyle == "checker") {
        //未起動
        contextGeneral.fillStyle = getElem("checkerJumppadInactiveEdge").value;
        contextGeneral.fillRect(232.5, 15.5, 47, 47);
        contextGeneral.fillRect(279.5, 62.5, 47, 47);
        contextGeneral.fillRect(185.5, 62.5, 47, 47);
        contextGeneral.fillRect(232.5, 109.5, 47, 47);
        //起動
        contextGeneral.fillStyle = getElem("checkerJumppadActiveEdge").value;
        contextGeneral.fillRect(62.5, 15.5, 47, 47);
        contextGeneral.fillRect(109.5, 62.5, 47, 47);
        contextGeneral.fillRect(15.5, 62.5, 47, 47);
        contextGeneral.fillRect(62.5, 109.5, 47, 47);

        if (getElem("inactiveJumppadGlow").checked) {
            const gradWidIn = 35; //グラデーションの内側の端が縁部分からどれだけ離れているか
            const gradWidOut = 60; //グラデーションオブジェクト自体の長さ
            let grad = [ //内から外へ
                contextGeneral.createLinearGradient(182 + gradWidIn, 0, 182 + gradWidIn - gradWidOut, 0), //左
                contextGeneral.createLinearGradient(0, 12 + gradWidIn, 0, 12 + gradWidIn - gradWidOut), //上
                contextGeneral.createLinearGradient(328 - gradWidIn, 0, 328 - gradWidIn + gradWidOut, 0), //右
                contextGeneral.createLinearGradient(0, 158 - gradWidIn, 0, 158 - gradWidIn + gradWidOut), //下
                contextGeneral.createRadialGradient(182 + gradWidIn, 12 + gradWidIn, 0, 182 + gradWidIn, 12 + gradWidIn, gradWidOut), //左上
                contextGeneral.createRadialGradient(328 - gradWidIn, 12 + gradWidIn, 0, 328 - gradWidIn, 12 + gradWidIn, gradWidOut), //右上
                contextGeneral.createRadialGradient(182 + gradWidIn, 158 - gradWidIn, 0, 182 + gradWidIn, 158 - gradWidIn, gradWidOut), //左下
                contextGeneral.createRadialGradient(328 - gradWidIn, 158 - gradWidIn, 0, 328 - gradWidIn, 158 - gradWidIn, gradWidOut), //右下
            ];
            for (let each of grad) {
                each.addColorStop(0, getElem("inactiveJumppadGlowColor").value + "00");
                each.addColorStop(1, getElem("inactiveJumppadGlowColor").value);
            };
            contextGeneral.fillStyle = grad[0];
            contextGeneral.fillRect(182, 12 + gradWidIn, gradWidIn, 146 - 2 * gradWidIn);
            contextGeneral.fillStyle = grad[2];
            contextGeneral.fillRect(328, 12 + gradWidIn, -gradWidIn, 146 - 2 * gradWidIn);

            contextGeneral.fillStyle = grad[1];
            contextGeneral.fillRect(182 + gradWidIn, 12, 146 - 2 * gradWidIn, gradWidIn);
            contextGeneral.fillStyle = grad[3];
            contextGeneral.fillRect(182 + gradWidIn, 158, 146 - 2 * gradWidIn, -gradWidIn);

            contextGeneral.fillStyle = grad[4];
            contextGeneral.fillRect(182, 12, gradWidIn, gradWidIn);
            contextGeneral.fillStyle = grad[5];
            contextGeneral.fillRect(328, 12, -gradWidIn, gradWidIn);
            contextGeneral.fillStyle = grad[6];
            contextGeneral.fillRect(182, 158, gradWidIn, -gradWidIn);
            contextGeneral.fillStyle = grad[7];
            contextGeneral.fillRect(328, 158, -gradWidIn, -gradWidIn);
        }
    }

    //中国風渦巻き模様のジャンプ床
    if (jumppadStyle == "china") {
        contextGeneral.fillStyle = getElem("chinaJumppadInner").value;
        contextGeneral.fillRect(220, 50, 72, 71);
        contextGeneral.strokeStyle = getElem("chinaJumppadPattern").value;
        contextGeneral.lineJoin = "miter";
        contextGeneral.lineWidth = 9;
        contextGeneral.strokeRect(220, 50, 72, 71);
        contextGeneral.lineJoin = "round";
        contextGeneral.lineWidth = 5;
        contextGeneral.beginPath();
        //左上隅
        contextGeneral.moveTo(190, 18);
        contextGeneral.lineTo(190, 40);
        contextGeneral.lineTo(216, 40);
        contextGeneral.lineTo(216, 22);
        contextGeneral.lineTo(198, 22);
        contextGeneral.lineTo(198, 31);
        contextGeneral.lineTo(208, 31);
        //上左側
        contextGeneral.moveTo(252.5, 46);
        contextGeneral.lineTo(252.5, 20);
        contextGeneral.lineTo(224.5, 20);
        contextGeneral.lineTo(224.5, 38.5);
        contextGeneral.lineTo(244.5, 38.5);
        contextGeneral.lineTo(244.5, 29.5);
        contextGeneral.lineTo(232.5, 29.5);
        //上右側
        contextGeneral.moveTo(261, 18);
        contextGeneral.lineTo(261, 40);
        contextGeneral.lineTo(287, 40);
        contextGeneral.lineTo(287, 22);
        contextGeneral.lineTo(268.5, 22);
        contextGeneral.lineTo(268.5, 31);
        contextGeneral.lineTo(279, 31);
        //左上側
        contextGeneral.moveTo(217, 79.5);
        contextGeneral.lineTo(190.5, 79.5);
        contextGeneral.lineTo(190.5, 51);
        contextGeneral.lineTo(209, 51);
        contextGeneral.lineTo(209, 70.5);
        contextGeneral.lineTo(199.5, 70.5);
        contextGeneral.lineTo(199.5, 60);
        //左下側
        contextGeneral.moveTo(189, 87.5);
        contextGeneral.lineTo(210, 87.5);
        contextGeneral.lineTo(210, 113);
        contextGeneral.lineTo(191.5, 113);
        contextGeneral.lineTo(191.5, 95);
        contextGeneral.lineTo(201, 95);
        contextGeneral.lineTo(201, 106);
        //右上側
        contextGeneral.moveTo(323, 84);
        contextGeneral.lineTo(302.5, 84);
        contextGeneral.lineTo(302.5, 58.5);
        contextGeneral.lineTo(321, 58.5);
        contextGeneral.lineTo(321, 76.5);
        contextGeneral.lineTo(311.5, 76.5);
        contextGeneral.lineTo(311.5, 65);
        //右下側
        contextGeneral.moveTo(296, 92.5);
        contextGeneral.lineTo(322, 92.5);
        contextGeneral.lineTo(322, 120.5);
        contextGeneral.lineTo(303.5, 120.5);
        contextGeneral.lineTo(303.5, 101);
        contextGeneral.lineTo(313, 101);
        contextGeneral.lineTo(313, 111);
        //左下隅
        contextGeneral.moveTo(190.5, 122.5);
        contextGeneral.lineTo(190.5, 151.5);
        contextGeneral.lineTo(217.5, 151.5);
        contextGeneral.lineTo(217.5, 132.5);
        contextGeneral.lineTo(209, 132.5);
        contextGeneral.lineTo(209, 122.5);
        contextGeneral.closePath();
        contextGeneral.moveTo(199.1, 130);
        contextGeneral.lineTo(199.1, 142);
        contextGeneral.lineTo(209, 142);
        //下左側
        contextGeneral.moveTo(252, 151);
        contextGeneral.lineTo(252, 131.5);
        contextGeneral.lineTo(226, 131.5);
        contextGeneral.lineTo(226, 149.5);
        contextGeneral.lineTo(244, 149.5);
        contextGeneral.lineTo(244, 140.5);
        contextGeneral.lineTo(234, 140.5);
        //下右側
        contextGeneral.moveTo(260, 125);
        contextGeneral.lineTo(260, 151);
        contextGeneral.lineTo(288.5, 151);
        contextGeneral.lineTo(288.5, 133);
        contextGeneral.lineTo(269, 133);
        contextGeneral.lineTo(269, 142);
        contextGeneral.lineTo(279, 142);
        //右下隅
        contextGeneral.moveTo(322.5, 153);
        contextGeneral.lineTo(322.5, 131.5);
        contextGeneral.lineTo(296.5, 131.5);
        contextGeneral.lineTo(296.5, 150);
        contextGeneral.lineTo(315, 150);
        contextGeneral.lineTo(315, 140.5);
        contextGeneral.lineTo(304.5, 140.5);
        contextGeneral.stroke();
    }

    //ダイナミックな丘スタイルのジャンプ床
    if (jumppadStyle == "dhill") {
        contextGeneral.save();
        contextGeneral.lineJoin = "miter";
        for (let smk = 0; smk < 2; smk++) {
            let sml = smk * 170;
            contextGeneral.strokeStyle = getElem((["gpJumppadActive", "gpJumppadInactive"])[smk]).value;
            contextGeneral.lineWidth = 9;
            contextGeneral.strokeRect(sml + 34, 34, 102, 102);
            contextGeneral.lineWidth = 17;
            contextGeneral.strokeRect(sml + 55, 55, 60, 60);
        }
        contextGeneral.restore();
    }

    //「放浪癖」w
    /*
    if (jumppadStyle == "wander") {
        contextGeneral.fillStyle = getElem("gspJumppad").value;
        contextGeneral.textAlign = "center";
        contextGeneral.textBaseline = "middle";
        for (let letr = 0; letr < 3; letr++) {
            contextGeneral.save();
            let ltrxpos = ([37, 40, 90])[letr];
            let ltrypos = ([132, 66, 120])[letr];
            let ltrsize = ([40, 30, 24])[letr];
            let ltrrot = Math.PI * ([-1 / 8, 1 / 16, -1 / 8])[letr];
            contextGeneral.font = ltrsize + "px sans-serif";
            contextGeneral.translate(ltrxpos, ltrypos);
            contextGeneral.rotate(ltrrot);
            contextGeneral.translate(-ltrxpos, -ltrypos);
            contextGeneral.fillText((["放", "浪", "癖"])[letr], ltrxpos, ltrypos, 100);
            contextGeneral.restore();
        }
    }

    //Cotton Candy    
    if (jumppadStyle == "citrus") {
        const outerCircleRadius = 54;
        const innerCircleRadius = 46;
        contextGeneral.strokeStyle = getElem("gspJumppad").value;
        contextGeneral.lineWidth = 3;
        contextGeneral.beginPath();
        contextGeneral.arc(255, 85, outerCircleRadius, 0, 2 * Math.PI, false);
        contextGeneral.closePath();
        contextGeneral.moveTo(255 + innerCircleRadius, 85);
        contextGeneral.arc(255, 85, innerCircleRadius, 0, 2 * Math.PI, false);
        contextGeneral.closePath();
        for (let ugul = 0; ugul < 8; ugul++) {
            contextGeneral.moveTo(255, 85);
            contextGeneral.lineTo(255 + innerCircleRadius * Math.sin(ugul * Math.PI / 4), 85 - innerCircleRadius * Math.cos(ugul * Math.PI / 4));
        }
        contextGeneral.stroke();
    }
    */
    //ただの丸()
    if (jumppadStyle == "simplecircle") {
        let circPath = new Path2D();
        circPath.arc(255, 85, 45, 0, 2 * Math.PI, false);
        contextGeneral.strokeStyle = getElem("gspJumppad").value;
        multipleLines([20, 16, 12, 7, 4], [0.25, 0.25, 0.5, 0.5, 1], contextGeneral, circPath);
    }

    //ジャンプ床の発光を描画//
    if (getElem("activeJumppadGlow").value != "none") {
        let rectInnerGlowWidth = [25, 45];
        if (getElem("activeJumppadGlow").value == "high") rectInnerGlowWidth = [50, 85];
        if (getElem("activeJumppadGlow").value == "edge") rectInnerGlowWidth = [14, 14];

        rectInnerGlow(12, 12, 146, 146, rectInnerGlowWidth[0], rectInnerGlowWidth[1], ajl, contextGeneral); //50,85
        if (jumppadStyle == "import") {
            rectInnerGlow(12, 27, 146, 146, rectInnerGlowWidth[0], rectInnerGlowWidth[1], ajl, getElem("jumpPadPreview").getContext("2d"));
        }
    }

    //角落ちジャンプ床の描画
    if (jumppadStyle == "cut") {
        contextGeneral.fillStyle = jl;
        //未起動左上
        drawCutCorner(true, true, 171, 0);
        //未起動左下
        drawCutCorner(true, false, 171, 170);
        //未起動右上
        drawCutCorner(false, true, 340, 0);
        //未起動右下
        drawCutCorner(false, false, 340, 170);
        contextGeneral.fillStyle = ajl;
        //起動左上
        drawCutCorner(true, true, 0, 0);
        //起動左下
        drawCutCorner(true, false, 0, 170);
        //未起動右上
        drawCutCorner(false, true, 170, 0);
        //未起動右下
        drawCutCorner(false, false, 170, 170);
    }

    //ジャンプ床四角模様の描画
    if (jumppadStyle == "squares") {
        contextGeneral.fillStyle = getElem("squaresJumppadActiveOuter").value;
        contextGeneral.fillRect(32.5, 32.5, 105, 105);
        contextGeneral.fillStyle = getElem("squaresJumppadActiveInner").value;
        contextGeneral.fillRect(48.5, 48.5, 73, 73);
        contextGeneral.fillStyle = getElem("squaresJumppadInactiveOuter").value;
        contextGeneral.fillRect(203.5, 32.5, 105, 105);
        contextGeneral.fillStyle = getElem("squaresJumppadInactiveInner").value;
        contextGeneral.fillRect(219.5, 48.5, 73, 73);
    }

    //洞窟
    if (jumppadStyle == "cave") {
        contextGeneral.shadowBlur = 10;
        contextGeneral.strokeStyle = getElem("gpJumppadActive").value;
        contextGeneral.shadowColor = contextGeneral.strokeStyle;
        contextGeneral.lineWidth = 12;
        contextGeneral.beginPath();
        contextGeneral.arc(85, 85, 35, 0, 2 * Math.PI);
        contextGeneral.stroke();
        contextGeneral.lineCap = "butt";
        contextGeneral.beginPath();
        contextGeneral.arc(260, 90, 35, 0, 0.5 * Math.PI);
        contextGeneral.stroke();
        contextGeneral.beginPath();
        contextGeneral.arc(250, 90, 35, 0.5 * Math.PI, Math.PI);
        contextGeneral.stroke();
        contextGeneral.beginPath();
        contextGeneral.arc(250, 80, 35, Math.PI, 1.5 * Math.PI);
        contextGeneral.stroke();
        contextGeneral.beginPath();
        contextGeneral.arc(260, 80, 35, 1.5 * Math.PI, 0);
        contextGeneral.stroke();
        contextGeneral.shadowBlur = 0;
        contextGeneral.lineCap = "round";
    }
    //Rolling World
    if (jumppadStyle == "rworld") {
        let grad = contextGeneral.createRadialGradient(85, 85, 10, 85, 85, 31);
        grad.addColorStop(0, getElem("gpJumppadActive").value);
        grad.addColorStop(1, ajc.c);
        contextGeneral.fillStyle = grad;
        contextGeneral.beginPath();
        contextGeneral.arc(85, 85, 28, 0, 2 * Math.PI, false);
        contextGeneral.closePath();
        contextGeneral.fill();

        for (let jpstatus = 0; jpstatus < 2; jpstatus++) {
            let jppos = jpstatus * 170;
            contextGeneral.strokeStyle = getElem((["gpJumppadActive", "gpJumppadInactive"])[jpstatus]).value;
            let rollingWorldJPPath = new Path2D();
            rollingWorldJPPath.moveTo(jppos + 85, 16);
            rollingWorldJPPath.lineTo(jppos + 154, 85);
            rollingWorldJPPath.lineTo(jppos + 85, 154);
            rollingWorldJPPath.lineTo(jppos + 16, 85);
            rollingWorldJPPath.closePath();
            rollingWorldJPPath.moveTo(jppos + 113, 85);
            rollingWorldJPPath.arc(jppos + 85, 85, 28, 0, 2 * Math.PI, false);
            multipleLines([5, 2], [0.5, 1], contextGeneral, rollingWorldJPPath);
        }
    }
    //ジャンプ床格子模様の描画
    if (["grid", "chemistry", "citrus"].includes(jumppadStyle)) {
        let activeJumppadGradient = contextGeneral.createRadialGradient(97.5, 97.5, 50, 97.5, 97.5, 130);
        contextGeneral.lineWidth = 3;
        activeJumppadGradient.addColorStop(0, ajl + "40");
        activeJumppadGradient.addColorStop(1, ajl);
        contextGeneral.strokeStyle = activeJumppadGradient;
        for (let definitelyNotACounterVariable = 0; definitelyNotACounterVariable < 5; definitelyNotACounterVariable++) {
            contextGeneral.beginPath();
            contextGeneral.moveTo(37 + 24 * definitelyNotACounterVariable, 12.5);
            contextGeneral.lineTo(37 + 24 * definitelyNotACounterVariable, 158.5);
            contextGeneral.stroke();
        }
        for (let whyAreYouReadingThis = 0; whyAreYouReadingThis < 5; whyAreYouReadingThis++) {
            contextGeneral.beginPath();
            contextGeneral.moveTo(12.5, 37 + 24 * whyAreYouReadingThis);
            contextGeneral.lineTo(158.5, 37 + 24 * whyAreYouReadingThis);
            contextGeneral.stroke();
        }
        if (!(getElem("activeOnlyGrid").checked || jumppadStyle == "citrus")) {
            let inactiveJumppadGradient = contextGeneral.createRadialGradient(268.5, 97.5, 50, 268.5, 97.5, 130);
            contextGeneral.lineWidth = 3;
            inactiveJumppadGradient.addColorStop(0, getElem("inactiveGridColor").value + "40");
            inactiveJumppadGradient.addColorStop(1, getElem("inactiveGridColor").value);
            contextGeneral.strokeStyle = inactiveJumppadGradient;
            for (let amogus = 0; amogus < 5; amogus++) {
                contextGeneral.beginPath();
                contextGeneral.moveTo(208 + 24 * amogus, 12.5);
                contextGeneral.lineTo(208 + 24 * amogus, 158.5);
                contextGeneral.stroke();
            }
            for (let sus = 0; sus < 5; sus++) {
                contextGeneral.beginPath();
                contextGeneral.moveTo(183.5, 37 + 24 * sus);
                contextGeneral.lineTo(329.5, 37 + 24 * sus);
                contextGeneral.stroke();
            }
        }
        if (jumppadStyle == "chemistry") {
            for (let Let = 0; Let < 2; Let++) {
                let leT = Let * 170;
                let lEt = new Path2D();
                contextGeneral.strokeStyle = ([ajl, getElem("inactiveGridColor").value])[Let];
                lEt.rect(37 + leT, 37, 96, 96);
                multipleLines([11, 7, 5, 2], [0.25, 0.5, 0.5, 1], contextGeneral, lEt);
            }
        }
    }

    //二重四角
    if (jumppadStyle == "sqlines") {
        contextGeneral.lineWidth = 3;
        contextGeneral.strokeStyle = getElem("giopJumppad").value;
        contextGeneral.strokeRect(197.5, 27.5, 118, 118);
        contextGeneral.strokeRect(208.5, 38.5, 96, 96);
    }

    //鱗
    if (jumppadStyle == "scale") {
        for (let jpStatus = 0; jpStatus < 2; jpStatus++) {
            let jpXPos = 170 * jpStatus;
            contextGeneral.save();
            contextGeneral.beginPath();
            contextGeneral.rect(12.5 + jpXPos, 12.5, 146, 146);
            contextGeneral.clip();
            contextGeneral.lineWidth = 3.5;
            contextGeneral.strokeStyle = getElem((["gpJumppadActive", "gpJumppadInactive"])[jpStatus]).value;
            contextGeneral.beginPath();
            for (let scaleYPos = 0; scaleYPos < 8; scaleYPos++) {
                for (let scaleXPos = 0; scaleXPos < 5 + scaleYPos % 2; scaleXPos++) {
                    contextGeneral.beginPath();
                    let XCenter = jpXPos + 12.5 + (1 + 2 * scaleXPos - scaleYPos % 2) * 14.6;
                    let YCenter = 12.5 + 18.25 * scaleYPos;
                    contextGeneral.moveTo(XCenter - 14.6, YCenter - 1.7);
                    contextGeneral.arc(XCenter, YCenter, 14.6, Math.PI, 0, true);
                    contextGeneral.lineTo(XCenter + 14.6, YCenter - 1.7);
                    contextGeneral.stroke();
                }
            }
            contextGeneral.restore();
        }
    }

    //六角形
    if (jumppadStyle == "hexagon") {
        contextGeneral.save();
        contextGeneral.beginPath();
        contextGeneral.rect(12.5, 12.5, 146, 146);
        contextGeneral.clip();
        contextGeneral.lineWidth = 4.5;
        contextGeneral.strokeStyle = getElem("gpJumppadActive").value;
        contextGeneral.beginPath();
        for (let hexagonYPos = 0; hexagonYPos < 5; hexagonYPos++) {
            for (let hexagonXPos = 0; hexagonXPos < 4 + (hexagonYPos + 1) % 2; hexagonXPos++) {
                contextGeneral.beginPath();
                let XCenter = 10.5 + (1 + 2 * hexagonXPos - (hexagonYPos + 1) % 2) * 18.5;
                let YCenter = 31 + 33 * hexagonYPos;
                contextGeneral.moveTo(XCenter - 18.5, YCenter + 10);
                contextGeneral.lineTo(XCenter, YCenter);
                contextGeneral.lineTo(XCenter + 18.5, YCenter + 10);
                contextGeneral.moveTo(XCenter, YCenter);
                contextGeneral.lineTo(XCenter, YCenter - 22);
                contextGeneral.stroke();
            }
        }
        contextGeneral.restore();
    }

    //謎
    if (jumppadStyle == "mystery") {
        let gpji = getColObj("gpJumppadInactive");
        let gpja = getColObj("gpJumppadActive");
        contextGeneral.lineWidth = 3;
        contextGeneral.strokeStyle = gpji.c;
        contextGeneral.stroke(new Path2D("M256,45 L296,85 L256,125 L216,85 Z"));
        contextGeneral.strokeStyle = jc.blendWith(gpji, 0.18).c;
        contextGeneral.stroke(new Path2D("M256,26 L315,85 L256,144 L197,85 Z"));

        contextGeneral.strokeStyle = gpja.c;
        contextGeneral.stroke(new Path2D("M85,13 L157,85 L85,157 L13,85 Z"));
        contextGeneral.strokeStyle = ajc.blendWith(gpja, 0.18).c;
        contextGeneral.stroke(new Path2D("M85,26 L144,85 L85,144 L26,85 Z"));

        //右上
        let mysteryJPGradation = contextGeneral.createLinearGradient(90, 57, 85, 62);
        mysteryJPGradation.addColorStop(0, ajc.c);
        mysteryJPGradation.addColorStop(1, gpja.c);
        contextGeneral.fillStyle = mysteryJPGradation;
        contextGeneral.fill(new Path2D("M85,54 L116,85 L108,85 L85,62 Z"));

        //右下
        mysteryJPGradation = contextGeneral.createLinearGradient(90, 113, 85, 108);
        mysteryJPGradation.addColorStop(0, ajc.c);
        mysteryJPGradation.addColorStop(1, gpja.c);
        contextGeneral.fillStyle = mysteryJPGradation;
        contextGeneral.fill(new Path2D("M116,85 L85,116 L85,108 L108,85 Z"));

        //左下
        mysteryJPGradation = contextGeneral.createLinearGradient(80, 113, 85, 108);
        mysteryJPGradation.addColorStop(0, ajc.c);
        mysteryJPGradation.addColorStop(1, gpja.c);
        contextGeneral.fillStyle = mysteryJPGradation;
        contextGeneral.fill(new Path2D("M54,85 L85,116 L85,108 L62,85 Z"));

        //左上
        mysteryJPGradation = contextGeneral.createLinearGradient(80, 57, 85, 62);
        mysteryJPGradation.addColorStop(0, ajc.c);
        mysteryJPGradation.addColorStop(1, gpja.c);
        contextGeneral.fillStyle = mysteryJPGradation;
        contextGeneral.fill(new Path2D("M85,54 L54,85 L62,85 L85,62 Z"));
    }

    //ジャンプ床の側面の描画
    contextGeneral.fillStyle = js;
    contextGeneral.fillRect(286, 30, 25, 25);
    contextGeneral.fillStyle = ajs;
    contextGeneral.fillRect(116, 30, 25, 25);
    contextGeneral.fillRect(116, 30, 25, 25);

    //ジャンプ床の線の描画
    contextGeneral.strokeStyle = jl;
    multipleLines([9, 7, 5], [0.25, 0.375, 1], contextGeneral, jumppadInactiveLinesPath);
    contextGeneral.strokeStyle = ajl;
    multipleLines([9, 7, 5], [0.25, 0.375, 1], contextGeneral, jumppadActiveLinesPath);
    if (jumppadStyle == "import") {}

    //彗星スタイルのキラキラ (線よりも上に描画)
    if (jumppadStyle == "sparkc") {
        contextGeneral.fillStyle = getElem("gaopJumppad").value;
        for (let sprk = 0; sprk < 4; sprk++) {
            contextGeneral.save();
            let sprkxpos = ([37, 116, 85, 35])[sprk];
            let sprkypos = ([131, 145, 115, 68])[sprk];
            let sprksize = ([62, 40, 26, 48])[sprk] / 2; //外接直径
            let sprkrot = Math.PI * ([1 / 8, 0, 1 / 4, -1 / 8])[sprk];
            contextGeneral.translate(sprkxpos, sprkypos);
            contextGeneral.rotate(sprkrot);
            contextGeneral.translate(-sprkxpos, -sprkypos);
            contextGeneral.beginPath();
            contextGeneral.moveTo(sprkxpos, sprkypos - sprksize);
            contextGeneral.arc(sprkxpos + sprksize, sprkypos - sprksize, sprksize, Math.PI, 0.5 * Math.PI, true);
            contextGeneral.arc(sprkxpos + sprksize, sprkypos + sprksize, sprksize, -0.5 * Math.PI, Math.PI, true);
            contextGeneral.arc(sprkxpos - sprksize, sprkypos + sprksize, sprksize, 0, -0.5 * Math.PI, true);
            contextGeneral.arc(sprkxpos - sprksize, sprkypos - sprksize, sprksize, 0.5 * Math.PI, 0, true);
            contextGeneral.fill();
            contextGeneral.restore();
        }
    }
}

////////////////////////////////////////////////////////////////////////////////
function generateFragiles() {
    //////////////
    //ここからFragileとFragileActive
    var fs = getElem("fragileStyle").value;

    contextFragile.lineCap = "round";
    contextFragile.lineJoin = "round";
    contextFragile.clearRect(0, 0, 512, 512);
    contextFragileActive.lineCap = "round";
    contextFragileActive.lineJoin = "round";
    contextFragileActive.clearRect(0, 0, 512, 512);
    contextFragile.fillStyle = getElem("fragileColor").value;
    contextFragile.globalAlpha = getElem("fragileAlpha").value / 0xff;
    contextFragile.fillRect(0, 0, 512, 512);
    contextFragileActive.fillStyle = getElem("fragileActiveColor").value;
    contextFragileActive.globalAlpha = getElem("fragileActiveAlpha").value / 0xff;
    contextFragileActive.fillRect(0, 0, 512, 512);
    contextFragile.globalAlpha = 1;
    contextFragileActive.globalAlpha = 1;

    //雪模様
    if (getElem("fragileInnerStyle").value == "snowflake") {
        let drawSnowflake = (context, xpos, ypos, colors) => {
            context.strokeStyle = colors[0];
            context.lineWidth = 10;
            context.beginPath();
            for (let i = 0; i < 6; i++) {
                let angle = (i / 3 - 0.25) * Math.PI;

                context.moveTo(xpos, ypos);

                let pos = turn(0, 45, angle);
                context.lineTo(xpos + pos.x, ypos + pos.y);

                pos = turn(-14, 35, angle);
                context.moveTo(xpos + pos.x, ypos + pos.y);
                pos = turn(0, 28, angle);
                context.lineTo(xpos + pos.x, ypos + pos.y);
                pos = turn(14, 35, angle);
                context.lineTo(xpos + pos.x, ypos + pos.y);
            }
            context.stroke();
        };
        drawTilePatterns(contextFragile, [getElem("fragileInnerInactiveDecoColor").value], drawSnowflake);
        drawTilePatterns(contextFragileActive, [getElem("fragileInnerActiveDecoColor").value], drawSnowflake);
    }

    //線
    contextFragile.lineWidth = 4;
    contextFragileActive.lineWidth = 4;
    contextFragile.strokeStyle = getElem("fragileLineColor").value;
    contextFragileActive.strokeStyle = getElem("fragileActiveLineColor").value;

    //線
    let fragileLineType = "default";
    let fActiveLineType = "default";
    //fs = "double";
    switch (fs) {
        case "stripes":
            fragileLineType = fActiveLineType = "boxes";
            break;
        case "boxes":
            fActiveLineType = "boxes";
        case "double":
        case "cave":
        case "bubbles":
    }

    for (let q = 0; q < 2; q++) {
        let cxt = [contextFragile, contextFragileActive][q];
        //基本線
        switch ([fragileLineType, fActiveLineType][q]) {
            case "default":
                cxt.beginPath();
                cxt.moveTo(12.5, 183.25);
                cxt.lineTo(12.5, 354);
                cxt.moveTo(12.5, 499.5);
                cxt.lineTo(183.25, 499.5);
                cxt.moveTo(328.75, 499.5);
                cxt.lineTo(499, 499.5);
                cxt.moveTo(340, 12.5);
                cxt.lineTo(499, 12.5);
                cxt.lineTo(499, 354);
                cxt.moveTo(353.5, 158);
                cxt.closePath();
                cxt.moveTo(353.5, 183.25);
                cxt.closePath();
                cxt.stroke();
                break;
            case "boxes":
                cxt.stroke(sixSquares);
                cxt.strokeRect(182.5, 182.5, 146, 146);
        }
        //追加線
        if (fs == "stripes") {
            cxt.lineWidth = 2;
            cxt.stroke(tileOutlinePath);
        }
        if (fs == "cave") {
            cxt.beginPath();
            cxt.moveTo(391, 23);
            cxt.lineTo(489, 23);
            cxt.lineTo(489, 121);
            cxt.moveTo(459, 33);
            cxt.lineTo(479, 33);
            cxt.lineTo(479, 53);
            cxt.stroke();
        }
        if (fs == "bubbles") {
            let hexagonsThick = new Path2D();
            hexagonsThick.addPath(createHexagonPath(207, 305, 12));
            hexagonsThick.addPath(createHexagonPath(475, 38, 12));
            cxt.lineWidth = 4;
            cxt.stroke(hexagonsThick);

            let hexagonsThin = new Path2D();
            hexagonsThin.addPath(createHexagonPath(238, 309, 8));
            hexagonsThin.addPath(createHexagonPath(203, 276, 8));
            hexagonsThin.addPath(createHexagonPath(444, 34, 8));
            hexagonsThin.addPath(createHexagonPath(479, 67, 8));
            cxt.lineWidth = 3;
            cxt.stroke(hexagonsThin);
        }
        if (fs == "double") {
            cxt.beginPath();
            cxt.moveTo(22, 182.5);
            cxt.lineTo(22, 363);
            cxt.lineTo(12.5, 363);
            cxt.moveTo(12.5, 490);
            cxt.lineTo(192, 490);
            cxt.lineTo(192, 499.5);
            cxt.moveTo(319, 499.5);
            cxt.lineTo(319, 490);
            cxt.lineTo(499.5, 490);
            cxt.moveTo(340, 22);
            cxt.lineTo(490, 22);
            cxt.lineTo(490, 363);
            cxt.lineTo(499.5, 363);
            cxt.moveTo(353.5, 149);
            cxt.lineTo(363, 149);
            cxt.lineTo(363, 192);
            cxt.lineTo(353.5, 192);
            cxt.stroke();
        }
        if (fs == "intshuttle") {
            cxt.beginPath();
            cxt.moveTo(391, 23);
            cxt.lineTo(489, 23);
            cxt.lineTo(489, 121);
            cxt.moveTo(459, 33);
            cxt.lineTo(479, 33);
            cxt.lineTo(479, 53);
            cxt.stroke();
        }
    }

    //化学スタイルActive時の追加
    if (fs == "bubbles") {
        let hexagonAdditionalThick = new Path2D();
        hexagonAdditionalThick.addPath(createHexagonPath(37, 205, 12));
        hexagonAdditionalThick.addPath(createHexagonPath(35, 473, 12));
        hexagonAdditionalThick.addPath(createHexagonPath(475, 473, 12));
        contextFragileActive.lineWidth = 4;
        contextFragileActive.stroke(hexagonAdditionalThick);

        let hexagonAdditionalThin = new Path2D();
        hexagonAdditionalThin.addPath(createHexagonPath(33, 234, 8));
        hexagonAdditionalThin.addPath(createHexagonPath(63, 479, 8));
        hexagonAdditionalThin.addPath(createHexagonPath(447, 479, 8));
        contextFragileActive.lineWidth = 3;
        contextFragileActive.stroke(hexagonAdditionalThin);
    }

    //端の模様
    if (fs == "stripes") {
        contextFragile.save();
        contextFragileActive.save();

        contextFragile.clip(tileOutlinePath);
        contextFragileActive.clip(tileOutlinePath);
        contextFragile.strokeStyle = getElem("fragileStripeColor").value;
        contextFragileActive.strokeStyle = getElem("fragileActiveStripeColor").value;
        contextFragile.lineWidth = 12.25;
        contextFragileActive.lineWidth = 12.25;
        contextFragile.lineCap = "square";
        contextFragile.beginPath();
        contextFragileActive.lineCap = "square";
        contextFragileActive.beginPath();
        var pos = 0;
        for (var slavaUkrajini = -1; slavaUkrajini < 21; slavaUkrajini += 1) {
            pos = 24 + (slavaUkrajini / 19) * (487 - 24);
            contextFragile.moveTo(0, 512 - pos);
            contextFragile.lineTo(pos, 512);
            contextFragileActive.moveTo(0, 512 - pos);
            contextFragileActive.lineTo(pos, 512);
        }
        for (var herojamSlava = -1; herojamSlava < 20; herojamSlava += 1) {
            pos = 24 + (herojamSlava / 19) * (487 - 24);
            contextFragile.moveTo(512 - pos, 0);
            contextFragile.lineTo(512, pos);
            contextFragileActive.moveTo(512 - pos, 0);
            contextFragileActive.lineTo(512, pos);
        }
        contextFragile.stroke();
        contextFragileActive.stroke();

        contextFragile.restore();
        contextFragileActive.restore();
    }

    //MidGroundの色
    var midGroundGradient = contextFragile.createLinearGradient(0, 0, 0, 170);
    midGroundGradient.addColorStop(0, getElem("midGroundTopColor").value);
    midGroundGradient.addColorStop(1, getElem("midGroundBottomColor").value);
    contextFragile.fillStyle = midGroundGradient;
    contextFragile.fillRect(170, 0, 170, 170);

    //Midgroundの窓
    if (getElem("midGroundWindows").checked) {
        let windowGrad = contextFragile.createLinearGradient(0, 27, 0, 141);
        windowGrad.addColorStop(0, getElem("midGroundWindowsTop").value);
        windowGrad.addColorStop(0.5, getElem("midGroundWindowsMiddle").value);
        windowGrad.addColorStop(1, getElem("midGroundWindowsBottom").value);
        contextFragile.fillStyle = windowGrad;
        let windowLayout = [
                [true, false, true],
                [true, true, true],
                [false, true, true],
                [true, true, true],
                [true, false, true],
                [true, true, true],
                [true, true, false],
                [true, false, true]
            ];
        for (let windowRow = 0; windowRow < 8; windowRow++) {
            for (let windowCol = 0; windowCol < 3; windowCol++) {
                if (windowLayout[windowRow][windowCol]) {
                    contextFragile.fillRect(238 + 14 * windowCol, 27 + 15 * windowRow, 10, 10);
                }
            }
        }
    }

    //低画質ジェム
    contextFragile.fillStyle = getElem("gemColor").value;
    contextFragile.fillRect(0, 0, 170, 170);
    contextFragile.fillStyle = getElem("gemLightColor").value;
    contextFragile.fillRect(98, 98, 60, 60)
    contextFragile.strokeStyle = getElem("gemLineColor").value;
    var gemPath = new Path2D();
    gemPath.rect(12, 12, 60, 60);
    gemPath.rect(98, 98, 60, 60);
    gemPath.moveTo(128, 12);
    gemPath.lineTo(158, 72);
    gemPath.lineTo(98, 72);
    gemPath.closePath();
    gemPath.moveTo(12, 121);
    gemPath.lineTo(12, 135);
    gemPath.lineTo(35, 158);
    gemPath.lineTo(49, 158);
    gemPath.lineTo(72, 135);
    gemPath.lineTo(72, 121);
    gemPath.lineTo(49, 98);
    gemPath.lineTo(35, 98);
    gemPath.closePath();
    multipleLines([19, 15, 11, 7, 3, 1], [0.25, 0.25, 0.25, 0.5, 0.5, 1], contextFragile, gemPath);

    //ゴールテープ
    contextFragileActive.clearRect(0, 0, 340, 170);
    contextFragileActive.globalAlpha = 0xc0 / 0xff;
    for (let flPos = 0; flPos < 12; flPos++) {
        let flUnitLeftEnd = flPos == 0 ? 0 : 38 + 264 * (flPos - 1) / 10;
        let flUnitRightEnd = flPos == 11 ? 340 : 38 + 264 * flPos / 10;
        flUnitLeftEnd = Math.floor(flUnitLeftEnd);
        flUnitRightEnd = Math.floor(flUnitRightEnd);
        contextFragileActive.fillStyle = flPos % 2 == 0 ? getElem("finishLineInactiveColorA").value : getElem("finishLineInactiveColorB").value;
        contextFragileActive.fillRect(flUnitLeftEnd, 0, flUnitRightEnd - flUnitLeftEnd, 39);
        contextFragileActive.fillStyle = flPos % 2 != 0 ? getElem("finishLineInactiveColorA").value : getElem("finishLineInactiveColorB").value;
        contextFragileActive.fillRect(flUnitLeftEnd, 39, flUnitRightEnd - flUnitLeftEnd, 39);

        contextFragileActive.fillStyle = flPos % 2 == 0 ? getElem("finishLineActiveColorA").value : getElem("finishLineActiveColorB").value;
        contextFragileActive.fillRect(flUnitLeftEnd, 93, flUnitRightEnd - flUnitLeftEnd, 39);
        contextFragileActive.fillStyle = flPos % 2 != 0 ? getElem("finishLineActiveColorA").value : getElem("finishLineActiveColorB").value;
        contextFragileActive.fillRect(flUnitLeftEnd, 132, flUnitRightEnd - flUnitLeftEnd, 39);
    }
    contextFragileActive.globalAlpha = 1;

    var flLinePath = new Path2D();
    flLinePath.rect(13, 106, 315, 52);
    flLinePath.moveTo(13, 132);
    flLinePath.lineTo(328, 132);
    for (let flLinePos = 0; flLinePos < 11; flLinePos++) {
        let flLineXPos = 38 + 264 * flLinePos / 10;
        flLinePath.moveTo(flLineXPos, 106);
        flLinePath.lineTo(flLineXPos, 158);
    }
    contextFragileActive.strokeStyle = getElem("finishLineActiveLine").value;
    multipleLines([7, 3], [0.5, 1], contextFragileActive, flLinePath);

    //補助パレット
    contextFragile.globalAlpha = contextFragileActive.globalAlpha = 0xc0 / 0xff;

    contextFragile.clearRect(238, 184, 60, 31);
    contextFragileActive.clearRect(238, 184, 60, 31);

    contextFragile.fillStyle = getElem("fragileVariation1").value;
    contextFragileActive.fillStyle = getElem("frgActiveVariation1").value;
    contextFragile.fillRect(237, 183, 31, 31);
    contextFragileActive.fillRect(237, 183, 31, 31);

    contextFragile.fillStyle = getElem("fragileVariation2").value;
    contextFragileActive.fillStyle = getElem("frgActiveVariation2").value;
    contextFragile.fillRect(268, 183, 31, 31);
    contextFragileActive.fillRect(268, 183, 31, 31);

    contextFragile.globalAlpha = contextFragile.globalAlpha = 1;
    contextFragile.fillStyle = getElem("fragileVariation3").value;
    contextFragileActive.fillStyle = getElem("frgActiveVariation3").value;
    contextFragile.fillRect(268, 213, 31, 31);
    contextFragileActive.fillRect(268, 213, 31, 31);

    contextFragile.fillStyle = getElem("fragileLineColor").value;
    contextFragileActive.fillStyle = getElem("fragileActiveLineColor").value;
    contextFragile.fillRect(299, 214, 31, 31);
    contextFragileActive.fillRect(299, 214, 31, 31);

    contextFragile.strokeStyle = contextFragile.fillStyle;
    contextFragileActive.strokeStyle = contextFragileActive.fillStyle;
    multipleLines([7, 5, 3, 1], [0.25, 0.5, 0.75, 1], contextFragile, fiveSquares);
    multipleLines([7, 5, 3, 1], [0.25, 0.5, 0.75, 1], contextFragileActive, fiveSquares);

    //側面
    contextFragile.fillStyle = getElem("fragileSideColor").value;
    contextFragile.fillRect(298.5, 183, 30, 30);
    contextFragileActive.fillStyle = getElem("fragileActiveSideColor").value;
    contextFragileActive.fillRect(298.5, 183, 30, 30);
}

////////////////////////////////////////////////////////////////////////////////
function generateMovers() {
    //////////////
    //ここからMoverとMoverAuto
    var gc = getElem("groundColor").value;
    var ls = getElem("lineStyle").value;
    contextMover.lineJoin = contextMoverAuto.lineJoin = "round";

    //面
    var moverColor = getElem("moverSameColor").checked ? gc : getElem("moverMainColor").value;
    contextMover.fillStyle = moverColor;
    contextMoverAuto.fillStyle = moverColor;
    contextMover.fillRect(0, 0, 512, 512);
    contextMoverAuto.fillRect(0, 0, 512, 512);

    //線
    var moverLine = getElem("moverLineColor").value;
    var moverAutoLine = getElem("moverAutoLineColor").value;

    var moverLinePath = new Path2D(sixSquares);
    moverLinePath.moveTo(182.5, 182.5);
    moverLinePath.lineTo(182.5, 328.5);
    moverLinePath.lineTo(328.5, 328.5);

    //同じコードを何回も書いている気がする
    function just(Do, it) {
        Do.strokeStyle = it;

        if (["glowing", "sharp"].includes(ls)) { //内部に発光させる
            let innerWidth = 0;
            let outerWidth = 0;
            switch (ls) {
                case "glowing":
                    innerWidth = 25;
                    outerWidth = 40;
                    break;
                case "sharp":
                    innerWidth = 12;
                    outerWidth = 27;
                    break;
            }
            for (let i = 0; i < 7; i++) {
                rectInnerGlow(12.5 + 170 * ([2, 0, 1, 2, 0, 1, 2])[i], 12.5 + 170 * ([0, 1, 1, 1, 2, 2, 2])[i], 146, 146, innerWidth, outerWidth, it, Do);
            }
        }
        Do.strokeStyle = it;
        multipleLines(lineArrays.width, lineArrays.alpha, Do, groundLinesPath);
    }

    just(contextMover, moverLine);
    just(contextMoverAuto, moverAutoLine);

    //縁
    let moverNoOutlines = getElem("moverNoOutlines").checked;
    if (!moverNoOutlines) {
        contextMover.lineWidth = 4;
        contextMoverAuto.lineWidth = 4;
        contextMover.fillStyle = getElem("moverOutlineColor").value;
        contextMoverAuto.fillStyle = getElem("moverAutoOutlineColor").value;
        contextMover.strokeStyle = getElem("moverOutlineBorderColor").value;
        contextMoverAuto.strokeStyle = getElem("moverAutoOutlineBorderColor").value;
        contextMover.fill(tileOutlinePath);
        contextMover.stroke(tileOutlinePath);
        contextMoverAuto.fill(tileOutlinePath);
        contextMoverAuto.stroke(tileOutlinePath);
    }

    //三角
    contextMover.fillStyle = getElem("moverOutlineColor").value;
    contextMoverAuto.fillStyle = getElem("moverAutoOutlineColor").value;
    contextMover.fillRect(170, 0, 170, 170);
    contextMoverAuto.fillRect(170, 0, 170, 170);
    contextMover.fillStyle = getElem("moverActiveArrowColor").value;
    contextMoverAuto.fillStyle = getElem("moverAutoActiveArrowColor").value;
    contextMover.fillRect(0, 0, 170, 170);
    contextMoverAuto.fillRect(0, 0, 170, 170);

    var moverInactiveArrowPath = new Path2D();
    var moverActiveArrowPath = new Path2D();
    moverActiveArrowPath.moveTo(85, 14);
    moverActiveArrowPath.lineTo(21, 140);
    moverActiveArrowPath.lineTo(35, 158);
    moverActiveArrowPath.lineTo(136, 158);
    moverActiveArrowPath.lineTo(150, 140);
    moverActiveArrowPath.closePath();
    moverInactiveArrowPath.moveTo(255, 14);
    moverInactiveArrowPath.lineTo(191, 140);
    moverInactiveArrowPath.lineTo(205, 158);
    moverInactiveArrowPath.lineTo(306, 158);
    moverInactiveArrowPath.lineTo(320, 140);
    moverInactiveArrowPath.closePath();

    contextMover.strokeStyle = getElem("moverOutlineBorderColor").value;
    multipleLines([9, 7, 5], [0.25, 0.375, 1], contextMover, moverInactiveArrowPath);
    contextMoverAuto.strokeStyle = getElem("moverAutoOutlineBorderColor").value;
    multipleLines([9, 7, 5], [0.25, 0.375, 1], contextMoverAuto, moverInactiveArrowPath);

    contextMover.strokeStyle = getElem("moverActiveArrowBorderColor").value;
    multipleLines([40, 30, 17, 9, 7, 5], [0.125, 0.125, 0.125, 0.25, 0.375, 1], contextMover, moverActiveArrowPath);
    contextMoverAuto.strokeStyle = getElem("moverAutoActiveArrowBorderColor").value;
    multipleLines([40, 30, 17, 9, 7, 5], [0.125, 0.125, 0.125, 0.25, 0.375, 1], contextMoverAuto, moverActiveArrowPath);

    //四角部分A
    contextMover.fillStyle = getElem("moverActiveArrowBorderColor").value;
    contextMoverAuto.fillStyle = getElem("moverAutoActiveArrowBorderColor").value;
    contextMover.fillRect(30, 30, 25, 25);
    contextMoverAuto.fillRect(30, 30, 25, 25);
    contextMover.fillStyle = getElem("moverOutlineBorderColor").value;
    contextMoverAuto.fillStyle = getElem("moverAutoOutlineBorderColor").value;
    contextMover.fillRect(286, 30, 25, 25);
    contextMoverAuto.fillRect(286, 30, 25, 25);

    //四角部分B
    contextMover.fillStyle = getElem("moverArrowTopColor").value;
    contextMover.fillRect(268, 183, 31, 31);
    contextMover.fillStyle = getElem("moverArrowUpperSideColor").value;
    contextMover.fillRect(268, 213, 31, 31);
    contextMover.fillStyle = getElem("moverArrowSideColor").value;
    contextMover.fillRect(299, 214, 31, 31);
    contextMoverAuto.fillStyle = getElem("moverArrowTopColor").value;
    contextMoverAuto.fillRect(268, 183, 31, 31);
    contextMover.strokeStyle = moverLine;
    contextMoverAuto.strokeStyle = moverAutoLine;
    multipleLines([7, 5, 3, 1], [0.25, 0.5, 0.75, 1], contextMover, fiveSquares);
    multipleLines([7, 5, 3, 1], [0.25, 0.5, 0.75, 1], contextMoverAuto, fiveSquares);

    contextMoverAuto.fillStyle = getElem("moverArrowUpperSideColor").value;
    contextMoverAuto.fillRect(268, 213, 31, 31);
    contextMoverAuto.fillStyle = getElem("moverArrowSideColor").value;
    contextMoverAuto.fillRect(299, 214, 31, 31);

    //側面
    contextMover.fillStyle = moverNoOutlines ? getElem("groundSideColor").value : getElem("moverSideColor").value;
    contextMover.fillRect(298.5, 183, 30, 30);
    contextMoverAuto.fillStyle = moverNoOutlines ? getElem("groundSideColor").value : getElem("moverAutoSideColor").value;
    contextMoverAuto.fillRect(298.5, 183, 30, 30);
}

////////////////////////////////////////////////////////////////////////////////
function generateEnemy() {
    //////////////
    //ここからEnemy
    contextEnemy.clearRect(0, 0, 512, 512);
    contextEnemy.lineJoin = "miter";
    contextEnemy.lineCap = "butt";
    contextEnemy.imageSmoothingEnabled = false;

    //定義

    //cr4-11とpxに使う関数定義
    var fillBorderedSquarePalette = function (x, y, inner, outer, hasGradation = false) {
        //cr#a
        contextEnemy.fillStyle = outer;
        contextEnemy.fillRect(x, y, 64, 64);
        //cr#b
        contextEnemy.fillStyle = inner;
        contextEnemy.fillRect(x + 6, y + 6, 52, 52);
        if (hasGradation) {
            /*var the = contextEnemy.createRadialGradient(x + 32, y + 32, 10, x + 32, y + 32, 96);
            the.addColorStop(0, inner);
            the.addColorStop(1, outer);
            contextEnemy.fillStyle = the;*/
            rectInnerGlow(x, y, 64, 64, 24, 50, outer, contextEnemy);
        }
    }
    //4トーンで並べられた補助パレットの1塊
    function quadToneVariaton(context, nameOrSet, x, y, outerSizeX, outerSizeY, topLeftSizeX = outerSizeX / 2, topLeftSizeY = outerSizeY / 2) {
        var nameSet = nameOrSet;
        if (typeof nameOrSet == "string") {
            nameSet = [nameOrSet + "1", nameOrSet + "2", nameOrSet + "3", nameOrSet + "4"];
        }
        if (nameSet[0]) {
            context.fillStyle = getElem(nameSet[0]).value;
            context.fillRect(x, y, topLeftSizeX, topLeftSizeY);
        }
        if (nameSet[1]) {
            context.fillStyle = getElem(nameSet[1]).value;
            context.fillRect(x + topLeftSizeX, y, outerSizeX - topLeftSizeX, topLeftSizeY);
        }
        if (nameSet[2]) {
            context.fillStyle = getElem(nameSet[2]).value;
            context.fillRect(x, y + topLeftSizeY, topLeftSizeX, outerSizeY - topLeftSizeY);
        }
        if (nameSet[3]) {
            context.fillStyle = getElem(nameSet[3]).value;
            context.fillRect(x + topLeftSizeX, y + topLeftSizeY, outerSizeX - topLeftSizeX, outerSizeY - topLeftSizeY);
        }
    }

    //描画

    //A1
    contextEnemy.fillStyle = getElem("radialLightOuter").value;
    contextEnemy.globalAlpha = 1 / 64;
    contextEnemy.fillRect(0, 0, 192, 128);
    contextEnemy.globalAlpha = 1;
    var radialLight = contextEnemy.createRadialGradient(64, 64, 0, 64, 64, 51);
    radialLight.addColorStop(0, "#FFFFFF");
    radialLight.addColorStop(0.5, getElem("radialLightInner").value);
    radialLight.addColorStop(1, getElem("radialLightOuter").value);
    contextEnemy.fillStyle = radialLight;
    contextEnemy.arc(64, 64, 51, 0, 2 * Math.PI, false);
    contextEnemy.fill();

    var laserStyle = getElem("linearLightStyle").value;
    if (laserStyle == "original") {
        //A2
        var linearLightA = contextEnemy.createLinearGradient(128, 0, 178, 0);
        //A3
        var linearLightB = contextEnemy.createLinearGradient(128, 0, 178, 0);
        if (getElem("linearLightSameColor").checked) {
            linearLightA.addColorStop(0, getElem("radialLightOuter").value);
            linearLightA.addColorStop(0.25, getElem("radialLightInner").value);
            linearLightA.addColorStop(0.5, "#FFFFFF");
            linearLightA.addColorStop(0.75, getElem("radialLightInner").value);
            linearLightA.addColorStop(1, getElem("radialLightOuter").value);
            linearLightB = linearLightA;
        } else {
            linearLightA.addColorStop(0, getElem("linearLightAOuter").value);
            linearLightA.addColorStop(0.3, getElem("linearLightAInner").value);
            linearLightA.addColorStop(0.5, "#FFFFFF");
            linearLightA.addColorStop(0.7, getElem("linearLightAInner").value);
            linearLightA.addColorStop(1, getElem("linearLightAOuter").value);

            linearLightB.addColorStop(0, getElem("linearLightBOuter").value);
            linearLightB.addColorStop(0.3, getElem("linearLightBInner").value);
            linearLightB.addColorStop(0.5, "#FFFFFF");
            linearLightB.addColorStop(0.7, getElem("linearLightBInner").value);
            linearLightB.addColorStop(1, getElem("linearLightBOuter").value);
        }
        contextEnemy.fillStyle = linearLightA;
        contextEnemy.fillRect(128, 0, 50, 64);
        contextEnemy.fillStyle = linearLightB;
        contextEnemy.fillRect(128, 64, 50, 64);

    } else {
        let g = getElem("linearLightSameColor").checked;
        contextEnemy.save();
        contextEnemy.globalAlpha = 0x88 / 0x100;
        for (let scLaserCounter = 0; scLaserCounter < 5; scLaserCounter++) {
            contextEnemy.fillStyle = getElem(g ? "radialLightOuter" : "linearLightAOuter").value;
            contextEnemy.fillRect(128 + 4 * scLaserCounter, 0, 50 - 8 * scLaserCounter, 64);
            contextEnemy.fillStyle = getElem(g ? "radialLightOuter" : "linearLightBOuter").value;
            contextEnemy.fillRect(128 + 4 * scLaserCounter, 64, 50 - 8 * scLaserCounter, 64);
        }
        contextEnemy.restore();
    }

    //B,G
    let selectedTopRightTypeOption = getElem("topRightType").selectedOptions[0];
    let selectedSubBTypeOption = getElem("subBType").selectedOptions[0];

    //ネオンボックス
    if (selectedTopRightTypeOption.hasAttribute("data-neonbox-available")) {
        if (getElem("topRightType").value != "sunshine") drawNeonboxPart();
        else drawNeonboxPart(1, true);
    }

    switch (getElem("topRightType").value) {
        case "floater": {
            //fl1
            contextEnemy.lineWidth = 1;
            contextEnemy.fillStyle = getElem("floaterMainColor").value;
            contextEnemy.fillRect(192, 0, 320, 128);
            contextEnemy.strokeStyle = getElem("floaterInactiveEdgeColor").value;
            contextEnemy.beginPath();
            contextEnemy.moveTo(269, 115.5);
            contextEnemy.lineTo(320, 12.5);
            contextEnemy.lineTo(371, 115.5);
            contextEnemy.closePath();
            contextEnemy.moveTo(397, 115.5);
            contextEnemy.lineTo(448, 12.5);
            contextEnemy.lineTo(499, 115.5);
            contextEnemy.closePath();
            contextEnemy.fill();
            contextEnemy.stroke();

            //fl2
            contextEnemy.fillStyle = getElem("floaterSpikeInnerColor").value;
            contextEnemy.beginPath();
            contextEnemy.moveTo(205, 12.5);
            contextEnemy.lineTo(307, 12.5);
            contextEnemy.lineTo(256, 115.5);
            contextEnemy.closePath();
            contextEnemy.moveTo(332, 12.5);
            contextEnemy.lineTo(434, 12.5);
            contextEnemy.lineTo(383, 115.5);
            contextEnemy.closePath();
            contextEnemy.fill();
            contextEnemy.stroke();

            //fl3,4
            for (var s = 0; s < 2; s++) {
                var k = 127 * s;
                //影
                contextEnemy.lineCap = "round";
                contextEnemy.lineWidth = 6;
                contextEnemy.strokeStyle = getElem(["floaterInactiveShadowColor", "floaterActiveShadowColor"][s]).value;
                contextEnemy.beginPath();
                contextEnemy.lineTo(k + 224, 12.5);
                contextEnemy.lineTo(k + 214, 31);
                contextEnemy.moveTo(k + 288, 12.5);
                contextEnemy.lineTo(k + 297, 31);
                contextEnemy.moveTo(k + 246, 95.5);
                contextEnemy.lineTo(k + 266, 95.5);
                contextEnemy.moveTo(k + 351, 115.5);
                contextEnemy.lineTo(k + 320, 53);
                contextEnemy.lineTo(k + 289, 115.5);
                contextEnemy.stroke();

                //ちょび三角
                contextEnemy.fillStyle = getElem(["floaterInactiveEdgeColor", "floaterActiveEdgeColor"][s]).value;
                contextEnemy.beginPath();
                contextEnemy.moveTo(k + 205, 12.5);
                contextEnemy.lineTo(k + 224, 12.5);
                contextEnemy.lineTo(k + 214, 31);
                contextEnemy.closePath();
                contextEnemy.moveTo(k + 288, 12.5);
                contextEnemy.lineTo(k + 307, 12.5);
                contextEnemy.lineTo(k + 297, 31);
                contextEnemy.closePath();
                contextEnemy.moveTo(k + 246, 95.5);
                contextEnemy.lineTo(k + 266, 95.5);
                contextEnemy.lineTo(k + 256, 115.5);
                //縁
                contextEnemy.moveTo(k + 269, 115.5);
                contextEnemy.lineTo(k + 320, 12.5);
                contextEnemy.lineTo(k + 371, 115.5);
                contextEnemy.lineTo(k + 351, 115.5);
                contextEnemy.lineTo(k + 320, 53);
                contextEnemy.lineTo(k + 289, 115.5);
                contextEnemy.closePath();
                contextEnemy.fill();
            }
            contextEnemy.lineCap = "butt";
        }
        break;
    case "crystal": {

        //cr1
        contextEnemy.fillStyle = getElem("russianTowerTop").value;
        contextEnemy.fillRect(192, 0, 64, 32);
        //cr2
        contextEnemy.fillStyle = getElem("russianTowerMiddleTop").value;
        contextEnemy.fillRect(192, 32, 64, 64);
        //cr3
        contextEnemy.fillStyle = getElem("russianTowerLowerTop").value;
        contextEnemy.fillRect(192, 96, 64, 32);

        let crHasGradation = getElem("tetriminoGradient").checked;
        let crAllSameColor = getElem("tetriminoOuterSameColor").checked;
        //cr4-11 描画
        fillBorderedSquarePalette(256, 0, getElem("crystalCollection1Inner").value, getElem(crAllSameColor ? "crystalCollection1Outer" : "crystalCollection1Outer").value, crHasGradation);
        fillBorderedSquarePalette(320, 0, getElem("crystalCollection2Inner").value, getElem(crAllSameColor ? "crystalCollection1Outer" : "crystalCollection2Outer").value, crHasGradation);
        fillBorderedSquarePalette(384, 0, getElem("crystalCollection3Inner").value, getElem(crAllSameColor ? "crystalCollection1Outer" : "crystalCollection3Outer").value, crHasGradation);
        fillBorderedSquarePalette(256, 64, getElem("crystalCollection5Inner").value, getElem(crAllSameColor ? "crystalCollection1Outer" : "crystalCollection5Outer").value, crHasGradation);
        fillBorderedSquarePalette(320, 64, getElem("crystalCollection6Inner").value, getElem(crAllSameColor ? "crystalCollection1Outer" : "crystalCollection6Outer").value, crHasGradation);
        fillBorderedSquarePalette(384, 64, getElem("crystalCollection7Inner").value, getElem(crAllSameColor ? "crystalCollection1Outer" : "crystalCollection7Outer").value, crHasGradation);
        if (getElem("crystalUseNeonbox").checked) {
            drawNeonboxPart(1);
        } else {
            fillBorderedSquarePalette(448, 0, getElem("crystalCollection4Inner").value, getElem(crAllSameColor ? "crystalCollection1Outer" : "crystalCollection4Outer").value, crHasGradation);
            fillBorderedSquarePalette(448, 64, getElem("crystalCollection8Inner").value, getElem(crAllSameColor ? "crystalCollection1Outer" : "crystalCollection8Outer").value, crHasGradation);
        }
    }
    break;
    case "geometry": {
        //構造物キューブ
        if (getElem("cubeStructureType").value == "original") {
            contextEnemy.fillStyle = getElem("originalCubeStructureTopBackground").value;
            contextEnemy.fillRect(256, 0, 64, 64);
            contextEnemy.fillStyle = getElem("originalCubeStructureFrontBackground").value;
            contextEnemy.fillRect(256, 64, 64, 64);

            //模様
            contextEnemy.lineWidth = 5;
            contextEnemy.fillStyle = getElem("originalCubeStructureTopPattern").value;
            contextEnemy.strokeStyle = contextEnemy.fillStyle;
            contextEnemy.fillRect(279.5, 24.5, 17, 39);
            contextEnemy.lineCap = "butt";
            contextEnemy.lineJoin = "miter";
            contextEnemy.beginPath();
            contextEnemy.moveTo(268.5, 64);
            contextEnemy.lineTo(268.5, 13);
            contextEnemy.lineTo(307.5, 13);
            contextEnemy.lineTo(307.5, 64);
            contextEnemy.stroke();

            contextEnemy.fillStyle = getElem("originalCubeStructureFrontPattern").value;
            contextEnemy.strokeStyle = contextEnemy.fillStyle;
            contextEnemy.lineWidth = 6;
            contextEnemy.beginPath();
            contextEnemy.moveTo(269, 64);
            contextEnemy.lineTo(288, 113);
            contextEnemy.lineTo(307, 64);
            contextEnemy.stroke();

            contextEnemy.beginPath();
            contextEnemy.moveTo(278, 64);
            contextEnemy.lineTo(288, 93);
            contextEnemy.lineTo(298, 64);
            contextEnemy.fill();
        }
        if (getElem("cubeStructureType").value == "import") {
            contextEnemy.drawImage(getElem("cubeStructureTopImg"), 256, 0, 64, 64);
            contextEnemy.drawImage(getElem("cubeStructureFrontImg"), 256, 64, 64, 64);
        }

        //枠
        if (getElem("cubeStructureFrame").checked) {
            contextEnemy.fillStyle = getElem("cubeStructureFrameColor").value;
            contextEnemy.save();
            contextEnemy.beginPath();
            contextEnemy.rect(256, 0, 64, 128);
            contextEnemy.clip();
            contextEnemy.beginPath();
            contextEnemy.rect(256, 0, 3, 128);
            contextEnemy.rect(317, 0, 3, 128);
            contextEnemy.rect(256, 0, 64, 5);
            contextEnemy.rect(256, 60, 64, 9);
            contextEnemy.rect(256, 124, 64, 4);
            contextEnemy.fill();
            contextEnemy.restore();
        }
        //回転八面体(大)内部
        contextEnemy.fillStyle = getElem("largeOctahedronTriangleSideA").value;
        contextEnemy.fillRect(320, 64, 64, 64);
        contextEnemy.fillStyle = getElem("largeOctahedronTriangleSideB").value;
        contextEnemy.fillRect(384, 64, 64, 64);
        //回転立方体
        if (getElem("spinCubeType").value == "original") {
            contextEnemy.fillStyle = getElem("originalSpinCubeColorA").value;
            contextEnemy.fillRect(256, 128, 64, 64);
            contextEnemy.fillStyle = getElem("originalSpinCubeColorB").value;
            contextEnemy.beginPath();
            contextEnemy.moveTo(256, 128);
            contextEnemy.lineTo(256, 192);
            contextEnemy.lineTo(320, 128);
            contextEnemy.lineTo(320, 192);
            contextEnemy.closePath();
            contextEnemy.fill();
        }
        if (getElem("spinCubeType").value == "import") {
            contextEnemy.save();
            contextEnemy.translate(288, 160);
            contextEnemy.rotate(-Math.PI / 4);
            contextEnemy.translate(-288, -160);
            let imgSize = 90.5;
            contextEnemy.beginPath();
            contextEnemy.moveTo(288 - imgSize / 2, 160);
            contextEnemy.lineTo(288, 160 - imgSize / 2);
            contextEnemy.lineTo(288 + imgSize / 2, 160);
            contextEnemy.lineTo(288, 160 + imgSize / 2);
            contextEnemy.closePath();
            contextEnemy.clip();
            contextEnemy.drawImage(getElem("spinCubeImg"), 288 - imgSize / 2, 160 - imgSize / 2, imgSize, imgSize);
            contextEnemy.restore();
        }
    }
    break;
    case "oneup": {
        let oneUpGradation = contextEnemy.createLinearGradient(0, 0, 0, 128);
        oneUpGradation.addColorStop(0, getElem("1UpPrimaryGradationTop").value);
        oneUpGradation.addColorStop(1, getElem("1UpPrimaryGradationBottom").value);
        contextEnemy.fillStyle = oneUpGradation;
        contextEnemy.fillRect(192, 0, 64, 128);

        contextEnemy.fillStyle = getElem("1UpBeeEyes").value;
        contextEnemy.fillRect(320, 0, 64, 64);
        contextEnemy.fillStyle = getElem("1UpBeeWingsFront").value;
        contextEnemy.fillRect(256, 128, 64, 64);
        contextEnemy.fillStyle = getElem("1UpBeeWingsEdge").value;
        contextEnemy.fillRect(320, 128, 64, 64);

        fillBorderedSquarePalette(256, 64, getElem("1UpInvaderEyeSurroundingInner").value, getElem("1UpInvaderEyeSurroundingOuter").value, getElem("1UpInvaderEyeSurroundingHasGradation").checked);
        fillBorderedSquarePalette(384, 0, getElem("1UpConsoleDoubleButtonsInner").value, getElem("1UpConsoleDoubleButtonsOuter").value, getElem("1UpConsoleDoubleButtonsHasGradation").checked);
        fillBorderedSquarePalette(384, 64, getElem("1UpConsoleSextupleButtonsInner").value, getElem("1UpConsoleSextupleButtonsOuter").value, getElem("1UpConsoleSextupleButtonsHasGradation").checked);
    }
    break;
    case "neon": {
        //3
        contextEnemy.fillStyle = getElem("neonAccentA").value;
        contextEnemy.fillRect(256, 64, 32, 32);
        //4
        contextEnemy.fillStyle = getElem("neonAccentB1").value;
        contextEnemy.fillRect(288, 64, 16, 16);
        contextEnemy.fillStyle = getElem("neonAccentB2").value;
        contextEnemy.fillRect(288, 80, 16, 16);
        contextEnemy.fillStyle = getElem("neonAccentB3").value;
        contextEnemy.fillRect(304, 64, 16, 32);
        //5
        contextEnemy.fillStyle = getElem("neonAccentC1").value;
        contextEnemy.fillRect(256, 96, 32, 32);
        contextEnemy.fillStyle = getElem("neonAccentC2").value;
        contextEnemy.fillRect(288, 96, 32, 32);
        //6
        contextEnemy.fillStyle = getElem("neonAccentD").value;
        contextEnemy.fillRect(256, 128, 64, 64);
        //9
        contextEnemy.fillStyle = getElem("neonRobotGear1").value;
        contextEnemy.fillRect(320, 64, 32, 32);
        contextEnemy.fillStyle = getElem("neonRobotGear2").value;
        contextEnemy.fillRect(320, 96, 32, 32);
        contextEnemy.fillStyle = getElem("neonRobotGear3").value;
        contextEnemy.fillRect(352, 64, 32, 32);
        contextEnemy.fillStyle = getElem("neonRobotGear4").value;
        contextEnemy.fillRect(352, 96, 32, 16);
        contextEnemy.fillStyle = getElem("neonRobotGear5").value;
        contextEnemy.fillRect(352, 112, 32, 16);
        //13
        contextEnemy.fillStyle = getElem("neonRobotCordFront").value;
        contextEnemy.fillRect(384, 64, 32, 32);
        contextEnemy.fillStyle = getElem("neonRobotCordSide").value;
        contextEnemy.fillRect(384, 96, 32, 32);
    }
    break;
    case "relics": {
        contextEnemy.fillStyle = getElem("relicsOwlFaceY").value;
        contextEnemy.fillRect(256, 0, 64, 64);
        contextEnemy.fillStyle = getElem("relicsOwlWings").value;
        contextEnemy.fillRect(256, 64, 64, 64);
        contextEnemy.fillStyle = getElem("relicsOwlEyeOuter").value;
        contextEnemy.fillRect(320, 0, 32, 32);
        contextEnemy.fillStyle = getElem("relicsOwlBody").value;
        contextEnemy.fillRect(352, 0, 32, 32);
        contextEnemy.fillStyle = getElem("relicsOwlLegs").value;
        contextEnemy.fillRect(320, 32, 32, 32);
        contextEnemy.fillStyle = getElem("relicsOwlAbdomen").value;
        contextEnemy.fillRect(320, 64, 64, 64);

        quadToneVariaton(contextEnemy, "relicsCrystal", 384, 0, 64, 64, 32, 32);

        contextEnemy.fillStyle = getElem("relicsTreeLeaves1").value;
        contextEnemy.fillRect(384, 64, 32, 32);
        contextEnemy.fillStyle = getElem("relicsTreeLeaves2").value;
        contextEnemy.fillRect(416, 64, 32, 32);
        contextEnemy.fillStyle = getElem("relicsTreeLeaves3").value;
        contextEnemy.fillRect(384, 96, 32, 32);
        contextEnemy.fillStyle = getElem("relicsTreeLeaves4").value;
        contextEnemy.fillRect(416, 96, 32, 16);
        contextEnemy.fillStyle = getElem("relicsTreeLeaves5").value;
        contextEnemy.fillRect(416, 112, 32, 16);
        let relicsTreeGradation = contextEnemy.createLinearGradient(0, 128, 0, 192);
        relicsTreeGradation.addColorStop(0, getElem("relicsTreeGradationTop").value);
        relicsTreeGradation.addColorStop(1, getElem("relicsTreeGradationBottom").value);
        contextEnemy.fillStyle = relicsTreeGradation;
        contextEnemy.fillRect(384, 128, 64, 64);

        contextEnemy.fillStyle = getElem("relicsJumpDomeInner").value;
        contextEnemy.fillRect(256, 128, 64, 64);
        contextEnemy.fillStyle = getElem("relicsJumpDomeRing").value;
        contextEnemy.fillRect(320, 128, 64, 32);
        contextEnemy.fillStyle = getElem("relicsJumpDomeBottom").value;
        contextEnemy.fillRect(320, 160, 64, 32);
    }
    break;
    case "hbd": {
        quadToneVariaton(contextEnemy, "HBDPaletteA", 256, 64, 64, 64, 32, 32);
        quadToneVariaton(contextEnemy, "HBDPaletteB", 256, 128, 64, 64, 32, 32);

        let HBDGradation = contextEnemy.createLinearGradient(0, 64, 0, 128);
        HBDGradation.addColorStop(0, getElem("HBDGradationTop").value);
        HBDGradation.addColorStop(1, getElem("HBDGradationBottom").value);
        contextEnemy.fillStyle = HBDGradation;
        contextEnemy.fillRect(320, 64, 64, 64);

        contextEnemy.fillStyle = getElem("HBDRainbow1").value;
        contextEnemy.fillRect(384, 64, 21, 32);
        contextEnemy.fillStyle = getElem("HBDRainbow2").value;
        contextEnemy.fillRect(384, 96, 21, 32);
        contextEnemy.fillStyle = getElem("HBDRainbow3").value;
        contextEnemy.fillRect(405, 64, 22, 32);
        contextEnemy.fillStyle = getElem("HBDRainbow4").value;
        contextEnemy.fillRect(405, 96, 22, 32);
        contextEnemy.fillStyle = getElem("HBDRainbow5").value;
        contextEnemy.fillRect(427, 64, 21, 32);
        contextEnemy.fillStyle = getElem("HBDRainbow6").value;
        contextEnemy.fillRect(427, 96, 21, 32);
    }
    break;
    case "t4a": {
        contextEnemy.fillStyle = "#403E43";
        contextEnemy.fillRect(256, 0, 192, 192);
        contextEnemy.fillRect(256, 384, 256, 128);
        let t4aBalloonGradation = contextEnemy.createLinearGradient(0, 0, 0, 128);
        t4aBalloonGradation.addColorStop(0, getElem("t4aBalloonGradationTop").value);
        t4aBalloonGradation.addColorStop(1, getElem("t4aBalloonGradationBottom").value);
        contextEnemy.fillStyle = t4aBalloonGradation;
        contextEnemy.fillRect(192, 0, 64, 128);
        contextEnemy.fillStyle = getElem("t4aAccent1").value;
        contextEnemy.fillRect(256, 0, 32, 17);
        contextEnemy.fillStyle = getElem("t4aAccent2").value;
        contextEnemy.fillRect(256, 17, 32, 23);
        contextEnemy.fillStyle = getElem("t4aAccent3").value;
        contextEnemy.fillRect(288, 0, 32, 40);
        contextEnemy.fillStyle = getElem("t4aAccent4").value;
        contextEnemy.fillRect(256, 40, 32, 40);
        contextEnemy.fillStyle = getElem("t4aAccent5").value;
        contextEnemy.fillRect(288, 40, 32, 40);
        contextEnemy.fillStyle = getElem("t4aBase1").value;
        contextEnemy.fillRect(256, 128, 80, 32);
        contextEnemy.fillStyle = getElem("t4aBase2").value;
        contextEnemy.fillRect(256, 160, 80, 32);
        for (let i = 0; i < 3; i++) {
            let groupXOrigin = 336 + (i == 1) * 56;
            let groupYOrigin = 80 + (i == 2) * 56;
            for (let j = 0; j < 4; j++) {
                let cellXPos = groupXOrigin + j * 14;
                for (let k = 0; k < 4; k++) {
                    let cellYPos = groupYOrigin + k * 14;
                    contextEnemy.fillStyle = getElem("t4aCheckedColor" + "AB" [(j + k) % 2] + (i + 1)).value;
                    contextEnemy.fillRect(cellXPos, cellYPos, 14, 14);
                }
            }
        }
        let reuseMainPaletteColor4Sub = getElem("linkQuadPalettes").checked;
        let reuseMainPaletteColor4Stripes = getElem("reuseMainPaletteColor4Stripes").checked;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
                contextEnemy.fillStyle = getElem("t4aMainQuadPalette" + "ABCD" [j] + (i + 1)).value;
                contextEnemy.fillRect(257.5 + 20 * j, 431.5 + 20 * i, 19, 19);
            }
        }
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
                contextEnemy.fillStyle = getElem((reuseMainPaletteColor4Sub ? "t4aMainQuadPalette" : "t4aSubQuadPalette") + "ABCD" [j] + (i + 1)).value;
                contextEnemy.fillRect(335.5 + 20 * j, 431.5 + 20 * i, 19, 19);
            }
        }
        for (let i = 0; i < 4; i++) {
            contextEnemy.fillStyle = getElem(reuseMainPaletteColor4Stripes ? ("t4aMainQuadPalette" + "ABCD" [i] + "2") : ("t4aCakeStripe" + (i + 1))).value;
            contextEnemy.fillRect(257.5, 399.5 + 7 * i, 255, 7);
        }
    }
    break;
    case "sunshine": {
        let sunshineMainColors = [getElem("sunshineMain1").value, getElem("sunshineMain2").value, getElem("sunshineMain3").value];
        let sunshineDarkColors = [getElem("sunshineDark1").value, getElem("sunshineDark2").value, getElem("sunshineDark3").value];
        let sunshineAccentColors = [getElem("sunshineAccent1").value, getElem("sunshineAccent2").value, getElem("sunshineAccent3").value];
        theSunsetGlowThing(448, 128, sunshineMainColors[0], sunshineDarkColors[0], sunshineAccentColors[0], 3);
        theSunsetGlowThing(384, 0, sunshineMainColors[2], sunshineDarkColors[2], sunshineAccentColors[2], 0);
        theSunsetGlowThing(384, 64, sunshineMainColors[2], sunshineDarkColors[2], sunshineAccentColors[2], 1);
        theSunsetGlowThing(384, 128, sunshineMainColors[2], sunshineDarkColors[2], sunshineAccentColors[2], 2);
        theSunsetGlowThing(258, 0, sunshineMainColors[0], sunshineDarkColors[0], sunshineAccentColors[0], 0);
        theSunsetGlowThing(258, 64, sunshineMainColors[0], sunshineDarkColors[0], sunshineAccentColors[0], 1);
        theSunsetGlowThing(258, 128, sunshineMainColors[0], sunshineDarkColors[0], sunshineAccentColors[0], 2);
        theSunsetGlowThing(321, 0, sunshineMainColors[1], sunshineDarkColors[1], sunshineAccentColors[1], 0);
        theSunsetGlowThing(321, 64, sunshineMainColors[1], sunshineDarkColors[1], sunshineAccentColors[1], 1);
        theSunsetGlowThing(321, 128, sunshineMainColors[1], sunshineDarkColors[1], sunshineAccentColors[1], 2);
        theSunsetGlowThing(194, 0, sunshineMainColors[1], sunshineDarkColors[1], sunshineAccentColors[1], 3);
        theSunsetGlowThing(194, 64, sunshineMainColors[2], sunshineDarkColors[2], sunshineAccentColors[2], 3);
    }
    break;
    case "kepler": {
        quadToneVariaton(contextEnemy, "keplerPaletteB4TR-", 288, 64, 32, 32);
        quadToneVariaton(contextEnemy, ["keplerPaletteB4-1", null, "keplerPaletteB4-2", "keplerPaletteB4-3"], 256, 64, 64, 64, 31, 32);
        quadToneVariaton(contextEnemy, "keplerPaletteB4TR-", 288, 64, 32, 32);
        quadToneVariaton(contextEnemy, ["keplerPaletteB6BL-1", "keplerPaletteB6BL-3", "keplerPaletteB6BL-2", "keplerPaletteB6BL-4"], 320, 96, 32, 16);
        quadToneVariaton(contextEnemy, [null, null, "keplerPaletteB6BL-5", "keplerPaletteB6BL-6"], 320, 96, 32, 32);
        contextEnemy.fillStyle = getColObj("keplerPaletteB11-1").c;
        contextEnemy.fillRect(256, 128, 64, 32);
        contextEnemy.fillStyle = getColObj("keplerPaletteB11-2").c;
        contextEnemy.fillRect(256, 160, 64, 32);
        let keplerGradation = contextEnemy.createLinearGradient(0, 128, 0, 192);
        keplerGradation.addColorStop(0, getColObj("keplerGradationTop").c);
        keplerGradation.addColorStop(1, getColObj("keplerGradationBottom").c);
        contextEnemy.fillStyle = keplerGradation;
        contextEnemy.fillRect(384, 128, 32, 64);
    }
    break;
    case "spfestv2": {
        contextEnemy.fillStyle = getColObj("jadeRabbit20").c;
        contextEnemy.fillRect(319, 62, 193, 66);
        //最初の2つは左上角の座標
        //最後の二つは右下の座標-左上の座標+1
        //2番目は右下部分左上の座標-左上角の座標
        quadToneVariaton(contextEnemy, "jadeRabbit2-", 221, 0, 30, 30, 15, 14);
        quadToneVariaton(contextEnemy, "jadeRabbit12-", 192, 63, 29, 33, 14, 18);
        quadToneVariaton(contextEnemy, "jadeRabbit13-", 221, 63, 30, 33, 16, 18);
        quadToneVariaton(contextEnemy, "jadeRabbit14-", 192, 96, 29, 32, 15, 17);
        quadToneVariaton(contextEnemy, "jadeRabbit19-", 284, 96, 35, 32, 17, 16);
        quadToneVariaton(contextEnemy, "jadeRabbit21-", 362, 62, 29, 32, 15, 17);
        quadToneVariaton(contextEnemy, "jadeRabbit22-", 319, 96, 32, 32, 14, 16);
        quadToneVariaton(contextEnemy, "jadeRabbit23-", 351, 96, 30, 32, 15, 16);
        quadToneVariaton(contextEnemy, "jadeRabbit24-", 390, 62, 30, 32, 17, 16);
        quadToneVariaton(contextEnemy, "jadeRabbit25-", 420, 62, 29, 33, 14, 18);
        quadToneVariaton(contextEnemy, "jadeRabbit26-", 381, 96, 33, 32, 15, 16);
        quadToneVariaton(contextEnemy, "jadeRabbit27-", 414, 96, 33, 32, 15, 16);
        quadToneVariaton(contextEnemy, "jadeRabbit28-", 449, 62, 30, 33, 15, 18);
        quadToneVariaton(contextEnemy, "jadeRabbit29-", 479, 62, 33, 33, 15, 18);
        quadToneVariaton(contextEnemy, "jadeRabbit30-", 447, 96, 35, 32, 17, 16);
        quadToneVariaton(contextEnemy, "jadeRabbit31-", 482, 96, 30, 32, 17, 16);
    }
    case "newgeneric": {
        for (let region in newGenericInfo) {
            let regionData = newGenericInfo[region];
            quadToneVariaton(contextEnemy, "newGeneric_region_" + region + "_tone_", regionData.left, regionData.top, 32, 32, 16, 16);
        }
    }
    break;
    default:
    }

    function drawTiltedStripes(backColor, frontColor, startX, endX, topY, bottomY, thickness, startBottomXPos, Xinterval, noRestore) {
        var antiInfiniteLoop = 0;
        var xpos = startBottomXPos;
        var height = bottomY - topY;
        contextEnemy.save();
        contextEnemy.beginPath();
        contextEnemy.rect(startX, topY, endX, height);
        contextEnemy.clip();
        contextEnemy.fillStyle = backColor;
        contextEnemy.fill();
        contextEnemy.lineCap = "square";

        contextEnemy.strokeStyle = frontColor;
        contextEnemy.lineWidth = thickness;

        contextEnemy.beginPath();
        while (xpos - (height + 1.414 * thickness) < endX) {
            if (antiInfiniteLoop++ > 1000) {
                console.log("1000 loops detected. exited while loop statement.");
                break;
            }
            contextEnemy.moveTo(xpos, bottomY);
            contextEnemy.lineTo(xpos - height, topY);
            xpos += Xinterval;
        }
        contextEnemy.stroke();
        if (!noRestore) contextEnemy.restore();
    }

    //B下部
    if (selectedTopRightTypeOption.hasAttribute("data-subB-available")) {
        if (getElem("subBType").value == "plain") {
            contextEnemy.fillStyle = getElem("noPatternSubBColor").value;
            contextEnemy.fillRect(256, 128, 256, 64);
        }
        if (getElem("subBType").value == "classicalroller") {
            let thin = getElem("doubleRollerLines").checked;
            drawTiltedStripes(getElem("classicalRollerLineColor").value, getElem("classicalRollerMainColor").value, 256, 512, 128, 192, thin ? 13 : 25, thin ? 264 : 252, thin ? 25.75 : 46.25);
        }
        if (getElem("subBType").value == "desert") {
            for (let clr = 0; clr < 4; clr++) {
                contextEnemy.fillStyle = getElem("palmTreeTrunk" + (clr + 1)).value;
                contextEnemy.fillRect(256 + 64 * clr, 128, 64, 64);
            }
        }
        if (getElem("subBType").value == "halloween") {
            let subBHwGradient = contextEnemy.createLinearGradient(256, 0, 320, 0);
            subBHwGradient.addColorStop(0, getElem("halloweenMultiPurposeGradationLeft").value);
            subBHwGradient.addColorStop(1, getElem("halloweenMultiPurposeGradationRight").value);
            contextEnemy.fillStyle = subBHwGradient;
            contextEnemy.fillRect(256, 128, 64, 64);

            subBHwGradient = contextEnemy.createLinearGradient(320, 0, 384, 0);
            subBHwGradient.addColorStop(0, getElem("halloweenGateSkullGradationLeft").value);
            subBHwGradient.addColorStop(1, getElem("halloweenGateSkullGradationRight").value);
            contextEnemy.fillStyle = subBHwGradient;
            contextEnemy.fillRect(320, 128, 64, 64);

            subBHwGradient = contextEnemy.createLinearGradient(384, 0, 512, 0);
            subBHwGradient.addColorStop(0, getElem("halloweenPumpkinGradationLeft").value);
            subBHwGradient.addColorStop(1, getElem("halloweenPumpkinGradationRight").value);
            contextEnemy.fillStyle = subBHwGradient;
            contextEnemy.fillRect(384, 128, 128, 64);

            subBHwGradient = contextEnemy.createLinearGradient(396, 0, 499, 0);
            subBHwGradient.addColorStop(0, getElem("halloweenPumpkinGradationLineLeft").value);
            subBHwGradient.addColorStop(1, getElem("halloweenPumpkinGradationLineRight").value);
            contextEnemy.strokeStyle = subBHwGradient;
            let subBHwPumpkinLinePath = new Path2D();
            subBHwPumpkinLinePath.rect(396, 140, 104, 40);
            multipleLines([7, 5, 3, 1], [0.25, 0.25, 0.5, 1], contextEnemy, subBHwPumpkinLinePath);
        }
        if (getElem("subBType").value == "chris") {
            //1-12
            quadToneVariaton(contextEnemy, "chrisB11-", 256, 128, 64, 64, 32, 32);
            quadToneVariaton(contextEnemy, "chrisB12-", 320, 128, 64, 64, 32, 32);
            quadToneVariaton(contextEnemy, "chrisB13-", 384, 128, 64, 64, 32, 32);
            //13
            let subBChrisGradient = contextEnemy.createLinearGradient(448, 0, 512, 0);
            subBChrisGradient.addColorStop(0, getElem("chrisUpperGradationLeft").value);
            subBChrisGradient.addColorStop(1, getElem("chrisUpperGradationRight").value);
            contextEnemy.fillStyle = subBChrisGradient;
            contextEnemy.fillRect(448, 128, 64, 32);
            //14
            subBChrisGradient = contextEnemy.createLinearGradient(448, 0, 512, 0);
            subBChrisGradient.addColorStop(0, getElem("chrisLowerGradationLeft").value);
            subBChrisGradient.addColorStop(1, getElem("chrisLowerGradationRight").value);
            contextEnemy.fillStyle = subBChrisGradient;
            contextEnemy.fillRect(448, 160, 64, 32);

            let chrisAThickness = lineThickness["normal"];
            contextEnemy.fillStyle = getElem("ChrisPaletteATone1Face").value;
            contextEnemy.fillRect(256, 384, 64, 64);
            contextEnemy.fillStyle = getElem("ChrisPaletteATone2Face").value;
            contextEnemy.fillRect(320, 384, 64, 64);
            contextEnemy.fillStyle = getElem("ChrisPaletteATone3Face").value;
            contextEnemy.fillRect(384, 384, 128, 64);
            contextEnemy.fillStyle = getElem("ChrisPaletteBTone1Face").value;
            contextEnemy.fillRect(256, 448, 64, 64);
            contextEnemy.fillStyle = getElem("ChrisPaletteBTone2Face").value;
            contextEnemy.fillRect(320, 448, 64, 64);
            contextEnemy.fillStyle = getElem("ChrisPaletteBTone3Face").value;
            contextEnemy.fillRect(384, 448, 128, 64);

            let chrisA1Path = new Path2D();
            chrisA1Path.rect(268 + 0.5, 396 + 0.5, 40, 40);
            contextEnemy.strokeStyle = getElem("ChrisPaletteATone1Line").value;
            multipleLines(chrisAThickness.width, chrisAThickness.alpha, contextEnemy, chrisA1Path);
            let chrisA2Path = new Path2D();
            chrisA2Path.rect(332 + 0.5, 396 + 0.5, 40, 40);
            contextEnemy.strokeStyle = getElem("ChrisPaletteATone2Line").value;
            multipleLines(chrisAThickness.width, chrisAThickness.alpha, contextEnemy, chrisA2Path);
            let chrisA3Path = new Path2D();
            chrisA3Path.rect(396 + 0.5, 396 + 0.5, 104, 40);
            contextEnemy.strokeStyle = getElem("ChrisPaletteATone3Line").value;
            multipleLines(chrisAThickness.width, chrisAThickness.alpha, contextEnemy, chrisA3Path);
            let chrisB1Path = new Path2D();
            chrisB1Path.rect(268 + 0.5, 460 + 0.5, 40, 40);
            contextEnemy.strokeStyle = getElem("ChrisPaletteBTone1Line").value;
            multipleLines(chrisAThickness.width, chrisAThickness.alpha, contextEnemy, chrisB1Path);
            let chrisB2Path = new Path2D();
            chrisB2Path.rect(332 + 0.5, 460 + 0.5, 40, 40);
            contextEnemy.strokeStyle = getElem("ChrisPaletteBTone2Line").value;
            multipleLines(chrisAThickness.width, chrisAThickness.alpha, contextEnemy, chrisB2Path);
            let chrisB3Path = new Path2D();
            chrisB3Path.rect(396 + 0.5, 460 + 0.5, 104, 40);
            contextEnemy.strokeStyle = getElem("ChrisPaletteBTone3Line").value;
            multipleLines(chrisAThickness.width, chrisAThickness.alpha, contextEnemy, chrisB3Path);
        }
    }

    //翻転床
    if (selectedTopRightTypeOption.hasAttribute("data-flipper-available")) {
        //テスト用↓
        //flipperType = "smiley";
        //表とУра
        for (let me = 0; me < 2; me++) {
            let nn = me * 64 + 321;
            let face = ["Reverse", "Obverse"][me];
            let flipperType = getElem(`flipTile${face}Type`).value;
            //インポート画像
            if (flipperType == "import") {
                contextEnemy.save();
                contextEnemy.translate(nn + 32, 32);
                contextEnemy.rotate(Math.PI);
                contextEnemy.translate(-nn - 32, -32);
                contextEnemy.drawImage(getElem(`flipper${face}Img`), nn, 0, 64, 64);
                contextEnemy.restore();
                continue;
            }
            //備え付けの模様
            let flipperTypeData = flipTileData[flipperType];
            if (!flipperTypeData) continue;
            contextEnemy.save();
            contextEnemy.beginPath();
            contextEnemy.rect(nn, 0, 64, 64);
            contextEnemy.clip();
            let colors = [];
            for (let kf = 0; kf < flipperTypeData.pattern.colorCount; kf++) {
                colors.push(getElem("flipperColor" + (kf + 1) + face).value);
            }
            //func(ctx, pos, cols, isObverse)
            flipperTypeData.pattern.drawer(contextEnemy, nn, colors, me == 1);
            contextEnemy.restore();
        }
        //側面
        if (!selectedTopRightTypeOption.hasAttribute("data-no-flipper-side")) {
            contextEnemy.fillStyle = getElem("flipperSideColor").value;
            contextEnemy.fillRect(320, 128, 64, 64);
        }
    }

    //半ジャンプ
    if (selectedTopRightTypeOption.hasAttribute("data-minijump-available")) {
        contextEnemy.fillStyle = getElem("smallJumpActiveTop").value;
        contextEnemy.fillRect(256, 0, 58, 30);
        contextEnemy.fillStyle = getElem("smallJumpInactiveTop").value;
        contextEnemy.fillRect(256, 30, 58, 34);
        contextEnemy.fillStyle = getElem("smallJumpActiveSide").value;
        contextEnemy.fillRect(314, 0, 7, 30);
        if (getElem("topRightType").value != "oneup" || new FormData(getElem("form-content")).get("1UpPrimaryGradationConflictSolution") == "minijump") {

            contextEnemy.fillRect(212, 58, 4, 2);
        }
        contextEnemy.fillStyle = getElem("smallJumpInactiveSide").value;
        contextEnemy.fillRect(314, 30, 7, 34);
        contextEnemy.fillRect(192, 120, 8, 8);
        let hjStyle = "simple"; //getElem("smallJumpType").value;
        if (hjStyle != "simple") {
            let isActive = true;
            let hjx = x => 58 * x;
            let hjy = y => 32 * y;
            let hjxpos = x => 256 + hjx(x);
            let hjypos = y => 32 * isActive + hjy(y);
            for (let k = 0; k < 2; k++) {
                if (hjStyle == "square") {
                    contextEnemy.fillStyle = getElem("smallJumpInactiveSide").value;
                    contextEnemy.fillRect(hjxpos(0.1875), hjypos(0.1875), hjx(0.625), hjy(0.625));
                }
                isActive = false;
            }
        }
    }



    //C
    //各種寸法の設定
    var mainStripeThickness = 25;
    var mainStripeInterval = 46.22;
    var mainStripeStart = 40;
    var drawMiddleLine = getElem("addCenterLine").checked;
    switch (getElem("mainStripeThickness").value) {
        case "normal":
            mainStripeThickness = 13;
            mainStripeInterval = 25.75;
            mainStripeStart = 33;
            break;
        case "thin":
            mainStripeThickness = 10;
            mainStripeInterval = 25.75;
            mainStripeStart = 33;
            break;
        case "custom":
            mainStripeThickness = Number(getElem("mainStripeCustomThickness").value);
            mainStripeInterval = Number(getElem("mainStripeCustomInterval").value);
            mainStripeStart = Number(getElem("mainStripeCustomStart").value);
    }
    mainStripeStart = mainStripeStart % mainStripeInterval - mainStripeInterval;

    var CMiddleLinePath = new Path2D();
    CMiddleLinePath.moveTo(0, 160);
    CMiddleLinePath.lineTo(256, 160);
    //実際の処理
    contextEnemy.beginPath();
    switch (getElem("mainStripeColorSteps").value) {
        case "monotone":
            contextEnemy.strokeStyle = getElem("mainStripe1ToneFront").value;
            contextEnemy.fillStyle = getElem("mainStripe1ToneBack").value;
            drawTiltedStripes(contextEnemy.fillStyle, contextEnemy.strokeStyle, 0, 256, 128, 192, mainStripeThickness, mainStripeStart, mainStripeInterval, false);
            if (drawMiddleLine) {
                contextEnemy.lineCap = "butt";
                contextEnemy.strokeStyle = contextEnemy.fillStyle;
                contextEnemy.lineWidth = 4;
                contextEnemy.stroke(CMiddleLinePath);
            }
            break;

        case "twotones":
            drawTiltedStripes(getElem("mainStripeTone1Back").value, getElem("mainStripeTone1Front").value, 0, 256, 128, 160, mainStripeThickness, mainStripeStart - 32, mainStripeInterval, true);
            if (drawMiddleLine) {
                contextEnemy.lineCap = "butt";
                contextEnemy.strokeStyle = contextEnemy.fillStyle;
                contextEnemy.lineWidth = 4;
                contextEnemy.stroke(CMiddleLinePath);
            }
            contextEnemy.restore();

            drawTiltedStripes(getElem("mainStripeTone2Back").value, getElem("mainStripeTone2Front").value, 0, 256, 160, 192, mainStripeThickness, mainStripeStart, mainStripeInterval, true);
            if (drawMiddleLine) {
                contextEnemy.lineCap = "butt";
                contextEnemy.strokeStyle = contextEnemy.fillStyle;
                contextEnemy.lineWidth = 4;
                contextEnemy.stroke(CMiddleLinePath);
            }
            contextEnemy.restore();
            break;

        case "threetonesthickmiddle":
        case "threetonesthinmiddle":
            var isThick = getElem("mainStripeColorSteps").value == "threetonesthickmiddle";

            drawTiltedStripes(getElem("mainStripeTone1Back").value, getElem("mainStripeTone1Front").value, 0, 256, 128, isThick ? 152 : 156, mainStripeThickness, mainStripeStart - (isThick ? 40 : 36), mainStripeInterval, false);

            drawTiltedStripes(getElem("mainStripeTone2Back").value, getElem("mainStripeTone2Front").value, 0, 256, isThick ? 152 : 156, 160, mainStripeThickness, mainStripeStart - 32, mainStripeInterval, false);

            drawTiltedStripes(getElem("mainStripeTone3Back").value, getElem("mainStripeTone3Front").value, 0, 256, 160, 192, mainStripeThickness, mainStripeStart, mainStripeInterval, false);
            if (drawMiddleLine) {
                contextEnemy.lineCap = "butt";
                contextEnemy.strokeStyle = getElem("mainStripeTone3Back").value;
                contextEnemy.lineWidth = 4;
                contextEnemy.stroke(CMiddleLinePath);
            }
    }

    //D,E
    //太さ決定
    var middleLeftLineThickness = lineThickness[getElem("middleLeftLineThickness").value];
    var middleRightLineThickness = lineThickness[getElem("middleRightLineThickness").value];
    //プレヴュー用にcolオブジェクトに登録
    let DColors = [],
        EColors = [];
    for (let qrt = 0; qrt < 6; qrt++) {
        DColors.push(Col.fromColorCode(getElem("middleLeftTone" + (qrt + 1) + "Face").value));
        DColors.push(Col.fromColorCode(getElem("middleLeftTone" + (qrt + 1) + "Line").value));
        EColors.push(Col.fromColorCode(getElem("middleRightTone" + (qrt + 1) + "Face").value));
        EColors.push(Col.fromColorCode(getElem("middleRightTone" + (qrt + 1) + "Line").value));
    }
    contextEnemy.lineJoin = "round";
    //描画
    for (var smis = 0; smis < 3; smis++) {
        contextEnemy.fillStyle = DColors[smis * 4].c;
        contextEnemy.fillRect(0, 192 + 64 * smis, 192, smis == 2 ? 76 : 64);
        contextEnemy.fillStyle = DColors[smis * 4 + 2].c;
        contextEnemy.fillRect(192, 192 + 64 * smis, 64, smis == 2 ? 76 : 64);
        contextEnemy.fillStyle = EColors[smis * 4].c;
        contextEnemy.fillRect(256, 192 + 64 * smis, 64, 64);
        contextEnemy.fillStyle = EColors[smis * 4 + 2].c;
        contextEnemy.fillRect(320, 192 + 64 * smis, 192, 64);

        var middleLeftLeftPath = new Path2D();
        middleLeftLeftPath.rect(12 + 0.5, 204 + 64 * smis + 0.5, 104, 40);
        middleLeftLeftPath.rect(140 + 0.5, 204 + 64 * smis + 0.5, 40, 40);

        var middleLeftRightPath = new Path2D();
        if (smis !== 2) {
            middleLeftRightPath.rect(204 + 0.5, 204 + 64 * smis + 0.5, 40, 40);
        } else { //224,352
            middleLeftRightPath.moveTo(216.5, 332.5);
            middleLeftRightPath.lineTo(231.5, 332.5);
            middleLeftRightPath.lineTo(243.5, 344.5);
            middleLeftRightPath.lineTo(243.5, 359.5);
            middleLeftRightPath.lineTo(231.5, 371.5);
            middleLeftRightPath.lineTo(216.5, 371.5);
            middleLeftRightPath.lineTo(204.5, 359.5);
            middleLeftRightPath.lineTo(204.5, 344.5);
            middleLeftRightPath.closePath();
        }

        var middleRightLeftPath = new Path2D();
        if (smis !== 0) {
            middleRightLeftPath.rect(268 + 0.5, 204 + 64 * smis + 0.5, 40, 40);
        } else {
            middleRightLeftPath.arc(288, 224, 20, 0, 2 * Math.PI, false);
        }

        var middleRightRightPath = new Path2D();
        middleRightRightPath.rect(332 + 0.5, 204 + 64 * smis + 0.5, 40, 40);
        middleRightRightPath.rect(394 + 0.5, 204 + 64 * smis + 0.5, 104, 40);

        if (getElem("middleLeftLineThickness").value != "none") {
            contextEnemy.strokeStyle = DColors[smis * 4 + 1].c;
            multipleLines(middleLeftLineThickness.width, middleLeftLineThickness.alpha, contextEnemy, middleLeftLeftPath);
            contextEnemy.strokeStyle = DColors[smis * 4 + 3].c;
            multipleLines(middleLeftLineThickness.width, middleLeftLineThickness.alpha, contextEnemy, middleLeftRightPath);
        }
        if (getElem("middleRightLineThickness").value != "none") {
            contextEnemy.strokeStyle = EColors[smis * 4 + 1].c;
            multipleLines(middleRightLineThickness.width, middleRightLineThickness.alpha, contextEnemy, middleRightLeftPath);
            contextEnemy.strokeStyle = EColors[smis * 4 + 3].c;
            multipleLines(middleRightLineThickness.width, middleRightLineThickness.alpha, contextEnemy, middleRightRightPath);
        }

        contextEnemy.fillStyle = getElem("middleLeftTone7").value;
        contextEnemy.strokeStyle = getElem("middleLeftTone6Line").value;
        contextEnemy.beginPath();
        contextEnemy.arc(224, 352, 10, 0, 2 * Math.PI, false);
        contextEnemy.fill();
        contextEnemy.lineWidth = 1;
        contextEnemy.stroke();
    }

    //F
    //プレヴュー用にcolオブジェクトに登録
    let FNormalGradColors = [];
    for (let posGR = 0; posGR < 3; posGR++) {
        FNormalGradColors.push(Col.fromColorCode(getElem("BLGradationTop" + (["Light", "Medium", "Dark"])[posGR] + "Color").value));
        FNormalGradColors.push(Col.fromColorCode(getElem("BLGradationBottom" + (["Light", "Medium", "Dark"])[posGR] + "Color").value));
    }
    //描画
    switch (getElem("bottomLeftType").value) {
        case "normal": {
            //帯
            var fillBottommost = getElem("fillBottommost").checked;
            var posStrpTop = fillBottommost ? 512 : 502;
            if (getElem("BLStripeLine").checked) posStrpTop -= 3;
            var strpArr = Array.from(getElem("BLStripes").children);
            var strpPosArr = [posStrpTop];
            //最下部のデフォ色
            if (!fillBottommost) {
                contextEnemy.fillStyle = getElem("riserTopMain").value;
                contextEnemy.fillRect(0, 500, 256, 12);
            }
            //上端位置の計算
            for (let elem of strpArr) {
                posStrpTop -= elem.children[3].children[0].value;
                strpPosArr.push(posStrpTop);
            }
            //描画
            var posStrp = posStrpTop;
            for (let elem of strpArr) {
                var strpWid = elem.children[3].children[0].value;
                for (var o = 0; o < 3; o++) {
                    contextEnemy.fillStyle = elem.children[o].children[0].value;
                    contextEnemy.fillRect(([0, 116, 141])[o], posStrp, ([116, 25, 115])[o], strpWid);
                }
                posStrp += Number(strpWid); //新しい上端
            }
            //グラデーション
            var grad;
            for (let posGR = 0; posGR < 3; posGR++) {
                grad = contextEnemy.createLinearGradient(0, 396, 0, posStrpTop);
                grad.addColorStop(0, FNormalGradColors[posGR * 2].c);
                grad.addColorStop(1, FNormalGradColors[posGR * 2 + 1].c);
                contextEnemy.fillStyle = grad;
                contextEnemy.fillRect(([0, 116, 141])[posGR], 396, ([116, 25, 115])[posGR], posStrpTop - 396);
            }
            //線
            if (getElem("BLStripeLine").checked) {
                var stripesLinePath = new Path2D();
                for (let each of strpPosArr) {
                    stripesLinePath.moveTo(0, each);
                    stripesLinePath.lineTo(256, each);
                }
                contextEnemy.strokeStyle = getElem("BLStripeLineColor").value;
                multipleLines([6, 4, 2], [0.25, 0.5, 1], contextEnemy, stripesLinePath);
            }
        }
        break;
    case "skycastle": {
        //最下部のデフォ色
        contextEnemy.fillStyle = getElem("riserTopMain").value;
        contextEnemy.fillRect(0, 500, 256, 12);
        var gradSC;
        for (var posSC = 0; posSC < 3; posSC++) {
            gradSC = contextEnemy.createLinearGradient(0, 396, 0, 502);
            gradSC.addColorStop(0, getElem("skyCastleBLGradationTop" + (["Light", "Medium", "Dark"])[posSC] + "Color").value);
            gradSC.addColorStop(1, getElem("skyCastleBLGradationBottom" + (["Light", "Medium", "Dark"])[posSC] + "Color").value);
            contextEnemy.fillStyle = gradSC;
            contextEnemy.fillRect(([0, 116, 141])[posSC], 396, ([116, 25, 115])[posSC], 108);
        }
        var citsTrgl = function (sx, ex) {
            contextEnemy.beginPath();
            contextEnemy.moveTo(sx, 502);
            contextEnemy.lineTo(sx, 498);
            contextEnemy.lineTo((sx + ex) / 2, 487);
            contextEnemy.lineTo(ex, 498);
            contextEnemy.lineTo(ex, 502);
            contextEnemy.closePath();
            contextEnemy.fill();
        };
        contextEnemy.fillStyle = getElem("skyCastleBLTriangleLightColor").value;
        citsTrgl(0, 28);
        citsTrgl(28, 57);
        citsTrgl(57, 85);
        citsTrgl(85, 115);
        contextEnemy.fillStyle = getElem("skyCastleBLTriangleMediumColor").value;
        citsTrgl(115, 140);
        contextEnemy.fillStyle = getElem("skyCastleBLTriangleDarkColor").value;
        citsTrgl(140, 169);
        citsTrgl(169, 198);
        citsTrgl(198, 226);
        citsTrgl(226, 255);
    }
    }

    //G
    if (!selectedTopRightTypeOption.hasAttribute("data-overrides-risers") && (!selectedSubBTypeOption.hasAttribute("data-overrides-risers") || !selectedTopRightTypeOption.hasAttribute("data-subB-available"))) {
        contextEnemy.strokeStyle = "#000000";
        switch (getElem("bottomRightType").value) {
            case "outlined":
                contextEnemy.fillStyle = getElem("riserTopMain").value;
                contextEnemy.fillRect(256, 384, 256, 128);
                for (var sci = 0; sci < 2; sci++) {
                    var tech = sci * 128;

                    var riserOctagonPathA = new Path2D();
                    riserOctagonPathA.moveTo(tech + 292.5, 408.5); //36, 24
                    riserOctagonPathA.lineTo(tech + 280.5, 420.5);
                    riserOctagonPathA.lineTo(tech + 280.5, 475.5);
                    riserOctagonPathA.lineTo(tech + 292.5, 487.5);
                    riserOctagonPathA.lineTo(tech + 347.5, 487.5);
                    riserOctagonPathA.lineTo(tech + 359.5, 475.5);
                    riserOctagonPathA.lineTo(tech + 359.5, 420.5);
                    riserOctagonPathA.lineTo(tech + 347.5, 408.5);
                    riserOctagonPathA.closePath();
                    var riserOctagonPathB = new Path2D();
                    riserOctagonPathB.moveTo(tech + 281.5, 396.5); //25, 12
                    riserOctagonPathB.lineTo(tech + 268.5, 409.5);
                    riserOctagonPathB.lineTo(tech + 268.5, 486.5);
                    riserOctagonPathB.lineTo(tech + 281.5, 499.5);
                    riserOctagonPathB.lineTo(tech + 358.5, 499.5);
                    riserOctagonPathB.lineTo(tech + 371.5, 486.5);
                    riserOctagonPathB.lineTo(tech + 371.5, 409.5);
                    riserOctagonPathB.lineTo(tech + 358.5, 396.5);
                    riserOctagonPathB.closePath();

                    contextEnemy.fillStyle = ([getElem("riserTopInactiveLine").value, getElem("riserTopActiveLine").value])[sci];
                    contextEnemy.fill(riserOctagonPathA);
                    contextEnemy.fillStyle = getElem("riserTopMain").value;
                    contextEnemy.fillRect(tech + 295, 423, 50, 50); //39 -> 78

                    contextEnemy.strokeStyle = getElem("riserLine").value;
                    multipleLines([5, 2], [0.25, 1], contextEnemy, riserOctagonPathA);
                    multipleLines([5, 2], [0.25, 1], contextEnemy, riserOctagonPathB);

                    var riserTopInnerRectPath = new Path2D();
                    riserTopInnerRectPath.rect(tech + 295, 423, 50, 50);
                    multipleLines([5, 2], [0.25, 1], contextEnemy, riserTopInnerRectPath);
                }
                break;
            case "round":
                contextEnemy.fillStyle = getElem("riserTopOuter").value;
                contextEnemy.fillRect(256, 384, 256, 128);
                var roundRectPath = function (x, y, w, h, r) {
                    var m = new Path2D();
                    m.moveTo(x + r, y);
                    m.arc(x + w - r, y + r, r, -0.5 * Math.PI, 0, false);
                    m.arc(x + w - r, y + w - r, r, 0, 0.5 * Math.PI, false);
                    m.arc(x + r, y + w - r, r, 0.5 * Math.PI, Math.PI, false);
                    m.arc(x + r, y + r, r, Math.PI, -0.5 * Math.PI, false);
                    m.closePath();
                    return m;
                }
                for (var me = 0; me < 2; me++) {
                    var nn = me * 128;
                    var outerRoundRectPath = roundRectPath(nn + 282, 410, 76, 76, 7);
                    var innerRoundRectPath = roundRectPath(nn + 293, 421, 54, 54, 4);

                    contextEnemy.strokeStyle = ([getElem("riserInactiveTopLine").value, getElem("riserActiveTopLine").value])[me];
                    multipleLines([7, 5, 3], [0.25, 0.25, 0.75], contextEnemy, outerRoundRectPath);

                    contextEnemy.globalAlpha = 1;
                    contextEnemy.fillStyle = ([getElem("riserInactiveTopLine").value, getElem("riserActiveTopLine").value])[me];
                    contextEnemy.fill(outerRoundRectPath);

                    contextEnemy.strokeStyle = ([getElem("riserInactiveTopInner").value, getElem("riserActiveTopInner").value])[me];
                    multipleLines([5, 3], [0.25, 0.5], contextEnemy, innerRoundRectPath)

                    contextEnemy.globalAlpha = 1;
                    contextEnemy.fillStyle = ([getElem("riserInactiveTopInner").value, getElem("riserActiveTopInner").value])[me];
                    contextEnemy.fill(innerRoundRectPath);

                    if (getElem("useRiserLine").checked) {
                        contextEnemy.strokeStyle = getElem("riserLine2").value;

                        var riserOuterPath = new Path2D();
                        riserOuterPath.moveTo(nn + 281.5, 396.5);
                        riserOuterPath.lineTo(nn + 268.5, 409.5);
                        riserOuterPath.lineTo(nn + 268.5, 486.5);
                        riserOuterPath.lineTo(nn + 281.5, 499.5);
                        riserOuterPath.lineTo(nn + 358.5, 499.5);
                        riserOuterPath.lineTo(nn + 371.5, 486.5);
                        riserOuterPath.lineTo(nn + 371.5, 409.5);
                        riserOuterPath.lineTo(nn + 358.5, 396.5);
                        riserOuterPath.closePath();
                        multipleLines([5, 2], [0.25, 1], contextEnemy, riserOuterPath);
                    }
                }
        }
    }
    //プレヴュー
    var etrpc; //enemyTRPreviewContext
    //B
    switch (getElem("topRightType").value) {
        case "crystal": {
            for (let elem of Array.from(document.querySelectorAll("#crystalObjPreview [data-fill]"))) {
                elem.setAttribute("fill", getElem(elem.getAttribute("data-fill")).value);
                elem.setAttribute("stroke", getElem("tetriminoOuterSameColor").checked ? getElem("crystalCollection1Outer").value : getElem(elem.getAttribute("data-stroke")).value);
            }
            getElem("crystalNeonboxRestriction").setAttribute("stroke", getElem("crystalUseNeonbox").checked ? "#ff0000" : "none");
        }
        break;

    }
    //SubB
    if (selectedTopRightTypeOption.hasAttribute("data-subB-available")) {
        if (getElem("subBType").value == "chris") {
            //Enemy18の左下の色は
            //#31E048, #1ED22F
            //#1C3E2E, #10291D
            let chrisSubBColors = [];
            for (let gzr = 0; gzr < 3; gzr++) {
                for (let has = 0; has < 3; has++) {
                    chrisSubBColors.push(getElem("chrisB1" + (gzr + 1) + "-" + (has + 1)).value);
                }
            }
            etrpc = getElem("chrisObjPreview").getContext("2d");
            etrpc.clearRect(0, 0, 450, 450);
            etrpc.textBaseline = "alphabetic";
            etrpc.font = "12px Sen";
            //211: 2Dツリー
            //葉部分の色
            // #146D23 #0E5422
            // #18431F #183529
            {
                etrpc.lineWidth = 3;
                //塗りつぶし
                let chrisSubBGradation;
                let chrisTreeTopWidthHalf = [12, 15, 18, 20, 15],
                    chrisTreeBottomWidthHalf = [23, 26, 30, 30, 25],
                    chrisTreeY = [80, 100, 120, 140, 160, 183],
                    chrisTreeColorUsageTop = [445, 466, 450, 468, 442, 473, 442, 461, 460, 476],
                    chrisTreeColorUsageBottom = [476, 495, 476, 494, 485, 490, 460, 479, 493, 496];
                for (let i = 0; i < 5; i++) { //上から下に繰り返す
                    let colorIndex = 0 + 4 * (i % 2);
                    //下左
                    chrisSubBGradation = etrpc.createLinearGradient(0, chrisTreeY[i], 0, chrisTreeY[i + 1]);
                    chrisSubBGradation.addColorStop(0, FNormalGradColors[colorIndex].blendWith(FNormalGradColors[colorIndex + 1], (chrisTreeColorUsageTop[2 * i] - 384) / 128).c);
                    chrisSubBGradation.addColorStop(1, FNormalGradColors[colorIndex].blendWith(FNormalGradColors[colorIndex + 1], (chrisTreeColorUsageBottom[2 * i] - 384) / 128).c);
                    etrpc.fillStyle = chrisSubBGradation;
                    etrpc.fill(new Path2D(`M40,${chrisTreeY[i]} V${chrisTreeY[i+1]} H${40-chrisTreeBottomWidthHalf[i]} L${40-chrisTreeTopWidthHalf[i]},${chrisTreeY[i]} Z`));
                    //下右
                    chrisSubBGradation = etrpc.createLinearGradient(0, chrisTreeY[i], 0, chrisTreeY[i + 1]);
                    chrisSubBGradation.addColorStop(0, FNormalGradColors[colorIndex].blendWith(FNormalGradColors[colorIndex + 1], (chrisTreeColorUsageTop[2 * i + 1] - 384) / 128).c);
                    chrisSubBGradation.addColorStop(1, FNormalGradColors[colorIndex].blendWith(FNormalGradColors[colorIndex + 1], (chrisTreeColorUsageBottom[2 * i + 1] - 384) / 128).c);
                    etrpc.fillStyle = chrisSubBGradation;
                    etrpc.fill(new Path2D(`M40,${chrisTreeY[i]} H${40+chrisTreeTopWidthHalf[i]} L${40+chrisTreeBottomWidthHalf[i]},${chrisTreeY[i+1]} H40 Z`));
                }
                //木の本体(外枠)
                etrpc.strokeStyle = DColors[4].c;
                etrpc.stroke(new Path2D("M40,50 L60,80 H52 L63,100 H55 L66,120 H58 L70,140 H60 L70,160 H55 L65,183" + "H15 L25,160 H10 L20,140 H10 L22,120 H14 L25,100 H17 L28,80 H20 Z"));
                etrpc.fillStyle = DColors[4].c;
                etrpc.fill(new Path2D("M40,50 L53,70 H27 Z"));
                //オーナメント
                etrpc.beginPath();
                etrpc.fillStyle = chrisSubBColors[1];
                etrpc.arc(42, 80, 3.5, 0, 2 * Math.PI);
                etrpc.fill();
                etrpc.fillStyle = chrisSubBColors[2];
                etrpc.beginPath();
                etrpc.arc(34, 98, 3.5, 0, 2 * Math.PI);
                etrpc.moveTo(30, 137);
                etrpc.arc(30, 140, 3.5, 0, 2 * Math.PI);
                etrpc.fill();
                etrpc.fillStyle = chrisSubBColors[3];
                etrpc.beginPath();
                etrpc.arc(48, 118, 3.5, 0, 2 * Math.PI);
                etrpc.fill();
                //ラベル
                etrpc.textAlign = "left";
                etrpc.fillStyle = "#000000";
                etrpc.strokeStyle = "#000000";
                etrpc.lineWidth = 1.5;
                etrpc.fillText("objName211", 8, 16, 300);
                etrpc.stroke(new Path2D("M42,80 L60,60"));
                etrpc.fillText("2", 60, 60, 100);
                etrpc.stroke(new Path2D("M48,118 L70,130"));
                etrpc.fillText("4", 70, 130, 100);
                etrpc.fillText("D3", 3, 95, 100);
            }
            //212: 三日月のカード
            //213: 小人のカード
            //214: 暖炉のカード
            //215: 橇のカード
            //216: 贈り物のカード
            //217: サンタのカード
            //218: 膨らむサンタ
            //29-32, 233: 3Dツリー
            //234: 3D雪だるま
        }
    }
}

var saveZip = new JSZip();

function updateSaveURLs() {
    function saveFile(canvas, name) {
        let a = canvas.toDataURL();
        fetch(a).then((r) => saveZip.file(name + ".png", r.blob()));
        getElem("download" + name).setAttribute("href", a);
    }
    saveFile(canvasGeneral, "General");
    saveFile(canvasFragile, "Fragile");
    saveFile(canvasFragileActive, "FragileActive");
    saveFile(canvasMover, "Mover");
    saveFile(canvasMoverAuto, "MoverAuto");
    saveFile(canvasEnemy, "Enemy");
}
getElem("generateButton").setClick(function () {
    generateAllTextures();
    updateSaveURLs();
}, true);

let assignCanvas = (groupName, generateFunc) => {
        let assignFunc = () => {
            generateFunc();
            updateSaveURLs();
        }
        for (let elem of document.querySelectorAll("#" + groupName + " input:not([data-no-instant-update]):not([type=button]), #" + groupName + " select:not([data-no-instant-update])")) elem.addEventListener("change", assignFunc);
        for (let elem of document.querySelectorAll("#" + groupName + " a.formSmallButton:not([data-no-instant-update]), #" + groupName + " input[type=button]")) elem.setClick(assignFunc);
    },
    updateGenMvr = () => {
        generateGeneral();
        generateMovers();
    };
assignCanvas("groundSettings", updateGenMvr);
assignCanvas("jumppadSettings", generateGeneral);
assignCanvas("fragileSettings", generateFragiles);
assignCanvas("moverSettings", generateMovers);
assignCanvas("midgroundSettings", generateFragiles);
assignCanvas("finishLineSettings", generateFragiles);
assignCanvas("lowGemSettings", generateFragiles);
assignCanvas("enemyForm", generateEnemy);

for (let elem of document.querySelectorAll("#generalVariationSettings input[id^=ground]")) {
    elem.addEventListener("change", generateGeneral);
}
for (let elem of document.querySelectorAll("#generalVariationSettings input[id^=fr]")) {
    elem.addEventListener("change", generateFragiles);
}
generateAllTextures();
updateSaveURLs();
