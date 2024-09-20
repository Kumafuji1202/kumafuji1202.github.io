// Version data
var versionName = "v1.2.2";
var versionNum = 22;

// Language data
var langDataRaw = {
    languages: [
        {
            name: "English",
            code: "en"
        },
        {
            name: "日本語",
            code: "ja"
        }
    ],
    translations: {
        "versionName" : {
            "en": versionName,
            "ja": versionName
        },
        "langName": {
            "en": "English",
            "ja": "日本語"
        },
        "appTitle": {
            "en": "Rolling Sky Spritesheet Generator",
            "ja": "ローリングスカイテクスチャメーカー"
        },
        "returnToTop": {
            "en": "Return to top page",
            "ja": "トップページに戻る"
        },
        "generateButton": {
            "en": "Refresh render",
            "ja": "テクスチャ画像手動更新"
        },
        "settingsFormHeading": {
            "en": "Settings",
            "ja": "設定"
        },
        "selectLang": {
            "en": "Select Language",
            "ja": "言語を選択"
        },
        "selectDesign": {
            "en": "Select color mode",
            "ja": "デザインモードを選択"
        },
        "lightMode": {
            "en": "Light Mode",
            "ja": "ライトモード"
        },
        "darkMode": {
            "en": "Dark Mode",
            "ja": "ダークモード"
        },
        "localStorageDataClearButton": {
            "en": "Clear theme data in local storage and reload",
            "ja": "ローカルストレージに保存されたテーマデータを削除してリロード"
        },
        "localStorageClearConfirmation": {
            "en": "Are you sure you want to remove theme data cached in local storage? This action can't be restored",
            "ja": "ローカルストレージのテーマデータを削除しますか? この操作は復元できません"
        },
        "saveLoadWindow": {
            "en": "Save/Load",
            "ja": "保存・読込"
        },
        "versionInformationWindow": {
            "en": "Version information",
            "ja": "バージョン情報"
        },
        "changelogLink": {
            "en": "see changelog page",
            "ja": "変更ログページ(作成中)を見る"
        },
        "colorImportWindow": {
            "en": "Import colors",
            "ja": "色を抽出"
        },
        "recentUpdates": {
            "en": "Recent updates",
            "ja": "最近のアップデート"
        },
        "openImportOrigin": {
            "en": "Open Enemy spritesheet file to import colors from",
            "ja": "色をインポートするファイルを開く"
        },
        "openFileControl": {
            "en": "Open file",
            "ja": "ファイルを開く"
        },
        "extractColorsControl": {
            "en": "Get colors",
            "ja": "色を抽出"
        },
        "colorPartId": {
            "en": "Color part ID",
            "ja": "色部分ID"
        },
        "useExtractedColors": {
            "en": "Use extracted colors",
            "ja": "抽出した色を使用"
        },
        "cancel": {
            "en": "Cancel",
            "ja": "キャンセル"
        },
        "tilesTab": {
            "en": "Tiles",
            "ja": "床"
        },
        "enemyTab": {
            "en": "Enemy",
            "ja": "障害物"
        },
        
        //ここからメインフォーム用
        "colorHexCode": {
            "en": "Hexadecimal color code",
            "ja": "十六進数カラーコード"
        },
        "usedColor": {
            "en": "Color",
            "ja": "使用色"
        },
        "settingChangeConfirmation": {
            "en": "Are you sure you want to replace current setting?",
            "ja": "既にある設定を置き換えますか?"
        },
        "active": {
            "en": "Active",
            "ja": "起動時"
        },
        "inactive": {
            "en": "Inactive",
            "ja": "未起動時"
        },
        "front": {
            "en": "Front",
            "ja": "手前"
        },
        "back": {
            "en": "Back",
            "ja": "奥"
        },
        "side": {
            "en": "Side",
            "ja": "側面"
        },
        "top": {
            "en": "Top",
            "ja": "上面"
        },
        "topEnd": {
            "en": "Top",
            "ja": "上端"
        },
        "bottomEnd": {
            "en": "Bottom",
            "ja": "下端"
        },
        "leftEnd": {
            "en": "Left",
            "ja": "左端"
        },
        "rightEnd": {
            "en": "Right",
            "ja": "右端"
        },
        "inner": {
            "en": "Inner",
            "ja": "内側"
        },
        "outer": {
            "en": "Outer",
            "ja": "外側"
        },
        "recommendedImgSize": {
            "en": "(Recommended image size: ",
            "ja": "(推奨画像サイズ: "
        },
        "importImages": {
            "en": "Import texture images",
            "ja": "画像をインポート"
        },
        "texturePartUnavailable": {
            "en": "This part is unavailable with current top right part settings.",
            "ja": "現在の右上部分の設定ではこの領域は使用できません。"
        },
        "patternColor": {
            "en": "Pattern color",
            "ja": "模様色"
        },
        "backgroundColor": {
            "en": "Background color",
            "ja": "背景色"
        },
        "innerColor": {
            "en": "Inner part",
            "ja": "内部"
        },
        "tone#": {
            "en": "Tone ",
            "ja": "トーン"
        },
        "color#": {
            "en": "Color ",
            "ja": "色"
        },
        "object": {
            "en": "Object",
            "ja": "オブジェクト"
        },
        "part": {
            "en": "Part",
            "ja": "部分"
        },
        "glow": {
            "en": "Glow",
            "ja": "発光"
        },
        "gradation": {
            "en": "Gradation",
            "ja": "グラデーション"
        },
        "colorUsageList": {
            "en": "Color usage list",
            "ja": "色対応表"
        },
        "patternStyleFromRS": {
            "en": "Rolling Sky",
            "ja": "ローリング・スカイ"
        },
        "patternStyleFanmade": {
            "en": "Fanmade",
            "ja": "ファンメイド"
        },
        "importStatus": {
            "en": "Import status",
            "ja": "アップロード状況"
        },
        "removeImage": {
            "en": "Remove image",
            "ja": "画像を削除"
        },
        "presets": {
            "en": "Use preset",
            "ja": "プリセットを使用"
        },
        "textureExtractInfo": {
            "en": "You can extract Rolling Sky spritesheets from <a href=\"https://mega.nz/file/4iEmzQrA#C1aniTxKeDZg2pUuLabl8mOkBhK8teP1juIgbdP45Ds\" target=\"_blank\">the IPA of the <b>Dinosaur Valley</b> version</a> or <a href=\"https://mega.nz/file/QSMVzAZa#6eZ0SXw6FGLwom7M7wtDv_4hCbtCyk5DhEnCgnSu14o\" target=\"_blank\">APK of the <b>Chess Fortress</b> version(better quality)</a>, Rolling Universe spritesheets (including General and Background for the Rolling World theme) from the IPA of v2.2.1 (no decryption needed), and Rolling Fanmade spritesheets (excluding Pharaoh spritesheets, which can be found in Rolling Sky instead) from Rolling Sky Remake <a class=\"ae\" href=\"https://www.mediafire.com/file/t8pivs9totk3pj6/RSR0.6.5b.zip/file\" target=\"_blank\">v0.6b</a> PC version.",
            "ja": "Rolling Skyのオリジナルテクスチャは<a href=\"https://mega.nz/file/4iEmzQrA#C1aniTxKeDZg2pUuLabl8mOkBhK8teP1juIgbdP45Ds\" target=\"_blank\"><b>恐竜谷</b>のバージョンのIPA</a>または<a href=\"https://mega.nz/file/QSMVzAZa#6eZ0SXw6FGLwom7M7wtDv_4hCbtCyk5DhEnCgnSu14o\" target=\"_blank\"><b>割拠(以下略</b>のバージョンのTapTap版</a>(より画像品質が良い)から取り出せます。Rolling Universeのテクスチャ(Rolling WorldテーマのGeneralとBackgroundを含む)はv2.2.1のIPAから(暗号化解除の必要はありません)、Rolling Fanmadeのテクスチャ(ファラオ系以外。ファラオ系はRSにも入っている)はRolling Sky Remake <a class=\"ae\" href=\"https://www.mediafire.com/file/t8pivs9totk3pj6/RSR0.6.5b.zip/file\" target=\"_blank\">v0.6b</a> PC版からそれぞれ取り出せます。"
        },
        "groundSettingsHeading": {
            "en": "Ground settings",
            "ja": "普通床の設定"
        },
        "groundColor": {
            "en": "Ground tile color",
            "ja": "普通床の色"
        },
        "groundLineColor": {
            "en": "Ground tile edge color",
            "ja": "普通床の線の色"
        },
        "groundSideColor": {
            "en": "Ground tile side color",
            "ja": "普通床の側面の色"
        },
        "groundEdgeStyle": {
            "en": "Ground tile edge style",
            "ja": "普通床の端の形"
        },
        "groundEdgeStyleNone": {
            "en": "No decoration",
            "ja": "装飾無し"
        },
        "groundEdgeStyleCut": {
            "en": "Cut corners",
            "ja": "角落ち"
        },
        "groundEdgeStyleOutline": {
            "en": "With outlines",
            "ja": "縁取り有り"
        },
        "groundEdgeStyleCutNoEdge": {
            "en": "Cut corners (no thick edge)",
            "ja": "角落ち(枠線無し)"
        },
        "groundEdgeDefaultContent": {
            "en": "No extra customization for this ground pattern available",
            "ja": "この通常床の模様にはカスタマイズオプションがありません"
        },
        "outlinedGroundOutlineColor": {
            "en": "Outline",
            "ja": "端の帯"
        },
        "outlinedGroundEdgeColor": {
            "en": "Tile group edge line",
            "ja": "端の線"
        },
        "volcanicGradient": {
            "en": "Use Volcano-style gradient",
            "ja": "火山風グラデーション"
        },
        "lineStyle": {
            "en": "Line style",
            "ja": "床の線のスタイル"
        },
        "lineStyleNormal": {
            "en": "Normal",
            "ja": "通常"
        },
        "lineStyleDouble": {
            "en": "Double(Sky)",
            "ja": "2段(空)"
        },
        "lineStyleThin": {
            "en": "Thin(Volcano)",
            "ja": "細い(火山)"
        },
        "lineStyleSharp": {
            "en": "Sharp(Sci-Tech)",
            "ja": "鋭い(科学技術)"
        },
        "lineStyleGlowing": {
            "en": "Glowing(Deep Space)",
            "ja": "発光(深空)"
        },
        "lineStyleThick": {
            "en": "Thick",
            "ja": "太い"
        },
        "groundInnerStyle": {
            "en": "Inner pattern",
            "ja": "内部模様"
        },
        "groundStyleNoDeco": {
            "en": "No decoration",
            "ja": "装飾無し"
        },
        "groundStylePlates": {
            "en": "Plates (Interstellar Leap)",
            "ja": "四角板 (インターステラーリープ)"
        },
        "groundInnerDecoPlates": {
            "en": "Plates",
            "ja": "板"
        },
        "groundInnerDecoPlatePartition": {
            "en": "Partition",
            "ja": "仕切り"
        },
        "groundInnerDecoScrewsInner": {
            "en": "Screws (inner)",
            "ja": "ネジ内側"
        },
        "groundInnerDecoScrewsBorder": {
            "en": "Screws (border)",
            "ja": "ネジ縁"
        },
        "jumppadColor": {
            "en": "undefined",
            "ja": "ジャンプ床の色"
        },
        "activeJumppadGlow": {
            "en": "Active jumppad glow type",
            "ja": "起動時の面部分発光タイプ"
        },
        "jumppadGlowNone": {
            "en": "None",
            "ja": "発光無し"
        },
        "jumppadGlowNormal": {
            "en": "Normal",
            "ja": "通常"
        },
        "jumppadGlowHigh": {
            "en": "High",
            "ja": "強い"
        },
        "jumppadGlowEdge": {
            "en": "Edge",
            "ja": "縁"
        },
        "jumppadSettingsHeading": {
            "en": "Jumppad settings",
            "ja": "ジャンプ床の設定"
        },
        "jumppadStyle": {
            "en": "Jumppad pattern",
            "ja": "ジャンプ床の模様"
        },
        "jumppadStyleNormal": {
            "en": "No decoration",
            "ja": "装飾無し"
        },
        "jumppadStyleCut": {
            "en": "Cut corners",
            "ja": "角落ち"
        },
        "jumppadStyleGrid": {
            "en": "Grid lines",
            "ja": "格子模様"
        },
        "jumppadStyleSquares": {
            "en": "Squares(sky castle)",
            "ja": "四角形(天空の城)"
        },
        "jumppadStyleChina": {
            "en": "Spiral Patterns",
            "ja": "中国風渦巻き模様"
        },
        "jumppadStyleChecker": {
            "en": "Checkerboard",
            "ja": "市松模様"
        },
        "jumppadStyleHexagons": {
            "en": "Hexagons",
            "ja": "六角形模様"
        },
        "jumppadStyleCave": {
            "en": "Circle(Cave)",
            "ja": "円形(洞窟)"
        },
        "jumppadStyleChemistry": {
            "en": "Grid+square(Chemistry)",
            "ja": "格子+四角(化学)"
        },
        "jumppadStyleDynamicHill": {
            "en": "Squares(Dynamic Hill)",
            "ja": "四角(ダイナミックな丘)"
        },
        "jumppadStyleScale": {
            "en": "Scale 1.1",
            "ja": "鱗 1.1"
        },
        "jumppadStyleSimpleCircle": {
            "en": "Simple circle(Faith)",
            "ja": "円"
        },
        "jumppadStyleSparklesComet": {
            "en": "Sparkles (Comet's Arrival)",
            "ja": "キラキラ (Comet's Arrival)"
        },
        "jumppadStyleSparklesAnniv": {
            "en": "Sparkles II (A Dream of 7 Years)",
            "ja": "星 (A Dream of 7 Years)"
        },
        "jumppadStyleRollingWorld": {
            "en": "Circle+rhombus(Rolling World)",
            "ja": "円+四角(Rolling World)"
        },
        "jumppadStyleMystery": {
            "en": "Rhombus",
            "ja": "ひし形"
        },
        "jumppadStyleDoubleSqLines": {
            "en": "Double squares",
            "ja": "二重四角 (Taurus)"
        },
        "jumppadCustomizationDefaultContent": {
            "en": "No extra customization for this jumppad pattern available",
            "ja": "このジャンプ床の模様にはカスタマイズオプションがありません"
        },
        "fanmadePatternStyleDisclaimer": {
            "en": "この模様は本家ローリングスカイには存在しない模様であり、あくまでもこのツール作者が似せて作ったものなので正確な寸法では(多分)ありません。",
            "ja": "この模様は本家ローリングスカイには存在しない模様であり、あくまでもこのツール作者が似せて作ったものなので正確な寸法では(多分)ありません。"
        },
        "squaresJumppadInactiveInner": {
            "en": "Jumppad square color(inner)",
            "ja": "四角の内側の色"
        },
        "squaresJumppadInactiveOuter": {
            "en": "Jumppad square color(outer)",
            "ja": "四角の枠の色"
        },
        "squaresJumppadActiveInner": {
            "en": "Active jumppad square color(inner)",
            "ja": "四角の内側の色(起動時)"
        },
        "squaresJumppadActiveOuter": {
            "en": "Active jumppad square color(outer)",
            "ja": "四角の枠の色(起動時)"
        },
        "activeOnlyGrid": {
            "en": "Active only",
            "ja": "起動時のみ"
        },
        "inactiveGridColor": {
            "en": "Inactive grid color",
            "ja": "非起動時の格子模様の色"
        },
        "gridJumppadInactiveInner": {
            "en": "Inactive jumppad pattern color",
            "ja": "非起動時の格子模様の色"
        },
        "checkerJumppadInactiveEdge": {
            "en": "Edge square color(inactive)",
            "ja": "非起動時の端側の四角の色"
        },
        "checkerJumppadActiveEdge": {
            "en": "Edge square color(active)",
            "ja": "起動時の端側の四角の色"
        },
        "inactiveJumppadGlow": {
            "en": "Inactive jumppad glow",
            "ja": "非起動時のジャンプ床面部分の発光"
        },
        "jumpTextureUsageExpl": {
            "en": "Only the bottom-left half of the jumppad texture will be used. For the jumppads in the actual gameplay, a 180-degree-rotated copy of the said part will fill the rest. This makes the jumppad designs forcedly point-symmetrical.",
            "ja": "ジャンプ床テクスチャは左下の1/2部分しか使われません。実際のジャンプ床では使用される部分が180度回転して複製されて残りの半分を埋めるので、ジャンプ床のデザインは強制的に点対称になります。"
        },
        "generalVariationHeading": {
            "en": "General color variation settings",
            "ja": "補助パレットの設定"
        },
        "generalPaletteSummary": {
            "en": "This part is used for obstacle shadows (uses Var.1), goal structure and some obstacles such as pillars(uses Var.2~4) and spotlights(uses Var.2).",
            "ja": "この領域は障害物の影(トーン1)、ゴールの部分や柱(トーン2-4)やスポットライト(トーン2)等一部の障害物に使われています。"
        },
        "generalVariation1": {
            "en": "Variation 1",
            "ja": "トーン1"
        },
        "generalVariation2": {
            "en": "Variation 2",
            "ja": "トーン2"
        },
        "generalVariation3": {
            "en": "Variation 3",
            "ja": "トーン3"
        },
        "generalVariation4": {
            "en": "Variation 4",
            "ja": "トーン4"
        },
        "fragileSettingHeading": {
            "en": "Fragile settings",
            "ja": "ガラス床の設定"
        },
        "fragileAlpha": {
            "en": "Fragile opacity",
            "ja": "不透明度"
        },
        "fragileStyle": {
            "en": "Fragile edge decoration",
            "ja": "縁装飾"
        },
        "fragileStylePlain": {
            "en": "No decorations",
            "ja": "装飾無し"
        },
        "fragileStyleStripes": {
            "en": "Striped outlines",
            "ja": "縞模様の縁"
        },
        "fragileStyleallLines": {
            "en": "FragileActive boxes(VR Fairyland)",
            "ja": "箱 (VRの世界)"
        },
        "fragileStyleCave": {
            "en": "Decorated corner(Cave)",
            "ja": "角の装飾(洞窟)"
        },
        "fragileStyleIntShuttle": {
            "en": "Arrows(Interstellar Shuttle)",
            "ja": "矢印(星間シャトル)"
        },
        "fragileLineStyleDouble": {
            "en": "Double",
            "ja": "二重"
        },
        "fragileCustomizationDefaultContent": {
            "en": "No extra customization for this fragile pattern available",
            "ja": "このガラス床の模様にはカスタマイズオプションがありません"
        },
        "fragileStripeColor": {
            "en": "Stripe Color",
            "ja": "縞模様の色"
        },
        "fragileActiveStripeColor": {
            "en": "Stripe Color(active)",
            "ja": "縞模様の色(起動時)"
        },
        "fragileInnerStyle": {
            "en": "Inner decoration",
            "ja": "内部模様"
        },
        "fragileStyleNoDeco": {
            "en": "No decorations",
            "ja": "模様無し"
        },
        "fragileStyleSnowflake": {
            "en": "Snowflake",
            "ja": "雪模様"
        },
        "moverSettingHeading": {
            "en": "Mover settings",
            "ja": "移動床の設定"
        },
        "mover": {
            "en": "Mover",
            "ja": "発動床"
        },
        "automover": {
            "en": "Automover",
            "ja": "連動床"
        },
        "moverSameColor": {
            "en": "Use the same color for movers/automovers and ground",
            "ja": "移動床の色に通常床の色を流用する"
        },
        "moverOutlineColor": {
            "en": "Outline",
            "ja": "縁"
        },
        "moverOutlineBorderColor": {
            "en": "Outline border",
            "ja": "縁の線"
        },
        "moverActiveArrowColor": {
            "en": "Active arrow",
            "ja": "三角"
        },
        "moverActiveArrowBorderColor": {
            "en": "Active arrow border",
            "ja": "三角の縁"
        },
        "moverArrowTopColor": {
            "en": "Arrow top color",
            "ja": "移動床三角の土台上面"
        },
        "moverArrowUpperSideColor": {
            "en": "Arrow upper side color",
            "ja": "移動床三角の端の切り込み面"
        },
        "moverArrowSideColor": {
            "en": "Arrow side color",
            "ja": "移動床三角の側面"
        },
        "moverNoOutlines": {
            "en": "No outlines",
            "ja": "強制線消し"
        },
        "midGroundSettingHeading": {
            "en": "MidGround settings",
            "ja": "通過オブジェクトの設定"
        },
        "midGroundTopColor": {
            "en": "Top color",
            "ja": "上端の色"
        },
        "midGroundBottomColor": {
            "en": "Bottom color",
            "ja": "下端の色"
        },
        "midGroundWindows": {
            "en": "Add windows",
            "ja": "窓の追加"
        },
        "midGroundWindowsTop": {
            "en": "Windows top color",
            "ja": "窓上端"
        },
        "midGroundWindowsMiddle": {
            "en": "Windows middle color",
            "ja": "窓中央"
        },
        "midGroundWindowsBottom": {
            "en": "Windows bottom color",
            "ja": "窓下端"
        },
        "finishLineSettingHeading": {
            "en": "Finish line settings",
            "ja": "ゴールテープの設定"
        },
        "finishLineColorA": {
            "en": "Color A",
            "ja": "色A"
        },
        "finishLineColorB": {
            "en": "Color B",
            "ja": "色B"
        },
        "finishLineInactive": {
            "en": "Inactive",
            "ja": "到達前"
        },
        "finishLineActive": {
            "en": "Active",
            "ja": "到達後"
        },
        "finishLineActiveLine": {
            "en": "Active edge line",
            "ja": "到達後のブロック辺の線"
        },
        "gemSettingHeading": {
            "en": "Low/Middle quality gem settings",
            "ja": "低/中品質ジェムの設定"
        },
        "gemColor": {
            "en": "Gem color",
            "ja": "基本色"
        },
        "gemLineColor": {
            "en": "Gem line color",
            "ja": "線の色"
        },
        "gemLightColor": {
            "en": "Gem lighter color",
            "ja": "明るい色"
        },
        "useNeonbox": {
            "en": "Use Neonboxes",
            "ja": "ネオンボックスを使用"
        },
        "objectPreview": {
            "en": "Object preview",
            "ja": "プレヴュー"
        },
        "lightSettingHeading": {
            "en": "Light settings (A)",
            "ja": "光の設定 (A)"
        },
        "radialLightSettingHeading": {
            "en": "Radial Light (A1)",
            "ja": "円形の光 (A1)"
        },
        "lightOuterColor": {
            "en": "Outer Color",
            "ja": "外側"
        },
        "lightInnerColor": {
            "en": "Inner Color",
            "ja": "内側",
        },
        "linearLightSettingHeading": {
            "en": "Linear Light (A2~4)",
            "ja": "線形の光 (A2~4)",
        },
        "linearLightStyle": {
            "en": "Linear light style",
            "ja": "スタイル",
        },
        "linearLightStyleOriginal": {
            "en": "Original",
            "ja": "オリジナル",
        },
        "linearLightStyleScratch": {
            "en": "Scratch",
            "ja": "Scratch風",
        },
        "linearLightSameColor": {
            "en": "Use the same color for all types of lights",
            "ja": "全種類の光を同じ色にする(電子迷宮レーザーを使用する場合はオフ推奨)",
        },
        "linearLightASettingHeading": {
            "en": "Linear Light A(A2): Used for laser",
            "ja": "線形の光A (A2): 通常レーザーで使用",
        },
        "linearLightBSettingHeading": {
            "en": "Linear Light B(A3): Used for spotlight, UFO, Sci-Tech laser",
            "ja": "線形の光B (A3): スポットライト, UFO, 科学技術レーザーで使用",
        },
        "topRightSettingHeading": {
            "en": "Primary theme area settings (B)",
            "ja": "右上の設定 (B)",
        },
        "topRightType": {
            "en": "Usage",
            "ja": "使用方法",
        },
        "TRAdditionalPalette": {
            "en": "Additional palette",
            "ja": "追加パレット",
        },
        "topRightFloater": {
            "en": "Floater (fl)",
            "ja": "星 (fl)",
        },
        "RSRFloaterInfo": {
            "en": "This top-right setting is only useful in RS edits, since the Floater texture assignment are modified in RSR.",
            "ja": "RSRでは星の使用するEnemyテクスチャ部分が変更されているのでこの右上設定はRSエディットでのみ意味を成します。",
        },
        "floaterMainColor": {
            "en": "Main color (fl1)",
            "ja": "基本色 (fl1)",
        },
        "floaterSpikeInnerColor": {
            "en": "Spike inner color (fl2)",
            "ja": "棘の内側 (fl2)",
        },
        "floaterInactiveEdgeColor": {
            "en": "Inactive edge color (fl3)",
            "ja": "起動前の縁 (fl3)",
        },
        "floaterActiveEdgeColor": {
            "en": "Active edge color (fl4)",
            "ja": "起動後の縁 (fl4)",
        },
        "floaterInactiveShadowColor": {
            "en": "Inactive edge shadow",
            "ja": "起動前の縁の影",
        },
        "floaterActiveShadowColor": {
            "en": "Active edge shadow",
            "ja": "起動後の縁の影",
        },
        "topRightCrystal": {
            "en": "Crystal (Tetris, Candy, Alone) (cr)",
            "ja": "結晶 (テトリス、飴、Alone) (cr)",
        },
        "crystalUseNeonboxExplainer": {
            "en": "Since RSR does not use the Enemy texture for neonboxes, this box does not have to be checked for RSR levels. Turning on this settings will corrupt the looks of two tetrominoes, tall crystal trees, and crystal gates.",
            "ja": "RSRはネオンボックスにEnemyのテクスチャを使用しないので、RSR用のテクスチャを作成する場合はこのチェックボックスのチェックは不要です。このチェックボックスをONにするとテトリミノ2つ、結晶の木(大)と結晶門がきれいに表示されなくなります。",
        },
        "russianTowerTop": {
            "en": "Russian tower top",
            "ja": "ロシア風タワー頂点",
        },
        "russianTowerMiddleTop": {
            "en": "Russian tower middle top face",
            "ja": "ロシア風タワーの中間の上面",
        },
        "russianTowerLowerTop": {
            "en": "Russian tower lower top face",
            "ja": "ロシア風タワーの下の方の上面",
        },
        "crystalInnerColor": {
            "en": "Inner Color",
            "ja": "内側",
        },
        "crystalOuterColor": {
            "en": "Outer Color",
            "ja": "外側",
        },
        "tetriminoOuterSameColor": {
            "en": "Use the same outer color for all tetrimino parts",
            "ja": "全てのテトリミノの枠線を同じ色にする",
        },
        "tetriminoGradient": {
            "en": "Apply gradients to all tetrimino parts",
            "ja": "全てのテトリミノにグラデーションを適用する",
        },
        "crystalCollection1": {
            "en": "Color 1",
            "ja": "パレット色1",
        },
        "crystalCollection2": {
            "en": "Color 2",
            "ja": "パレット色2",
        },
        "crystalCollection3": {
            "en": "Color 3",
            "ja": "パレット色3",
        },
        "crystalCollection4": {
            "en": "Color 4",
            "ja": "パレット色4",
        },
        "crystalCollection5": {
            "en": "Color 5",
            "ja": "パレット色5",
        },
        "crystalCollection6": {
            "en": "Color 6",
            "ja": "パレット色6",
        },
        "crystalCollection7": {
            "en": "Color 7",
            "ja": "パレット色7",
        },
        "crystalCollection8": {
            "en": "Color 8",
            "ja": "パレット色8",
        },
        "tetriminoes": {
            "en": "Tetriminoes",
            "ja": "テトリミノ",
        },
        "crystalGate": {
            "en": "Crystal gate",
            "ja": "結晶門",
        },
        "iceCube": {
            "en": "Ice cube",
            "ja": "出現氷塊",
        },
        "crystalTree": {
            "en": "Crystal trees",
            "ja": "結晶の木",
        },
        "russianTowers": {
            "en": "Russian towers",
            "ja": "ロシア風の塔",
        },
        "topRightGeometry": {
            "en": "Geometry (Cube, Matrix) (cb)",
            "ja": "幾何 (立方、行列) (cb)",
        },
        "TRPresetCube": {
            "en": "Cube (Enemy29)",
            "ja": "立方 (Enemy29)",
        },
        "TRPresetMatrix": {
            "en": "Matrix (Enemy28)",
            "ja": "行列 (Enemy28)",
        },
        "cubeStructure": {
            "en": "Cube structure",
            "ja": "構造物キューブ",
        },
        "cubeStructureType": {
            "en": "Pattern",
            "ja": "模様",
        },
        "cubeStructureOriginal": {
            "en": "Original",
            "ja": "本家と同じ",
        },
        "cubeStructureTop": {
            "en": "Top (cb1)",
            "ja": "上面",
        },
        "cubeStructureFront": {
            "en": "Front (cb2)",
            "ja": "手前面",
        },
        "cubeStructureFrame": {
            "en": "Frame",
            "ja": "枠",
        },
        "largeOctahedronSettingHeading": {
            "en": "Large octahedron",
            "ja": "巨大八面体",
        },
        "largeOctahedronTriangleSideA": {
            "en": "Triangle inner side color A",
            "ja": "上側の面の内部三角形の色 A",
        },
        "largeOctahedronTriangleSideB": {
            "en": "Triangle inner side color B",
            "ja": "上側の面の内部三角形の色 B",
        },
        "spinCubeSettingHeading": {
            "en": "Spinning Cubes",
            "ja": "回転立方体",
        },
        "spinCubeType": {
            "en": "Front rhombus pattern",
            "ja": "手前面の模様",
        },
        "spinCubeOriginal": {
            "en": "Original",
            "ja": "基本",
        },
        "originalSpinCubeColorA": {
            "en": "Upper left, lower right",
            "ja": "左上と右下",
        },
        "originalSpinCubeColorB": {
            "en": "Lower left, upper right",
            "ja": "右上と左下",
        },
        "frontRhombus": {
            "en": "Import here",
            "ja": "ここに画像をインポート",
        },

        "topRight1Up": {
            "en": "Pixel (1UP, 8Bit) (px)",
            "ja": "像素 (1UP、8ビット) (px)",
        },
        "TRPreset1Up": {
            "en": "1UP (Enemy27)",
            "ja": "1UP (Enemy27)",
        },
        "TRPreset8Bits": {
            "en": "8Bits (Enemy26)",
            "ja": "8ビット (Enemy26)",
        },
        "TRPresetBlueGame": {
            "en": "Blue Game (Enemy25)",
            "ja": "青1UP (Enemy25)",
        },
        "1UpPrimaryGradation": {
            "en": "Primary Gradation (used for fighters and consoles)",
            "ja": "第一グラデーション(戦闘機とゲーム機に使用)",
        },
        "1UpPrimaryGradationConflictSolution": {
            "en": "Conflict solution",
            "ja": "競合の解決",
        },
        "1UpPrimaryGradationConflictSolutionExplainer": {
            "en": "The bottom edges of sides of activated half jump tiles use a small incomprehensibly random location on the Primary Gradation region along with one on the 64x64 square at the top right. The Console obstacle also uses the region (note that the Fighter which also uses the Primary Gradation does not), and thus these two objects conflict. You can either:",
            "ja": "起動した半ジャンプ床の側面は下端が64×64の正方形の部分とは別に第一グラデーションの領域上の中央付近の理解不能な場所にある小さな領域を使用します。この領域はゲーム機の障礙物にも用いられ(同じ第一グラデーションを用いる戦闘機は使用しない)、そのため競合します。以下の解決方法のうち作成するテーマに配置するオブジェクトにあったものをお選びください。",
        },
        "1UpPriorConsole": {
            "en": "prioritize Console (the Primary Gradation color will appear on sides of activated Small Jump pads, so it's not recommended to use Small Jump unless the primary gradation color is near that of the background enough)",
            "ja": "ゲーム機を優先する(起動した半ジャンプ床の側面下端に第一グラデーションの色が現れる為、グラデーションのいろが背景の色に十分に近くない限り半ジャンプ床の使用は推奨されません。)",
        },
        "1UpPriorHjmp": {
            "en": "prioritize half jump (a small rectangle will appear on the Console obstacle)",
            "ja": "半ジャンプ床を優先する(ゲーム機上に小さな長方形が現れます。)",
        },
        "1UpSecondaryGradation": {
            "en": "Secondary Gradation (used for monsters)",
            "ja": "第二グラデーション(3種モンスターに使用)",
        },
        "1UpInvaderEyeSurrounding": {
            "en": "Invader Eye Surrounding",
            "ja": "インベーダーの目の周囲",
        },
        "1UpConsoleDoubleButtons": {
            "en": "Console Double Buttons",
            "ja": "ゲーム機横長ボタン",
        },
        "1UpConsoleSextupleButtons": {
            "en": "Console Sextuple Buttons",
            "ja": "ゲーム機微小ビット",
        },
        "objName257A": {
            "en": "Bee",
            "ja": "蜂",
        },
        "1UpBeeEyes": {
            "en": "Eyes",
            "ja": "眼",
        },
        "1UpBeeWings": {
            "en": "Wings",
            "ja": "羽",
        },
        "topRightAncient": {
            "en": "Ancient (Relics, Fairy Tale) (ac)",
            "ja": "古代 (遺跡、童話) (ac)",
        },
        "TRPresetRelics": {
            "en": "Relics (Enemy34)",
            "ja": "遺跡 (Enemy34)",
        },
        "TRPresetFairyTale": {
            "en": "Fairy Tale (Enemy35)",
            "ja": "童話 (Enemy35)",
        },
        "relicsOwl": {
            "en": "Owl",
            "ja": "フクロウ",
        },
        "relicsOwlFaceY": {
            "en": "Face dark part",
            "ja": "顔の暗い部分",
        },
        "relicsOwlEyeOuter": {
            "en": "Eye outer",
            "ja": "眼の外側",
        },
        "relicsOwlBody": {
            "en": "Body",
            "ja": "体本体",
        },
        "relicsOwlLegs": {
            "en": "Legs",
            "ja": "脚",
        },
        "relicsOwlAbdomen": {
            "en": "Abdomen",
            "ja": "腹部",
        },
        "relicsOwlWings": {
            "en": "Wings",
            "ja": "羽",
        },
        "relicsJumpDome": {
            "en": "Jump dome",
            "ja": "ジャンプドーム",
        },
        "relicsJumpDomeDome": {
            "en": "Dome",
            "ja": "ドーム部分",
        },
        "relicsJumpDomeRing": {
            "en": "Ring",
            "ja": "リング部分",
        },
        "relicsJumpDomeBottom": {
            "en": "Inner bottom",
            "ja": "ドーム部分の底",
        },
        "relicsCrystal": {
            "en": "Crystal",
            "ja": "結晶の棘",
        },
        "relicsTree": {
            "en": "Tree",
            "ja": "木",
        },
        "relicsTreeLeaves": {
            "en": "Leaves",
            "ja": "葉",
        },
        "relicsTreeStem": {
            "en": "Stem and branches",
            "ja": "幹と枝",
        },

        "topRightNeon": {
            "en": "Neon (Neon, Dazzle, Faster) (dz)",
            "ja": "眩光 (ネオン、ダズル、より速く) (dz)",
        },
        "TRPresetNeon": {
            "en": "Neon (Enemy47)",
            "ja": "ネオン (Enemy47)",
        },
        "TRPresetDazzle": {
            "en": "Dazzle (Enemy45)",
            "ja": "ダズル (Enemy45)",
        },
        "TRPresetFaster": {
            "en": "Faster (Enemy46)",
            "ja": "より速く (Enemy46)",
        },
        "obstacleAccentColors": {
            "en": "Obstacle accent colors",
            "ja": "障害物アクセント色",
        },
        "neonRobotCord": {
            "en": "Robot cord",
            "ja": "ロボットのコード",
        },
        "neonRobotGears": {
            "en": "Robot gears",
            "ja": "ロボットの歯車",
        },
        "objNameNeonRoller": {
            "en": "Neon Roller",
            "ja": "ネオン回転輪",
        },
        "neonObjThinLines": {
            "en": "Thin Lines",
            "ja": "細い線",
        },
        "objName424": {
            "en": "Frisbee",
            "ja": "▽",
        },
        "neonObjCore": {
            "en": "core",
            "ja": "核",
        },
        "objName426": {
            "en": "Speaker",
            "ja": "スピーカー",
        },
        "neonObjUpperLines": {
            "en": "upper part lines",
            "ja": "上部の光る線",
        },
        "neonObjLight": {
            "en": "light (changes color)",
            "ja": "上部の色の変わる光",
        },
        "neonObjLowerLines": {
            "en": "lower part lines",
            "ja": "下部の光る線",
        },
        "objName427": {
            "en": "Robot",
            "ja": "ロボット",
        },
        "neonObjEye": {
            "en": "eye",
            "ja": "光る眼",
        },
        "neonObjEmission": {
            "en": "emission",
            "ja": "放出物",
        },
        "objName429": {
            "en": "Gate",
            "ja": "門",
        },
        "neonObjWing": {
            "en": "wing",
            "ja": "ウイング",
        },
        "objName430": {
            "en": "Keyboard",
            "ja": "キーボード",
        },
        "neonObjFrontSquareLines": {
            "en": "front square lines",
            "ja": "手前側の四角の線",
        },
        "neonObjLitKeys": {
            "en": "lit keys",
            "ja": "点滅部分",
        },
        "objName431": {
            "en": "Gear",
            "ja": "＜◇＞",
        },
        "neonObjOtherGlow": {
            "en": "other glowing parts",
            "ja": "その他発光部分",
        },

        "topRightHBD": {
            "en": "3rd Anniversary (Happy Birthday, Anniversary) (bd)",
            "ja": "三周年 (ハッピーバースデー、周年祭り) (bd)",
        },
        "TRPresetHBD": {
            "en": "Happy Birthday (Enemy62)",
            "ja": "ハッピーバースデー (Enemy62)",
        },
        "TRPresetAnniv": {
            "en": "Anniversary (Enemy63)",
            "ja": "周年祭り (Enemy63)",
        },
        "HBDGradation": {
            "en": "Additional Gradation",
            "ja": "追加グラデーション",
        },
        "HBDRainbow": {
            "en": "Rainbow",
            "ja": "虹",
        },
        "objName597": {
            "en": "Invader cake",
            "ja": "インベーダーケーキ",
        },
        "objName601": {
            "en": "Birthday gate",
            "ja": "三周年門",
        },
        "objName603": {
            "en": "Sweet roller tower",
            "ja": "飴の輪タワー",
        },
        "objName606": {
            "en": "Letters",
            "ja": "文字",
        },
        "objName612": {
            "en": "\"3\" statue",
            "ja": "3の構造物",
        },
        "objName613": {
            "en": "Star statue",
            "ja": "星の構造物",
        },
        "HBDObjCakeTop": {
            "en": "Cake top",
            "ja": "ケーキ上面",
        },
        "HBDObjBridgeFront": {
            "en": "Bridge front inner",
            "ja": "ブリッジ部分手前内側",
        },
        "HBDObj601BD3Parts": {
            "en": "Spots,<br>Message,<br>Crown",
            "ja": "点,<br>メッセージ,<br>王冠",
        },
        "HBDObjMsgSide": {
            "en": "Message side",
            "ja": "メッセージ側面",
        },
        "HBDObjMsgFront": {
            "en": "Message front",
            "ja": "メッセージ正面",
        },
        "HBDObjSpots": {
            "en": "Spots",
            "ja": "点",
        },
        "HBDObjLetterBase": {
            "en": "Letter base",
            "ja": "文字部分本体",
        },
        "HBDObj613BD1Parts": {
            "en": "Star base,<br>\"3YEARS\" fill parts,<br>Rainbow part outer,<br>Rainbow part inner",
            "ja": "星部分本体,<br>\"3YEARS\" 内部,<br>虹部分外側側面,<br>虹部分内側",
        },
        "HBDObj613BD3Parts": {
            "en": "Spots,<br>\"3YEARS \" frame parts",
            "ja": "点,<br>\"3YEARS \" フレーム部分",
        },

        "topRightT4A": {
            "en": "4th Anniversary (T4A, Birthday Party, ADo7Y) (t4a)",
            "ja": "四周年 (四周年、誕生パーティー、球の夢にも7年) (t4a)",
        },
        "TRPresetT4A": {
            "en": "The 4th Anniversary (Enemy87)",
            "ja": "四周年 (Enemy87)",
        },
        "TRPresetBdayParty": {
            "en": "Birthday Party (Enemy88)",
            "ja": "誕生パーティー (Enemy88)",
        },
        "TRPresetADo7Y": {
            "en": "A Dream of 7 Years (Enemy134)",
            "ja": "球の夢にも7年 (Enemy134)",
        },
        "TRPresetDreamTravel": {
            "en": "Dream Travel (Enemy133)",
            "ja": "夢幻の旅 (Enemy133)",
        },
        "t4aBalloonGradation": {
            "en": "Balloons(Gradation)",
            "ja": "風船(グラデーション)",
        },
        "t4aAdditionalObstacleBaseColor": {
            "en": "Additional obstacle main color",
            "ja": "追加障害物メイン色",
        },
        "t4aAdditionalObstacleAccentColor": {
            "en": "Additional obstacle accent color",
            "ja": "追加障害物アクセント色",
        },
        "t4aCakeStripes": {
            "en": "Cake side stripes",
            "ja": "ケーキ側面の帯",
        },
        "t4aCheckeredColor": {
            "en": "Checkered parts",
            "ja": "市松模様",
        },
        "mainQuadPalette": {
            "en": "Main quad palette",
            "ja": "四色パレットメイン",
        },
        "subQuadPalette": {
            "en": "Sub quad palette",
            "ja": "四色パレットサブ",
        },
        "linkQuadPalettes": {
            "en": "Use Main color for Sub palette (ignore input below)",
            "ja": "サブの四色パレットにメインの色を流用する",
        },
        "reuseMainPaletteColor4Stripes": {
            "en": "Use Main color Tone 2 for Cake side stripes (ignore input below)",
            "ja": "メイン四色パレット2段目の色を流用する",
        },

        "topRightSunshine": {
            "en": "Sunshine (Sunset Glow, Morning Dawn) (ss)",
            "ja": "陽光 (黄昏、曙) (ss)",
        },
        "TRPresetSunset": {
            "en": "Sunset Glow (Enemy91)",
            "ja": "黄昏 (Enemy91)",
        },
        "TRPresetDawn": {
            "en": "Morning Dawn (Enemy92)",
            "ja": "曙 (Enemy92)",
        },
        "sunshineFlipperGuide": {
            "en": "If you only need the flip tile pattern, you can use \"Sunshine\" flip tile pattern instead",
            "ja": "必要なのが反転床の模様のみなら、反転床模様「陽光系」を使用できます",
        },
        "sunshineMain": {
            "en": "Main",
            "ja": "基本色A",
        },
        "sunshineDarker": {
            "en": "Darker",
            "ja": "基本色B",
        },
        "sunshineAccent": {
            "en": "Accent",
            "ja": "アクセント色",
        },

        "topRightKepler": {
            "en": "Kepler (Kepler's Dream, Stars) (kp)",
            "ja": "ケプラー (ケプラーの夢、星の川) (kp)"
        },
        "TRPresetKepler": {
            "en": "Kepler's Dream (Enemy95)",
            "ja": "ケプラーの夢 (Enemy95)"
        },
        "TRPresetStars": {
            "en": "Stars (Enemy96)",
            "ja": "星の川 (Enemy96)"
        },
        "keplerRecordSurface": {
            "en": "Record disks",
            "ja": "各レコードの盤面"
        },
        "keplerB4TRUsage": {
            "en": "Used for record player pickups and non-vertical edge faces of the upper parts of Kepler archways",
            "ja": "各レコードプレーヤーのアーム先端付近, ケプラー門のアーチ部分非側面斜め面"
        },
        "keplerB4Usage": {
            "en": "Used for record player arms and uppermost parts of side antennae-like sticks of Kepler radio stations",
            "ja": "各レコードプレーヤーのアーム本体, ケプラーラジオの側面の出っ張りの最上部"
        },
        "keplerB11Usage": {
            "en": "Used for reflector edges and upper faces of bases of parabolic antennae, triple buttons, a horizontal line below it and knobs on Kepler radio stations, rings of ring planets and urchin planets, connectors between the upper parts and the legs of Kepler archways, front sides of spikes and edge faces of space chainsaws, and disk droppers",
            "ja": "発信アンテナのパラボラ縁部分と本体上向き部分, ケプラーラジオのつまみ・3連ボタンとその下の横線, リング惑星及びウニ惑星のリング, ケプラー門のアーチ部分・足部分の接続部, ケプラーチェーンソーの棘前面と前側の斜め面, ディスク落としの上側背景に使用"
        },
        "keplerGradation": {
            "en": "Additional Gradation",
            "ja": "追加グラデーション"
        },
        "keplerGradationUsage": {
            "en": "Used for outer surfaces of ring planets and record planets, the ball parts of space chainsaws and asteroids (outside of craters).",
            "ja": "小惑星クレーター以外部分, リング惑星及びレコード惑星の外表面部分, ケプラーチェーンソーのボール部分に使用"
        },
        "topRightNewGeneric": {
            "en": "New Generic (ng)",
            "ja": "新汎用 (ng)"
        },
        "importNewGenericColors": {
            "en": "Extract New Generic colors from an existing Enemy spritesheet",
            "ja": "新汎用領域色を既にあるEnemyファイルから抽出"
        },

        "subBSettingHeading": {
            "en": "Secondary theme area settings",
            "ja": "第二テーマ領域設定",
        },
        "subBType": {
            "en": "Usage",
            "ja": "使用方法",
        },
        "subBNoPattern": {
            "en": "No pattern",
            "ja": "模様無し(単色)",
        },
        "subBClassicalRoller": {
            "en": "Classical roller",
            "ja": "初代車輪",
        },
        "doubleLines": {
            "en": "Double lines",
            "ja": "線を倍増",
        },
        "subBDesert": {
            "en": "Palm tree trunk",
            "ja": "ヤシの木の幹",
        },
        "subBHalloween": {
            "en": "Halloween",
            "ja": "初代ハロウィン",
        },
        "subBHalloweenMultiPurposeGradation": {
            "en": "Multi-purpose gradation (used for pumpkin calyces, eyeball stew and eyes of monster trees)",
            "ja": "多用途グラデーション (カボチャの蔕, 目玉スープ, 怪物の木の目に使用)",
        },
        "subBHalloweenGateSkull": {
            "en": "Skull-shaped gate decoration",
            "ja": "門の頭蓋骨型装飾",
        },
        "subBHalloweenPumpkin": {
            "en": "Pumpkins",
            "ja": "カボチャ",
        },
        "subBChris": {
            "en": "Christmas/Candy",
            "ja": "飴・聖夜"
        },
        "subBPresetChrisBlue": {
            "en": "Christmas Night (Enemy18)",
            "ja": "クリスマスの夜 (Enemy18)",
        },
        "subBPresetChrisYellow": {
            "en": "Christmas Town (Enemy19)",
            "ja": "クリスマスの町 (Enemy19)",
        },
        "subBPresetCandyDay": {
            "en": "Candy (Enemy23)",
            "ja": "昼の飴 (Enemy23)",
        },
        "subBPresetCandyNight": {
            "en": "Sweet Paradise (Enemy24)",
            "ja": "夜の飴 (Enemy24)",
        },
        "chrisBottomLeftAttention": {
            "en": "Some obstacles belonging to this theme use bottom left part of the Enemy spritesheets. For their better look, we recommend you to delete all \"Stripes\" and turn on \"Fill bottommost part\" in \"Bottom left settings(F)\".",
            "ja": "このテーマ選択ではEnemyの左下のグラデーションを使用します。このテーマにおいて障害物が綺麗に色付けされるようにするために、「基本側面の設定 (F)」で「線」をすべて削除し、「左下の隅を使用する」をONにすることを推奨します。",
        },
        "chrisAdditionalPalette": {
            "en": "Top-right additional palette",
            "ja": "右上追加パレット",
        },
        "chrisGradationA": {
            "en": "Gradation 1",
            "ja": "グラデーション1",
        },
        "chrisGradationB": {
            "en": "Gradation 2",
            "ja": "グラデーション2",
        },
        "BRAdditionalPalette": {
            "en": "Bottom-right additional palette",
            "ja": "右下追加パレット",
        },
        "neonBoxSign": {
            "en": "Neonbox signs",
            "ja": "ネオンボックスのマーク",
        },
        "flipTileSettingHeading": {
            "en": "Flipper tile settings",
            "ja": "翻転床",
        },
        "flipTileType": {
            "en": "Flipper tile type",
            "ja": "模様タイプ",
        },
        "flipperObverse": {
            "en": "Obverse",
            "ja": "表",
        },
        "flipperReverse": {
            "en": "Reverse",
            "ja": "裏",
        },
        "flipTileCube": {
            "en": "Triangles (Cube)",
            "ja": "X形 (立方)",
        },
        "flipTileChecker": {
            "en": "Checkered (Poker)",
            "ja": "市松模様 (トランプ)",
        },
        "flipTileHolly": {
            "en": "Holly flower (Varying Christmas)",
            "ja": "花模様 (幻のクリスマス)",
        },
        "flipTileRhombus": {
            "en": "Rhombus (Spring Festival)",
            "ja": "四角模様 (春節)",
        },
        "flipTileSquares": {
            "en": "Squares (Microchip)",
            "ja": "四角模様 (マイクロチップ)",
        },
        "flipTileULines": {
            "en": "U-shaped lines (Psychedelic Music)",
            "ja": "U字型の線 (幻想的なサウンド)",
        },
        "flipTileStar": {
            "en": "Five-pointed star (The 4th Anniversary)",
            "ja": "星型 (四周年)",
        },
        "flipTileSemicircles": {
            "en": "Semicircles (Kepler's Dream)",
            "ja": "円形 (ケプラーの夢)",
        },
        "flipTileDaoFu": {
            "en": "Dao fu (Auspicious Jade Rabbit)",
            "ja": "倒福 (玉兎に瑞雲)",
        },
        "flipTileRing": {
            "en": "Ring (Horizon Cruise)",
            "ja": "輪 (ホライゾンクルーズ)",
        },
        "flipTileCross": {
            "en": "Cross shield (Chess Fortress)",
            "ja": "十字の盾 (割拠盤上　逐鹿群雄)",
        },
        "flipTileNuclear": {
            "en": "Nuclear hazard sign (Lab - confidential(old))",
            "ja": "核ハザード (ラボ・極秘(旧))",
        },
        "flipTileBiohazard": {
            "en": "Biohazard sign (Lab - confidential(new))",
            "ja": "バイオハザードマーク (ラボ・極秘(新))",
        },
        "flipTileEight": {
            "en": "8 (E-Love)",
            "ja": "8 (電・愛)",
        },
        "flipTileSakura": {
            "en": "Cherry Blossom (Flower Dance)",
            "ja": "桜の花 (飛花落花)",
        },
        "flipTileShootingStars": {
            "en": "Shooting Stars (New Year)",
            "ja": "流れ星 (新年)",
        },
        "flipTileSmiley": {
            "en": "☻ (Happy)",
            "ja": "床にTBS (うれしい)",
        },
        "flipTileSmile": {
            "en": "Smile (Happy)",
            "ja": "床にTBS (うれしい)",
        },
        "flipTileFrown": {
            "en": "Frown (Happy)",
            "ja": ":( (うれしい)",
        },
        "flipTileNeedle": {
            "en": "Needle (Knit Kingdom)",
            "ja": "縫い針 (ニット王国)"
        },
        "flipTileHourglass": {
            "en": "Hourglass (Chronos)",
            "ja": "砂時計 (とき)"
        },
        "flipTileClub": {
            "en": "Club (Phantom Thief)",
            "ja": "クラブ (怪盗)"
        },
        "flipTileSparkle": {
            "en": "Sparkle (Disco Tempo)",
            "ja": "キラキラ (ミッドナイトディスコ)"
        },
        "flipTileEnchantedLamp": {
            "en": "Eclipse (Enchanted Lamp)",
            "ja": "蝕󠄀 (魔法のランプ)"
        },
        "flipTileSparkleTwo": {
            "en": "Sparkle II (Westland)",
            "ja": "キラキラ Ⅱ (ウェストランド)"
        },
        "flipTileParade": {
            "en": "(Parade Pageantry)",
            "ja": ""
        },
        "flipTileBrazil": {
            "en": "Leaves (Brazil)",
            "ja": "四つ葉 (ブラジル)"
        },
        "flipTileKingdomWar": {
            "en": "Crest (Kingdom War)",
            "ja": "紋章 (王国戦争)"
        },
        "flipTileWizardOfOz": {
            "en": "Crest (Wizard of Oz)",
            "ja": "葉? (オズの魔法使い)"
        },
        "flipTileCheckerEdged": {
            "en": "Checker + edge (3D Spatial Zone)",
            "ja": "市松模様(枠付き) (3D Spatial Zone)",
        },
        "flipTileHeart": {
            "en": "Heart",
            "ja": "ハート形",
        },
        "flipTileCits": {
            "en": "Castle in the Sky",
            "ja": "天空の城風",
        },
        "flipTileSunshine": {
            "en": "Sunshine",
            "ja": "陽光系",
        },
        "flipTileFakeGround": {
            "en": "Fake ground tile",
            "ja": "擬態床"
        },
        "cubeFlipperColorA": {
            "en": "Color A",
            "ja": "前後の枠と左右の内側三角"
        },
        "cubeFlipperColorB": {
            "en": "Color B",
            "ja": "左右の枠と前後の内側三角"
        },
        "alternatingEdgeColsFlipperColorA": {
            "en": "Color A",
            "ja": "前後の枠"
        },
        "alternatingEdgeColsFlipperColorB": {
            "en": "Color B",
            "ja": "左右の枠"
        },
        "checkerFlipperColorA": {
            "en": "Far left - near right",
            "ja": "左奥と右手前"
        },
        "checkerFlipperColorB": {
            "en": "Near left - far right",
            "ja": "右奥と左手前"
        },
        "rhombusFlipperRhombusColor": {
            "en": "Rhombus",
            "ja": "四角形"
        },
        "demisemicirclesFlipperCenterColor": {
            "en": "Center",
            "ja": "中央"
        },
        "demisemicirclesFlipperColorB": {
            "en": "Far left - near right",
            "ja": "左奥と右手前"
        },
        "demisemicirclesFlipperColorC": {
            "en": "Near left - far right",
            "ja": "右奥と左手前"
        },
        "hollyFlipperPetalColor1": {
            "en": "Petals A",
            "ja": "花びら"
        },
        "hollyFlipperPetalColor2": {
            "en": "Petals B",
            "ja": "中央と花びらの縁"
        },
        "hollyFlipperSpotColor": {
            "en": "Spots",
            "ja": "点"
        },
        "flipperFrameColor": {
            "en": "Frame",
            "ja": "枠"
        },
        "flipperInnerFrameColor": {
            "en": "Inner Frame",
            "ja": "内側の枠"
        },
        "flipperFrameBackgroundColor": {
            "en": "Frame background",
            "ja": "枠の背景"
        },
        "flipperSideColor": {
            "en": "Flipper side color",
            "ja": "側面の色",
        },
        "smallJumpSettingHeading": {
            "en": "Small jump pad settings",
            "ja": "小ジャンプの設定",
        },
        "mainStripeSettingHeading": {
            "en": "Main stripe settings (C)",
            "ja": "基本縞模様の設定 (C)",
        },
        "mainStripeThickness": {
            "en": "Main stripe thickness",
            "ja": "縞の太さ",
        },
        "mainStripeThick": {
            "en": "Thick (T=25, I=46.22)",
            "ja": "太い (T=25, I=46.22)",
        },
        "mainStripeNormal": {
            "en": "Normal (T=13, I=25.77)",
            "ja": "普通 (T=13, I=25.77)",
        },
        "mainStripeThin": {
            "en": "Thin (T=10, I=25.75)",
            "ja": "細い (T=10, I=25.75)",
        },
        "mainStripeCustom": {
            "en": "Custom",
            "ja": "カスタム",
        },
        "mainStripeCustomThickness": {
            "en": "Thickness",
            "ja": "太さ",
        },
        "mainStripeCustomInterval": {
            "en": "Interval",
            "ja": "周期",
        },
        "mainStripeCustomStart": {
            "en": "Start position",
            "ja": "開始左右位置",
        },
        "mainStripeBack": {
            "en": "Back",
            "ja": "背景",
        },
        "mainStripeFront": {
            "en": "Front",
            "ja": "縞",
        },
        "mainStripeColorSteps": {
            "en": "Color steps",
            "ja": "色段階数",
        },
        "mainStripe1Tone": {
            "en": "Single tone",
            "ja": "1段階",
        },
        "mainStripe2Tones": {
            "en": "Two tones",
            "ja": "2段階",
        },
        "mainStripe3TonesThin": {
            "en": "Three tones (Thin middle part)",
            "ja": "3段階 (太い中央部分)",
        },
        "mainStripe3TonesThick": {
            "en": "Three tones (Thick middle part)",
            "ja": "3段階 (細い中央部分)",
        },
        "mainStripeTone1": {
            "en": "Tone 1",
            "ja": "トーン 1",
        },
        "mainStripeTone2": {
            "en": "Tone 2",
            "ja": "トーン 2",
        },
        "mainStripeTone3": {
            "en": "Tone 3",
            "ja": "トーン 3",
        },
        "addCenterLine": {
            "en": "Add center line",
            "ja": "中央に細い線を入れる",
        },
        "middleLeftSettingHeading": {
            "en": "Primary general palette settings (D)",
            "ja": "立体基本色Aの設定 (D)",
        },
        "middleRightSettingHeading": {
            "en": "Secondary general palette settings (E)",
            "ja": "立体基本色Bの設定 (E)",
        },
        "importMiddleColors": {
            "en": "Extract middle colors from an existing Enemy spritesheet",
            "ja": "立体基本色を既にあるEnemyファイルから抽出"
        },
        "middleLeftTone1": {
            "en": "Tone 1 (D1)",
            "ja": "トーン1 (D1)",
        },
        "middleLeftTone2": {
            "en": "Tone 2 (D2)",
            "ja": "トーン2 (D2)",
        },
        "middleLeftTone3": {
            "en": "Tone 3 (D3)",
            "ja": "トーン3 (D3)",
        },
        "middleLeftTone4": {
            "en": "Tone 4 (D4)",
            "ja": "トーン4 (D4)",
        },
        "middleLeftTone5": {
            "en": "Tone 5 (D5)",
            "ja": "トーン5 (D5)",
        },
        "middleLeftTone6": {
            "en": "Tone 6 (D6)",
            "ja": "トーン6 (D6)",
        },
        "middleLeftTone7": {
            "en": "Tone 7 (E7)",
            "ja": "トーン7 (E7)",
        },
        "middleRightTone1": {
            "en": "Tone 1 (E1)",
            "ja": "トーン1 (E1)",
        },
        "middleRightTone2": {
            "en": "Tone 2 (E2)",
            "ja": "トーン2 (E2)",
        },
        "middleRightTone3": {
            "en": "Tone 3 (E3)",
            "ja": "トーン3 (E3)",
        },
        "middleRightTone4": {
            "en": "Tone 4 (E4)",
            "ja": "トーン4 (E4)",
        },
        "middleRightTone5": {
            "en": "Tone 5 (E5)",
            "ja": "トーン5 (E5)",
        },
        "middleRightTone6": {
            "en": "Tone 6 (E6)",
            "ja": "トーン6 (E6)",
        },
        "face": {
            "en": "Face",
            "ja": "面",
        },
        "line": {
            "en": "Line",
            "ja": "線",
        },
        "middlePaletteLineThickness": {
            "en": "Line thickness",
            "ja": "線の太さ",
        },
        "mplNormal": {
            "en": "Normal",
            "ja": "普通",
        },
        "mplThin": {
            "en": "Thin",
            "ja": "細い",
        },
        "mplThick": {
            "en": "Thick",
            "ja": "太い",
        },
        "mplNoLine": {
            "en": "Remove lines",
            "ja": "線無し",
        },
        "mplGlow": {
            "en": "Glowing",
            "ja": "発光",
        },
        "swapMainPalette": {
            "en": "Swap primary/secondary general palette colors",
            "ja": "立体基本色を入れ替える",
        },
        "bottomLeftSettingHeading": {
            "en": "Bottom left settings (F)",
            "ja": "基本側面の設定 (F)",
        },
        "BLLightColor": {
            "en": "Light",
            "ja": "明",
        },
        "BLMediumColor": {
            "en": "Medium",
            "ja": "中",
        },
        "BLDarkColor": {
            "en": "Dark",
            "ja": "暗",
        },
        "bottomLeftNormal": {
            "en": "Normal",
            "ja": "一般",
        },
        "bottomLeftSkyCastle": {
            "en": "Sky castle",
            "ja": "天空の城式",
        },
        "BLGradation": {
            "en": "Gradation",
            "ja": "グラデーション",
        },
        "BLGradationTop": {
            "en": "Gradation top",
            "ja": "グラデーション上端",
        },
        "BLGradationBottom": {
            "en": "Gradation bottom",
            "ja": "グラデーション下端",
        },
        "BLStripes": {
            "en": "Stripes",
            "ja": "線",
        },
        "BLStripeWidth": {
            "en": "Stripe width",
            "ja": "帯の幅",
        },
        "BLStripeLine": {
            "en": "Put lines between stripes",
            "ja": "帯の間に線を入れる",
        },
        "fillBottommost": {
            "en": "Fill bottommost part",
            "ja": "左下の隅を使用する",
        },
        "rowRemovalConfirmation": {
            "en": "Are you sure you want to remove this row?",
            "ja": "この帯を削除しますか?",
        },
        "skyCastleBLTriangleTip": {
            "en": "Triangle tips",
            "ja": "三角形の小片",
        },
        "bottomRightSettingHeading": {
            "en": "Bottom right settings (G)",
            "ja": "右下の設定 (G)",
        },
        "bottomRightRiserOutlined": {
            "en": "Outlined riser",
            "ja": "線の入ったRiser",
        },
        "bottomRightRiserRound": {
            "en": "Round riser",
            "ja": "滑らかなRiser",
        },
        "riserTopMain": {
            "en": "Riser top primary color",
            "ja": "Riser上面基本色",
        },
        "riserTopInactiveLine": {
            "en": "Riser top secondary color (inactive)",
            "ja": "Riser上面アクセント色(未起動)",
        },
        "riserTopActiveLine": {
            "en": "Riser top secondary color (active)",
            "ja": "Riser上面アクセント色(起動)",
        },
        "riserTopInner": {
            "en": "Riser top inner:",
            "ja": "Riser上面内側:",
        },
        "riserTopLine": {
            "en": "Riser top middle line:",
            "ja": "Riser上面帯:",
        },
        "riserTopOuter": {
            "en": "Riser top outer",
            "ja": "Riser上面外側:",
        },
        "riserLine": {
            "en": "Riser line",
            "ja": "Riser上面線",
        },
        "riserInactive": {
            "en": "inactive",
            "ja": "未起動時",
        },
        "riserActive": {
            "en": "active",
            "ja": "起動時",
        },
        "useRiserLine": {
            "en": "Add octagonal edge line",
            "ja": "Riserの縁に線を描画",
        },
        "filenameGeneral": {
            "en": "General",
            "ja": "General<br>(通常床・立体)",
        },
        "filenameFragile": {
            "en": "Fragile",
            "ja": "Fragile<br>(ガラス床)",
        },
        "filenameFragileActive": {
            "en": "FragileActive",
            "ja": "FragileActive<br>(落下中のガラス床)",
        },
        "filenameMover": {
            "en": "Mover",
            "ja": "Mover<br>(発動床)",
        },
        "filenameMoverAuto": {
            "en": "MoverAuto",
            "ja": "MoverAuto<br>(連動床)",
        },
        "filenameEnemy": {
            "en": "Enemy",
            "ja": "Enemy<br>(障害物)",
        },
        "canvasAltText": {
            "en": "Canvas not available",
            "ja": "Canvasが使用できません。",
        },
        "fileLoading": {
            "en": "Loading file...",
            "ja": "ファイルを読み込み中",
        },
        "loadFileComplete": {
            "en": "Successfully loaded the file",
            "ja": "ファイルの読み込みに成功しました",
        },
        "loadError": {
            "en": "An error occured while loading the file",
            "ja": "エラーが発生しました",
        },
        "loadSavedThemeConfirmation": {
            "en": "Are you sure you want to replace current setting?",
            "ja": "既にある設定を削除しますか?",
        },
        "imgRemoveConfirmation": {
            "en": "Are you sure you want to remove this imported image?",
            "ja": "インポート画像を削除しますか?",
        },
        "themeName": {
            "en": "Project name(only used for the file name)",
            "ja": "テーマの名前(保存されたファイルの名前にのみ使用されます。)",
        },
        "loadTheme": {
            "en": "Load saved JSON project",
            "ja": "保存したテーマ(JSON)を読み込む",
        },
        "saveTheme": {
            "en": "Save/download",
            "ja": "テーマファイルをダウンロード",
        },
        "downloadZip": {
            "en": "Download as .zip",
            "ja": "Zipフォルダに一括ダウンロード"
        },
        "saveBatch": {
            "en": "Batch save",
            "ja": "一括保存",
        },
        "saveIndiv": {
            "en": "Download files individually",
            "ja": "個別にデータをダウンロード",
        },
        "saveJSON": {
            "en": "Save project in JSON format",
            "ja": "テーマをJSON形式で保存",
        },
        "loadSavedTheme": {
            "en": "Load saved project",
            "ja": "保存したテーマを読み込む",
        },
        "downloadGeneral": {
            "en": "Download General",
            "ja": "Generalをダウンロード",
        },
        "downloadFragile": {
            "en": "Download Fragile",
            "ja": "Fragileをダウンロード",
        },
        "downloadFragileActive": {
            "en": "Download FragileActive",
            "ja": "FragileActiveをダウンロード",
        },
        "downloadMover": {
            "en": "Download Mover",
            "ja": "Moverをダウンロード",
        },
        "downloadMoverAuto": {
            "en": "Download MoverAuto",
            "ja": "MoverAutoをダウンロード",
        },
        "downloadEnemy": {
            "en": "Download Enemy",
            "ja": "Enemyをダウンロード",
        }
    }
};

