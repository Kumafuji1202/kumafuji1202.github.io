//update no. 2
//ESLintの警告防止用
var document = document;
var window = window;
var Path2D = Path2D;

//本体
window.addEventListener("load", function () {
    var canvasGeneral = document.getElementById("generalOutput"),
        contextGeneral = canvasGeneral.getContext("2d"),
        canvasFragile = document.getElementById("fragileOutput"),
        contextFragile = canvasFragile.getContext("2d"),
        canvasFragileActive = document.getElementById("fragileActiveOutput"),
        contextFragileActive = canvasFragileActive.getContext("2d"),
        canvasMover = document.getElementById("moverOutput"),
        contextMover = canvasMover.getContext("2d"),
        canvasMoverAuto = document.getElementById("moverAutoOutput"),
        contextMoverAuto = canvasMoverAuto.getContext("2d"),
        canvasEnemy = document.getElementById("enemyOutput"),
        contextEnemy = canvasEnemy.getContext("2d");

    //General, Fragile, FragileActive, Mover, MoverAutoで使用する床の端のパス
    var tileOutlinePath = new Path2D();
    tileOutlinePath.rect(-30.5, 139.5, 61, 232);
    tileOutlinePath.rect(-30.5, 481, 232, 61);
    tileOutlinePath.rect(310.5, 481, 232, 61);
    tileOutlinePath.rect(340, 139.5, 31, 61);
    tileOutlinePath.moveTo(310.5, -30.5);
    tileOutlinePath.lineTo(310.5, 30.5);
    tileOutlinePath.lineTo(481, 30.5);
    tileOutlinePath.lineTo(481, 371);
    tileOutlinePath.lineTo(542, 371);
    tileOutlinePath.lineTo(542, -30.5);
    tileOutlinePath.closePath();

    var sixSquares = new Path2D();
    sixSquares.rect(353.5, 12.5, 146, 146);
    sixSquares.rect(12.5, 182.5, 146, 146);
    sixSquares.rect(353.5, 182.5, 146, 146);
    sixSquares.rect(12.5, 353.5, 146, 146);
    sixSquares.rect(182.5, 353.5, 146, 146);
    sixSquares.rect(353.5, 353.5, 146, 146);

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

    function multipleLines(lineWidthArray, alphaArray, context, path) {
        context.save();
        for (var i = 0; i < lineWidthArray.length; i++) {
            context.lineWidth = lineWidthArray[i];
            context.globalAlpha = alphaArray[i];
            context.stroke(path);
        }
        context.restore();
    }
    var neonBoxImg = new Image();
    neonBoxImg.src = "files/neonBoxTemplate.png";

    function createHexagonPath(x, y, circumscribedCircleRadius) {
        var path = new Path2D();
        for (var i = 0; i < 6; i++) {
            path.lineTo(x + circumscribedCircleRadius * Math.cos(Math.PI * i / 3), y + circumscribedCircleRadius * Math.sin(Math.PI * i / 3));
        }
        path.closePath();
        return path;
    }


    //テクスチャを生成
    function generateTextures() {
        //////////////
        //ここからGeneral
        //設定を変数に入れる//
        //通常床
        //groundColor
        var weAreNoStrangersToLove = document.getElementById("groundColor").value;
        //ground line
        var youKnowTheRulesAndSoDoI = document.getElementById("groundLineColor").value;
        //普通床の側面
        var aFullCommitmentIsWhatImThinkingOf = document.getElementById("groundSideColor").value;
        //普通床の模様
        var youWouldntGetThisFromAnyOtherGuy = document.getElementById("groundEdgeStyle").value;
        //ジャンプ床の色
        var IJustWannaTellHowImFeeling = document.getElementById("jumppadColor").value;
        //起動時のジャンプ床の色
        var gottaMakeYouUnderstand = document.getElementById("jumppadColorActive").value;
        //ジャンプ床の線
        var neverGonnaGiveYouUp = document.getElementById("jumppadLineColor").value;
        //起動時のジャンプ床の線
        var neverGonnaLetYouDown = document.getElementById("jumppadLineColorActive").value;
        //ジャンプ床の側面
        var neverGonnaRunAroundAndDesertYou = document.getElementById("jumppadSideColor").value;
        //起動時のジャンプ床の側面
        var neverGonnaMakeYouCry = document.getElementById("jumppadSideColorActive").value;
        //ジャンプ床のスタイル
        var jumppadStyle = document.getElementById("jumppadStyle").value;
        //ogp
        var neverGonnaTellALieAndHurtYou = [document.getElementById("groundVariation1").value, document.getElementById("groundVariation2").value, document.getElementById("groundVariation3").value, document.getElementById("groundVariation4").value]; //objectGeneralPaletted

        //コンテキストの初期化//
        contextGeneral.lineCap = "round";
        contextGeneral.lineJoin = "round";
        contextGeneral.clearRect(0, 0, 512, 512);

        //面の描画//
        //背景//
        contextGeneral.fillStyle = weAreNoStrangersToLove;
        contextGeneral.fillRect(0, 0, canvasGeneral.width, canvasGeneral.height);
        //立体用パレット//

        contextGeneral.fillStyle = neverGonnaTellALieAndHurtYou[0];
        contextGeneral.fillRect(237, 183, 31, 31);
        contextGeneral.fillStyle = neverGonnaTellALieAndHurtYou[1];
        contextGeneral.fillRect(268, 183, 31, 31);
        contextGeneral.fillStyle = neverGonnaTellALieAndHurtYou[2];
        contextGeneral.fillRect(268, 213, 31, 31);
        //ジャンプ床//
        contextGeneral.fillStyle = IJustWannaTellHowImFeeling;
        contextGeneral.fillRect(182.5, 12.5, 146, 146);
        contextGeneral.fillStyle = gottaMakeYouUnderstand;
        contextGeneral.fillRect(12.5, 12.5, 146, 146);

        //市松模様のジャンプ床の描画
        if (jumppadStyle == "checker") {
            //未起動
            contextGeneral.fillStyle = document.getElementById("checkerJumppadInactiveEdge").value;
            contextGeneral.fillRect(232.5, 15.5, 47, 47);
            contextGeneral.fillRect(279.5, 62.5, 47, 47);
            contextGeneral.fillRect(185.5, 62.5, 47, 47);
            contextGeneral.fillRect(232.5, 109.5, 47, 47);
            //起動
            contextGeneral.fillStyle = document.getElementById("checkerJumppadActiveEdge").value;
            contextGeneral.fillRect(62.5, 15.5, 47, 47);
            contextGeneral.fillRect(109.5, 62.5, 47, 47);
            contextGeneral.fillRect(15.5, 62.5, 47, 47);
            contextGeneral.fillRect(62.5, 109.5, 47, 47);

            if (document.getElementById("inactiveJumppadGlow").checked) {
                contextGeneral.strokeStyle = document.getElementById("inactiveJumppadGlowColor").value;
                var ijgPath = new Path2D();
                ijgPath.rect(182.5, 12.5, 146, 146);
                multipleLines([40, 36, 28, 22, 18, 12, 10], [0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.5], contextGeneral, ijgPath);
            }
        }

        //中国風渦巻き模様のジャンプ床
        if (jumppadStyle == "china") {
            contextGeneral.strokeStyle = document.getElementById("gspJumppad").value;
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
                contextGeneral.strokeStyle = document.getElementById((["gpJumppadActive", "gpJumppadInactive"])[smk]).value;
                contextGeneral.lineWidth = 9;
                contextGeneral.strokeRect(sml + 34, 34, 102, 102);
                contextGeneral.lineWidth = 17;
                contextGeneral.strokeRect(sml + 55, 55, 60, 60);
            }
            contextGeneral.restore();
        }

        //「放浪癖」w
        if (jumppadStyle == "wander") {
            contextGeneral.fillStyle = document.getElementById("gspJumppad").value;
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
            contextGeneral.strokeStyle = document.getElementById("gspJumppad").value;
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

        //ジャンプ床の発光を描画//
        if (!document.getElementById("disableActiveJumppadGlow").checked) {
            contextGeneral.strokeStyle = neverGonnaLetYouDown;

            var ajgPath = new Path2D();
            if (jumppadStyle != "cut") {
                ajgPath.rect(12.5, 12.5, 146, 146);
            } else { //158.5
                ajgPath.moveTo(12.5, 27); //15.5
                ajgPath.lineTo(12.5, 143);
                ajgPath.lineTo(27, 158.5);
                ajgPath.lineTo(143, 158.5);
                ajgPath.lineTo(158.5, 143);
                ajgPath.lineTo(158.5, 27);
                ajgPath.lineTo(143, 12.5);
                ajgPath.lineTo(27, 12.5);
                ajgPath.closePath();
            }
            multipleLines([40, 30, 17, 10], [0.125, 0.125, 0.125, 0.125], contextGeneral, ajgPath);
        }

        //火山スタイルのグラデーション
        if (document.getElementById("enableVolcanicGradient").checked) {
            let spbibok = contextGeneral.createRadialGradient(353.5, 158, 146, 353.5, 158, 206.5);
            spbibok.addColorStop(0, weAreNoStrangersToLove);
            spbibok.addColorStop(1, document.getElementById("volcanicGradientColor").value);
            contextGeneral.fillStyle = spbibok;
            contextGeneral.fillRect(353.5, 12.5, 146, 146);
        }

        //線の描画(パス定義)
        var groundLinesPath = new Path2D();
        if (youWouldntGetThisFromAnyOtherGuy != "cut") {
            groundLinesPath.addPath(sixSquares);
        } else { //角落ちの枠線。
            //ここのコードをローカル関数か何かを使って簡素化できないかな…
            //基本的に左上隅スタート
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
            //中下段
            groundLinesPath.moveTo(182.5, 353.5);
            groundLinesPath.lineTo(182.5, 485);
            groundLinesPath.lineTo(196, 498.5);
            groundLinesPath.lineTo(314, 498.5);
            groundLinesPath.lineTo(328.5, 485);
            groundLinesPath.lineTo(328.5, 353.5);
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
        }
        groundLinesPath.moveTo(182.5, 182.5);
        groundLinesPath.lineTo(182.5, 328.5);
        groundLinesPath.lineTo(328.5, 328.5);

        var jumppadInactiveLinesPath = new Path2D();
        jumppadInactiveLinesPath.rect(182.5, 12.5, 146, 146);
        var jumppadActiveLinesPath = new Path2D();
        jumppadActiveLinesPath.rect(12.5, 12.5, 146, 146);

        //線の描画(処理)
        contextGeneral.strokeStyle = youKnowTheRulesAndSoDoI;
        if (document.getElementById("doubleLines").checked) { //線を2段にする
            multipleLines([15, 7, 5], [0.25, 0.375, 1], contextGeneral, groundLinesPath);
        } else {
            multipleLines([9, 7, 5], [0.25, 0.375, 1], contextGeneral, groundLinesPath);
        }


        contextGeneral.strokeStyle = neverGonnaGiveYouUp;
        multipleLines([9, 7, 5], [0.25, 0.375, 1], contextGeneral, jumppadInactiveLinesPath);
        contextGeneral.strokeStyle = neverGonnaLetYouDown;
        multipleLines([9, 7, 5], [0.25, 0.375, 1], contextGeneral, jumppadActiveLinesPath);

        contextGeneral.strokeStyle = youKnowTheRulesAndSoDoI;
        multipleLines([7, 5, 3, 1], [0.25, 0.5, 0.75, 1], contextGeneral, fiveSquares);

        contextGeneral.globalAlpha = 1;
        contextGeneral.fillStyle = aFullCommitmentIsWhatImThinkingOf;
        contextGeneral.fillRect(299, 183, 31, 31);
        contextGeneral.fillStyle = neverGonnaTellALieAndHurtYou[3];
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
        //角落ちジャンプ床の描画
        if (jumppadStyle == "cut") {
            contextGeneral.fillStyle = neverGonnaGiveYouUp;
            //未起動左上
            drawCutCorner(true, true, 171, 0);
            //未起動左下
            drawCutCorner(true, false, 171, 170);
            //未起動右上
            drawCutCorner(false, true, 340, 0);
            //未起動右下
            drawCutCorner(false, false, 340, 170);
            contextGeneral.fillStyle = neverGonnaLetYouDown;
            //起動左上
            drawCutCorner(true, true, 0, 0);
            //起動左下
            drawCutCorner(true, false, 0, 170);
            //未起動右上
            drawCutCorner(false, true, 170, 0);
            //未起動右下
            drawCutCorner(false, false, 170, 170);
        }

        //角落ち床の描画
        if (youWouldntGetThisFromAnyOtherGuy == "cut") {
            contextGeneral.fillStyle = youKnowTheRulesAndSoDoI;
            //左の太い線
            contextGeneral.fillRect(4.5, 192, 16, 128);
            //下の太い線
            contextGeneral.fillRect(22, 491.5, 128, 16);
            contextGeneral.fillRect(363, 491.5, 128, 16);
            //右の太い線
            contextGeneral.fillRect(491.5, 20, 16, 299);
            //上の太い線
            contextGeneral.fillRect(363, 4.5, 128, 16);
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

        //ジャンプ床四角模様の描画
        if (jumppadStyle == "squares") {
            contextGeneral.fillStyle = document.getElementById("squaresJumppadActiveOuter").value;
            contextGeneral.fillRect(32.5, 32.5, 105, 105);
            contextGeneral.fillStyle = document.getElementById("squaresJumppadActiveInner").value;
            contextGeneral.fillRect(48.5, 48.5, 73, 73);
            contextGeneral.fillStyle = document.getElementById("squaresJumppadInactiveOuter").value;
            contextGeneral.fillRect(203.5, 32.5, 105, 105);
            contextGeneral.fillStyle = document.getElementById("squaresJumppadInactiveInner").value;
            contextGeneral.fillRect(219.5, 48.5, 73, 73);
        }

        //Rolling World
        if (jumppadStyle == "rworld") {
            let grad = contextGeneral.createRadialGradient(85, 85, 10, 85, 85, 31);
            grad.addColorStop(0, document.getElementById("gpJumppadActive").value);
            grad.addColorStop(1, gottaMakeYouUnderstand);
            contextGeneral.fillStyle = grad;
            contextGeneral.beginPath();
            contextGeneral.arc(85, 85, 28, 0, 2 * Math.PI, false);
            contextGeneral.closePath();
            contextGeneral.fill();

            for (let jpstatus = 0; jpstatus < 2; jpstatus++) {
                let jppos = jpstatus * 170;
                contextGeneral.strokeStyle = document.getElementById((["gpJumppadActive", "gpJumppadInactive"])[jpstatus]).value;
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
            activeJumppadGradient.addColorStop(0, neverGonnaLetYouDown + "40");
            activeJumppadGradient.addColorStop(1, neverGonnaLetYouDown);
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
            if (!(document.getElementById("activeOnlyGrid").checked || jumppadStyle == "citrus")) {
                let inactiveJumppadGradient = contextGeneral.createRadialGradient(268.5, 97.5, 50, 268.5, 97.5, 130);
                contextGeneral.lineWidth = 3;
                inactiveJumppadGradient.addColorStop(0, document.getElementById("inactiveGridColor").value + "40");
                inactiveJumppadGradient.addColorStop(1, document.getElementById("inactiveGridColor").value);
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
                    contextGeneral.strokeStyle = ([neverGonnaLetYouDown, document.getElementById("inactiveGridColor").value])[Let];
                    lEt.rect(37 + leT, 37, 96, 96);
                    multipleLines([11, 7, 5, 2], [0.25, 0.5, 0.5, 1], contextGeneral, lEt);
                }
            }
        }

        //ジャンプ床の側面の描画
        contextGeneral.fillStyle = neverGonnaRunAroundAndDesertYou;
        contextGeneral.fillRect(286, 30, 25, 25);
        contextGeneral.fillStyle = neverGonnaMakeYouCry;
        contextGeneral.fillRect(116, 30, 25, 25);
        contextGeneral.fillRect(116, 30, 25, 25);

        //////////////
        //ここからFragileとFragileActive
        contextFragile.lineCap = "round";
        contextFragile.lineJoin = "round";
        contextFragile.clearRect(0, 0, 512, 512);
        contextFragileActive.lineCap = "round";
        contextFragileActive.lineJoin = "round";
        contextFragileActive.clearRect(0, 0, 512, 512);
        contextFragile.fillStyle = document.getElementById("fragileColor").value;
        contextFragile.globalAlpha = 0xc0 / 0xff;
        contextFragile.fillRect(0, 0, 512, 512);
        contextFragileActive.fillStyle = document.getElementById("fragileActiveColor").value;
        contextFragileActive.globalAlpha = 0xc0 / 0xff;
        contextFragileActive.fillRect(0, 0, 512, 512);
        contextFragile.globalAlpha = 1;
        contextFragile.lineWidth = 4;
        contextFragileActive.globalAlpha = 1;
        contextFragileActive.lineWidth = 4;

        //線
        contextFragile.strokeStyle = document.getElementById("fragileLineColor").value;
        contextFragileActive.strokeStyle = document.getElementById("fragileActiveLineColor").value;

        function rolling(sky) {
            if (document.getElementById("fragileStyle").value == "stripes") {
                sky.stroke(sixSquares);
                sky.strokeRect(182.5, 182.5, 146, 146);
                sky.lineWidth = 2;
                sky.stroke(tileOutlinePath);
            } else {
                sky.beginPath();
                sky.moveTo(12.5, 182.5);
                sky.lineTo(12.5, 353.5);
                sky.moveTo(12.5, 499.5);
                sky.lineTo(159.5, 499.5);
                sky.moveTo(352, 499.5);
                sky.lineTo(499.5, 499.5);
                sky.moveTo(340, 12.5);
                sky.lineTo(499.5, 12.5);
                sky.lineTo(499.5, 353.5);
                sky.moveTo(182.5, 499.5);
                sky.closePath();
                sky.moveTo(328.5, 499.5);
                sky.closePath();
                sky.moveTo(353.5, 158.5);
                sky.closePath();
                sky.moveTo(353.5, 182.5);
                sky.closePath();
                sky.stroke();
                sky.strokeRect(182.5, 182.5, 146, 146);
                if (document.getElementById("fragileStyle").value == "cave") {
                    sky.beginPath();
                    sky.moveTo(391, 23);
                    sky.lineTo(489, 23);
                    sky.lineTo(489, 121);
                    sky.moveTo(459, 33);
                    sky.lineTo(479, 33);
                    sky.lineTo(479, 53);
                    sky.stroke();
                }
                if (document.getElementById("fragileStyle").value == "bubbles") {
                    let hexagonsThick = new Path2D();
                    hexagonsThick.addPath(createHexagonPath(207, 305, 12));
                    hexagonsThick.addPath(createHexagonPath(475, 38, 12));
                    sky.lineWidth = 4;
                    sky.stroke(hexagonsThick);

                    let hexagonsThin = new Path2D();
                    hexagonsThin.addPath(createHexagonPath(238, 309, 8));
                    hexagonsThin.addPath(createHexagonPath(203, 276, 8));
                    hexagonsThin.addPath(createHexagonPath(444, 34, 8));
                    hexagonsThin.addPath(createHexagonPath(479, 67, 8));
                    sky.lineWidth = 3;
                    sky.stroke(hexagonsThin);
                }
            }
        }

        rolling(contextFragile);
        rolling(contextFragileActive);

        //化学スタイルActive時の追加
        if (document.getElementById("fragileStyle").value == "bubbles") {
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
        if (document.getElementById("fragileStyle").value == "stripes") {
            contextFragile.save();
            contextFragileActive.save();

            contextFragile.clip(tileOutlinePath);
            contextFragileActive.clip(tileOutlinePath);
            contextFragile.strokeStyle = document.getElementById("fragileStripeColor").value;
            contextFragileActive.strokeStyle = document.getElementById("fragileActiveStripeColor").value;
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
        midGroundGradient.addColorStop(0, document.getElementById("midGroundTopColor").value);
        midGroundGradient.addColorStop(1, document.getElementById("midGroundBottomColor").value);
        contextFragile.fillStyle = midGroundGradient;
        contextFragile.fillRect(170, 0, 170, 170);
        
        //Midgroundの窓
        if (document.getElementById("midGroundWindows").checked){
            let windowGrad = contextFragile.createLinearGradient(0,27,0,141);
            windowGrad.addColorStop(0,document.getElementById("midGroundWindowsTop").value);
            windowGrad.addColorStop(0.5,document.getElementById("midGroundWindowsMiddle").value);
            windowGrad.addColorStop(1,document.getElementById("midGroundWindowsBottom").value);
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
            for (let windowRow = 0; windowRow < 8; windowRow++){
                for (let windowCol = 0; windowCol < 3; windowCol++){
                    if (windowLayout[windowRow][windowCol]){
                        contextFragile.fillRect(238+14*windowCol,27+15*windowRow,10,10);
                    }
                }
            }
        }

        //低画質ジェム
        contextFragile.fillStyle = document.getElementById("gemColor").value;
        contextFragile.fillRect(0, 0, 170, 170);
        contextFragile.fillStyle = document.getElementById("gemLightColor").value;
        contextFragile.fillRect(98, 98, 60, 60)
        contextFragile.strokeStyle = document.getElementById("gemLineColor").value;
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
            contextFragileActive.fillStyle = flPos % 2 == 0 ? document.getElementById("finishLineInactiveColorA").value : document.getElementById("finishLineInactiveColorB").value;
            contextFragileActive.fillRect(flUnitLeftEnd, 0, flUnitRightEnd - flUnitLeftEnd, 39);
            contextFragileActive.fillStyle = flPos % 2 != 0 ? document.getElementById("finishLineInactiveColorA").value : document.getElementById("finishLineInactiveColorB").value;
            contextFragileActive.fillRect(flUnitLeftEnd, 39, flUnitRightEnd - flUnitLeftEnd, 39);

            contextFragileActive.fillStyle = flPos % 2 == 0 ? document.getElementById("finishLineActiveColorA").value : document.getElementById("finishLineActiveColorB").value;
            contextFragileActive.fillRect(flUnitLeftEnd, 93, flUnitRightEnd - flUnitLeftEnd, 39);
            contextFragileActive.fillStyle = flPos % 2 != 0 ? document.getElementById("finishLineActiveColorA").value : document.getElementById("finishLineActiveColorB").value;
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
        contextFragileActive.strokeStyle = document.getElementById("finishLineActiveLine").value;
        multipleLines([7, 3], [0.5, 1], contextFragileActive, flLinePath);

        //補助パレット
        contextFragile.globalAlpha = contextFragile.globalAlpha = 0xc0 / 0xff;

        contextFragile.clearRect(238,184,60,31);
        contextFragileActive.clearRect(238,184,60,31);
        
        contextFragile.fillStyle = document.getElementById("fragileVariation1").value;
        contextFragileActive.fillStyle = document.getElementById("frgActiveVariation1").value;
        contextFragile.fillRect(237, 183, 31, 31);
        contextFragileActive.fillRect(237, 183, 31, 31);

        contextFragile.fillStyle = document.getElementById("fragileVariation2").value;
        contextFragileActive.fillStyle = document.getElementById("frgActiveVariation2").value;
        contextFragile.fillRect(268, 183, 31, 31);
        contextFragileActive.fillRect(268, 183, 31, 31);

        contextFragile.globalAlpha = contextFragile.globalAlpha = 1;
        contextFragile.fillStyle = document.getElementById("fragileVariation3").value;
        contextFragileActive.fillStyle = document.getElementById("frgActiveVariation3").value;
        contextFragile.fillRect(268, 213, 31, 31);
        contextFragileActive.fillRect(268, 213, 31, 31);

        contextFragile.fillStyle = document.getElementById("fragileLineColor").value;
        contextFragileActive.fillStyle = document.getElementById("fragileActiveLineColor").value;
        contextFragile.fillRect(299, 214, 31, 31);
        contextFragileActive.fillRect(299, 214, 31, 31);

        contextFragile.strokeStyle = contextFragile.fillStyle;
        contextFragileActive.strokeStyle = contextFragileActive.fillStyle;
        multipleLines([7, 5, 3, 1], [0.25, 0.5, 0.75, 1], contextFragile, fiveSquares);
        multipleLines([7, 5, 3, 1], [0.25, 0.5, 0.75, 1], contextFragileActive, fiveSquares);

        //側面
        contextFragile.fillStyle = document.getElementById("fragileSideColor").value;
        contextFragile.fillRect(298.5, 183, 30, 30);
        contextFragileActive.fillStyle = document.getElementById("fragileActiveSideColor").value;
        contextFragileActive.fillRect(298.5, 183, 30, 30);

        //////////////
        //ここからMoverとMoverAuto

        //面
        var moverColor = document.getElementById("moverSameColor").checked ? weAreNoStrangersToLove : document.getElementById("moverMainColor").value;
        contextMover.fillStyle = moverColor;
        contextMoverAuto.fillStyle = moverColor;
        contextMover.fillRect(0, 0, 512, 512);
        contextMoverAuto.fillRect(0, 0, 512, 512);

        //線
        var moverLine = document.getElementById("moverLineColor").value;
        var moverAutoLine = document.getElementById("moverAutoLineColor").value;

        var moverLinePath = new Path2D(sixSquares);
        moverLinePath.moveTo(182.5, 182.5);
        moverLinePath.lineTo(182.5, 328.5);
        moverLinePath.lineTo(328.5, 328.5);

        //同じコードを何回も書いている気がする
        function just(Do, it) {
            Do.strokeStyle = it;
            //線を2段にする
            if (document.getElementById("doubleLines").checked) {
                multipleLines([15, 13, 7, 5], [0.1875, 0.1875, 0.375, 1], Do, moverLinePath);
            } else {
                multipleLines([9, 7, 5], [0.25, 0.375, 1], Do, moverLinePath);
            }
        }

        just(contextMover, moverLine);
        just(contextMoverAuto, moverLine);

        //縁
        contextMover.lineWidth = 4;
        contextMoverAuto.lineWidth = 4;
        contextMover.fillStyle = document.getElementById("moverOutlineColor").value;
        contextMoverAuto.fillStyle = document.getElementById("moverAutoOutlineColor").value;
        contextMover.strokeStyle = document.getElementById("moverOutlineBorderColor").value;
        contextMoverAuto.strokeStyle = document.getElementById("moverAutoOutlineBorderColor").value;
        contextMover.fill(tileOutlinePath);
        contextMover.stroke(tileOutlinePath);
        contextMoverAuto.fill(tileOutlinePath);
        contextMoverAuto.stroke(tileOutlinePath);

        //三角
        contextMover.fillStyle = document.getElementById("moverOutlineColor").value;
        contextMoverAuto.fillStyle = document.getElementById("moverAutoOutlineColor").value;
        contextMover.fillRect(170, 0, 170, 170);
        contextMoverAuto.fillRect(170, 0, 170, 170);
        contextMover.fillStyle = document.getElementById("moverActiveArrowColor").value;
        contextMoverAuto.fillStyle = document.getElementById("moverAutoActiveArrowColor").value;
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

        contextMover.strokeStyle = document.getElementById("moverOutlineBorderColor").value;
        multipleLines([9, 7, 5], [0.25, 0.375, 1], contextMover, moverInactiveArrowPath);
        contextMoverAuto.strokeStyle = document.getElementById("moverAutoOutlineBorderColor").value;
        multipleLines([9, 7, 5], [0.25, 0.375, 1], contextMoverAuto, moverInactiveArrowPath);

        contextMover.strokeStyle = document.getElementById("moverActiveArrowBorderColor").value;
        multipleLines([40, 30, 17, 9, 7, 5], [0.125, 0.125, 0.125, 0.25, 0.375, 1], contextMover, moverActiveArrowPath);
        contextMoverAuto.strokeStyle = document.getElementById("moverAutoActiveArrowBorderColor").value;
        multipleLines([40, 30, 17, 9, 7, 5], [0.125, 0.125, 0.125, 0.25, 0.375, 1], contextMoverAuto, moverActiveArrowPath);

        //四角部分A
        contextMover.fillStyle = document.getElementById("moverActiveArrowBorderColor").value;
        contextMoverAuto.fillStyle = document.getElementById("moverAutoActiveArrowBorderColor").value;
        contextMover.fillRect(30, 30, 25, 25);
        contextMoverAuto.fillRect(30, 30, 25, 25);
        contextMover.fillStyle = document.getElementById("moverOutlineBorderColor").value;
        contextMoverAuto.fillStyle = document.getElementById("moverAutoOutlineBorderColor").value;
        contextMover.fillRect(286, 30, 25, 25);
        contextMoverAuto.fillRect(286, 30, 25, 25);

        //四角部分B
        contextMover.fillStyle = document.getElementById("moverArrowTopColor").value;
        contextMover.fillRect(268, 183, 31, 31);
        contextMover.fillStyle = document.getElementById("moverArrowUpperSideColor").value;
        contextMover.fillRect(268, 213, 31, 31);
        contextMover.fillStyle = document.getElementById("moverArrowSideColor").value;
        contextMover.fillRect(299, 214, 31, 31);
        contextMoverAuto.fillStyle = document.getElementById("moverArrowTopColor").value;
        contextMoverAuto.fillRect(268, 183, 31, 31);
        contextMover.strokeStyle = moverLine;
        contextMoverAuto.strokeStyle = moverAutoLine;
        multipleLines([7, 5, 3, 1], [0.25, 0.5, 0.75, 1], contextMover, fiveSquares);
        multipleLines([7, 5, 3, 1], [0.25, 0.5, 0.75, 1], contextMoverAuto, fiveSquares);

        contextMoverAuto.fillStyle = document.getElementById("moverArrowUpperSideColor").value;
        contextMoverAuto.fillRect(268, 213, 31, 31);
        contextMoverAuto.fillStyle = document.getElementById("moverArrowSideColor").value;
        contextMoverAuto.fillRect(299, 214, 31, 31);

        //側面
        contextMover.fillStyle = document.getElementById("moverSideColor").value;
        contextMover.fillRect(298.5, 183, 30, 30);
        contextMoverAuto.fillStyle = document.getElementById("moverAutoSideColor").value;
        contextMoverAuto.fillRect(298.5, 183, 30, 30);

        //ここからEnemy
        contextEnemy.clearRect(0, 0, 512, 512);
        contextEnemy.lineJoin = "miter";
        contextEnemy.lineCap = "butt";
        contextEnemy.imageSmoothingEnabled = false;

        //A1
        var radialLight = contextEnemy.createRadialGradient(64, 64, 0, 64, 64, 51);
        radialLight.addColorStop(0, "#FFFFFF");
        radialLight.addColorStop(0.5, document.getElementById("radialLightInner").value);
        radialLight.addColorStop(1, document.getElementById("radialLightOuter").value);
        contextEnemy.fillStyle = radialLight;
        contextEnemy.arc(64, 64, 51, 0, 2 * Math.PI, false);
        contextEnemy.fill();

        //A2
        var linearLightA = contextEnemy.createLinearGradient(128, 0, 178, 0);
        //A3
        var linearLightB = contextEnemy.createLinearGradient(128, 0, 178, 0);
        if (document.getElementById("linearLightSameColor").checked) {
            linearLightA.addColorStop(0, document.getElementById("radialLightOuter").value);
            linearLightA.addColorStop(0.25, document.getElementById("radialLightInner").value);
            linearLightA.addColorStop(0.5, "#FFFFFF");
            linearLightA.addColorStop(0.75, document.getElementById("radialLightInner").value);
            linearLightA.addColorStop(1, document.getElementById("radialLightOuter").value);
            linearLightB = linearLightA;
        } else {
            linearLightA.addColorStop(0, document.getElementById("linearLightAOuter").value);
            linearLightA.addColorStop(0.3, document.getElementById("linearLightAInner").value);
            linearLightA.addColorStop(0.5, "#FFFFFF");
            linearLightA.addColorStop(0.7, document.getElementById("linearLightAInner").value);
            linearLightA.addColorStop(1, document.getElementById("linearLightAOuter").value);

            linearLightB.addColorStop(0, document.getElementById("linearLightBOuter").value);
            linearLightB.addColorStop(0.3, document.getElementById("linearLightBInner").value);
            linearLightB.addColorStop(0.5, "#FFFFFF");
            linearLightB.addColorStop(0.7, document.getElementById("linearLightBInner").value);
            linearLightB.addColorStop(1, document.getElementById("linearLightBOuter").value);
        }
        contextEnemy.fillStyle = linearLightA;
        contextEnemy.fillRect(128, 0, 50, 64);
        contextEnemy.fillStyle = linearLightB;
        contextEnemy.fillRect(128, 64, 50, 64);

        //B,G
        switch (document.getElementById("topRightType").value) {
            case "floater": {
                /* sk */
                //fl1
                contextEnemy.lineWidth = 1;
                contextEnemy.fillStyle = document.getElementById("floaterMainColor").value;
                contextEnemy.fillRect(192, 0, 320, 128);
                contextEnemy.strokeStyle = document.getElementById("floaterInactiveEdgeColor").value;
                contextEnemy.beginPath();
                contextEnemy.moveTo(269, 114);
                contextEnemy.lineTo(320, 12.5);
                contextEnemy.lineTo(371, 114);
                contextEnemy.closePath();
                contextEnemy.moveTo(397, 114);
                contextEnemy.lineTo(448, 12.5);
                contextEnemy.lineTo(499, 114);
                contextEnemy.closePath();
                contextEnemy.fill();
                contextEnemy.stroke();

                //fl2
                contextEnemy.fillStyle = document.getElementById("floaterSpikeInnerColor").value;
                contextEnemy.beginPath();
                contextEnemy.moveTo(205, 12.5);
                contextEnemy.lineTo(307, 12.5);
                contextEnemy.lineTo(256, 114);
                contextEnemy.closePath();
                contextEnemy.moveTo(332, 12.5);
                contextEnemy.lineTo(434, 12.5);
                contextEnemy.lineTo(383, 114);
                contextEnemy.closePath();
                contextEnemy.fill();
                contextEnemy.stroke();

                //fl3
                contextEnemy.fillStyle = document.getElementById("floaterInactiveEdgeColor").value;
                for (var s = 0; s < 2; s++) {
                    var k = 127 * s;
                    //ちょび三角
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
                    contextEnemy.lineTo(k + 256, 114);
                    //縁
                    contextEnemy.moveTo(k + 269, 114);
                    contextEnemy.lineTo(k + 320, 12.5);
                    contextEnemy.lineTo(k + 371, 114);
                    contextEnemy.lineTo(k + 351, 114);
                    contextEnemy.lineTo(k + 320, 53);
                    contextEnemy.lineTo(k + 289, 114);
                    contextEnemy.closePath();
                    contextEnemy.fill();
                    //fl4
                    contextEnemy.fillStyle = document.getElementById("floaterActiveEdgeColor").value;
                }
            }
            break;
        case "crystal": {
            /* sksksks */

            //cr1
            contextEnemy.fillStyle = document.getElementById("russianTowerTop").value;
            contextEnemy.fillRect(192, 0, 64, 32);
            //cr2
            contextEnemy.fillStyle = document.getElementById("russianTowerMiddleTop").value;
            contextEnemy.fillRect(192, 32, 64, 64);
            //cr3
            contextEnemy.fillStyle = document.getElementById("russianTowerLowerTop").value;
            contextEnemy.fillRect(192, 96, 64, 32);

            //cr4-11 関数定義
            var fillTetrimino = function (x, y, inner, outer) {
                //cr#a
                contextEnemy.fillStyle = outer;
                contextEnemy.fillRect(x, y, 64, 64);
                //cr#b
                if (document.getElementById("tetriminoGradient").checked) {
                    var the = contextEnemy.createRadialGradient(x + 32, y + 32, 10, x + 32, y + 32, 96);
                    the.addColorStop(0, inner);
                    the.addColorStop(1, outer);
                    contextEnemy.fillStyle = the;
                } else {
                    contextEnemy.fillStyle = inner;
                }
                contextEnemy.fillRect(x + 6, y + 6, 52, 52);
            }

            //cr4-11 描画
            fillTetrimino(256, 0, document.getElementById("crystalCollection1Inner").value, document.getElementById("tetriminoOuterSameColor").checked ? document.getElementById("crystalCollection1Outer").value : document.getElementById("crystalCollection1Outer").value);
            fillTetrimino(320, 0, document.getElementById("crystalCollection2Inner").value, document.getElementById("tetriminoOuterSameColor").checked ? document.getElementById("crystalCollection1Outer").value : document.getElementById("crystalCollection2Outer").value);
            fillTetrimino(384, 0, document.getElementById("crystalCollection3Inner").value, document.getElementById("tetriminoOuterSameColor").checked ? document.getElementById("crystalCollection1Outer").value : document.getElementById("crystalCollection3Outer").value);
            fillTetrimino(448, 0, document.getElementById("crystalCollection4Inner").value, document.getElementById("tetriminoOuterSameColor").checked ? document.getElementById("crystalCollection1Outer").value : document.getElementById("crystalCollection4Outer").value);
            fillTetrimino(256, 64, document.getElementById("crystalCollection5Inner").value, document.getElementById("tetriminoOuterSameColor").checked ? document.getElementById("crystalCollection1Outer").value : document.getElementById("crystalCollection5Outer").value);
            fillTetrimino(320, 64, document.getElementById("crystalCollection6Inner").value, document.getElementById("tetriminoOuterSameColor").checked ? document.getElementById("crystalCollection1Outer").value : document.getElementById("crystalCollection6Outer").value);
            fillTetrimino(384, 64, document.getElementById("crystalCollection7Inner").value, document.getElementById("tetriminoOuterSameColor").checked ? document.getElementById("crystalCollection1Outer").value : document.getElementById("crystalCollection7Outer").value);
            fillTetrimino(448, 64, document.getElementById("crystalCollection8Inner").value, document.getElementById("tetriminoOuterSameColor").checked ? document.getElementById("crystalCollection1Outer").value : document.getElementById("crystalCollection8Outer").value);
        }
        break;
        case "geometry": {
            //構造物キューブ
            if (document.getElementById("cubeStructureType").value == "original") {
                contextEnemy.fillStyle = document.getElementById("originalCubeStructureTopBackground").value;
                contextEnemy.fillRect(256, 0, 64, 64);
                contextEnemy.fillStyle = document.getElementById("originalCubeStructureFrontBackground").value;
                contextEnemy.fillRect(256, 64, 64, 64);

                //模様
                contextEnemy.lineWidth = 5;
                contextEnemy.fillStyle = document.getElementById("originalCubeStructureTopPattern").value;
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

                contextEnemy.fillStyle = document.getElementById("originalCubeStructureFrontPattern").value;
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
            if (document.getElementById("cubeStructureType").value == "import") {
                contextEnemy.drawImage(document.getElementById("cubeStructureTopImg"), 256, 0, 64, 64);
                contextEnemy.drawImage(document.getElementById("cubeStructureFrontImg"), 256, 64, 64, 64);
            }

            //枠
            if (document.getElementById("cubeStructureFrame").checked) {
                contextEnemy.fillStyle = document.getElementById("cubeStructureFrameColor").value;
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
            contextEnemy.fillStyle = document.getElementById("largeOctahedronTriangleSideA").value;
            contextEnemy.fillRect(320, 64, 64, 64);
            contextEnemy.fillStyle = document.getElementById("largeOctahedronTriangleSideB").value;
            contextEnemy.fillRect(384, 64, 64, 64);
            //回転立方体
            if (document.getElementById("spinCubeType").value == "original") {
                contextEnemy.fillStyle = document.getElementById("originalSpinCubeColorA").value;
                contextEnemy.fillRect(256, 128, 64, 64);
                contextEnemy.fillStyle = document.getElementById("originalSpinCubeColorB").value;
                contextEnemy.beginPath();
                contextEnemy.moveTo(256, 128);
                contextEnemy.lineTo(256, 192);
                contextEnemy.lineTo(320, 128);
                contextEnemy.lineTo(320, 192);
                contextEnemy.closePath();
                contextEnemy.fill();
            }
            if (document.getElementById("spinCubeType").value == "import") {
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
                contextEnemy.drawImage(document.getElementById("spinCubeImg"), 288 - imgSize / 2, 160 - imgSize / 2, imgSize, imgSize);
                contextEnemy.restore();
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
        if (document.getElementById("subBAvailable").value == "true") {
            if (document.getElementById("subBType").value == "plain") {
                contextEnemy.fillStyle = document.getElementById("noPatternSubBColor").value;
                contextEnemy.fillRect(256, 128, 256, 64);
            }
            if (document.getElementById("subBType").value == "classicalroller") {
                let thin = document.getElementById("doubleRollerLines").checked;
                drawTiltedStripes(document.getElementById("classicalRollerLineColor").value, document.getElementById("classicalRollerMainColor").value, 256, 512, 128, 192, thin ? 13 : 25, thin ? 264 : 252, thin ? 25.75 : 46.25);
            }
            if (document.getElementById("subBType").value == "desert") {
                for (let clr = 0; clr < 4; clr++) {
                    contextEnemy.fillStyle = document.getElementById("palmTreeTrunk" + (clr + 1)).value;
                    contextEnemy.fillRect(256 + 64 * clr, 128, 64, 64);
                }
            }
        }
        //翻転床
        if (document.getElementById("flipTileAvailable").value == "true") {
            //表とУра
            var flipperType = document.getElementById("flipTileType").value;
            var doTheFlipper = function (type, colCount, func) {
                if (flipperType == type) {
                    for (var me = 0; me < 2; me++) {
                        var nn = me * 64 + 320;
                        contextEnemy.save();
                        contextEnemy.beginPath();
                        contextEnemy.rect(nn, 0, 64, 64);
                        contextEnemy.clip();
                        var colors = [];
                        for (var kf = 0; kf < colCount; kf++) {
                            colors.push(document.getElementById("flipperColor" + (kf + 1) + (["Reverse", "Obverse"])[me]).value);
                        }
                        //func(ctx, pos, cols, colB)
                        func(contextEnemy, nn, colors, 0);
                        contextEnemy.restore();
                    }
                }
            };
            //立方スタイル
            doTheFlipper("cube", 2, function (c, u, b, e) {
                c.fillStyle = b[0];
                c.fillRect(u, 0, 64, 64);
                c.fillStyle = b[1];
                c.beginPath();
                c.moveTo(u, 0);
                c.lineTo(u + 9.5, 9.5);
                c.lineTo(u + 9.5, 54.5);
                c.lineTo(u, 64);
                c.closePath();
                c.moveTo(u + 64, 0);
                c.lineTo(u + 54.5, 9.5);
                c.lineTo(u + 54.5, 54.5);
                c.lineTo(u + 64, 64);
                c.closePath();
                c.moveTo(u + 9.5, 9.5);
                c.lineTo(u + 54.5, 9.5);
                c.lineTo(u + 9.5, 54.5);
                c.lineTo(u + 54.5, 54.5);
                c.closePath();
                c.fill();
                return e;
            });
            //トランプスタイル
            doTheFlipper("checker", 2, function (c, a, r, d) {
                c.fillStyle = r[0];
                c.fillRect(a, 0, 32, 32);
                c.fillRect(a + 32, 32, 32, 32);
                c.fillStyle = r[1];
                c.fillRect(a, 32, 32, 32);
                c.fillRect(a + 32, 0, 32, 32);
                return d;
            });
            //冬スタイル
            doTheFlipper("holly", 5, function (s, n, o, w) {
                //背景
                s.fillStyle = o[0];
                s.fillRect(n, 0, 64, 64);
                //枠
                s.strokeStyle = o[1];
                s.lineWidth = 5;
                s.strokeRect(n + 1, 1, 62, 62);
                //外側の点
                s.fillStyle = o[4];
                s.fillRect(n + 8, 8, 4, 4);
                s.fillRect(n + 8, 52, 4, 4);
                s.fillRect(n + 52, 8, 4, 4);
                s.fillRect(n + 52, 52, 4, 4);
                //めしべ
                s.fillStyle = o[3];
                s.beginPath();
                s.arc(n + 32, 32, 1.5, 0, 2 * Math.PI, false);
                s.closePath;
                s.fill();

                s.lineWidth = 2;
                s.beginPath();
                s.moveTo(n + 17.5, 10);
                s.lineTo(n + 17.5, 17.5);
                s.lineTo(n + 10, 17.5);
                s.moveTo(n + 17.5, 54);
                s.lineTo(n + 17.5, 46.5);
                s.lineTo(n + 10, 46.5);
                s.moveTo(n + 46.5, 10);
                s.lineTo(n + 46.5, 17.5);
                s.lineTo(n + 54, 17.5);
                s.moveTo(n + 46.5, 54);
                s.lineTo(n + 46.5, 46.5);
                s.lineTo(n + 54, 46.5);
                s.stroke();

                //花びら
                s.fillStyle = o[2];
                s.beginPath();
                //上左
                s.moveTo(n + 30.5, 30);
                s.lineTo(n + 30.5, 18);
                s.lineTo(n + 20.5, 10);
                s.lineTo(n + 20.5, 20);
                s.closePath();
                //左上
                s.moveTo(n + 30, 30.5);
                s.lineTo(n + 18, 30.5);
                s.lineTo(n + 10, 20.5);
                s.lineTo(n + 20, 20.5);
                s.closePath();

                //下左
                s.moveTo(n + 30.5, 34);
                s.lineTo(n + 30.5, 46);
                s.lineTo(n + 20.5, 54);
                s.lineTo(n + 20.5, 44);
                s.closePath();
                //左下
                s.moveTo(n + 30, 33.5);
                s.lineTo(n + 18, 33.5);
                s.lineTo(n + 10, 43.5);
                s.lineTo(n + 20, 43.5);
                s.closePath();

                //上右
                s.moveTo(n + 33.5, 30);
                s.lineTo(n + 33.5, 18);
                s.lineTo(n + 43.5, 10);
                s.lineTo(n + 43.5, 20);
                s.closePath();
                //右上
                s.moveTo(n + 34, 30.5);
                s.lineTo(n + 46, 30.5);
                s.lineTo(n + 54, 20.5);
                s.lineTo(n + 44, 20.5);
                s.closePath();

                //下右
                s.moveTo(n + 33.5, 34);
                s.lineTo(n + 33.5, 46);
                s.lineTo(n + 43.5, 54);
                s.lineTo(n + 43.5, 44);
                s.closePath();
                //右下
                s.moveTo(n + 34, 33.5);
                s.lineTo(n + 46, 33.5);
                s.lineTo(n + 54, 43.5);
                s.lineTo(n + 44, 43.5);
                s.closePath();
                s.fill();
                return w;
            });
            //春節スタイル
            doTheFlipper("rhombus", 3, function (p, i, g, s) {
                p.fillStyle = g[0];
                p.fillRect(i, 0, 64, 64);
                p.fillStyle = g[2];
                p.beginPath();
                p.moveTo(i + 32, 6);
                p.lineTo(i + 58, 32);
                p.lineTo(i + 32, 58);
                p.lineTo(i + 6, 32);
                p.closePath();
                p.fill();
                p.strokeStyle = g[1];
                p.lineWidth = 3;
                p.strokeRect(i + 4, 4, 56, 56);
                return s;
            });
            //マイクロスタイル
            doTheFlipper("squares", 2, function (m, a, t, h) {
                m.lineWidth = 4;
                m.fillStyle = t[0];
                m.fillRect(a, 0, 64, 64);
                m.strokeStyle = t[1];
                m.strokeRect(a + 1.5, 1.5, 61, 61);
                m.strokeRect(a + 9.5, 9.5, 45, 45);
                m.fillStyle = contextEnemy.strokeStyle;
                m.fillRect(a + 20, 20, 24, 24);
                return h;
            });
            //ディスコスタイル
            doTheFlipper("uLines", 3, function (r, a, v, e) {
                r.fillStyle = v[0];
                r.fillRect(a, 0, 64, 64);
                r.fillStyle = v[1];
                r.fillRect(a + 7.5, 0, 49, 56.5);
                r.fillStyle = v[0];
                r.fillRect(a + 12.5, 0, 39, 50.5);
                r.fillStyle = v[1];
                r.fillRect(a + 20, 0, 24, 40);
                return e;
            });
            //四周年スタイル
            doTheFlipper("star", 2, function (b, d, a, y) {
                b.fillStyle = a[0];
                b.fillRect(d, 0, 64, 64);
                b.strokeStyle = a[1];
                b.lineWidth = 3;
                b.strokeRect(d + 5, 5, 54, 54);
                b.fillStyle = a[1];
                var rad = 0;
                b.beginPath();
                var sizA = 24;
                var sizB = 13;
                b.moveTo(d + 32, 34 - sizA);
                for (var kuma = 0; kuma < 5; kuma++) {
                    rad += (0.2) * Math.PI;
                    b.lineTo(d + 32 + sizB * Math.sin(rad), 34 - sizB * Math.cos(rad));
                    rad += (0.2) * Math.PI;
                    b.lineTo(d + 32 + sizA * Math.sin(rad), 34 - sizA * Math.cos(rad));
                }
                b.closePath();
                b.fill();
                return y;
            });
            //ケプラースタイル
            doTheFlipper("semicircles", 3, function (s, t, a, r) {
                s.fillStyle = a[0];
                s.fillRect(t, 0, 64, 64);

                s.beginPath();
                //左上
                s.moveTo(t, 0);
                s.arc(t, 0, 32, 0, 0.5 * Math.PI, false);
                s.closePath();
                //右下
                s.moveTo(t + 64, 64);
                s.arc(t + 64, 64, 32, -Math.PI, -0.5 * Math.PI, false);
                s.closePath();
                s.fillStyle = a[1];
                s.fill();

                s.beginPath();
                //右上
                s.moveTo(t + 64, 0);
                s.arc(t + 64, 0, 32, 0.5 * Math.PI, Math.PI, false);
                s.closePath();
                //左下
                s.moveTo(t, 64);
                s.arc(t, 64, 32, -0.5 * Math.PI, 0, false);
                s.closePath();
                s.fillStyle = a[2];
                s.fill();
                return r;
            });
            //天空の城風
            doTheFlipper("cits", 3, function (c, i, t, s) {
                c.fillStyle = t[0];
                c.fillRect(i, 0, 64, 64);
                c.strokeStyle = t[1];
                c.lineWidth = 3;
                c.strokeRect(i + 4, 4, 56, 56);

                c.fillStyle = t[2];
                c.beginPath();
                c.moveTo(i + 32, 58);
                c.lineTo(i + 14, 40);
                c.lineTo(i + 32, 22);
                c.lineTo(i + 50, 40);
                c.closePath();
                c.fill();
                c.beginPath();
                c.moveTo(i + 32, 6);
                c.lineTo(i + 18, 20);
                c.lineTo(i + 32, 34);
                c.lineTo(i + 46, 20);
                c.closePath();
                c.fill();
                return s;
            });
            //インポート画像
            if (flipperType == "import") {
                contextEnemy.save();
                contextEnemy.translate(384, 32);
                contextEnemy.rotate(Math.PI);
                contextEnemy.translate(-384, -32);
                contextEnemy.drawImage(document.getElementById("flipperReverseImg"), 384, 0, 64, 64);
                contextEnemy.drawImage(document.getElementById("flipperObverseImg"), 320, 0, 64, 64);
                contextEnemy.restore();
            }
            //側面
            contextEnemy.fillStyle = document.getElementById("flipperSideColor").value;
            contextEnemy.fillRect(320, 128, 64, 64);
        }

        //ネオンボックス
        if (document.getElementById("topRightType").selectedOptions[0].hasAttribute("data-neonbox-available")) {
            contextEnemy.drawImage(neonBoxImg, 448, 0);
        }

        //C
        //各種寸法の設定
        var mainStripeThickness = 25;
        var mainStripeInterval = 46.22;
        var mainStripeStart = 40;
        var drawMiddleLine = document.getElementById("addCenterLine").checked;
        switch (document.getElementById("mainStripeThickness").value) {
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
                mainStripeThickness = Number(document.getElementById("mainStripeCustomThickness").value);
                mainStripeInterval = Number(document.getElementById("mainStripeCustomInterval").value);
                mainStripeStart = Number(document.getElementById("mainStripeCustomStart").value);
        }
        mainStripeStart = mainStripeStart % mainStripeInterval - mainStripeInterval;

        var CMiddleLinePath = new Path2D();
        CMiddleLinePath.moveTo(0, 160);
        CMiddleLinePath.lineTo(256, 160);
        //実際の処理
        contextEnemy.beginPath();
        switch (document.getElementById("mainStripeColorSteps").value) {
            case "monotone":
                contextEnemy.strokeStyle = document.getElementById("mainStripe1ToneFront").value;
                contextEnemy.fillStyle = document.getElementById("mainStripe1ToneBack").value;
                drawTiltedStripes(contextEnemy.fillStyle, contextEnemy.strokeStyle, 0, 256, 128, 192, mainStripeThickness, mainStripeStart, mainStripeInterval, false);
                if (drawMiddleLine) {
                    contextEnemy.lineCap = "butt";
                    contextEnemy.strokeStyle = contextEnemy.fillStyle;
                    contextEnemy.lineWidth = 4;
                    contextEnemy.stroke(CMiddleLinePath);
                }
                break;

            case "twotones":
                drawTiltedStripes(document.getElementById("mainStripeTone1Back").value, document.getElementById("mainStripeTone1Front").value, 0, 256, 128, 160, mainStripeThickness, mainStripeStart - 32, mainStripeInterval, true);
                if (drawMiddleLine) {
                    contextEnemy.lineCap = "butt";
                    contextEnemy.strokeStyle = contextEnemy.fillStyle;
                    contextEnemy.lineWidth = 4;
                    contextEnemy.stroke(CMiddleLinePath);
                }
                contextEnemy.restore();

                drawTiltedStripes(document.getElementById("mainStripeTone2Back").value, document.getElementById("mainStripeTone2Front").value, 0, 256, 160, 192, mainStripeThickness, mainStripeStart, mainStripeInterval, true);
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
                var isThick = document.getElementById("mainStripeColorSteps").value == "threetonesthickmiddle";

                drawTiltedStripes(document.getElementById("mainStripeTone1Back").value, document.getElementById("mainStripeTone1Front").value, 0, 256, 128, isThick ? 152 : 156, mainStripeThickness, mainStripeStart - (isThick ? 40 : 36), mainStripeInterval, false);

                drawTiltedStripes(document.getElementById("mainStripeTone2Back").value, document.getElementById("mainStripeTone2Front").value, 0, 256, isThick ? 152 : 156, 160, mainStripeThickness, mainStripeStart - 32, mainStripeInterval, false);

                drawTiltedStripes(document.getElementById("mainStripeTone3Back").value, document.getElementById("mainStripeTone3Front").value, 0, 256, 160, 192, mainStripeThickness, mainStripeStart, mainStripeInterval, false);
                if (drawMiddleLine) {
                    contextEnemy.lineCap = "butt";
                    contextEnemy.strokeStyle = document.getElementById("mainStripeTone3Back").value;
                    contextEnemy.lineWidth = 4;
                    contextEnemy.stroke(CMiddleLinePath);
                }
        }

        //D,E
        contextEnemy.lineJoin = "round";
        for (var smis = 0; smis < 3; smis++) {
            contextEnemy.fillStyle = document.getElementById("middleLeftTone" + (smis * 2 + 1) + "Face").value;
            contextEnemy.fillRect(0, 192 + 64 * smis, 192, smis == 2 ? 76 : 64);
            contextEnemy.fillStyle = document.getElementById("middleLeftTone" + (smis * 2 + 2) + "Face").value;
            contextEnemy.fillRect(192, 192 + 64 * smis, 64, smis == 2 ? 76 : 64);
            contextEnemy.fillStyle = document.getElementById("middleRightTone" + (smis * 2 + 1) + "Face").value;
            contextEnemy.fillRect(256, 192 + 64 * smis, 64, 64);
            contextEnemy.fillStyle = document.getElementById("middleRightTone" + (smis * 2 + 2) + "Face").value;
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

            contextEnemy.strokeStyle = document.getElementById("middleLeftTone" + (smis * 2 + 1) + "Line").value;
            multipleLines([6, 3, 1], [0.25, 0.25, 1], contextEnemy, middleLeftLeftPath);
            contextEnemy.strokeStyle = document.getElementById("middleLeftTone" + (smis * 2 + 2) + "Line").value;
            multipleLines([6, 3, 1], [0.25, 0.25, 1], contextEnemy, middleLeftRightPath);
            contextEnemy.strokeStyle = document.getElementById("middleRightTone" + (smis * 2 + 1) + "Line").value;
            multipleLines([6, 3, 1], [0.25, 0.25, 1], contextEnemy, middleRightLeftPath);
            contextEnemy.strokeStyle = document.getElementById("middleRightTone" + (smis * 2 + 2) + "Line").value;
            multipleLines([6, 3, 1], [0.25, 0.25, 1], contextEnemy, middleRightRightPath);

            contextEnemy.fillStyle = document.getElementById("middleLeftTone7").value;
            contextEnemy.strokeStyle = document.getElementById("middleLeftTone6Line").value;
            contextEnemy.beginPath();
            contextEnemy.arc(224, 352, 10, 0, 2 * Math.PI, false);
            contextEnemy.fill();
            contextEnemy.lineWidth = 1;
            contextEnemy.stroke();
        }

        //F
        switch (document.getElementById("bottomLeftType").value) {
            case "normal": {
                //帯
                var fillBottommost = document.getElementById("fillBottommost").checked;
                var posStrpTop = fillBottommost ? 512 : 502;
                if (document.getElementById("BLStripeLine").checked) posStrpTop -= 3;
                var strpArr = Array.from(document.getElementById("BLStripes").children);
                var strpPosArr = [posStrpTop];
                //最下部のデフォ色
                if (!fillBottommost) {
                    contextEnemy.fillStyle = document.getElementById("riserTopMain").value;
                    contextEnemy.fillRect(0, 500, 256, 12);
                }
                //上端位置の計算
                strpArr.forEach(function (elem) {
                    posStrpTop -= elem.children[3].children[0].value;
                    strpPosArr.push(posStrpTop);
                });
                //描画
                var posStrp = posStrpTop;
                strpArr.forEach(function (elem) {
                    var strpWid = elem.children[3].children[0].value;
                    for (var o = 0; o < 3; o++) {
                        contextEnemy.fillStyle = elem.children[o].children[0].value;
                        contextEnemy.fillRect(([0, 116, 141])[o], posStrp, ([116, 25, 115])[o], strpWid);
                    }
                    posStrp += Number(strpWid); //新しい上端
                });
                //グラデーション
                var grad;
                for (var posGR = 0; posGR < 3; posGR++) {
                    grad = contextEnemy.createLinearGradient(0, 396, 0, posStrpTop);
                    grad.addColorStop(0, document.getElementById("BLGradationTop" + (["Light", "Medium", "Dark"])[posGR] + "Color").value);
                    grad.addColorStop(1, document.getElementById("BLGradationBottom" + (["Light", "Medium", "Dark"])[posGR] + "Color").value);
                    contextEnemy.fillStyle = grad;
                    contextEnemy.fillRect(([0, 116, 141])[posGR], 396, ([116, 25, 115])[posGR], posStrpTop - 396);
                }
                //線
                if (document.getElementById("BLStripeLine").checked) {
                    var stripesLinePath = new Path2D();
                    strpPosArr.forEach(function (eachOne) {
                        stripesLinePath.moveTo(0, eachOne);
                        stripesLinePath.lineTo(256, eachOne);
                    });
                    contextEnemy.strokeStyle = document.getElementById("BLStripeLineColor").value;
                    multipleLines([6, 4, 2], [0.25, 0.5, 1], contextEnemy, stripesLinePath);
                }
            }
            break;
        case "skycastle": {
            //最下部のデフォ色
            contextEnemy.fillStyle = document.getElementById("riserTopMain").value;
            contextEnemy.fillRect(0, 500, 256, 12);
            var gradSC;
            for (var posSC = 0; posSC < 3; posSC++) {
                gradSC = contextEnemy.createLinearGradient(0, 396, 0, 502);
                gradSC.addColorStop(0, document.getElementById("skyCastleBLGradationTop" + (["Light", "Medium", "Dark"])[posSC] + "Color").value);
                gradSC.addColorStop(1, document.getElementById("skyCastleBLGradationBottom" + (["Light", "Medium", "Dark"])[posSC] + "Color").value);
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
            contextEnemy.fillStyle = document.getElementById("skyCastleBLTriangleLightColor").value;
            citsTrgl(0, 28);
            citsTrgl(28, 57);
            citsTrgl(57, 85);
            citsTrgl(85, 115);
            contextEnemy.fillStyle = document.getElementById("skyCastleBLTriangleMediumColor").value;
            citsTrgl(115, 140);
            contextEnemy.fillStyle = document.getElementById("skyCastleBLTriangleDarkColor").value;
            citsTrgl(140, 169);
            citsTrgl(169, 198);
            citsTrgl(198, 226);
            citsTrgl(226, 255);
        }
        }

        //G
        contextEnemy.strokeStyle = "#000000";
        switch (document.getElementById("bottomRightType").value) {
            case "outlined":
                contextEnemy.fillStyle = document.getElementById("riserTopMain").value;
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

                    contextEnemy.fillStyle = ([document.getElementById("riserTopInactiveLine").value, document.getElementById("riserTopActiveLine").value])[sci];
                    contextEnemy.fill(riserOctagonPathA);
                    contextEnemy.fillStyle = document.getElementById("riserTopMain").value;
                    contextEnemy.fillRect(tech + 295, 423, 50, 50); //39 -> 78

                    contextEnemy.strokeStyle = document.getElementById("riserLine").value;
                    multipleLines([5, 2], [0.25, 1], contextEnemy, riserOctagonPathA);
                    multipleLines([5, 2], [0.25, 1], contextEnemy, riserOctagonPathB);

                    var riserTopInnerRectPath = new Path2D();
                    riserTopInnerRectPath.rect(tech + 295, 423, 50, 50);
                    multipleLines([5, 2], [0.25, 1], contextEnemy, riserTopInnerRectPath);
                }
                break;
            case "round":
                contextEnemy.fillStyle = document.getElementById("riserTopOuter").value;
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

                    contextEnemy.strokeStyle = ([document.getElementById("riserInactiveTopLine").value, document.getElementById("riserActiveTopLine").value])[me];
                    multipleLines([7, 5, 3], [0.25, 0.25, 0.75], contextEnemy, outerRoundRectPath);

                    contextEnemy.globalAlpha = 1;
                    contextEnemy.fillStyle = ([document.getElementById("riserInactiveTopLine").value, document.getElementById("riserActiveTopLine").value])[me];
                    contextEnemy.fill(outerRoundRectPath);

                    contextEnemy.strokeStyle = ([document.getElementById("riserInactiveTopInner").value, document.getElementById("riserActiveTopInner").value])[me];
                    multipleLines([5, 3], [0.25, 0.5], contextEnemy, innerRoundRectPath)

                    contextEnemy.globalAlpha = 1;
                    contextEnemy.fillStyle = ([document.getElementById("riserInactiveTopInner").value, document.getElementById("riserActiveTopInner").value])[me];
                    contextEnemy.fill(innerRoundRectPath);

                    if (document.getElementById("useRiserLine").checked) {
                        contextEnemy.strokeStyle = document.getElementById("riserLine2").value;

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

        //プレヴュー
        var etrpc; //enemyTRPreviewContext
        //B
        switch (document.getElementById("topRightType").value) {
            case "crystal": {
                etrpc = document.getElementById("crystalObjPreview").getContext("2d");
                etrpc.clearRect(0, 0, 400, 200);
                etrpc.textBaseline = "alphabetic";
                etrpc.fillStyle = "#000000";
                etrpc.textAlign = "left";
                etrpc.font = "12px Sen";
                etrpc.fillText(lang.callText("tetriminoes"), 8, 16, 300);
                etrpc.fillText(lang.callText("crystalGate"), 8, 76, 300);
                for (var ja = 0; ja < 4; ja++) {
                    etrpc.fillText(([2, 1, 7, 6])[ja], 224 + 4 * ja, 92 + 16 * ja, 300);
                }
                for (var nein = 0; nein < 7; nein++) {
                    etrpc.fillText(([5, 3, 2, 1, 7, 6, 8])[nein], 96, 96 + 12 * nein, 300);
                    etrpc.fillText(([5, 3, 2, 1, 7, 6, 8])[nein], 280 + 2 * nein, 88 + 12 * nein, 300);
                }
                etrpc.fillText(lang.callText("iceCube"), 320, 16, 300);
                etrpc.fillText(lang.callText("crystalTree"), 120, 76, 300);
                etrpc.fillText(lang.callText("russianTowers"), 296, 92, 300);
                etrpc.textAlign = "center";
                etrpc.textBaseline = "middle";

                etrpc.lineWidth = 1;
                var prepareColors = function (colorNum) {
                    etrpc.strokeStyle = document.getElementById("tetriminoOuterSameColor").checked ? document.getElementById("crystalCollection1Outer").value : document.getElementById("crystalCollection" + colorNum + "Outer").value;
                    etrpc.fillStyle = document.getElementById("crystalCollection" + colorNum + "Inner").value;
                };
                var doTheTetris = function (colorNum, array) {
                    prepareColors(colorNum);
                    for (var esso = 0; esso < array.length / 2; esso++) {
                        etrpc.fillRect(array[2 * esso], array[2 * esso + 1], 12, 12);
                    }
                    for (var unDosTresCuatro = 0; unDosTresCuatro < array.length / 2; unDosTresCuatro++) {
                        etrpc.strokeRect(array[2 * unDosTresCuatro], array[2 * unDosTresCuatro + 1], 12, 12);
                    }
                };

                //テトリミノ
                doTheTetris(1,
                           [20, 24,
                            8, 36,
                            20, 36,
                            8, 48]);
                doTheTetris(2,
                           [56, 36,
                            68, 36,
                            44, 48,
                            56, 48]);
                doTheTetris(3,
                           [116, 36,
                            92, 48,
                            104, 48,
                            116, 48]);
                doTheTetris(4,
                           [152, 24,
                            152, 36,
                            152, 48,
                            140, 48]);
                doTheTetris(5,
                           [176, 36,
                            188, 36,
                            176, 48,
                            188, 48]);
                doTheTetris(6,
                           [212, 12,
                            212, 24,
                            212, 36,
                            212, 48]);
                doTheTetris(7,
                           [248, 36,
                            236, 48,
                            248, 48,
                            260, 48]);
                doTheTetris(8,
                           [284, 24,
                            284, 36,
                            296, 36,
                            284, 48]);

                //結晶門
                doTheTetris(5,
                           [32, 84,
                            44, 84,
                            56, 84]);
                doTheTetris(3,
                           [20, 96,
                            32, 96,
                            44, 96,
                            56, 96,
                            68, 96]);
                doTheTetris(2,
                           [8, 108,
                            20, 108,
                            32, 108,
                            44, 108,
                            56, 108,
                            68, 108,
                            80, 108]);
                for (var si = 0; si < 4; si++) {
                    doTheTetris(([1, 7, 6, 8])[si],
                           [8, 120 + 12 * si,
                            20, 120 + 12 * si,
                            68, 120 + 12 * si,
                            80, 120 + 12 * si]);
                }

                //出現氷塊
                //側面
                prepareColors(6);
                etrpc.beginPath();
                etrpc.moveTo(368, 48);
                etrpc.lineTo(392, 24);
                etrpc.lineTo(392, 56);
                etrpc.lineTo(368, 80);
                etrpc.closePath();
                etrpc.fill();
                etrpc.stroke();
                etrpc.fillStyle = "#000000";
                etrpc.fillText("6", 388, 72, 100);
                //手前
                prepareColors(7);
                etrpc.beginPath();
                etrpc.moveTo(320, 48);
                etrpc.lineTo(368, 48);
                etrpc.lineTo(368, 80);
                etrpc.lineTo(320, 80);
                etrpc.closePath();
                etrpc.fill();
                etrpc.stroke();
                etrpc.fillStyle = "#000000";
                etrpc.fillText("7", 312, 64, 100);
                //上面
                prepareColors(1);
                etrpc.beginPath();
                etrpc.moveTo(320, 48);
                etrpc.lineTo(344, 24);
                etrpc.lineTo(392, 24);
                etrpc.lineTo(368, 48);
                etrpc.closePath();
                etrpc.fill();
                etrpc.stroke();
                etrpc.fillStyle = "#000000";
                etrpc.fillText("1", 380, 16, 100);

                //結晶の木(小)
                //奥
                etrpc.fillStyle = document.getElementById("crystalCollection3Inner").value;
                etrpc.fillRect(152, 80, 24, 24);
                //上
                etrpc.fillStyle = document.getElementById("crystalCollection7Inner").value;
                etrpc.beginPath();
                etrpc.moveTo(136, 80);
                etrpc.lineTo(128, 88);
                etrpc.lineTo(160, 88);
                etrpc.lineTo(152, 80);
                etrpc.closePath();
                etrpc.fill();
                //左
                etrpc.fillStyle = document.getElementById("crystalCollection6Inner").value;
                etrpc.beginPath();
                etrpc.moveTo(112, 104);
                etrpc.lineTo(120, 96);
                etrpc.lineTo(120, 128);
                etrpc.lineTo(112, 120);
                etrpc.closePath();
                etrpc.fill();
                //右
                etrpc.fillStyle = document.getElementById("crystalCollection1Inner").value;
                etrpc.beginPath();
                etrpc.moveTo(176, 104);
                etrpc.lineTo(168, 96);
                etrpc.lineTo(168, 128);
                etrpc.lineTo(176, 120);
                etrpc.closePath();
                etrpc.fill();
                //手前
                etrpc.fillStyle = document.getElementById("crystalCollection2Inner").value;
                etrpc.fillRect(128, 96, 32, 32);

                var doTheTrees = function (x, y, halfWidth, height, colorNum) {
                    prepareColors(colorNum);
                    etrpc.beginPath();
                    etrpc.moveTo(x - halfWidth, y + height);
                    etrpc.lineTo(x - halfWidth, y);
                    etrpc.lineTo(x + halfWidth, y);
                    etrpc.lineTo(x + halfWidth, y + height);
                    etrpc.moveTo(x - halfWidth + 4, y);
                    etrpc.lineTo(x - halfWidth + 4, y + height);
                    etrpc.moveTo(x + halfWidth - 4, y);
                    etrpc.lineTo(x + halfWidth - 4, y + height);
                    etrpc.fill();
                    etrpc.stroke();
                };

                //中
                for (var amgis = 0; amgis < 4; amgis++) {
                    doTheTrees(208, 80 + 16 * amgis, 12 + 4 * amgis, 16, ([2, 1, 7, 6])[amgis]);
                }
                etrpc.beginPath();
                etrpc.moveTo(184, 144);
                etrpc.lineTo(232, 144);
                etrpc.lineTo(224, 152);
                etrpc.lineTo(192, 152);
                etrpc.closePath();
                etrpc.fill();
                etrpc.stroke();

                //大
                for (var iDidDoDoing = 0; iDidDoDoing < 7; iDidDoDoing++) {
                    doTheTrees(268, 80 + 12 * iDidDoDoing, 8 + 2 * iDidDoDoing, 12, ([5, 3, 2, 1, 7, 6, 8])[iDidDoDoing]);
                }
                etrpc.beginPath();
                etrpc.moveTo(248, 164);
                etrpc.lineTo(288, 164);
                etrpc.lineTo(284, 168);
                etrpc.lineTo(252, 168);
                etrpc.closePath();
                etrpc.fill();
                etrpc.stroke();
            }
        }
    }

    function updateSaveURLs(){
        document.getElementById("downloadGeneral").setAttribute("href",canvasGeneral.toDataURL());
        document.getElementById("downloadFragile").setAttribute("href",canvasFragile.toDataURL());
        document.getElementById("downloadFragileActive").setAttribute("href",canvasFragileActive.toDataURL());
        document.getElementById("downloadMover").setAttribute("href",canvasMover.toDataURL());
        document.getElementById("downloadMoverAuto").setAttribute("href",canvasMoverAuto.toDataURL());
        document.getElementById("downloadEnemy").setAttribute("href",canvasEnemy.toDataURL());
    }
    document.getElementById("generateButton").addEventListener("click", function(){
        generateTextures();
        updateSaveURLs();
    }, true);
    generateTextures();
    updateSaveURLs();
}, true);
