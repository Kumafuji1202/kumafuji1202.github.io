let langDataRaw = {
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
            "ja": "現在の右上部分の設定ではこの領域は使用できません。",
        },
        "patternColor": {
            "en": "Pattern color",
            "ja": "模様色",
        },
        "backgroundColor": {
            "en": "Background color",
            "ja": "背景色",
        },
        "innerColor": {
            "en": "Inner part",
            "ja": "内部",
        },
        "tone#": {
            "en": "Tone ",
            "ja": "トーン",
        },
        "color#": {
            "en": "Color ",
            "ja": "色",
        },
        "object": {
            "en": "Object",
            "ja": "オブジェクト",
        },
        "part": {
            "en": "Part",
            "ja": "部分",
        },
        "glow": {
            "en": "Glow",
            "ja": "発光",
        },
        "gradation": {
            "en": "Gradation",
            "ja": "グラデーション",
        },
        "colorUsageList": {
            "en": "Color usage list",
            "ja": "色対応表",
        },
        "patternStyleFromRS": {
            "en": "Rolling Sky",
            "ja": "ローリング・スカイ",
        },
        "patternStyleFanmade": {
            "en": "Fanmade",
            "ja": "ファンメイド",
        },
        "importStatus": {
            "en": "Import status",
            "ja": "アップロード状況",
        },
        "removeImage": {
            "en": "Remove image",
            "ja": "画像を削除",
        },
        "presets": {
            "en": "Use preset",
            "ja": "プリセットを使用",
        },
        "textureExtractInfo": {
            "en": "You can extract Rolling Sky spritesheets from <a href=\"https://mega.nz/file/4iEmzQrA#C1aniTxKeDZg2pUuLabl8mOkBhK8teP1juIgbdP45Ds\" target=\"_blank\">the IPA of the <b>Dinasour Valley</b> version</a> or <a href=\"https://mega.nz/file/QSMVzAZa#6eZ0SXw6FGLwom7M7wtDv_4hCbtCyk5DhEnCgnSu14o\" target=\"_blank\">APK of the <b>Chess Fortress</b> version(better quality)</a>, Rolling Universe spritesheets (including General and Background for the Rolling World theme) from the IPA of v2.2.1 (no decryption needed), and Rolling Fanmade spritesheets (excluding Pharaoh spritesheets, which can be found in Rolling Sky instead) from Rolling Sky Remake <a class=\"ae\" href=\"https://www.mediafire.com/file/t8pivs9totk3pj6/RSR0.6.5b.zip/file\" target=\"_blank\">v0.6b</a> PC version.",
            "ja": "Rolling Skyのオリジナルテクスチャは<a href=\"https://mega.nz/file/4iEmzQrA#C1aniTxKeDZg2pUuLabl8mOkBhK8teP1juIgbdP45Ds\" target=\"_blank\"><b>恐竜谷</b>のバージョンのIPA</a>または<a href=\"https://mega.nz/file/QSMVzAZa#6eZ0SXw6FGLwom7M7wtDv_4hCbtCyk5DhEnCgnSu14o\" target=\"_blank\"><b>割拠(以下略</b>のバージョンのTapTap版</a>(より画像品質が良い)から取り出せます。Rolling Universeのテクスチャ(Rolling WorldテーマのGeneralとBackgroundを含む)はv2.2.1のIPAから(暗号化解除の必要はありません)、Rolling Fanmadeのテクスチャ(ファラオ系以外。ファラオ系はRSにも入っている)はRolling Sky Remake <a class=\"ae\" href=\"https://www.mediafire.com/file/t8pivs9totk3pj6/RSR0.6.5b.zip/file\" target=\"_blank\">v0.6b</a> PC版からそれぞれ取り出せます。",
        },
        "groundSettingsHeading": {
            "en": "Ground settings",
            "ja": "普通床の設定",
        },
        "groundColor": {
            "en": "Ground tile color",
            "ja": "普通床の色",
        },
        "groundLineColor": {
            "en": "Ground tile edge color",
            "ja": "普通床の線の色",
        },
        "groundSideColor": {
            "en": "Ground tile side color",
            "ja": "普通床の側面の色",
        },
        "groundEdgeStyle": {
            "en": "Ground tile edge style",
            "ja": "普通床の端の形",
        },
        "groundEdgeStyleNone": {
            "en": "No decoration",
            "ja": "装飾無し",
        },
        "groundEdgeStyleCut": {
            "en": "Cut corners",
            "ja": "角落ち",
        },
        "groundEdgeStyleOutline": {
            "en": "With outlines",
            "ja": "縁取り有り",
        },
        "groundEdgeStyleCutNoEdge": {
            "en": "Cut corners (no thick edge)",
            "ja": "角落ち(枠線無し)",
        },
        "groundEdgeDefaultContent": {
            "en": "No extra customization for this ground pattern available",
            "ja": "この通常床の模様にはカスタマイズオプションがありません",
        },
        "outlinedGroundOutlineColor": {
            "en": "Outline",
            "ja": "端の帯",
        },
        "outlinedGroundEdgeColor": {
            "en": "Tile group edge line",
            "ja": "端の線",
        },
        "volcanicGradient": {
            "en": "Use Volcano-style gradient",
            "ja": "火山風グラデーション",
        },
        "lineStyle": {
            "en": "Line style",
            "ja": "床の線のスタイル",
        },
        "lineStyleNormal": {
            "en": "Normal",
            "ja": "通常",
        },
        "lineStyleDouble": {
            "en": "Double(Sky)",
            "ja": "2段(空)",
        },
        "lineStyleThin": {
            "en": "Thin(Volcano)",
            "ja": "細い(火山)",
        },
        "lineStyleSharp": {
            "en": "Sharp(Sci-Tech)",
            "ja": "鋭い(科学技術)",
        },
        "lineStyleGlowing": {
            "en": "Glowing(Deep Space)",
            "ja": "発光(深空)",
        },
        "lineStyleThick": {
            "en": "Thick",
            "ja": "太い",
        },
        "groundInnerStyle": {
            "en": "Inner pattern",
            "ja": "内部模様",
        },
        "groundStyleNoDeco": {
            "en": "No decoration",
            "ja": "装飾無し",
        },
        "groundStylePlates": {
            "en": "Plates (Interstellar Leap)",
            "ja": "四角板 (インターステラーリープ)",
        },
        "groundInnerDecoPlates": {
            "en": "Plates",
            "ja": "板",
        },
        "groundInnerDecoPlatePartition": {
            "en": "Partition",
            "ja": "仕切り",
        },
        "groundInnerDecoScrewsInner": {
            "en": "Screws (inner)",
            "ja": "ネジ内側",
        },
        "groundInnerDecoScrewsBorder": {
            "en": "Screws (border)",
            "ja": "ネジ縁",
        },
        "jumppadColor": {
            "en": "undefined",
            "ja": "ジャンプ床の色",
        },
        "activeJumppadGlow": {
            "en": "Active jumppad glow type",
            "ja": "起動時の面部分発光タイプ",
        },
        "jumppadGlowNone": {
            "en": "None",
            "ja": "発光無し",
        },
        "jumppadGlowNormal": {
            "en": "Normal",
            "ja": "通常",
        },
        "jumppadGlowHigh": {
            "en": "High",
            "ja": "強い",
        },
        "jumppadGlowEdge": {
            "en": "Edge",
            "ja": "縁",
        },
        "jumppadSettingsHeading": {
            "en": "Jumppad settings",
            "ja": "ジャンプ床の設定",
        },
        "jumppadStyle": {
            "en": "Jumppad pattern",
            "ja": "ジャンプ床の模様",
        },
        "jumppadStyleNormal": {
            "en": "No decoration",
            "ja": "装飾無し",
        },
        "jumppadStyleCut": {
            "en": "Cut corners",
            "ja": "角落ち",
        },
        "jumppadStyleGrid": {
            "en": "Grid lines",
            "ja": "格子模様",
        },
        "jumppadStyleSquares": {
            "en": "Squares(sky castle)",
            "ja": "四角形(天空の城)",
        },
        "jumppadStyleChina": {
            "en": "Spiral Patterns",
            "ja": "中国風渦巻き模様",
        },
        "jumppadStyleChecker": {
            "en": "Checkerboard",
            "ja": "市松模様",
        },
        "jumppadStyleHexagons": {
            "en": "Hexagons",
            "ja": "六角形模様",
        },
        "jumppadStyleCave": {
            "en": "Circle(Cave)",
            "ja": "円形(洞窟)",
        },
        "jumppadStyleChemistry": {
            "en": "Grid+square(Chemistry)",
            "ja": "格子+四角(化学)",
        },
        "jumppadStyleDynamicHill": {
            "en": "Squares(Dynamic Hill)",
            "ja": "四角(ダイナミックな丘)",
        },
        "jumppadStyleScale": {
            "en": "Scale 1.1",
            "ja": "鱗 1.1",
        },
        "jumppadStyleSimpleCircle": {
            "en": "Simple circle(Faith)",
            "ja": "円",
        },
        "jumppadStyleSparklesComet": {
            "en": "Sparkles (Comet's Arrival)",
            "ja": "キラキラ (Comet's Arrival)",
        },
        "jumppadStyleSparklesAnniv": {
            "en": "Sparkles II (A Dream of 7 Years)",
            "ja": "星 (A Dream of 7 Years)",
        },
        "jumppadStyleRollingWorld": {
            "en": "Circle+rhombus(Rolling World)",
            "ja": "円+四角(Rolling World)",
        },
        "jumppadStyleMystery": {
            "en": "undefined",
            "ja": "ひし形",
        },
        "jumppadStyleDoubleSqLines": {
            "en": "Double squares",
            "ja": "二重四角 (Taurus)",
        },
        "jumppadCustomizationDefaultContent": {
            "en": "No extra customization for this jumppad pattern available",
            "ja": "このジャンプ床の模様にはカスタマイズオプションがありません",
        },
        "fanmadePatternStyleDisclaimer": {
            "en": "この模様は本家ローリングスカイには存在しない模様であり、あくまでもこのツール作者が似せて作ったものなので正確な寸法では(多分)ありません。",
            "ja": "この模様は本家ローリングスカイには存在しない模様であり、あくまでもこのツール作者が似せて作ったものなので正確な寸法では(多分)ありません。",
        },
        "squaresJumppadInactiveInner": {
            "en": "Jumppad square color(inner)",
            "ja": "四角の内側の色",
        },
        "squaresJumppadInactiveOuter": {
            "en": "Jumppad square color(outer)",
            "ja": "四角の枠の色",
        },
        "squaresJumppadActiveInner": {
            "en": "Active jumppad square color(inner)",
            "ja": "四角の内側の色(起動時)",
        },
        "squaresJumppadActiveOuter": {
            "en": "Active jumppad square color(outer)",
            "ja": "四角の枠の色(起動時)",
        },
        "activeOnlyGrid": {
            "en": "Active only",
            "ja": "起動時のみ",
        },
        "inactiveGridColor": {
            "en": "Inactive grid color",
            "ja": "非起動時の格子模様の色",
        },
        "gridJumppadInactiveInner": {
            "en": "Inactive jumppad pattern color",
            "ja": "非起動時の格子模様の色",
        },
        "checkerJumppadInactiveEdge": {
            "en": "Edge square color(inactive)",
            "ja": "非起動時の端側の四角の色",
        },
        "checkerJumppadActiveEdge": {
            "en": "Edge square color(active)",
            "ja": "起動時の端側の四角の色",
        },
        "inactiveJumppadGlow": {
            "en": "Inactive jumppad glow",
            "ja": "非起動時のジャンプ床面部分の発光",
        },
        "jumpTextureUsageExpl": {
            "en": "Only the bottom-left half of the jumppad texture will be used. For the jumppads in actual gameplay, a 180-degree-rotated copy of the said part will fill the rest. This makes the jumppad designs forcedly point-symmetrical.",
            "ja": "ジャンプ床テクスチャは左下の1/2部分しか使われません。実際のジャンプ床では使用される部分が180度回転して複製されて残りの半分を埋めるので、ジャンプ床のデザインは強制的に点対称になります。",
        },
        "generalVariationHeading": {
            "en": "General color variation settings",
            "ja": "補助パレットの設定",
        },
        "generalPaletteSummary": {
            "en": "This part is used for obstacle shadows (uses Var.1), goal structure and some obstacles such as pillars(uses Var.2~4) and spotlights(uses Var.2).",
            "ja": "この領域は障害物の影(トーン1)、ゴールの部分や柱(トーン2-4)やスポットライト(トーン2)等一部の障害物に使われています。",
        },
        "generalVariation1": {
            "en": "Variation 1",
            "ja": "トーン1",
        },
        "generalVariation2": {
            "en": "Variation 2",
            "ja": "トーン2",
        },
        "generalVariation3": {
            "en": "Variation 3",
            "ja": "トーン3",
        },
        "generalVariation4": {
            "en": "Variation 4",
            "ja": "トーン4",
        },
        "fragileSettingHeading": {
            "en": "Fragile settings",
            "ja": "ガラス床の設定",
        },
        "fragileAlpha": {
            "en": "Fragile opacity",
            "ja": "不透明度",
        },
        "fragileStyle": {
            "en": "Fragile edge decoration",
            "ja": "縁装飾",
        },
        "fragileStylePlain": {
            "en": "No decorations",
            "ja": "装飾無し",
        },
        "fragileStyleStripes": {
            "en": "Striped outlines",
            "ja": "縞模様の縁",
        },
        "fragileStyleallLines": {
            "en": "FragileActive boxes(VR Fairyland)",
            "ja": "箱 (VRの世界)",
        },
        "fragileStyleCave": {
            "en": "Decorated corner(Cave)",
            "ja": "角の装飾(洞窟)",
        },
        "fragileLineStyleDouble": {
            "en": "Double",
            "ja": "二重",
        },
        "fragileCustomizationDefaultContent": {
            "en": "No extra customization for this fragile pattern available",
            "ja": "このガラス床の模様にはカスタマイズオプションがありません",
        },
        "fragileStripeColor": {
            "en": "Stripe Color",
            "ja": "縞模様の色",
        },
        "fragileActiveStripeColor": {
            "en": "Stripe Color(active)",
            "ja": "縞模様の色(起動時)",
        },
        "fragileInnerStyle": {
            "en": "Inner decoration",
            "ja": "内部模様",
        },
        "fragileStyleNoDeco": {
            "en": "No decorations",
            "ja": "模様無し",
        },
        "fragileStyleSnowflake": {
            "en": "Snowflake",
            "ja": "雪模様",
        },
        "moverSettingHeading": {
            "en": "Mover settings",
            "ja": "移動床の設定",
        },
        "mover": {
            "en": "Mover",
            "ja": "発動床",
        },
        "automover": {
            "en": "Automover",
            "ja": "連動床",
        },
        "moverSameColor": {
            "en": "Use the same color for movers/automovers and ground",
            "ja": "移動床の色に通常床の色を流用する",
        },
        "moverOutlineColor": {
            "en": "Outline",
            "ja": "縁",
        },
        "moverOutlineBorderColor": {
            "en": "Outline border",
            "ja": "縁の線",
        },
        "moverActiveArrowColor": {
            "en": "Active arrow",
            "ja": "三角",
        },
        "moverActiveArrowBorderColor": {
            "en": "Active arrow border",
            "ja": "三角の縁",
        },
        "moverArrowTopColor": {
            "en": "Arrow top color",
            "ja": "移動床三角の土台上面",
        },
        "moverArrowUpperSideColor": {
            "en": "Arrow upper side color",
            "ja": "移動床三角の端の切り込み面",
        },
        "moverArrowSideColor": {
            "en": "Arrow side color",
            "ja": "移動床三角の側面",
        },
        "moverNoOutlines": {
            "en": "No outlines",
            "ja": "強制線消し",
        },
        "midGroundSettingHeading": {
            "en": "MidGround settings",
            "ja": "通過オブジェクトの設定",
        },
        "midGroundTopColor": {
            "en": "Top color",
            "ja": "上端の色",
        },
        "midGroundBottomColor": {
            "en": "Bottom color",
            "ja": "下端の色",
        },
        "midGroundWindows": {
            "en": "Add windows",
            "ja": "窓の追加",
        },
        "midGroundWindowsTop": {
            "en": "Windows top color",
            "ja": "窓上端",
        },
        "midGroundWindowsMiddle": {
            "en": "Windows middle color",
            "ja": "窓中央",
        },
        "midGroundWindowsBottom": {
            "en": "Windows bottom color",
            "ja": "窓下端",
        },
        "finishLineSettingHeading": {
            "en": "Finish line settings",
            "ja": "ゴールテープの設定",
        },
        "finishLineColorA": {
            "en": "Color A",
            "ja": "色A",
        },
        "finishLineColorB": {
            "en": "Color B",
            "ja": "色B",
        },
        "finishLineInactive": {
            "en": "Inactive",
            "ja": "到達前",
        },
        "finishLineActive": {
            "en": "Active",
            "ja": "到達後",
        },
        "finishLineActiveLine": {
            "en": "Active edge line",
            "ja": "到達後のブロック辺の線",
        },
        "gemSettingHeading": {
            "en": "Low/Middle quality gem settings",
            "ja": "低/中品質ジェムの設定",
        },
        "gemColor": {
            "en": "Gem color",
            "ja": "基本色",
        },
        "gemLineColor": {
            "en": "Gem line color",
            "ja": "線の色",
        },
        "gemLightColor": {
            "en": "Gem lighter color",
            "ja": "明るい色",
        },
        "ballSettingHeading": {
            "en": "undefined",
            "ja": "ボールの設定",
        },
        "ballOuter": {
            "en": "undefined",
            "ja": "外側の色",
        },
        "ballInner": {
            "en": "undefined",
            "ja": "内側の色",
        },
        "objectPreview": {
            "en": "Object preview",
            "ja": "プレヴュー",
        },
        "lightSettingHeading": {
            "en": "Light settings (A)",
            "ja": "光の設定 (A)",
        },
        "radialLightSettingHeading": {
            "en": "Radial Light (A1)",
            "ja": "円形の光 (A1)",
        },
        "lightOuterColor": {
            "en": "Outer Color",
            "ja": "外側",
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
            "en": "Crystal (cr)",
            "ja": "結晶 (cr)",
        },
        "russianTowerTop": {
            "en": "Russian tower top",
            "ja": "ロシア風タワー頂点 (cr1)",
        },
        "russianTowerMiddleTop": {
            "en": "Russian tower middle top face",
            "ja": "ロシア風タワーの中間の上面 (cr2)",
        },
        "russianTowerLowerTop": {
            "en": "Russian tower lower top face",
            "ja": "ロシア風タワーの下の方の上面 (cr3)",
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
            "en": "Color 1(cr4)",
            "ja": "パレット色1(cr4)",
        },
        "crystalCollection2": {
            "en": "Color 2(cr5)",
            "ja": "パレット色2(cr5)",
        },
        "crystalCollection3": {
            "en": "Color 3(cr6)",
            "ja": "パレット色3(cr6)",
        },
        "crystalCollection4": {
            "en": "Color 4(cr7)",
            "ja": "パレット色4(cr7)",
        },
        "crystalCollection5": {
            "en": "Color 5(cr8)",
            "ja": "パレット色5(cr8)",
        },
        "crystalCollection6": {
            "en": "Color 6(cr9)",
            "ja": "パレット色6(cr9)",
        },
        "crystalCollection7": {
            "en": "Color 7(cr10)",
            "ja": "パレット色7(cr10)",
        },
        "crystalCollection8": {
            "en": "Color 8(cr11)",
            "ja": "パレット色8(cr11)",
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
            "en": "Geometry (cb)",
            "ja": "幾何 (cb)",
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
            "en": "Pixel (px)",
            "ja": "像素 (px)",
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
            "en": "Ancient (ac)",
            "ja": "古代 (ac)",
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
            "en": "Neon (dz)",
            "ja": "眩光 (dz)",
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
            "en": "3rd Anniversary (bd)",
            "ja": "三周年 (bd)",
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
            "en": "4th Anniversary (t4a)",
            "ja": "四周年 (t4a)",
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
            "ja": "夢幻の旅路 (Enemy133)",
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
            "en": "Sunshine (ss)",
            "ja": "陽光 (ss)",
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
            "en": "Kepler (kp)",
            "ja": "ケプラー (kp)"
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
        "flipTileNeedle": {
            "en": "Needle (Knit Kingdom)",
            "ja": "縫い針 (ニット王国)",
        },
        "flipTileBrazil": {
            "en": "Leaves (Brazil)",
            "ja": "四つ葉 (ブラジル)"
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
            "en": "None",
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
            "en": "Use riser edge line",
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
        "saveTheme": {
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
["flipTileBrazil"].forEach(each => {
    langDataRaw.translations[each].ja = "🆕 " + langDataRaw.translations[each].ja;
    langDataRaw.translations[each].en = "🆕 " + langDataRaw.translations[each].en;
});
var lang = new LanguageManager(langDataRaw);

window.addEventListener("load", function () {
    lang.initSelectBox(document.getElementById("languageSelectBox"), "en");
    lang.useLanguage("en");
}, true);