//Marking new features with a 🆕
["flipTileEnchantedLamp", "flipTileParade", "useNeonbox", "flipTileSparkleTwo", "flipTileWizardOfOz"].forEach(each => {
    langDataRaw.translations[each].ja = "🆕 " + langDataRaw.translations[each].ja;
    langDataRaw.translations[each].en = "🆕 " + langDataRaw.translations[each].en;
});
var lang = new LanguageManager(langDataRaw);

/*window.addEventListener("load", function () {
    lang.initSelectBox(document.getElementById("languageSelectBox"), "en");
    lang.useLanguage("en");
}, true);*/

//Color Extractor tool data
var newGenericInfo = [
    //あ
    {left: 192, top: 0},
    {left: 224, top: 0},
    {left: 256, top: 0},
    {left: 288, top: 0},
    {left: 192, top: 32},
    {left: 224, top: 32},
    {left: 256, top: 32},
    {left: 288, top: 32},
    //け
    {left: 192, top: 64},
    {left: 224, top: 64},
    {left: 256, top: 64},
    {left: 288, top: 64},
    {left: 320, top: 64},
    {left: 352, top: 64},
    {left: 384, top: 64},
    {left: 416, top: 64},
    //ち
    {left: 192, top: 96},
    {left: 224, top: 96},
    {left: 256, top: 96},
    {left: 288, top: 96},
    {left: 320, top: 96},
    {left: 352, top: 96},
    {left: 384, top: 96},
    {left: 416, top: 96},
    //の
    {left: 256, top: 128},
    {left: 288, top: 128},
    {left: 384, top: 128},
    {left: 416, top: 128},
    {left: 256, top: 160},
    {left: 288, top: 160},
    {left: 384, top: 160},
    {left: 416, top: 160}
];
var colorExtractorData = {
    "enemyMiddle": [
        {id: "middleLeftTone1Line", x: 140, y: 220},
        {id: "middleLeftTone1Face", x: 158, y: 220},
        {id: "middleLeftTone2Line", x: 204, y: 220},
        {id: "middleLeftTone2Face", x: 232, y: 220},
        {id: "middleLeftTone3Line", x: 140, y: 284},
        {id: "middleLeftTone3Face", x: 158, y: 284},
        {id: "middleLeftTone4Line", x: 204, y: 284},
        {id: "middleLeftTone4Face", x: 232, y: 284},
        {id: "middleLeftTone5Line", x: 140, y: 348},
        {id: "middleLeftTone5Face", x: 158, y: 348},
        {id: "middleLeftTone6Line", x: 204, y: 348},
        {id: "middleLeftTone6Face", x: 198, y: 336},
        {id: "middleLeftTone7", x: 223, y: 350},
        {id: "middleRightTone1Line", x: 268, y: 220},
        {id: "middleRightTone1Face", x: 286, y: 220},
        {id: "middleRightTone2Line", x: 332, y: 220},
        {id: "middleRightTone2Face", x: 350, y: 220},
        {id: "middleRightTone3Line", x: 268, y: 284},
        {id: "middleRightTone3Face", x: 286, y: 284},
        {id: "middleRightTone4Line", x: 332, y: 284},
        {id: "middleRightTone4Face", x: 350, y: 284},
        {id: "middleRightTone5Line", x: 268, y: 348},
        {id: "middleRightTone5Face", x: 286, y: 348},
        {id: "middleRightTone6Line", x: 332, y: 348},
        {id: "middleRightTone6Face", x: 350, y: 348}
    ],
    "enemyNewGeneric": (function () {
        let list = [];
        for (let region in newGenericInfo){
            list.push({
                id: "newGeneric_region_" + region + "_tone_1",
                x: newGenericInfo[region].left + 8,
                y: newGenericInfo[region].top + 8
            });
            list.push({
                id: "newGeneric_region_" + region + "_tone_2",
                x: newGenericInfo[region].left + 24,
                y: newGenericInfo[region].top + 8
            });
            list.push({
                id: "newGeneric_region_" + region + "_tone_3",
                x: newGenericInfo[region].left + 8,
                y: newGenericInfo[region].top + 24
            });
            list.push({
                id: "newGeneric_region_" + region + "_tone_4",
                x: newGenericInfo[region].left + 24,
                y: newGenericInfo[region].top + 24
            });
        }
        return list;
    })()
};

