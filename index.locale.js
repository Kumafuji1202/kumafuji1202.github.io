var langMgr;
onPageLoad(() => {
    langMgr = new LanguageManager({
        languages: [
            {
                name: "English",
                code: "en"
            },
            {
                name: "·𐑦𐑙𐑜𐑤𐑦𐑖 (𐑖𐑱𐑝𐑾𐑯 𐑨𐑤𐑓𐑩𐑚𐑧𐑑)",
                code: "en-Shaw"
            },
            {
                name: "日本語",
                code: "ja"
            },
            {
                name: "ZESE",
                lang: "zse",
                code: "art-x-zese-Latn"
            }
        ],
        translations: {
            pageName: {
                en: "Kumafuji1202's Room",
                "en-Shaw": "·𐑒𐑫𐑥𐑭𐑓𐑫𐑡𐑦1202-𐑟 𐑮𐑵𐑥",
                ja: "くまふじの部屋",
                zse: "Kumafuji1202 POTE"
            },
            "lastUpdateOn": {
                en: "Last updated on:",
                "en-Shaw": "Last updated on:",
                ja: "最終更新:",
                zse: "Last updated on:",
            },
            "fdsafdsa": {
                en: "fdsafdsfddfssaasfdadfas",
                "en-Shaw": "fdsafdsfddfssaasfdadfas",
                ja: "fdさfdさdfさfdsfd",
                zse: "fdsafdsfddfssaasfdadfas",
            },
            "siteNames.youTube": {
                en: "YouTube",
                "en-Shaw": "·𐑿𐑑𐑿𐑚",
                ja: "YouTube",
                zse: "YouTube"
            },
            "siteNames.scratch": {
                en: "Scratch",
                "en-Shaw": "·𐑕𐑒𐑮𐑨𐑗",
                ja: "Scratch",
                zse: "Scratch"
            },
            "siteNames.gitHub": {
                en: "FdsaHub",
                "en-Shaw": "·𐑜𐑦𐑑𐑣𐑳𐑚",
                ja: "FdsaHub",
                zse: "FdsaHub"
            },
            "siteNames.discord": {
                en: "Discord",
                "en-Shaw": "·𐑛𐑦𐑕𐑒𐑹𐑛",
                ja: "Discord",
                zse: "Discord"
            },
            "ui.langSelect.label": {
                en: "Select Language",
                "en-Shaw": "𐑕𐑩𐑤𐑧𐑒𐑑 𐑤𐑨𐑙𐑜𐑢𐑦𐑡",
                ja: "言語を選ぶ",
                tok: "toki",
                zse: "Kage kabo zese"
            },
            aboutMe: {
                en: "About me",
                "en-Shaw": "𐑩𐑚𐑬𐑑 𐑥𐑰",
                ja: "自己紹介",
                zse: "Kaka dide kike"
            },
            "aboutMe.content": {
                en: "Hi, I'm Kumafuji1202. I'm an university student who lives in Japan. I speak Japanese (my native language) and English. I'm currently studying Spanish, Russian and Classical Greek. (good planning? what kind of food is that?) I like to code, listen to music, and compose music. Recently I've been interested in linguistics and Touhou Project and several other things. Please contact me if you want to have anything fixed in this site.",
                "en-Shaw":
                    "𐑣𐑲, 𐑲𐑥 Kumafuji1202 (·𐑒𐑫𐑥𐑭𐑓𐑫𐑡𐑦). 𐑲𐑥 𐑩𐑯 𐑿𐑯𐑦𐑝𐑻𐑕𐑩𐑑𐑰 𐑕𐑑𐑿𐑛𐑩𐑯𐑑 𐑣𐑵 𐑤𐑦𐑝𐑟 𐑦𐑯 ·𐑡𐑩𐑐𐑨𐑯. 𐑲 𐑕𐑐𐑰𐑒 ·𐑡𐑨𐑐𐑩𐑯𐑰𐑟 (𐑥𐑲 𐑯𐑱𐑑𐑦𐑝 𐑤𐑨𐑙𐑜𐑢𐑦𐑡) 𐑯 ·𐑦𐑙𐑜𐑤𐑦𐑖. 𐑲 𐑤𐑲𐑒 𐑑 𐑒𐑴𐑛, 𐑤𐑦𐑕𐑯 𐑑 𐑥𐑿𐑟𐑦𐑒, 𐑯 𐑒𐑩𐑥𐑐𐑴𐑟 𐑥𐑿𐑟𐑦𐑒. 𐑮𐑰𐑕𐑯𐑑𐑤𐑦, 𐑲𐑝 𐑚𐑦𐑯 𐑦𐑯𐑑𐑮𐑩𐑕𐑑𐑩𐑛 𐑦𐑯 ·𐑑𐑴𐑣𐑴 𐑐𐑮𐑪𐑡𐑧𐑒𐑑 𐑯 𐑤𐑦𐑙𐑜𐑢𐑦𐑕𐑑𐑦𐑒𐑕.",
                ja: "どうも、Kumafuji1202 (クマフジ、低高高高-高 or 低高低低) です。日本在住の大学生です。日本語(母語)と英語を喋ります。スペイン語とロシア語と古典ギリシア語を勉強中です。(ケーカク? 何それ格の名前?) プログラミングや音楽が趣味です。最近音楽と言語学と東方と連縁が僕の脳内で陣取り合戦してます。",
                zse: "Gogi [biki]! Kike diza Kumafuji1202. diza kita [godi tuti kapa] popi Nihon dudu. Goto Nihon kabo zese diku English kabo zese. Kike godi tuti kapa Russkij kabo zese diku gegu tata (?) kabo zese. Kike gota [tuko [tuku tose] kabo], diku [saki kata kaza sasa], diku [tuko kaza sasa]. Kike gota [tuti kapa kaka dide kabo zese [godi tuti kapa] diku Touhou Project]. Goku kasa dopi kike, diko [kiku gopa [kike tuko [susu popi topa diza deko gogi]]]."
            },
            janPonaMi: {
                en: "My Friends",
                "en-Shaw": "𐑥𐑲 𐑓𐑮𐑧𐑯𐑛𐑟",
                ja: "My Friends",
                tok: "jan pona mi",
                zse: "Kike gogi didi peka"
            },
            "friends.qwert": {
                en: "Qwert",
                "en-Shaw": "·𐑒𐑢𐑻𐑑",
                ja: "Qwertさん",
                zse: "Qwert"
            },
            "friends.tsukikun": {
                en: "Tsukikun",
                "en-Shaw": "·𐑑𐑕𐑫𐑒𐑦𐑒𐑫𐑙",
                ja: "つきくん",
                zse: "Tsukikun"
            },
            "friends.sciTech": {
                en: "Sci-Tech",
                "en-Shaw": "·𐑕𐑲𐑑𐑧𐑒",
                ja: "科学技術さん",
                zse: "Sci-Tech"
            },
            "friends.mamushi": {
                en: "Tera",
                "en-Shaw": "·",
                ja: "てーらさん",
                zse: "Tera"
            },
            "friends.mawario": {
                en: "Mawario",
                "en-Shaw": "·𐑥𐑩𐑢𐑸𐑦𐑴",
                ja: "マワリオさん",
                zse: "Mawario"
            },
            "friends.motohari": {
                en: "Motohari",
                "en-Shaw": "·𐑥𐑪𐑑𐑩𐑣𐑭",
                ja: "モトハリさん",
                zse: 'Motohari'
            },
            "friends.shin": {
                en: "SHIN",
                "en-Shaw": "·𐑖𐑦𐑯",
                ja: "SHINさん",
                zse: "SHIN"
            },
            partnerAds: {
                en: "Partnered projects",
                "en-Shaw": "𐑐𐑸𐑑𐑯𐑼𐑛 𐑐𐑮𐑪𐑡𐑧𐑒𐑑𐑕",
                ja: "提携プロジェクト",
                zse: "Didi peka kito [godi]"
            },
            "partnerAds.buzzle": {
                en: "Buzzle 2.0 by Mawario",
                "en-Shaw": "·𐑚𐑳𐑟𐑤 2.0 𐑚𐑲 ·𐑥𐑩𐑢𐑸𐑦𐑴",
                ja: "Buzzle 2.0 by Mawario",
                zse: "Buzzle 2.0 by Mawario"
            },
            "partnerAds.buzzle.introduction": {
                en: '"Give me that ability of yours." Buzzle is a 2D top-down puzzle / action game. Guide the protagonist, trapped underground, back to the surface',
                "en-Shaw":
                    "·𐑚𐑳𐑟𐑤 𐑦𐑟 𐑩 2D 𐑑𐑪𐑐-𐑛𐑬𐑯, 𐑣𐑲 𐑛𐑦𐑓𐑦𐑒𐑩𐑤𐑦 𐑨𐑒𐑖𐑯 𐑜𐑱𐑥. 𐑣𐑧𐑤𐑐 𐑞 𐑥𐑱𐑯 𐑒𐑨𐑮𐑩𐑒𐑑𐑼 ·𐑥𐑩𐑢𐑸𐑦𐑴 𐑦𐑕𐑒𐑱𐑐 𐑓𐑮𐑪𐑥 𐑩 𐑥𐑦𐑕𐑑𐑽𐑾𐑕 𐑮𐑵𐑥!",
                ja: "Buzzleは2Dトップダウン高難度アクションゲーム。地下に閉じ込められた主人公の脱出を助けよ",
                zse: "Buzzle diza desa katu, kuzu tepo kito [gota] dide zota dodo keke. Goku pupo godi kida zeku zoto peka Mawario popi desa dopi tozu popi kidu!"
            },
            "partnerAds.mamuBox": {
                en: "MamushiBox by Mawario",
                "en-Shaw": "·𐑥𐑩𐑥𐑵𐑖𐑦 𐑚𐑪𐑒𐑕 𐑚𐑲 ·𐑥𐑩𐑢𐑸𐑦𐑴",
                ja: "MamushiBox by Mawario",
                zse: "MamushiBox by Mawario"
            },
            "partnerAds.mamuBox.introduction": {
                en: "GET THE CRYSTAL!",
                "en-Shaw": "𐑜𐑧𐑑 𐑞 𐑒𐑮𐑦𐑕𐑑𐑤!",
                ja: "GET THE CRYSTAL!",
                zse: "GOKU TUTI DIPA PUTA!"
            },
            "partnerAds.qb": {
                en: "Qwertbot645 v2 by Qwert",
                "en-Shaw": "·𐑒𐑢𐑻𐑑𐑚𐑪𐑑 𐑝2 𐑚𐑲 ·𐑒𐑢𐑻𐑑",
                ja: "Qwertbot645 v2 by Qwert",
                zse: "Qwertbot645 v2 by Qwert"
            },
            "partnerAds.qb.introduction": {
                en: "A multi-functional Japanese-language Discord bot.",
                "en-Shaw": "𐑩 𐑥𐑳𐑤𐑑𐑰-𐑓𐑳𐑙𐑒𐑖𐑯𐑤 ·𐑡𐑨𐑐𐑩𐑯𐑰𐑟-𐑤𐑨𐑙𐑜𐑢𐑦𐑡 ·𐑛𐑦𐑕𐑒𐑹𐑛 𐑚𐑪𐑑.",
                ja: "多機能Discord bot",
                zse: "Kuzu kida goto kidu Discord tose."
            },
            "partnerAds.rsit": {
                en: "Rolling Sky Information Table by Qwert",
                "en-Shaw": "·𐑮𐑴𐑤𐑦𐑣 𐑕𐑒𐑲 𐑦𐑯𐑓𐑼𐑥𐑱𐑖𐑩𐑯 𐑑𐑱𐑚𐑩𐑤 𐑚𐑲 ·𐑒𐑢𐑻𐑑",
                ja: "Rolling Sky Information Table v2 by Qwert",
                zse: "Rolling Sky Information Table by Qwert"
            },
            "partnerAds.rsit.introduction": {
                en: "Shows the information of Rolling Sky levels (up to date and previous versions) visually and statistically.",
                "en-Shaw": "𐑖𐑴𐑟 𐑞 𐑦𐑯𐑓𐑼𐑥𐑱𐑖𐑩𐑯 𐑝 ·𐑮𐑴𐑤𐑦𐑣 𐑕𐑒𐑲  𐑤𐑧𐑝𐑩𐑤𐑟 (𐑩𐑐 𐑑 𐑛𐑱𐑑 𐑯 𐑐𐑮𐑰𐑝𐑽𐑕 𐑝𐑻𐑠𐑩𐑯𐑟) 𐑝𐑦𐑠𐑵𐑩𐑤𐑰 𐑯 𐑕𐑑𐑩𐑑𐑦𐑕𐑑𐑦𐑒𐑩𐑤𐑰.",
                ja: "最新のRolling Sky のレベルの情報をわかりやすく表示します。",
                zse: "Tugi [kiku katu biki kaka dide Rolling Sky kuko popo (take popo diku tasu popo) kaka]."
            },
            recentUpds: {
                en: "Recent Updates",
                "en-Shaw": "𐑮𐑰𐑕𐑩𐑯𐑑 𐑳𐑐𐑛𐑱𐑑𐑕",
                ja: "最近の更新"
            },
            "recentUpds.u240714": {
                en: "added Arabic -> Presentation Forms-B tool",
                "en-Shaw": "𐑨𐑛𐑦𐑛 fdsafdsfa",
                ja: "アラビア文字変換機追加"
            },
            "recentUpds.u240726": {
                en: "updated Spritesheet Generator and Direction Converter",
                "en-Shaw": "𐑨𐑛𐑦𐑛 ·𐑕𐑐𐑮𐑲𐑑𐑖𐑰𐑑 𐑡𐑧𐑯𐑼𐑱𐑑𐑼 𐑯 𐑣𐑪𐑮𐑦𐑟𐑪𐑯𐑑𐑩𐑤 𐑒𐑩𐑯𐑝𐑻𐑛𐑼",
                ja: "テクスチャメーカーと横書き⇒縦書き変換器更新"
            },
            "recentUpds.u240811": {
                en: "added Copy Control Characters tool",
                "en-Shaw": '𐑨𐑛𐑦𐑛 "𐑒𐑪𐑓𐑦 𐑒𐑩𐑯𐑑𐑮𐑴𐑤 𐑒𐑨𐑮𐑩𐑒𐑑𐑼𐑟" 𐑑𐑵𐑤',
                ja: "制御文字コピー追加"
            },
            "recentUpds.u250420": {
                en: "updated top page (2x)",
                "en-Shaw": "𐑳𐑚𐑛𐑱𐑑𐑦𐑛 𐑑𐑪𐑐 𐑐𐑱𐑡 (2𐑑)",
                ja: "トップページ更新(2回)"
            },
            "recentUpds.u250509": {
                en: "changed URL of several pages",
                "en-Shaw": "𐑗𐑱𐑯𐑡𐑛 ⸰𐑿.𐑮.𐑤. 𐑝 𐑕𐑧𐑝𐑼𐑩𐑤 𐑐𐑱𐑡𐑦𐑟",
                ja: "いくつかのページのURLを移動"
            },
            "recentUpds.u250608": {
                en: "updated top page: Updated Twitter warning system, added supported language codes after links, commented out dead links",
                "en-Shaw": "𐑳𐑚𐑛𐑱𐑑𐑦𐑛 𐑑𐑪𐑐 𐑐𐑱𐑡",
                ja: "トップページ更新(Twitter警告機能のアップデート、対応言語コード表示の追加、消滅ページへのリンクのコメントアウト)"
            },
            "siteMap.webTools": {
                en: "My Webtools",
                "en-Shaw": "𐑥𐑲 𐑢𐑧𐑚𐑑𐑵𐑤𐑟",
                ja: "ウェブツール",
                tok: "ilo",
                zse: "Kike tuko Javascript/Scratch toto"
            },
            "siteMap.webTools.rs": {
                en: "Rolling Sky",
                "en-Shaw": "·𐑮𐑴𐑤𐑦𐑙 𐑕𐑒𐑲",
                ja: "RS関係",
                zse: "Rolling Sky"
            },
            "siteMap.webTools.rs.rstm": {
                en: "Spritesheet Generator v1.2.4",
                "en-Shaw": "·𐑕𐑐𐑮𐑲𐑑𐑖𐑰𐑑 𐑡𐑧𐑯𐑼𐑱𐑑𐑼 𐑝1.2.4",
                ja: "テクスチャメーカー v1.2.4",
                zse: "Kida Tuko Bika kaka kidu Toto v1.2.4"
            },
            "siteMap.webTools.rs.rstm.introduction": {
                en: "A web tool made by me to make spritesheets for Rolling Sky edits / Rolling Sky Remake levels easier.",
                "en-Shaw": "𐑩 𐑢𐑧𐑚 𐑑𐑵𐑤 𐑥𐑱𐑛 𐑚𐑲 𐑥𐑰 𐑑 𐑥𐑱𐑒 𐑕𐑐𐑮𐑲𐑑𐑖𐑰𐑑𐑕 𐑓 ·𐑮𐑴𐑤𐑦𐑙 𐑕𐑒𐑲 𐑧𐑛𐑦𐑑𐑕 / ·𐑮𐑴𐑤𐑦𐑙 𐑕𐑒𐑲 𐑮𐑰𐑥𐑱𐑒 𐑤𐑧𐑝𐑤𐑟 𐑰𐑟𐑦𐑼.",
                ja: "ローリングスカイエディット/リメイクのためのテクスチャを簡単に作成するツール。",
                zse: "Kida katu tuko bika kaka goko Rolling Sky diku Rolling Sky Remake kidu toto."
            },
            "siteMap.webTools.rs.rsle": {
                en: "Level Encryptor",
                "en-Shaw": "·𐑤𐑧𐑝𐑤 𐑦𐑙𐑒𐑮𐑦𐑐𐑑𐑼",
                ja: "ステージ暗号化ツール",
                zse: "Kita kida Toto Kake Popo Kaka kidu"
            },
            "siteMap.webTools.rs.rsle.introduction": {
                en: 'A web tool that converts old CSV-like Rolling Sky level format into "encrypted" format for later pre-MiniMax and early Minimax version Rolling Sky and vice versa.',
                "en-Shaw":
                    '𐑩 𐑢𐑧𐑚 𐑑𐑵𐑤 𐑞𐑩𐑑 𐑒𐑩𐑯𐑝𐑻𐑑𐑕 𐑴𐑤𐑛 ⸰𐑒𐑕𐑝-𐑤𐑲𐑒 ·𐑮𐑴𐑤𐑦𐑙 𐑕𐑒𐑲 𐑤𐑧𐑝𐑤 𐑓𐑹𐑥𐑨𐑑 𐑦𐑯𐑑𐑵 "𐑦𐑙𐑒𐑮𐑦𐑐𐑑𐑦𐑛" 𐑓𐑹𐑥𐑨𐑑 𐑓 𐑤𐑱𐑑𐑮 𐑐𐑮𐑰-·𐑥𐑦𐑯𐑩𐑥𐑨𐑒𐑕 𐑯 𐑻𐑤𐑦 ·𐑥𐑦𐑯𐑩𐑥𐑨𐑒𐑕 𐑝𐑻𐑠𐑯 ·𐑮𐑴𐑤𐑦𐑙 𐑕𐑒𐑲 𐑯 𐑝𐑲𐑕 𐑝𐑻𐑕𐑩.',
                ja: "初期のCSV風ローリングスカイステージデータ形式とその後「割拠盤上」まで(少なくとも)に使用された「暗号化された」ステージデータ形式間の変換ツール",
                zse: 'Kita kida toto kake popo zese dopi popo zese detu taso "Chess Fortress" diku desa kidu.'
            },
            "siteMap.webTools.linguistics": {
                en: "Linguistics",
                "en-Shaw": "𐑤𐑦𐑙𐑜𐑢𐑦𐑕𐑑𐑦𐑒𐑕",
                ja: "言語学",
                zse: "Kabo zese [godi tuti kapa]"
            },
            "siteMap.webTools.others": {
                en: "Others",
                "en-Shaw": "𐑳𐑞𐑼𐑟",
                ja: "非RS",
                zse: "Toto detu dide RS"
            },
            "siteMap.webTools.controlCopy": {
                en: "Copy Control Characters",
                "en-Shaw": "𐑒𐑪𐑓𐑦 𐑒𐑩𐑯𐑑𐑮𐑴𐑤 𐑒𐑨𐑮𐑩𐑒𐑑𐑼𐑟",
                ja: "制御文字コピー"
            },
            "siteMap.webTools.controlCopy.introduction": {
                en: "Copies Unicode control characters to clipboard.",
                "en-Shaw": "𐑒𐑪𐑓𐑰𐑟 ·𐑿𐑯𐑦𐑒𐑴𐑛 𐑒𐑩𐑯𐑑𐑮𐑴𐑤 𐑒𐑨𐑮𐑩𐑒𐑑𐑼𐑟 𐑑 𐑒𐑤𐑦𐑐𐑚𐑹𐑛.",
                ja: "Unicode制御文字をクリップボードにコピー",
                zse: "Kuge Unicode [tuku] [kabi] kuka dopi kiku [kuge] kaka topi."
            },
            "siteMap.webTools.arabic2presB": {
                en: "Arabic Script -> Arabic Presentation Forms-B Converter",
                "en-Shaw": "·𐑨𐑮𐑩𐑚𐑦𐑒 𐑕𐑒𐑮𐑦𐑐𐑑 -> ·𐑨𐑮𐑩𐑚𐑦𐑒 𐑐𐑮𐑧𐑟𐑩𐑯𐑑𐑱𐑖𐑩𐑯 𐑓𐑹𐑥𐑟-B 𐑒𐑩𐑯𐑝𐑻𐑑𐑼",
                ja: "アラビア文字Unicodeブロック → アラビア文字表示形B 変換器"
            },
            "siteMap.webTools.arabic2presB.introduction": {
                en: "This tool converts Arabic script Unicode block text into Arabic Presentation Forms-B text so that the letters look all connected and in the right order even in environments that do not support LTR layout / IMFI letter shape changes.",
                "en-Shaw":
                    "𐑞𐑦𐑕 𐑑𐑵𐑤 𐑒𐑩𐑯𐑝𐑻𐑑𐑕 ·𐑨𐑮𐑩𐑚𐑦𐑒 𐑕𐑒𐑮𐑦𐑐𐑑 ·𐑿𐑯𐑦𐑒𐑴𐑛 𐑚𐑤𐑪𐑒 𐑑𐑧𐑒𐑕𐑑 𐑦𐑯𐑑𐑵 ·𐑨𐑮𐑩𐑚𐑦𐑒 𐑐𐑮𐑧𐑟𐑩𐑯𐑑𐑱𐑖𐑩𐑯 𐑓𐑹𐑥𐑟-B 𐑑𐑧𐑒𐑕𐑑 𐑕𐑴 𐑞𐑨𐑑 𐑞 𐑤𐑧𐑑𐑼𐑟 𐑤𐑫𐑒 𐑷𐑤 𐑒𐑩𐑯𐑧𐑒𐑑𐑦𐑛 𐑯 𐑦𐑯 𐑞 𐑮𐑲𐑑 𐑹𐑛𐑼 𐑰𐑝𐑩𐑯 𐑦𐑯 𐑦𐑯𐑝𐑲𐑮𐑩𐑥𐑧𐑯𐑑𐑕 𐑞𐑨𐑑 𐑛𐑵 𐑯𐑪𐑑 𐑕𐑳𐑐𐑹𐑑 𐑤.𐑑.𐑮. 𐑤𐑱𐑬𐑑 / ⸰𐑦𐑥𐑓𐑲 (IMFI) 𐑤𐑧𐑑𐑼 𐑖𐑱𐑐 𐑗𐑱𐑯𐑡𐑩𐑟.",
                ja: "アラビア文字Unicodeブロックを使用したテキストをアラビア文字表示形Bに変換して、右横書きや位置による字形変化に対応していない環境でも文字を正しい形・順番で表示させるようにします。"
            },
            "siteMap.webTools.mcadc": {
                en: "Minecraft Armor Damage Calculator",
                "en-Shaw": "·𐑥𐑲𐑯𐑒𐑮𐑨𐑓𐑑 𐑸𐑥𐑼 𐑛𐑨𐑥𐑦𐑡 𐑒𐑨𐑤𐑒𐑘𐑩𐑤𐑱𐑑𐑼",
                ja: "Minecraft防具ダメージ計算機",
                zse: "Kita kida Toto Kake Minecraft kida Gebu kidu kidu"
            },
            "siteMap.webTools.mcadc.introduction": {
                en: "A small Scratch tool that shows a damage graph for given armor / armor toughness points.",
                "en-Shaw": "𐑩 𐑕𐑥𐑷𐑤 ·𐑕𐑒𐑮𐑨𐑗 𐑑𐑵𐑤 𐑞𐑩𐑑 𐑖𐑴𐑟 𐑩 𐑛𐑨𐑥𐑦𐑡 𐑜𐑮𐑨𐑓 𐑓 𐑜𐑦𐑝𐑯 𐑸𐑥𐑼 / 𐑸𐑥𐑼 𐑑𐑳𐑓𐑯𐑩𐑕 𐑐𐑶𐑯𐑑𐑕.",
                ja: "指定された防具ゲージ・防具強度でダメージの変化をグラフにして表示するScratchツール。",
                zse: "Detu dezu Scratch toto."
            },
            "siteMap.webTools.xsampaInput": {
                en: "X-SAMPA(-based) Phonetic Symbol Input Tool",
                "en-Shaw": "⸰𐑦-𐑕𐑩𐑥𐑓𐑨(X-SAMPA)(-𐑚𐑱𐑕𐑑) 𐑓𐑩𐑯𐑧𐑑𐑦𐑒 𐑕𐑦𐑥𐑚𐑩𐑤 𐑦𐑯𐑐𐑫𐑑 𐑑𐑵𐑤",
                ja: "X-SAMPA 発音記号入力ツール",
                zse: "X-SAMPA Kabo Sasa kida Poko kidu Toto"
            },
            "siteMap.webTools.xsampaInput.introduction": {
                en: "An input assistance tool for hard keyboards with input codes based on X-SAMPA.",
                "en-Shaw": "𐑩𐑯 𐑦𐑯𐑐𐑫𐑑 𐑩𐑕𐑦𐑕𐑑𐑩𐑯𐑕 𐑑𐑵𐑤 𐑓 𐑣𐑸𐑛 𐑒𐑰𐑚𐑹𐑛𐑟 𐑢𐑦𐑞 𐑦𐑯𐑐𐑫𐑑 𐑒𐑴𐑛𐑟 𐑚𐑱𐑕𐑑 𐑪𐑯 ⸰𐑦-𐑕𐑩𐑥𐑓𐑨.",
                ja: "X-SAMPAを基本にしたハードキーボード用の入力補助ツール。"
            },
            "siteMap.webTools.shavianKbd": {
                en: "Shavian Soft Keyboard (wip)",
                "en-Shaw": "·𐑖𐑱𐑝𐑾𐑯 𐑕𐑪𐑓𐑑 𐑒𐑰𐑚𐑹𐑛 (⸰𐑢𐑦𐑐)",
                ja: "ショー文字ソフトキーボード(作成中)",
                zse: "[Bude] Gaku goko Shavian [Kabi] Zese"
            },
            "siteMap.webTools.shavianKbd.introduction": {
                en: "A soft keyboard for the Shavian alphabet, a 1960 proposed phonemic writing system for English.",
                "en-Shaw": "𐑩 𐑕𐑪𐑓𐑑 𐑒𐑰𐑚𐑹𐑛 𐑓 𐑞 ·𐑖𐑱𐑝𐑾𐑯 𐑨𐑤𐑓𐑩𐑚𐑧𐑑, 𐑩 1960 𐑐𐑮𐑩𐑐𐑴𐑟𐑛 𐑓𐑴𐑯𐑰𐑥𐑦𐑒 𐑮𐑲𐑑𐑦𐑙 𐑕𐑦𐑕𐑑𐑩𐑥 𐑓𐑹 ·𐑦𐑙𐑜𐑤𐑦𐑖.",
                ja: "1960年に開発された英語の音素的文字、ショー文字のための入力ツール。",
                zse: "Suga [bude] gaku goko Shavian [kabi] zese, kito [tuko [kabi] zese goko English kabo zese tapi 1960]."
            },
            "siteMap.webTools.utf8Cvt": {
                en: "UTF-8 Converter",
                ja: "UTF-8 変換器"
            },
            "siteMap.webTools.utf8Cvt.introduction": {
                en: "This tool converts Unicode text into UTF-8 hexadecimal code and vice versa.",
                ja: "UnicodeテキストをUTF-8の十六進数表記に/その逆に変換します。",
                zse: "Toto tuko [Unicode kito [kabi] tuti diza UTF-8 kuko [kabi kuku], keko zoto zoso kuka [kabi kuku] zese."
            },
            "siteMap.webTools.directionCvt": {
                en: "Vertical -> Horizontal Converter for 方塊字",
                "en-Shaw": "𐑝𐑻𐑑𐑦𐑒𐑩𐑤 -> 𐑣𐑪𐑮𐑦𐑟𐑪𐑯𐑑𐑩𐑤 𐑒𐑩𐑯𐑝𐑻𐑛𐑼 𐑓 方塊字",
                ja: "横書き⇒縦書き変換器"
            },
            "siteMap.webTools.directionCvt.introduction": {
                en: "This tool reformats a normal text written using 方塊字(Chinese characters, Kana, Hangul etc) to vertical text.",
                "en-Shaw":
                    "𐑞𐑦𐑕 𐑑𐑵𐑤 𐑮𐑦𐑓𐑹𐑥𐑩𐑑𐑕 𐑩 𐑯𐑹𐑥𐑩𐑤 𐑑𐑧𐑒𐑕𐑑 𐑮𐑦𐑑𐑩𐑯 𐑿𐑟𐑦𐑙 方塊字(·𐑗𐑲𐑯𐑰𐑟 𐑒𐑨𐑮𐑩𐑒𐑑𐑼𐑟, 𐑒𐑭𐑯𐑩, 𐑣𐑭𐑯𐑜𐑵𐑤 𐑯𐑯𐑯) 𐑑 𐑝𐑻𐑑𐑦𐑒𐑩𐑤 𐑑𐑧𐑒𐑕𐑑.",
                ja: "横書きの文章の文字を並べ替えて縦読みに変換します(1行最大1000文字)。変換後の文章は縦書きが使えない環境にコピペなどをして使えます。"
            },
            "siteMap.otherPages": {
                en: "Other pages",
                "en-Shaw": "𐑳𐑞𐑼 𐑐𐑱𐑡𐑦𐑟",
                ja: "その他のガラクタ",
                zse: "Detu dige topa"
            },
            "siteMap.otherPages.rs.rsrqh": {
                en: "RSR 2024 April Fools Trivia Quiz Help",
                "en-Shaw": "⸰𐑮𐑕𐑮 2024 ·𐑱𐑐𐑮𐑦𐑤 𐑓𐑵𐑤𐑟 𐑑𐑮𐑦𐑝𐑾 𐑒𐑢𐑦𐑟 𐑣𐑧𐑤𐑐",
                ja: "RSRクイズヘルプ",
                zse: "RSR kida Kazi kidu kita kida Godi pupo kidu"
            },
            "siteMap.otherPages.rs.rsrqh.introduction": {
                en: "A list of all 20 questions from RSR Trivia Quiz required to answer to use RSR on 2024/Apr/01, shown with their answers and Japanese translations.",
                "en-Shaw":
                    "𐑩 𐑤𐑦𐑕𐑑 𐑝 𐑷𐑤 20 𐑒𐑢𐑧𐑕𐑗𐑩𐑯𐑟 𐑓𐑮𐑷𐑥 ⸰𐑮𐑕𐑮 𐑑𐑮𐑦𐑝𐑾 𐑒𐑢𐑦𐑟 𐑞𐑩𐑑 𐑢𐑩𐑟 𐑮𐑦𐑒𐑢𐑲𐑼𐑛 𐑑 𐑨𐑯𐑕𐑼 𐑑 𐑿𐑟 ⸰𐑮𐑕𐑮 𐑪𐑯 2024/𐑱𐑐𐑮/01, 𐑖𐑴𐑯 𐑢𐑦𐑞 𐑞𐑺 𐑨𐑯𐑕𐑼𐑟 𐑯 ·𐑡𐑨𐑐𐑩𐑯𐑰𐑟 𐑑𐑮𐑨𐑯𐑕𐑤𐑱𐑖𐑩𐑯𐑟.",
                ja: "2024年4月1日にRSRで出題された20個の「RSRトリビアクイズ」問題の日本語訳と答えを併記した一覧。",
                zse: "Kuda kida kazi kidu popi RSR pobi tado 2024/4/1 diku Nihon kabo zese diku kida tusi kidu."
            },
            "siteMap.otherPages.rs.scraRS": {
                en: "Scratch Remake of Rolling Sky",
                "en-Shaw": "·𐑕𐑒𐑮𐑨𐑗 𐑮𐑰𐑥𐑱𐑒 𐑝 ·𐑮𐑴𐑤𐑦𐑙 𐑕𐑒𐑲",
                ja: "Scratchによるローリングスカイ再現",
                zse: "Rolling Sky popi Scratch"
            },
            "siteMap.otherPages.rs.scraRS.introduction": {
                en: "Three Rolling Sky fanmade levels made in Scratch.",
                "en-Shaw": "𐑔𐑮𐑰 ·𐑮𐑴𐑤𐑦𐑙 𐑕𐑒𐑲 𐑓𐑨𐑯𐑥𐑱𐑛 𐑤𐑧𐑝𐑤𐑟 𐑥𐑱𐑛 𐑦𐑯 ·𐑕𐑒𐑮𐑨𐑗.",
                ja: "Scratchで作成した3つのローリングスカイのファンメイドステージ。",
                zse: "Zote Rolling Sky fanmade popo popi Scratch."
            }
        }
    });
});