//Flip tile data (Translation keys and patterns)
//反転床の翻訳・色数データ
//
var flipTileData = {
    //立方スタイル
    "cube": {
        nameTranslationKey: "flipTileCube",
        colorCount: 2,
        translationKeys: [
                    "cubeFlipperColorA",
                    "cubeFlipperColorB"
                ],
        pattern: {
            colorCount: 2,
            drawer: function (c, u, b, e) {
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
            }
        }
    },
    //トランプスタイル
    "checker": {
        nameTranslationKey: "flipTileChecker",
        colorCount: 2,
        translationKeys: [
                    "checkerFlipperColorA",
                    "checkerFlipperColorB"
                ],
        pattern: {
            colorCount: 2,
            drawer: function (c, a, r, d) {
                c.fillStyle = r[0];
                c.fillRect(a, 0, 32, 32);
                c.fillRect(a + 32, 32, 32, 32);
                c.fillStyle = r[1];
                c.fillRect(a, 32, 32, 32);
                c.fillRect(a + 32, 0, 32, 32);
                return d;
            }
        }
    },
    //冬スタイル
    "holly": {
        nameTranslationKey: "flipTileHolly",
        colorCount: 5,
        translationKeys: [
                    "backgroundColor",
                    "flipperFrameColor",
                    "hollyFlipperPetalColor1",
                    "hollyFlipperPetalColor2",
                    "hollyFlipperSpotColor"
                ],
        pattern: {
            colorCount: 5,
            drawer: function (s, n, o, w) {
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
            }
        }
    },
    //春節スタイル
    "rhombus": {
        nameTranslationKey: "flipTileRhombus",
        colorCount: 4,
        translationKeys: [
                    "backgroundColor",
                    "flipperFrameColor",
                    "rhombusFlipperRhombusColor",
                    "flipperFrameBackgroundColor"
                ],
        pattern: {
            colorCount: 4,
            drawer: function (p, i, g, s) {
                p.fillStyle = g[3];
                p.fillRect(i, 0, 64, 64);
                p.fillStyle = g[0];
                p.fillRect(i + 7, 7, 50, 50);
                p.fillStyle = g[2];
                p.beginPath();
                p.moveTo(i + 33, 6);
                p.lineTo(i + 58, 33);
                p.lineTo(i + 31, 58);
                p.lineTo(i + 6, 31);
                p.closePath();
                p.fill();
                p.strokeStyle = g[1];
                p.lineWidth = 3;
                p.strokeRect(i + 4, 4, 56, 56);
                return s;
            }
        }
    },
    //マイクロスタイル
    "squares": {
        nameTranslationKey: "flipTileSquares",
        colorCount: 2,
        translationKeys: [
                    "backgroundColor",
                    "patternColor"
                ],
        pattern: {

            colorCount: 2,
            drawer: function (m, a, t, h) {
                m.lineWidth = 4;
                m.fillStyle = t[0];
                m.fillRect(a, 0, 64, 64);
                m.strokeStyle = t[1];
                m.strokeRect(a + 1.5, 1.5, 61, 61);
                m.strokeRect(a + 9.5, 9.5, 45, 45);
                m.fillStyle = m.strokeStyle;
                m.fillRect(a + 20, 20, 24, 24);
                return h;
            }
        }
    },
    //ディスコスタイル
    "uLines": {
        nameTranslationKey: "flipTileULines",
        colorCount: 2,
        translationKeys: [
                    "backgroundColor",
                    "patternColor"
                ],
        pattern: {

            colorCount: 3,
            drawer: function (r, a, v, e) {
                r.fillStyle = v[0];
                r.fillRect(a, 0, 64, 64);
                r.fillStyle = v[1];
                r.fillRect(a + 7.5, 0, 49, 56.5);
                r.fillStyle = v[0];
                r.fillRect(a + 12.5, 0, 39, 50.5);
                r.fillStyle = v[1];
                r.fillRect(a + 20, 0, 24, 40);
                return e;
            }
        }
    },
    //四周年スタイル
    "star": {
        nameTranslationKey: "flipTileStar",
        colorCount: 2,
        translationKeys: [
                    "backgroundColor",
                    "patternColor"
                ],
        pattern: {
            colorCount: 2,
            drawer: function (b, d, a, y) {
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
            }
        }
    },
    //ケプラースタイル
    "semicircles": {
        nameTranslationKey: "flipTileSemicircles",
        colorCount: 3,
        translationKeys: [
                    "demisemicirclesFlipperCenterColor",
                    "demisemicirclesFlipperColorB",
                    "demisemicirclesFlipperColorC"
                ],
        pattern: {
            colorCount: 3,
            drawer: function (s, t, a, r) {
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
            }
        }
    },
    //春節II
    "fortune": {
        nameTranslationKey: "flipTileDaoFu",
        colorCount: 2,
        translationKeys: [
                    "backgroundColor",
                    "patternColor"
                ],
        pattern: {
            colorCount: 2,
            drawer: function (l, u, c, k) {
                l.lineCap = "round";
                l.lineJoin = "round";
                l.fillStyle = c[0];
                l.fillRect(u, 0, 64, 64);

                l.strokeStyle = c[1];

                l.beginPath();
                l.moveTo(u + 55, 32);
                l.arc(u + 32, 32, 23, 0, 2 * Math.PI, false);
                l.closePath();

                l.moveTo(u + 29, 23);
                l.lineTo(u + 29, 15);
                l.arc(u + 32, 32, 17, -9 / 16 * Math.PI, -5 / 6 * Math.PI, true);

                l.moveTo(u + 29, 49);
                l.lineTo(u + 29, 27);
                l.arc(u + 32, 32, 17, -11 / 12 * Math.PI, 7 / 8 * Math.PI, true);

                l.moveTo(u + 23, 27);
                l.lineTo(u + 23, 47);

                l.moveTo(u + 34, 15);
                l.arc(u + 32, 32, 17, -7 / 16 * Math.PI, -3 / 10 * Math.PI, false);

                l.moveTo(u + 34, 22);
                l.lineTo(u + 34, 27);
                l.arc(u + 32, 32, 17, -1 / 12 * Math.PI, -1 / 5 * Math.PI, true);
                l.closePath();

                l.moveTo(u + 33, 33);
                l.arc(u + 32, 32, 17, 1 / 64 * Math.PI, 15 / 32 * Math.PI, false);
                l.closePath();

                l.moveTo(u + 34, 38);
                l.lineTo(u + 48, 38);

                l.moveTo(u + 40, 33);
                l.lineTo(u + 40, 45);

                l.lineWidth = 3;
                l.stroke();
                return k;
            }
        }
    },
    //ホライゾンクルーズ
    "ring": {
        nameTranslationKey: "flipTileRing",
        colorCount: 2,
        translationKeys: [
                    "backgroundColor",
                    "patternColor"
                ],
        pattern: {
            colorCount: 3,
            drawer: function (r, i, n, g) {
                r.fillStyle = n[0];
                r.fillRect(i, 0, 64, 64);
                r.lineWidth = 11;
                r.strokeStyle = n[2];
                r.beginPath();
                r.arc(i + 32, 32, 23, 0, 2 * Math.PI, false);
                r.stroke();
                r.lineWidth = 4;
                r.strokeStyle = n[1];
                r.strokeRect(i + 2, 2, 60, 60);
                return g;
            }
        }
    },
    //割拠盤上　逐鹿群雄
    "cross": {
        nameTranslationKey: "flipTileCross",
        colorCount: 3,
        translationKeys: [
                    "backgroundColor",
                    "flipperFrameColor",
                    "patternColor"
                ],
        pattern: {
            colorCount: 3,
            drawer: function (c, r, o, s) {
                c.fillStyle = o[1];
                c.fillRect(r, 0, 64, 64);
                c.fillStyle = o[0];
                c.fillRect(r + 4, 4, 56, 56);
                c.fillStyle = o[2];
                c.fillRect(r + 16, 14, 31, 36);
                c.strokeStyle = o[0];
                c.lineCap = "butt";
                c.lineWidth = 11;
                c.beginPath();
                c.moveTo(r + 31.5, 16);
                c.lineTo(r + 31.5, 48);
                c.stroke();
                c.lineWidth = 12;
                c.beginPath();
                c.moveTo(r + 18, 32);
                c.lineTo(r + 45, 32);
                c.stroke();
                return s;
            }
        }
    },
    //旧ラボ
    "nuclear": {
        nameTranslationKey: "flipTileNuclear",
        colorCount: 3,
        translationKeys: [
                    "backgroundColor",
                    "flipperFrameColor",
                    "patternColor"
                ],
        pattern: {
            colorCount: 3,
            drawer: function (n, u, k, e) {
                n.fillStyle = k[0];
                n.fillRect(u, 0, 64, 64);
                n.strokeStyle = k[1];
                n.lineWidth = 2;
                n.strokeRect(u + 4, 4, 56, 56);

                n.fillStyle = k[2];
                n.beginPath();
                n.arc(u + 32, 32, 3.5, 0, 2 * Math.PI);
                n.closePath();
                n.fill();
                for (let tr = 0; tr < 3; tr++) {
                    let m = tr * 2 * Math.PI / 3;
                    n.beginPath();
                    n.arc(u + 32, 32, 19, tr * 2 * Math.PI / 3, (tr * 2 + 1) * Math.PI / 3);
                    n.arc(u + 32, 32, 6, (tr * 2 + 1) * Math.PI / 3, tr * 2 * Math.PI / 3, true);
                    n.closePath();
                    n.fill();
                }
                return e;
            }
        }
    },
    //バイオハザード
    "biohazard": {
        nameTranslationKey: "flipTileBiohazard",
        colorCount: 3,
        translationKeys: [
                    "backgroundColor",
                    "flipperFrameColor",
                    "patternColor"
                ],
        pattern: {
            colorCount: 3,
            drawer: function (l, a, b, c) {
                l.fillStyle = b[0];
                l.fillRect(a, 0, 64, 64);
                l.strokeStyle = b[1];
                l.lineWidth = 2;
                l.strokeRect(a + 4, 4, 56, 56);

                l.strokeStyle = b[2];
                l.lineWidth = 3;
                l.beginPath();
                l.arc(a + 32, 33, 10, 0, 2 * Math.PI);
                l.stroke();
                l.fillStyle = b[2];
                for (let ugul = 0; ugul < 3; ugul++) {
                    let t = Math.PI * 2 * (ugul / 3);
                    let pos = [turn(2, 2, t),
                              turn(1, 4, t),
                              turn(-1, 22, t),
                              turn(18, 18, t),
                              turn(14, 22, t),
                              turn(6, 22, t),
                              turn(0, 18, t),
                              turn(-6, 22, t),
                              turn(-14, 22, t),
                              turn(-18, 18, t),
                              turn(1, 22, t),
                              turn(-1, 4, t),
                              turn(-2, 2, t)];
                    console.log(pos)
                    l.beginPath();
                    l.moveTo(a + 32 + pos[0].x, 32 + pos[0].y);
                    l.bezierCurveTo(a + 32 + pos[1].x, 32 + pos[1].y, a + 32 + pos[2].x, 32 + pos[2].y, a + 32 + pos[3].x, 32 + pos[3].y);
                    l.bezierCurveTo(a + 32 + pos[4].x, 32 + pos[4].y, a + 32 + pos[5].x, 32 + pos[5].y, a + 32 + pos[6].x, 32 + pos[6].y);
                    l.bezierCurveTo(a + 32 + pos[7].x, 32 + pos[7].y, a + 32 + pos[8].x, 32 + pos[8].y, a + 32 + pos[9].x, 32 + pos[9].y);
                    l.bezierCurveTo(a + 32 + pos[10].x, 32 + pos[10].y, a + 32 + pos[11].x, 32 + pos[11].y, a + 32 + pos[12].x, 32 + pos[12].y);
                    l.closePath();
                    //l.stroke();
                    l.fill();
                }
                return c;
            }
        }
    },
    //8周年
    "eight": {
        nameTranslationKey: "flipTileEight",
        colorCount: 2,
        translationKeys: [
                    "backgroundColor",
                    "patternColor"
                ],
        pattern: {
            colorCount: 3,
            drawer: function (a, c, h, t) {
                a.fillStyle = h[1];
                a.fillRect(c, 0, 64, 64);
                a.fillStyle = h[0];
                a.fillRect(c + 6.5, 6.5, 51, 51);
                a.lineWidth = 5;
                a.strokeStyle = h[1];
                a.beginPath();
                a.arc(c + 32, 22.5, 10, 0, 2 * Math.PI, false);
                a.stroke();
                a.beginPath();
                a.arc(c + 32, 41.5, 9, 0, 2 * Math.PI, false);
                a.stroke();
                return t;
            }
        }
    },
    //飛花落花
    "sakura": {
        nameTranslationKey: "flipTileSakura",
        colorCount: 3,
        translationKeys: [
                    "backgroundColor",
                    "flipperFrameColor",
                    "patternColor"
                ],
        pattern: {
            colorCount: 3,
            drawer: function (h, i, k, a) {
                h.fillStyle = k[1];
                h.fillRect(i, 0, 64, 64);
                h.fillStyle = k[0];
                h.fillRect(i + 6.5, 6.5, 51, 51);
                h.fillStyle = k[2];
                for (let petal = 0; petal < 5; petal++) {
                    let pAngle = petal * (2 / 5) * Math.PI;
                    let pos = [
                        turn(0, 3, pAngle),
                        turn(7, 5.5, pAngle),
                        turn(10, 17, pAngle),
                        turn(2, 24, pAngle),
                        turn(0, 21, pAngle),
                        turn(-2, 24, pAngle),
                        turn(-10, 17, pAngle),
                        turn(-7, 5.5, pAngle),
                    ];
                    h.beginPath();
                    h.moveTo(i + 32 + pos[0].x, 30 + pos[0].y);
                    h.bezierCurveTo(i + 32 + pos[1].x, 30 + pos[1].y, i + 32 + pos[2].x, 30 + pos[2].y, i + 32 + pos[3].x, 30 + pos[3].y);
                    h.lineTo(i + 32 + pos[4].x, 30 + pos[4].y);
                    h.lineTo(i + 32 + pos[5].x, 30 + pos[5].y);
                    h.bezierCurveTo(i + 32 + pos[6].x, 30 + pos[6].y, i + 32 + pos[7].x, 30 + pos[7].y, i + 32 + pos[0].x, 30 + pos[0].y);
                    h.closePath();
                    h.fill();
                }
                return a;
            }
        }
    },
    //新年
    "shootingstars": {
        nameTranslationKey: "flipTileShootingStars",
        colorCount: 3,
        translationKeys: [
                    "backgroundColor",
                    "flipperFrameColor",
                    "patternColor"
                ],
        pattern: {
            colorCount: 3,
            drawer: function (h, a, p, y) {
                h.fillStyle = p[0];
                h.fillRect(a, 0, 64, 64);
                h.strokeStyle = p[1];
                h.lineWidth = 3;
                h.strokeRect(a + 1.5, 1.5, 61, 61);

                h.fillStyle = p[2]; //遊園地いい曲だね
                h.beginPath();
                for (let i = 0; i < 3; i++) {
                    //星
                    let starXpos = a + [19.5, 12.5, 28.5][i];
                    let starYpos = [18.5, 41, 52][i];
                    let starSize = [6.5, 8, 6.5][i];
                    h.moveTo(starXpos, starYpos + starSize);
                    for (let ii = 0; ii < 10; ii++) {
                        let angle = (ii / 10) * 2 * Math.PI;
                        let dist = starSize * (1 - (15 / 32) * (ii % 2));
                        h.lineTo(starXpos + dist * Math.sin(angle), starYpos + dist * Math.cos(angle));
                    }
                    h.closePath();

                    //跡
                    h.moveTo(a + [29, 21, 37][i], [16, 34, 47][i]);
                    h.bezierCurveTo(a + [32, 38, 46][i], [17, 32, 42][i],
                        a + [43, 55, 58][i], [16, 17, 24][i],
                        a + [55, 59, 60][i], [8, 8, 13][i]);
                    h.bezierCurveTo(a + [45, 57, 58][i], [21, 19, 30][i],
                        a + [35, 44, 50][i], [21, 38, 44][i],
                        a + [30, 26, 41][i], [21, 42, 52][i]);
                    h.closePath();
                }
                h.fill();
                return y;
            }
        }
    },
    //うれしい
    "smiley": {
        nameTranslationKey: "flipTileSmiley",
        colorCount: 2,
        translationKeys: [
                    "backgroundColor",
                    "patternColor"
                ],
        pattern: {

            colorCount: 3,
            drawer: function (s, m, i, l) {
                s.fillStyle = i[1];
                s.fillRect(m, 0, 64, 64);
                s.strokeStyle = i[0];
                s.lineCap = "round";

                s.lineWidth = 5.5;
                s.beginPath();
                s.arc(m + 32, 33.5, 25, 0, 2 * Math.PI, false);
                s.stroke();

                s.lineWidth = 6;
                s.beginPath();
                s.moveTo(m + 23, 37.5);
                s.lineTo(m + 23, 41.5);
                s.moveTo(m + 41, 37.5);
                s.lineTo(m + 41, 41.5);
                s.stroke();

                s.lineWidth = 5.5;
                if (l) {
                    s.beginPath();
                    s.moveTo(m + 22, 28);
                    s.bezierCurveTo(m + 23, 21, /**/ m + 28, 20, /**/ m + 32, 20);
                    s.bezierCurveTo(m + 36, 20, /**/ m + 41, 21, /**/ m + 42, 28);
                    s.stroke();
                } else {
                    s.beginPath();
                    s.moveTo(m + 22, 20);
                    s.bezierCurveTo(m + 23, 27, /**/ m + 28, 28, /**/ m + 32, 28);
                    s.bezierCurveTo(m + 36, 28, /**/ m + 41, 27, /**/ m + 42, 20);
                    s.stroke();
                }
                return l;
            }
        }
    },
    //うれしい(表)
    "smile": {
        nameTranslationKey: "flipTileSmile",
        colorCount: 2,
        translationKeys: [
                    "backgroundColor",
                    "patternColor"
                ],
        pattern: {

            colorCount: 3,
            drawer: function (s, m, i, l) {
                s.fillStyle = i[1];
                s.fillRect(m, 0, 64, 64);
                s.strokeStyle = i[0];
                s.lineCap = "round";

                s.lineWidth = 5.5;
                s.beginPath();
                s.arc(m + 32, 33.5, 25, 0, 2 * Math.PI, false);
                s.stroke();

                s.lineWidth = 6;
                s.beginPath();
                s.moveTo(m + 23, 37.5);
                s.lineTo(m + 23, 41.5);
                s.moveTo(m + 41, 37.5);
                s.lineTo(m + 41, 41.5);
                s.stroke();

                s.lineWidth = 5.5;
                s.beginPath();
                s.moveTo(m + 22, 28);
                s.bezierCurveTo(m + 23, 21, /**/ m + 28, 20, /**/ m + 32, 20);
                s.bezierCurveTo(m + 36, 20, /**/ m + 41, 21, /**/ m + 42, 28);
                s.stroke();
                return l;
            }
        }
    },
    //うれしい(裏側)
    "frown": {
        nameTranslationKey: "flipTileFrown",
        colorCount: 2,
        translationKeys: [
                    "backgroundColor",
                    "patternColor"
                ],
        pattern: {

            colorCount: 3,
            drawer: function (s, m, i, l) {
                s.fillStyle = i[1];
                s.fillRect(m, 0, 64, 64);
                s.strokeStyle = i[0];
                s.lineCap = "round";

                s.lineWidth = 5.5;
                s.beginPath();
                s.arc(m + 32, 33.5, 25, 0, 2 * Math.PI, false);
                s.stroke();

                s.lineWidth = 6;
                s.beginPath();
                s.moveTo(m + 23, 37.5);
                s.lineTo(m + 23, 41.5);
                s.moveTo(m + 41, 37.5);
                s.lineTo(m + 41, 41.5);
                s.stroke();

                s.lineWidth = 5.5;
                s.beginPath();
                s.moveTo(m + 22, 20);
                s.bezierCurveTo(m + 23, 27, /**/ m + 28, 28, /**/ m + 32, 28);
                s.bezierCurveTo(m + 36, 28, /**/ m + 41, 27, /**/ m + 42, 20);
                s.stroke();
                return l;
            }
        }
    },
    //ニット王国
    "needle": {
        nameTranslationKey: "flipTileNeedle",
        colorCount: 2,
        translationKeys: [
                    "backgroundColor",
                    "patternColor"
                ],
        pattern: {
            colorCount: 3,
            drawer: function (k, n, i, t) {
                k.fillStyle = i[1];
                k.fillRect(n, 0, 64, 64);

                //枠
                k.fillStyle = i[0];
                k.beginPath();
                //32,33を中心
                k.moveTo(n + 5, 6);
                k.arcTo(n + 32, 17, n + 59, 6, 40);
                k.lineTo(n + 59, 6);
                k.arcTo(n + 48, 33, n + 59, 60, 40);
                k.lineTo(n + 59, 60);
                k.arcTo(n + 32, 49, n + 5, 60, 40);
                k.lineTo(n + 5, 60);
                k.arcTo(n + 16, 33, n + 5, 6, 40);
                k.closePath();
                k.fill();

                //針
                k.fillStyle = i[2];
                k.beginPath();
                k.moveTo(n + 16, 49);
                k.lineTo(n + 42, 20);
                k.arcTo(n + 44, 18, n + 46, 20, 3);
                k.arcTo(n + 48, 22, n + 46, 24, 3);
                k.lineTo(n + 46, 24);
                k.lineTo(n + 17, 50);
                k.closePath();
                k.fill();

                k.fillStyle = i[0];
                k.beginPath();
                k.ellipse(n + 43, 23, 1.75, 1.25, -Math.PI / 4, 0, 2 * Math.PI);
                k.fill();
                return t;
            }
        }
    },
    //とき
    "hourglass": {
        nameTranslationKey: "flipTileHourglass",
        colorCount: 3,
        translationKeys: [
                    "backgroundColor",
                    "flipperFrameColor",
                    "patternColor"
                ],
        pattern: {
            colorCount: 3,
            drawer: function (t, i, m, e) {
                t.fillStyle = m[0];
                t.fillRect(i, 0, 64, 64);
                t.strokeStyle = m[1];
                t.lineWidth = 3
                t.strokeRect(i + 1.5, 1.5, 61, 61);

                t.fillStyle = m[2];
                t.beginPath();
                t.moveTo(i + 22, 5.5);
                t.lineTo(i + 42, 5.5);
                t.lineTo(i + 14, 59.5);
                t.lineTo(i + 50, 59.5);
                t.closePath();
                t.fill();
                return e;
            }
        }
    },
    //回答
    "club": {
        nameTranslationKey: "flipTileClub",
        colorCount: 4,
        translationKeys: [
                    "backgroundColor",
                    "flipperFrameColor",
                    "flipperInnerFrameColor",
                    "patternColor"
                ],
        pattern: {
            colorCount: 4,
            drawer: function (c, l, u, b) {
                c.fillStyle = u[0];
                c.fillRect(l, 0, 64, 64);
                c.strokeStyle = u[1];
                c.lineWidth = 3;
                c.strokeRect(l + 1.5, 1.5, 62, 62);

                c.fillStyle = u[2];
                c.beginPath();
                c.moveTo(l + 9, 9.5);
                c.lineTo(l + 56.5, 9.5);
                c.lineTo(l + 56.5, 56.5);
                c.lineTo(l + 9, 56.5);
                c.closePath();
                c.fill();

                //中の記号
                c.fillStyle = u[3];
                c.fill(new Path2D("M" + (l + 26) + ",12.5 h14" +
                    " v1 l-4,8 c4,-4.5 16,-3.5 16,7.5 c0,9 -10,10, -19,24" +
                    " c-9,-14 -19,-15 -19,-24 c0,-11 12,-12 16,-7.5 l-4,-8 z"));
                return b;
            }
        }
    },
    //ミッドナイトディスコ
    "sparkle": {
        nameTranslationKey: "flipTileSparkle",
        colorCount: 3,
        translationKeys: [
                    "backgroundColor",
                    "flipperFrameColor",
                    "patternColor"
                ],
        pattern: {
            colorCount: 3,
            drawer: function (s, p, k, l) {
                s.fillStyle = k[0];
                s.fillRect(p, 0, 64, 64);
                s.strokeStyle = k[1];
                s.lineWidth = 2.5;
                s.strokeRect(p + 7.5, 7.5, 49, 49);

                s.fillStyle = k[2];
                s.beginPath();
                s.moveTo(p + 31.5, 17.5);
                s.bezierCurveTo(p + 33.5, 26.5, p + 37.5, 30.5, p + 46.5, 32.5);
                s.bezierCurveTo(p + 37.5, 34.5, p + 33.5, 38.5, p + 31.5, 47.5);
                s.bezierCurveTo(p + 29.5, 38.5, p + 25.5, 34.5, p + 16.5, 32.5);
                s.bezierCurveTo(p + 25.5, 30.5, p + 29.5, 26.5, p + 31.5, 17.5);
                s.closePath();
                s.fill();

                return l;
            }
        }
    },
    //ブラジル
    "brazil": {
        nameTranslationKey: "flipTileBrazil",
        colorCount: 3,
        translationKeys: [
                    "backgroundColor",
                    "flipperFrameColor",
                    "patternColor"
                ],
        pattern: {
            colorCount: 3,
            drawer: function (b, r, z, l) {
                b.fillStyle = z[0];
                b.fillRect(r, 0, 64, 64);
                b.strokeStyle = z[1];
                b.lineWidth = 2;
                b.strokeRect(r + 1, 1, 62, 62);

                b.fillStyle = z[2];
                b.beginPath();
                b.moveTo(r + 6, 7);
                b.arcTo(r + 29, 9, r + 31, 32, 28);
                b.lineTo(r + 31, 32);
                b.arcTo(r + 8, 30, r + 6, 7, 28);
                b.closePath();
                b.moveTo(r + 57, 7);
                b.arcTo(r + 35, 9, r + 32, 32, 28);
                b.lineTo(r + 32, 32);
                b.arcTo(r + 55, 30, r + 57, 7, 28);
                b.closePath();
                b.moveTo(r + 6, 58);
                b.arcTo(r + 29, 56, r + 31, 32, 28);
                b.lineTo(r + 31, 33);
                b.arcTo(r + 8, 35, r + 6, 57, 28);
                b.closePath();
                b.moveTo(r + 57, 58);
                b.arcTo(r + 35, 56, r + 32, 32, 28);
                b.lineTo(r + 32, 33);
                b.arcTo(r + 55, 35, r + 57, 57, 28);
                b.closePath();
                b.fill();
                b.globalAlpha = 0.875;
                b.beginPath();
                b.ellipse(r + 31.5, 32.5, 2, 2, 0, 0, 2 * Math.PI);
                b.fill();
                b.strokeStyle = z[2];
                b.globalAlpha = 1;
                b.lineWidth = 1;
                b.fillRect(r + 31, 32, 1, 1);
                
                return l;
            }
        }
    },
    //aghnarns
    "sparkletwo": {
        nameTranslationKey: "flipTileSparkleTwo",
        colorCount: 3,
        translationKeys: [
                    "backgroundColor",
                    "flipperFrameColor",
                    "patternColor"
                ],
        pattern: {
            colorCount: 3,
            drawer: function (context, xpos, colors, isObverse) {
                context.fillStyle = colors[0];
                context.fillRect(xpos, 0, 64, 64);
                //
                context.strokeStyle = colors[1];
                context.lineWidth = 3;
                context.strokeRect(xpos + 1, 1, 62, 62);
                context.lineWidth = 2.5;
                context.strokeRect(xpos + 8, 8, 48, 48);

                context.fillStyle = colors[2];
                context.beginPath();
                context.moveTo(xpos  + 31.5, 17.5);
                context.bezierCurveTo(xpos  + 33.5, 26.5, xpos  + 37.5, 30.5, xpos  + 46.5, 32.5);
                context.bezierCurveTo(xpos  + 37.5, 34.5, xpos  + 33.5, 38.5, xpos  + 31.5, 47.5);
                context.bezierCurveTo(xpos  + 29.5, 38.5, xpos  + 25.5, 34.5, xpos  + 16.5, 32.5);
                context.bezierCurveTo(xpos  + 25.5, 30.5, xpos  + 29.5, 26.5, xpos  + 31.5, 17.5);
                context.closePath();
                context.fill();

                return isObverse;
            }
        }
    },
    "crescent": {
        nameTranslationKey: "flipTileEnchantedLamp",
        colorCount: 3,
        translationKeys: [
                    "backgroundColor",
                    "flipperFrameColor",
                    "patternColor"
                ],
        pattern: {
            colorCount: 3,
            drawer: function (m, o, O, n) {
                m.fillStyle = O[0];
                m.fillRect(o, 0, 64, 64);
                m.strokeStyle = O[1];
                m.lineWidth = 3;
                m.strokeRect(o + 1, 1, 62, 62);

                m.fillStyle = O[2];
                m.beginPath();
                m.arc(o + 34, 32.5, 19.5, 0, 2*Math.PI);
                m.closePath();
                m.fill();
                m.fillStyle = O[0];
                m.beginPath();
                m.arc(o + 39.25, 27.5, 14, 0, 2*Math.PI);
                m.closePath();
                m.fill();
                m.fillStyle = O[0];
                m.fillRect(o + 35.5, 12, 4, 4);
                m.fillRect(o + 52, 26.5, 4, 4);
                
                return n;
            }
        }
    },
    /*
    "paradeObverse": {
        
    },
    "paradeReverse": {
        
    }*/
    //王国なんちゃら
    "kingrobert": {
        nameTranslationKey: "flipTileKingdomWar",
        colorCount: 3,
        translationKeys: [
                    "backgroundColor",
                    "flipperFrameColor",
                    "patternColor"
                ],
        pattern: {
            colorCount: 3,
            drawer: function (k, i, n, g) {
                k.fillStyle = n[0];
                k.fillRect(i, 0, 64, 64);
                k.strokeStyle = n[1];
                k.lineWidth = 2.5;
                k.beginPath();
                k.moveTo(i + 12.5, 3);
                k.lineTo(i + 3, 3);
                k.lineTo(i + 3, 12.5);
                k.moveTo(i + 52.5, 3);
                k.lineTo(i + 61, 3);
                k.lineTo(i + 61, 12.5);
                k.moveTo(i + 12.5, 61);
                k.lineTo(i + 3, 61);
                k.lineTo(i + 3, 52.5);
                k.moveTo(i + 52.5, 61);
                k.lineTo(i + 61, 61);
                k.lineTo(i + 61, 52.5);
                k.stroke();

                k.fillStyle = n[2];
                k.beginPath();
                k.arc(i + 32, 8.5, 4, 0, 2 * Math.PI);
                k.moveTo(i + 22.5, 11.5);
                k.lineTo(i + 40.5, 11.5);
                k.lineTo(i + 40.5, 15);
                k.lineTo(i + 32, 20);
                k.lineTo(i + 22.5, 15);
                k.closePath();
                k.moveTo(i + 36.5, 17);
                k.lineTo(i + 36.5, 21.5);
                k.lineTo(i + 37, 21.5);
                k.lineTo(i + 56, 17.5);
                k.lineTo(i + 45, 31);
                k.lineTo(i + 39, 26);
                k.lineTo(i + 38, 23.5);
                k.lineTo(i + 36, 23.5);
                k.lineTo(i + 33, 26);
                k.lineTo(i + 44, 39);
                k.lineTo(i + 32, 58); // 下端
                k.lineTo(i + 20, 39);
                k.lineTo(i + 31, 26);
                k.lineTo(i + 28, 23.5);
                k.lineTo(i + 26, 23.5);
                k.lineTo(i + 25, 26);
                k.lineTo(i + 19, 31);
                k.lineTo(i + 8, 17.5);
                k.lineTo(i + 27, 21.5);
                k.lineTo(i + 27.5, 21.5);
                k.lineTo(i + 27.5, 17);
                k.closePath();
                k.fill();

            }
        }
    },
    "wizardOfOz": {
        nameTranslationKey: "flipTileWizardOfOz",
        colorCount: 3,
        translationKeys: [
                    "backgroundColor",
                    "flipperFrameColor",
                    "patternColor"
                ],
        pattern: {
            colorCount: 3,
            drawer: function (t, w, o, O) {
                t.fillStyle = o[0];
                t.fillRect(w, 0, 64, 64);
                t.strokeStyle = o[1];
                t.lineWidth = 3;
                t.strokeRect(w + 1.5, 1.5, 61, 61);

                t.fillStyle = o[2];
                t.beginPath();
                //中央
                t.moveTo(w + 32, 10);
                t.lineTo(w + 22, 20);
                t.lineTo(w + 32, 30);
                t.lineTo(w + 42, 20);
                t.closePath();

                //側面
                t.moveTo(w + 16.5, 19);
                t.lineTo(w + 6.5, 29);
                t.lineTo(w + 6.5, 44);
                t.lineTo(w + 16.5, 34);
                t.closePath();
                t.moveTo(w + 47.5, 19);
                t.lineTo(w + 57.5, 29);
                t.lineTo(w + 57.5, 44);
                t.lineTo(w + 47.5, 34);
                t.closePath();

                //上
                t.moveTo(w + 15, 4);
                t.lineTo(w + 29, 4);
                t.lineTo(w + 19, 14);
                t.lineTo(w + 5, 14);
                t.closePath();
                t.moveTo(w + 49, 4);
                t.lineTo(w + 35, 4);
                t.lineTo(w + 45, 14);
                t.lineTo(w + 59, 14);
                t.closePath();
                t.fill();

                //下
                t.strokeStyle = o[2];
                t.lineWidth = 1;
                t.beginPath();
                t.moveTo(w + 19, 36);
                t.lineTo(w + 29, 46);
                t.lineTo(w + 29, 58);
                t.lineTo(w + 19, 48);
                t.closePath();
                t.moveTo(w + 45, 36);
                t.lineTo(w + 35, 46);
                t.lineTo(w + 35, 58);
                t.lineTo(w + 45, 48);
                t.closePath();
                t.fill();
                t.stroke();

                //線
                t.lineWidth = 2;
                t.beginPath();
                t.moveTo(w + 19.5, 36);
                t.lineTo(w + 19.5, 18);
                t.lineTo(w + 30, 7.5);
                t.moveTo(w + 34, 7.5);
                t.lineTo(w + 44.5, 18);
                t.lineTo(w + 44.5, 36);
                t.stroke();
            }
        }
    },
    /*3D spacial zone
    "checkeredged": {
        nameTranslationKey: "flipTileCheckerEdged",
        colorCount: 2,
        translationKeys: [
                    "alternatingEdgeColsFlipperColorA",
                    "alternatingEdgeColsFlipperColorB"
                ],
        pattern: {
            colorCount: 2,
            drawer: function (z, o, n, e) {
                z.fillStyle = n[0];
                z.fillRect(o, 0, 64, 64);
                z.fillStyle = n[1];
                z.beginPath();
                z.moveTo(o, 0);
                z.lineTo(o + 32, 32);
                z.lineTo(o, 64);
                z.closePath();
                z.moveTo(o + 64, 0);
                z.lineTo(o + 32, 32);
                z.lineTo(o + 64, 64);
                z.closePath();
                z.fill();
                for (let tbpos = 0; tbpos < 4; tbpos++) {
                    for (let lrpos = 0; lrpos < 4; lrpos++) {
                        z.fillStyle = n[(tbpos + lrpos) % 2];
                        z.fillRect(o + 8 + 12 * lrpos, 8 + 12 * tbpos, 12, 12);
                    }
                }
                return e;
            }
        }
    },*/
    //RW風 ただし向きは改良 -->
    "heart": {
        nameTranslationKey: "flipTileHeart",
        colorCount: 3,
        translationKeys: [
                    "backgroundColor",
                    "flipperFrameColor",
                    "patternColor"
                ],
        pattern: {
            colorCount: 3,
            drawer: function (c, i, t, s) {
                c.fillStyle = t[0];
                c.fillRect(i, 0, 64, 64);
                c.strokeStyle = t[1];
                c.lineWidth = 3;
                c.strokeRect(i + 4, 4, 56, 56);

                c.fillStyle = t[2];
                c.beginPath();
                c.moveTo(i + 32, 10);
                c.bezierCurveTo(i + 50, 24, i + 54, 28, i + 53, 40);
                c.bezierCurveTo(i + 52, 53, i + 36, 55, i + 32, 47);
                c.bezierCurveTo(i + 28, 55, i + 12, 53, i + 11, 40);
                c.bezierCurveTo(i + 11, 28, i + 13, 24, i + 32, 10);
                c.closePath();
                c.fill();
                return s;
            }
        }
    },
    //陽光ペア風
    "sunshine": {
        nameTranslationKey: "flipTileSunshine",
        colorCount: 3,
        translationKeys: [
                    "sunshineMain",
                    "sunshineDarker",
                    "sunshineAccent"
                ],
        pattern: {
            colorCount: 3,
            drawer: function (s, n, u, y) {
                theSunsetGlowThing(n, 0, u[0], u[1], u[2], 0);
                return s;
            }
        }
    },
    //天空の城風
    "cits": {
        nameTranslationKey: "flipTileCits",
        colorCount: 3,
        translationKeys: [
                    "backgroundColor",
                    "flipperFrameColor",
                    "patternColor"
                ],
        pattern: {
            colorCount: 3,
            drawer: function (c, i, t, s) {
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
            }
        }
    },
    //偽の床
    "fakeground": {
        nameTranslationKey: "flipTileFakeGround",
        colorCount: 2,
        translationKeys: [
                    "backgroundColor",
                    "flipperFrameColor"
                ],
        pattern: {
            colorCount: 2,
            drawer: function (f, a, k, e) {
                let fgFlipperPath = new Path2D();
                fgFlipperPath.rect(a, 0, 64, 64);

                f.fillStyle = k[0];
                f.fill(fgFlipperPath);

                f.strokeStyle = k[1];
                multipleLines([6, 4], [0.5, 5], f, fgFlipperPath);
                return e;
            }
        }
    },
}

var saveDataFormat = [
    {id:"groundColor"},
    {id:"groundLineColor"},
    {id:"groundSideColor"},
    {id:"groundEdgeStyle"},
    {id:"outlinedGroundOutlineColor"},
    {id:"outlinedGroundEdgeColor"},
    {id:"enableVolcanicGradient", prop:"checked"},
    {id:"volcanicGradientColor"},
    
    {id:"jumppadColor"},
    {id:"jumppadColorActive"},
    {id:"jumppadLineColor"},
    {id:"jumppadLineColorActive"},
    {id:"jumppadSideColor"},
    {id:"jumppadSideColorActive"},
    {id:"activeJumppadGlow"},
    {id:"jumppadStyle"},
    {id:"inactiveGridColor"},
    {id:"activeOnlyGrid", prop:"checked"},
    {id:"squaresJumppadInactiveInner"},
    {id:"squaresJumppadInactiveOuter"},
    {id:"squaresJumppadActiveInner"},
    {id:"squaresJumppadActiveOuter"},
    {id:"checkerJumppadInactiveEdge"},
    {id:"checkerJumppadActiveEdge"},
    {id:"inactiveJumppadGlow", prop:"checked"},
    {id:"inactiveJumppadGlowColor"},
    {id:"gspJumppad"},
    {id:"gpJumppadInactive"},
    {id:"gpJumppadActive"},
    {id:"lineStyle"},
    {id:"jumppadActiveImg", prop:"src"},
    {id:"jumppadInactiveImg", prop:"src"},
    
    {id:"fragileColor"},
    {id:"fragileLineColor"},
    {id:"fragileAlpha"},
    {id:"fragileActiveAlpha"},
    {id:"fragileSideColor"},
    {id:"fragileActiveColor"},
    {id:"fragileActiveLineColor"},
    {id:"fragileActiveSideColor"},
    {id:"fragileStyle"},
    {id:"fragileStripeColor"},
    {id:"fragileActiveStripeColor"},
    {id:"fragileInnerStyle"},
    {id:"fragileInnerInactiveDecoColor"},
    {id:"fragileInnerActiveDecoColor"},
    
    {id:"groundVariation1"},
    {id:"groundVariation2"},
    {id:"groundVariation3"},
    {id:"groundVariation4"},
    {id:"fragileVariation1"},
    {id:"fragileVariation2"},
    {id:"fragileVariation3"},
    {id:"frgActiveVariation1"},
    {id:"frgActiveVariation2"},
    {id:"frgActiveVariation3"},
    
    {id:"moverSameColor", prop:"checked"},
    {id:"moverNoOutlines", prop:"checked"},
    {id:"moverMainColor"},
    {id:"moverLineColor"},
    {id:"moverAutoLineColor"},
    {id:"moverOutlineColor"},
    {id:"moverAutoOutlineColor"},
    {id:"moverOutlineBorderColor"},
    {id:"moverAutoOutlineBorderColor"},
    {id:"moverSideColor"},
    {id:"moverAutoSideColor"},
    {id:"moverActiveArrowColor"},
    {id:"moverAutoActiveArrowColor"},
    {id:"moverActiveArrowBorderColor"},
    {id:"moverAutoActiveArrowBorderColor"},
    {id:"moverArrowTopColor"},
    {id:"moverArrowUpperSideColor"},
    {id:"moverArrowSideColor"},
    
    {id:"midGroundTopColor"},
    {id:"midGroundBottomColor"},
    {id:"midGroundWindows", prop:"checked"},
    {id:"midGroundWindowsTop"},
    {id:"midGroundWindowsMiddle"},
    {id:"midGroundWindowsBottom"},
    
    {id:"finishLineInactiveColorA"},
    {id:"finishLineInactiveColorB"},
    {id:"finishLineActiveColorA"},
    {id:"finishLineActiveColorB"},
    {id:"finishLineActiveLine"},
    
    {id:"gemColor"},
    {id:"gemLineColor"},
    {id:"gemLightColor"},
    
    //ここからEnemy,
    //A
    {id:"radialLightOuter"},
    {id:"radialLightInner"},
    {id:"linearLightSameColor", prop:"checked"},
    {id:"linearLightStyle"},
    {id:"linearLightAOuter"},
    {id:"linearLightAInner"},
    {id:"linearLightBOuter"},
    {id:"linearLightBInner"},
    //B
    {id:"topRightType"},
    //fl
    {id:"floaterMainColor"},
    {id:"floaterSpikeInnerColor"},
    {id:"floaterInactiveEdgeColor"},
    {id:"floaterActiveEdgeColor"},
    {id:"floaterInactiveShadowColor"},
    {id:"floaterActiveShadowColor"},
    //cr
    {id:"crystalUseNeonbox", prop:"checked"},
    {id:"russianTowerTop"},
    {id:"russianTowerMiddleTop"},
    {id:"russianTowerLowerTop"},
    {id:"tetriminoOuterSameColor", prop:"checked"},
    {id:"tetriminoGradient", prop:"checked"},
    {id:"crystalCollection1Inner"},
    {id:"crystalCollection1Outer"},
    {id:"crystalCollection2Inner"},
    {id:"crystalCollection2Outer"},
    {id:"crystalCollection3Inner"},
    {id:"crystalCollection3Outer"},
    {id:"crystalCollection4Inner"},
    {id:"crystalCollection4Outer"},
    {id:"crystalCollection5Inner"},
    {id:"crystalCollection5Outer"},
    {id:"crystalCollection6Inner"},
    {id:"crystalCollection6Outer"},
    {id:"crystalCollection7Inner"},
    {id:"crystalCollection7Outer"},
    {id:"crystalCollection8Inner"},
    {id:"crystalCollection8Outer"},
    //px
    {id:"1UpPrimaryGradationTop"},
    {id:"1UpPrimaryGradationBottom"},
    {id:"1UpPrimaryGradationConflictSolution", prop: "radio"},
    {id:"1UpSecondaryGradationLeft"},
    {id:"1UpSecondaryGradationRight"},
    {id:"1UpInvaderEyeSurroundingInner"},
    {id:"1UpInvaderEyeSurroundingOuter"},
    {id:"1UpInvaderEyeSurroundingHasGradation", prop:"checked"},
    {id:"1UpConsoleDoubleButtonsInner"},
    {id:"1UpConsoleDoubleButtonsOuter"},
    {id:"1UpInvaderEyeSurroundingHasGradation", prop:"checked"},
    {id:"1UpConsoleSextupleButtonsInner"},
    {id:"1UpConsoleSextupleButtonsOuter"},
    {id:"1UpInvaderEyeSurroundingHasGradation", prop:"checked"},
    {id:"1UpBeeEyes"},
    {id:"1UpBeeWingsFront"},
    {id:"1UpBeeWingsEdge"},
    //cb
    {id:"cubeStructureType"},
    {id:"originalCubeStructureTopBackground"},
    {id:"originalCubeStructureFrontBackground"},
    {id:"originalCubeStructureTopPattern"},
    {id:"originalCubeStructureFrontPattern"},
    {id:"cubeStructureTopImg", prop:"src"},
    {id:"cubeStructureFrontImg", prop:"src"},
    {id:"cubeStructureFrame", prop:"checked"},
    {id:"cubeStructureFrameColor"},
    {id:"spinCubeType"},
    {id:"originalSpinCubeColorA"},
    {id:"originalSpinCubeColorB"},
    {id:"spinCubeImg", prop:"src"},
    //dz
    {id:"neonAccentA"},
    {id:"neonAccentB1"},
    {id:"neonAccentB2"},
    {id:"neonAccentB3"},
    {id:"neonAccentC1"},
    {id:"neonAccentC2"},
    {id:"neonAccentD"},
    {id:"neonRobotGear1"},
    {id:"neonRobotGear2"},
    {id:"neonRobotGear3"},
    {id:"neonRobotGear4"},
    {id:"neonRobotGear5"},
    {id:"neonRobotCordFront"},
    {id:"neonRobotCordSide"},
    //bd
    {id:"HBDPaletteA1"},
    {id:"HBDPaletteA2"},
    {id:"HBDPaletteA3"},
    {id:"HBDPaletteA4"},
    {id:"HBDPaletteB1"},
    {id:"HBDPaletteB2"},
    {id:"HBDPaletteB3"},
    {id:"HBDPaletteB4"},
    {id:"HBDGradationTop"},
    {id:"HBDGradationBottom"},
    {id:"HBDRainbow1"},
    {id:"HBDRainbow2"},
    {id:"HBDRainbow3"},
    {id:"HBDRainbow4"},
    {id:"HBDRainbow5"},
    {id:"HBDRainbow6"},
    //t4a
    {id:"t4aBalloonGradationTop"},
    {id:"t4aBalloonGradationBottom"},
    {id:"t4aBase1"},
    {id:"t4aBase2"},
    {id:"t4aAccent1"},
    {id:"t4aAccent2"},
    {id:"t4aAccent3"},
    {id:"t4aAccent4"},
    {id:"t4aAccent5"},
    {id:"t4aCheckedColorA1"},
    {id:"t4aCheckedColorB1"},
    {id:"t4aCheckedColorA2"},
    {id:"t4aCheckedColorB2"},
    {id:"t4aCheckedColorA3"},
    {id:"t4aCheckedColorB3"},
    {id:"t4aMainQuadPaletteA1"},
    {id:"t4aMainQuadPaletteB1"},
    {id:"t4aMainQuadPaletteC1"},
    {id:"t4aMainQuadPaletteD1"},
    {id:"t4aMainQuadPaletteA2"},
    {id:"t4aMainQuadPaletteB2"},
    {id:"t4aMainQuadPaletteC2"},
    {id:"t4aMainQuadPaletteD2"},
    {id:"t4aMainQuadPaletteA3"},
    {id:"t4aMainQuadPaletteB3"},
    {id:"t4aMainQuadPaletteC3"},
    {id:"t4aMainQuadPaletteD3"},
    {id:"t4aSubQuadPaletteA1"},
    {id:"t4aSubQuadPaletteB1"},
    {id:"t4aSubQuadPaletteC1"},
    {id:"t4aSubQuadPaletteD1"},
    {id:"t4aSubQuadPaletteA2"},
    {id:"t4aSubQuadPaletteB2"},
    {id:"t4aSubQuadPaletteC2"},
    {id:"t4aSubQuadPaletteD2"},
    {id:"t4aSubQuadPaletteA3"},
    {id:"t4aSubQuadPaletteB3"},
    {id:"t4aSubQuadPaletteC3"},
    {id:"t4aSubQuadPaletteD3"},
    {id:"t4aCakeStripe1"},
    {id:"t4aCakeStripe2"},
    {id:"t4aCakeStripe3"},
    {id:"t4aCakeStripe4"},
    //ss
    {id:"sunshineMain1"},
    {id:"sunshineMain2"},
    {id:"sunshineMain3"},
    {id:"sunshineDark1"},
    {id:"sunshineDark2"},
    {id:"sunshineDark3"},
    {id:"sunshineAccent1"},
    {id:"sunshineAccent2"},
    {id:"sunshineAccent3"},
    //kp
    {id:"keplerPaletteB6BL-1"},
    {id:"keplerPaletteB6BL-2"},
    {id:"keplerPaletteB6BL-3"},
    {id:"keplerPaletteB6BL-4"},
    {id:"keplerPaletteB6BL-5"},
    {id:"keplerPaletteB6BL-6"},
    {id:"keplerPaletteB4TR-1"},
    {id:"keplerPaletteB4TR-2"},
    {id:"keplerPaletteB4TR-3"},
    {id:"keplerPaletteB4TR-4"},
    {id:"keplerPaletteB4-1"},
    {id:"keplerPaletteB4-2"},
    {id:"keplerPaletteB4-3"},
    {id:"keplerPaletteB11-1"},
    {id:"keplerPaletteB11-2"},
    {id:"keplerGradationTop"},
    {id:"keplerGradationBottom"},
    //
    {id:"neonBoxSign"},
    //subB
    {id:"subBType"},
    {id:"noPatternSubBColor"},
    {id:"doubleRollerLines", prop:"checked"},
    {id:"classicalRollerMainColor"},
    {id:"classicalRollerLineColor"},
    {id:"palmTreeTrunk1"},
    {id:"palmTreeTrunk2"},
    {id:"palmTreeTrunk3"},
    {id:"palmTreeTrunk4"},
    
    {id:"halloweenMultiPurposeGradationLeft"},
    {id:"halloweenMultiPurposeGradationRight"},
    {id:"halloweenGateSkullGradationLeft"},
    {id:"halloweenGateSkullGradationRight"},
    {id:"halloweenPumpkinGradationLeft"},
    {id:"halloweenPumpkinGradationRight"},
    {id:"halloweenPumpkinGradationLineLeft"},
    {id:"halloweenPumpkinGradationLineRight"},
    
    {id:"chrisB11-1"},
    {id:"chrisB11-2"},
    {id:"chrisB11-3"},
    {id:"chrisB11-4"},
    {id:"chrisB12-1"},
    {id:"chrisB12-2"},
    {id:"chrisB12-3"},
    {id:"chrisB12-4"},
    {id:"chrisB13-1"},
    {id:"chrisB13-2"},
    {id:"chrisB13-3"},
    {id:"chrisB13-4"},
    {id:"chrisUpperGradationLeft"},
    {id:"chrisUpperGradationRight"},
    {id:"chrisLowerGradationLeft"},
    {id:"chrisLowerGradationRight"},
    {id:"ChrisPaletteATone1Face"},
    {id:"ChrisPaletteATone2Face"},
    {id:"ChrisPaletteATone3Face"},
    {id:"ChrisPaletteATone1Line"},
    {id:"ChrisPaletteATone2Line"},
    {id:"ChrisPaletteATone3Line"},
    {id:"ChrisPaletteBTone1Line"},
    {id:"ChrisPaletteBTone2Line"},
    {id:"ChrisPaletteBTone3Line"},
    {id:"ChrisPaletteBTone1Face"},
    {id:"ChrisPaletteBTone2Face"},
    {id:"ChrisPaletteBTone3Face"},
    //Flip
    {id:"flipTileObverseType"},
    {id:"flipTileReverseType"},
    {id:"flipperColor1Obverse"},
    {id:"flipperColor1Reverse"},
    {id:"flipperColor2Obverse"},
    {id:"flipperColor2Reverse"},
    {id:"flipperColor3Obverse"},
    {id:"flipperColor3Reverse"},
    {id:"flipperColor4Obverse"},
    {id:"flipperColor4Reverse"},
    {id:"flipperColor5Obverse"},
    {id:"flipperColor5Reverse"},
    {id:"flipperObverseImg", prop:"src"},
    {id:"flipperReverseImg", prop:"src"},
    //ミニジャンプ
    {id:"smallJumpInactiveTop"},
    {id:"smallJumpInactiveSide"},
    {id:"smallJumpActiveTop"},
    {id:"smallJumpActiveSide"},
    //C
    {id:"mainStripeThickness"},
    {id:"mainStripeCustomThickness"},
    {id:"mainStripeCustomInterval"},
    {id:"mainStripeCustomStart"},
    {id:"mainStripeColorSteps"},
    {id:"mainStripeTone1Back"},
    {id:"mainStripeTone1Front"},
    {id:"mainStripeTone2Back"},
    {id:"mainStripeTone2Front"},
    {id:"mainStripeTone3Back"},
    {id:"mainStripeTone3Front"},
    {id:"mainStripe1ToneBack"},
    {id:"mainStripe1ToneFront"},
    {id:"addCenterLine", prop:"checked"},
    //D
    {id:"middleLeftTone1Face"},
    {id:"middleLeftTone1Line"},
    {id:"middleLeftTone2Face"},
    {id:"middleLeftTone2Line"},
    {id:"middleLeftTone3Face"},
    {id:"middleLeftTone3Line"},
    {id:"middleLeftTone4Face"},
    {id:"middleLeftTone4Line"},
    {id:"middleLeftTone5Face"},
    {id:"middleLeftTone5Line"},
    {id:"middleLeftTone6Face"},
    {id:"middleLeftTone6Line"},
    {id:"middleLeftTone7"},
    {id:"middleLeftLineThickness"},
    //E
    {id:"middleRightTone1Face"},
    {id:"middleRightTone1Line"},
    {id:"middleRightTone2Face"},
    {id:"middleRightTone2Line"},
    {id:"middleRightTone3Face"},
    {id:"middleRightTone3Line"},
    {id:"middleRightTone4Face"},
    {id:"middleRightTone4Line"},
    {id:"middleRightTone5Face"},
    {id:"middleRightTone5Line"},
    {id:"middleRightTone6Face"},
    {id:"middleRightTone6Line"},
    {id:"middleRightLineThickness"},
    //F
    {id:"bottomLeftType"},
    {id:"BLGradationTopLightColor"},
    {id:"BLGradationTopMediumColor"},
    {id:"BLGradationTopDarkColor"},
    {id:"BLGradationBottomLightColor"},
    {id:"BLGradationBottomMediumColor"},
    {id:"BLGradationBottomDarkColor"},
    //todo 通常モードのbottomleft縞部分のコード
    //{id:"stripeJSONData"},
    {id:"BLStripeLine", prop:"checked"},
    {id:"BLStripeLineColor", prop:"checked"},
    {id:"fillBottommost", prop:"checked"},
    //天空の城スタイル
    {id:"skyCastleBLGradationTopLightColor"},
    {id:"skyCastleBLGradationTopMediumColor"},
    {id:"skyCastleBLGradationTopDarkColor"},
    {id:"skyCastleBLGradationBottomLightColor"},
    {id:"skyCastleBLGradationBottomMediumColor"},
    {id:"skyCastleBLGradationBottomDarkColor"},
    {id:"skyCastleBLTriangleLightColor"},
    {id:"skyCastleBLTriangleMediumColor"},
    {id:"skyCastleBLTriangleDarkColor"},
    //G
    {id:"bottomRightType"},
    //outlined
    {id:"riserTopMain"},
    {id:"riserTopInactiveLine"},
    {id:"riserTopActiveLine"},
    {id:"riserLine"},
    //round
    {id:"riserTopOuter"},
    {id:"riserInactiveTopLine"},
    {id:"riserActiveTopLine"},
    {id:"riserInactiveTopInner"},
    {id:"riserActiveTopInner"},
    {id:"useRiserLine", prop:"checked"},
    {id:"riserLine2"},
];
//TODO: 上のデータのうちidのみのものを文字列リテラルに置き換え、下のように配列のできるだけ多くをスクリプト生成にする
for (let i = 0; i < 32; i++){
    for (let ii = 1; ii < 5; ii++){
        saveDataFormat.push({id:`newGeneric_region_${i}_tone_${ii}`});
    }
}

//自明な名称
var enemyNewGeneralTopRightDefault = {
	"newGeneric_region_0_tone_1": "#fefffe",
	"newGeneric_region_0_tone_2": "#fefffe",
	"newGeneric_region_0_tone_3": "#fefffe",
	"newGeneric_region_0_tone_4": "#f8fdfa",
	"newGeneric_region_1_tone_1": "#fefffe",
	"newGeneric_region_1_tone_2": "#f1f1f1",
	"newGeneric_region_1_tone_3": "#d2d2d2",
	"newGeneric_region_1_tone_4": "#c0c0c0",
	"newGeneric_region_2_tone_1": "#a491c3",
	"newGeneric_region_2_tone_2": "#9580b9",
	"newGeneric_region_2_tone_3": "#8572a5",
	"newGeneric_region_2_tone_4": "#504f8d",
	"newGeneric_region_3_tone_1": "#aa7ff1",
	"newGeneric_region_3_tone_2": "#a06fef",
	"newGeneric_region_3_tone_3": "#8a60ce",
	"newGeneric_region_3_tone_4": "#7854b3",
	"newGeneric_region_4_tone_1": "#89fffe",
	"newGeneric_region_4_tone_2": "#00fffc",
	"newGeneric_region_4_tone_3": "#00eeea",
	"newGeneric_region_4_tone_4": "#00d2cd",
	"newGeneric_region_5_tone_1": "#9affdf",
	"newGeneric_region_5_tone_2": "#6dffd0",
	"newGeneric_region_5_tone_3": "#61e3b9",
	"newGeneric_region_5_tone_4": "#54c4a0",
	"newGeneric_region_6_tone_1": "#8972a6",
	"newGeneric_region_6_tone_2": "#7c639c",
	"newGeneric_region_6_tone_3": "#5f4272",
	"newGeneric_region_6_tone_4": "#513861",
	"newGeneric_region_7_tone_1": "#ad7fe1",
	"newGeneric_region_7_tone_2": "#a36fdd",
	"newGeneric_region_7_tone_3": "#7a3aaa",
	"newGeneric_region_7_tone_4": "#6d3497",
	"newGeneric_region_8_tone_1": "#76cdff",
	"newGeneric_region_8_tone_2": "#62c5ff",
	"newGeneric_region_8_tone_3": "#5ab6eb",
	"newGeneric_region_8_tone_4": "#53a5d7",
	"newGeneric_region_9_tone_1": "#82d8ca",
	"newGeneric_region_9_tone_2": "#55cab7",
	"newGeneric_region_9_tone_3": "#4cb4a3",
	"newGeneric_region_9_tone_4": "#45a293",
	"newGeneric_region_10_tone_1": "#a491c3",
	"newGeneric_region_10_tone_2": "#9580b9",
	"newGeneric_region_10_tone_3": "#8572a5",
	"newGeneric_region_10_tone_4": "#766593",
	"newGeneric_region_11_tone_1": "#d0536b",
	"newGeneric_region_11_tone_2": "#c93854",
	"newGeneric_region_11_tone_3": "#d34b8d",
	"newGeneric_region_11_tone_4": "#cf3c83",
	"newGeneric_region_12_tone_1": "#ff86a0",
	"newGeneric_region_12_tone_2": "#ff6e8d",
	"newGeneric_region_12_tone_3": "#e1617c",
	"newGeneric_region_12_tone_4": "#c7566d",
	"newGeneric_region_13_tone_1": "#ffc3c2",
	"newGeneric_region_13_tone_2": "#ffa6bc",
	"newGeneric_region_13_tone_3": "#ff949a",
	"newGeneric_region_13_tone_4": "#ff6e8d",
	"newGeneric_region_14_tone_1": "#fecb82",
	"newGeneric_region_14_tone_2": "#fdc377",
	"newGeneric_region_14_tone_3": "#ff8385",
	"newGeneric_region_14_tone_4": "#d2c490",
	"newGeneric_region_15_tone_1": "#fff6d8",
	"newGeneric_region_15_tone_2": "#ffedaf",
	"newGeneric_region_15_tone_3": "#e9d9a0",
	"newGeneric_region_15_tone_4": "#d2c490",
	"newGeneric_region_16_tone_1": "#898167",
	"newGeneric_region_16_tone_2": "#746b4c",
	"newGeneric_region_16_tone_3": "#5e573e",
	"newGeneric_region_16_tone_4": "#494430",
	"newGeneric_region_17_tone_1": "#898167",
	"newGeneric_region_17_tone_2": "#746b4c",
	"newGeneric_region_17_tone_3": "#5e573e",
	"newGeneric_region_17_tone_4": "#494430",
	"newGeneric_region_18_tone_1": "#716783",
	"newGeneric_region_18_tone_2": "#625775",
	"newGeneric_region_18_tone_3": "#564d67",
	"newGeneric_region_18_tone_4": "#463f54",
	"newGeneric_region_19_tone_1": "#f878a7",
	"newGeneric_region_19_tone_2": "#f76098",
	"newGeneric_region_19_tone_3": "#d75484",
	"newGeneric_region_19_tone_4": "#b74770",
	"newGeneric_region_20_tone_1": "#ff5b9f",
	"newGeneric_region_20_tone_2": "#ff4995",
	"newGeneric_region_20_tone_3": "#e34185",
	"newGeneric_region_20_tone_4": "#cd3b78",
	"newGeneric_region_21_tone_1": "#ffa7af",
	"newGeneric_region_21_tone_2": "#ff848f",
	"newGeneric_region_21_tone_3": "#d9707a",
	"newGeneric_region_21_tone_4": "#c1646d",
	"newGeneric_region_22_tone_1": "#ffdda6",
	"newGeneric_region_22_tone_2": "#ffcf83",
	"newGeneric_region_22_tone_3": "#e3b875",
	"newGeneric_region_22_tone_4": "#c6a066",
	"newGeneric_region_23_tone_1": "#ffdda6",
	"newGeneric_region_23_tone_2": "#ffcf83",
	"newGeneric_region_23_tone_3": "#e3b875",
	"newGeneric_region_23_tone_4": "#c6a066",
	"newGeneric_region_24_tone_1": "#8f6cc8",
	"newGeneric_region_24_tone_2": "#885dc8",
	"newGeneric_region_24_tone_3": "#7654ac",
	"newGeneric_region_24_tone_4": "#50337c",
	"newGeneric_region_25_tone_1": "#7a7190",
	"newGeneric_region_25_tone_2": "#554a6c",
	"newGeneric_region_25_tone_3": "#352a48",
	"newGeneric_region_25_tone_4": "#251e34",
	"newGeneric_region_26_tone_1": "#ffdda6",
	"newGeneric_region_26_tone_2": "#ffb868",
	"newGeneric_region_26_tone_3": "#fcdd78",
	"newGeneric_region_26_tone_4": "#d6bc66",
	"newGeneric_region_27_tone_1": "#ffdda6",
	"newGeneric_region_27_tone_2": "#ffcf83",
	"newGeneric_region_27_tone_3": "#e3b875",
	"newGeneric_region_27_tone_4": "#c6a066",
	"newGeneric_region_28_tone_1": "#545454",
	"newGeneric_region_28_tone_2": "#444444",
	"newGeneric_region_28_tone_3": "#3b3b3b",
	"newGeneric_region_28_tone_4": "#2f2f2f",
	"newGeneric_region_29_tone_1": "#71568a",
	"newGeneric_region_29_tone_2": "#5c3d79",
	"newGeneric_region_29_tone_3": "#39254a",
	"newGeneric_region_29_tone_4": "#271a33",
	"newGeneric_region_30_tone_1": "#ffe065",
	"newGeneric_region_30_tone_2": "#ffd834",
	"newGeneric_region_30_tone_3": "#ebc630",
	"newGeneric_region_30_tone_4": "#d9b52c",
	"newGeneric_region_31_tone_1": "#ffe065",
	"newGeneric_region_31_tone_2": "#ffd834",
	"newGeneric_region_31_tone_3": "#ebc630",
	"newGeneric_region_31_tone_4": "#d9b52c"
}