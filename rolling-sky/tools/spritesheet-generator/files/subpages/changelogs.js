var changeLogs = [
    {
        "versionNumber": "1.0.0",
        "releaseDate": {
            "year": 2023,
            "month": 4,
            "day": 24
        },
        "changes": []
    },
    {
        "versionNumber": "1.0.1",
        "releaseDate": {
            "year": 2023,
            "month": 4,
            "day": 25
        },
        "changes": {
            "bugfixes": [
                {
                    "en": "",
                    "ja": "出力部分が縦長になるレイアウト時に出力部分の背景の下1/3が白色になる"
                },
                {
                    "en": "visual error when the page is loaded in ",
                    "ja": "出力部分が縦長になるレイアウトが適用されるような画面サイズでサイトを最初に読み込んだ時Fragileの出力欄とMoverの出力欄がダブる"
                }
            ]
        }
    },
    {
        "versionNumber": "1.0.2",
        "releaseDate": {
            "year": 2023,
            "month": 4,
            "day": 27
        },
        "changes": {
            "bugfixes": [
                {
                    "en": "",
                    "ja": "Enemyの左下の帯部分をデフォルトの状態のままで保存したテーマプロジェクトを再び読み込んだ時に帯部分が消える"
                },
                {
                    "en": "'Squares(Dynamic Hill)' and 'Circle+rhombus(Rolling World)' jumppad color setting not saved in JSON",
                    "ja": "「四角(ダイナミックな丘)」「円+四角(Rolling World)」の模様のジャンプ床の設定がファイルに保存されない"
                }
            ],
            "additions": [
                {
                    "en": "Added ground pattern 'With outlines'",
                    "ja": "通常床の模様「縁取り有り」を実装"
                }
            ],
            "changes": [
                {
                    "en": "Fixed some translations",
                    "ja": "いくつかの翻訳の変更(日英両語)"
                }
            ]
        }
    },
    {
        "versionNumber": "1.0.3",
        "releaseDate": {
            "year": 2023,
            "month": 4,
            "day": 27
        },
        "changes": {
            "bugfixes": [
                {
                    "en": "Enemy bottom-left stripe settings sometimes not saved in JSON",
                    "ja": "Enemyの左下の帯部分の変更が保存されないことがある"
                }
            ],
            "additions": [
                {
                    "en": "Added jumppad pattern 'Simple circle' (from Rolling Universe)",
                    "ja": "ジャンプ床の模様「円(Faith)」を追加(RUより)"
                }
            ],
            "changes": [
                {
                    "en": "Changed optgroup colors in Dark mode",
                    "ja": "ダークモード時のOptgroupの色を変更"
                },
                {
                    "en": "Changed temporary page title before loading locale from '.' 'Rolling Sky Spritesheet Generator'",
                    "ja": "読み込み未完了時のページタイトルを「.」から「Rolling Sky Spritesheet Generator」に変更"
                }
            ]
        }
    },
    {
        "versionNumber": "1.0.4",
        "releaseDate": {
            "year": 2023,
            "month": 4,
            "day": 28
        },
        "changes": {
            "changes": [
                {
                    "en": "Smoothened jumppad glow",
                    "ja": "ジャンプ床の発光がより滑らかになった"
                }
            ]
        }
    },
    {
        "versionNumber": "1.0.5",
        "releaseDate": {
            "year": 2023,
            "month": 4,
            "day": 29
        },
        "changes": {
            "changes": [
                {
                    "en": "Smoothened 'Checkerboard' style jumppad glow",
                    "ja": "市松模様のジャンプ床の発光もなめらかになった"
                }
            ]
        }
    },
    {
        "versionNumber": "1.0.6",
        "releaseDate": {
            "year": 2023,
            "month": 5,
            "day": 3
        },
        "changes": {
            "additions": [
                {
                    "en": "Added Enemy top-right style 'Neon' (for Neon-Dazzle-Faster-Successful Person)",
                    "ja": "Enemyの右上の設定にネオン対応追加"
                },
                {
                    "en": "Added Enemy minijump setting form (automatically enabled when available)",
                    "ja": "Enemyの設定に半ジャンプを追加"
                }
            ],
            "changes": [
                {
                    "en": "Smoothened 'Checkerboard' style jumppad glow",
                    "ja": "市松模様のジャンプ床の発光もなめらかになった"
                },
                {
                    "en": "Small adjustment for Floater Enemy top-right style",
                    "ja": "Enemyの右上部分のFloaterを微調整"
                },
                {
                    "en": "Small adjustment for active jumppad glow",
                    "ja": "起動時のジャンプ床の発光を微調整"
                },
                {
                    "en": "Changed neonbox render system",
                    "ja": "ネオンボックスの描画の仕組みを変更"
                },
                {
                    "en": "Renamed flipper style 'cits' to 'Castle in the Sky'",
                    "ja": "反転床模様「cits」を「天空の城風」に改名"
                },
                {
                    "en": "Small improvement for Fragile/FragileActive",
                    "ja": "Fragile, FragileActiveのテクスチャを一部修正"
                }
            ]
        }
    },
    {
        "versionNumber": "1.0.7",
        "releaseDate": {
            "year": 2023,
            "month": 5,
            "day": 6
        },
        "changes": {
            "changes": [
                {
                    "en": "Small adjustment for Floater Enemy top-right style (again)",
                    "ja": "Enemyの右上部分のFloaterをもう1回微調整"
                }
            ]
        }
    },
    {
        "versionNumber": "1.0.8",
        "releaseDate": {
            "year": 2023,
            "month": 5,
            "day": 28
        },
        "changes": {
            "additions": [
                {
                    "en": "Added options to change glow level of Ground lines",
                    "ja": "床の線の光り具合を変えるオプション追加",
                    "additionalInfo": [
                        {
                            "en": "Currently available options: Normal, Double(Sky), Thin(Volcano), Sharp(Sci-Tech), Glowing(Deep Space)",
                            "ja": "現在選べるオプション: 通常, 2段(空スタイル、すでに実装済み), 細い(火山スタイル), 鋭い(科学技術スタイル), 発光(深空スタイル)"
                        },
                        {
                            "en": "Removed 'Double lines' option(merged)",
                            "ja": "それに伴い「床の線を2重にする」を廃止"
                        }
                    ]
                },
                {
                    "en": "Added jumppad style option 'Import'",
                    "ja": "ジャンプ床の設定に「インポート」を追加"
                },
                {
                    "en": "Added option to add 'inner patterns' on Fragiles",
                    "ja": "ガラス床に「内部模様」の設定を追加",
                    "additionalInfo": [
                        {
                            "en": "Currently available options: None and Snowflakes",
                            "ja": "現在選べるオプション: 無し, 雪模様"
                        },
                        {
                            "en": "Renamed option 'Patterns' to 'Fragile edge decoration",
                            "ja": "それに伴い設定項目「模様」を「縁装飾」に変更"
                        }
                    ]
                },
                {
                    "en": "Added Fragile edge decoration style 'FragileActive boxes(VR Fairyland)' and 'Double(Cave('18 promotion))'",
                    "ja": "ガラス床縁装飾「箱(VRの世界)」と「二重(18年洞窟予告)」を追加",
                    "additionalInfo": [
                        {
                            "en": "Reference for the latter: <img src=\"https://rs.miraheze.org/wiki/File:Illusionfanmade.png\">",
                            "ja": "後者の参考画像: <img src=\"https://rs.miraheze.org/wiki/File:Illusionfanmade.png\">"
                        }
                    ]
                },
                {
                    "en": "Categorized Fragile line decoration styles to 'Rolling Sky' and 'Fanmade'",
                    "ja": "ガラス床縁装飾に新しく「Rolling Sky」「ファンメイド」の分類を追加"
                },
                {
                    "en": "Added help for General color variation settings",
                    "ja": "補助パレットの設定に説明を追加"
                },
                {
                    "en": "Added option for Movers to remove outlines (for RSR to mimic some RS theme settings that don't have Mover outlines)",
                    "ja": "移動床の設定に「強制線消し」を追加"
                },
                {
                    "en": "Added 3 flipper patterns: 'Fake ground tile', 'Checker + edge (3D Spatial Zone)' and 'Heart (Rolling World)'",
                    "ja": "反転床模様「擬態床」「市松模様(枠付き) (3D Spatial Zone)」「ハート形 (Rolling World)」追加"
                }
            ],
            "changes": [
                {
                    "en": "Changes in the form now updates render immediately",
                    "ja": "テクスチャ画像が即時更新するように変更"
                },
                {
                    "en": "Improved tile setting UI",
                    "ja": "タイルの設定UIを変更"
                },
                {
                    "en": "Improved Fragile/FragileActive outline shapes",
                    "ja": "ガラス床の線に小さい変更"
                },
                {
                    "en": "Fixed some English translations",
                    "ja": "一部の英語を修正"
                },
                {
                    "en": "Changelogs(Japanese only) added",
                    "ja": "バージョン情報がタイトル部分のバージョン番号をクリックで見られるようになった"
                }
            ]
        }
    },
    {
        "versionNumber": "1.0.9",
        "releaseDate": {
            "year": 2023,
            "month": 7,
            "day": 4
        },
        "changes": {
            "additions": [
                {
                    "en": "Added Ground edge stype 'Cut corners (no thick edge)'",
                    "ja": "普通床縁装飾「角落ち(枠線無し)」を追加"
                },
                {
                    "en": "Added 'Thick' General line style (From Lab-C-Mutation Crisis)",
                    "ja": "普通床の線「太い」を追加"
                },
                {
                    "en": "Added Jumppad patterns 'Scale 1.1' 'Sparkles' and 'Double square'",
                    "ja": "ジャンプ床模様「鱗」「キラキラ」「二重四角」を追加"
                },
                {
                    "en": "Added Flipper tile patterns 'Ring', 'Cross shield' and 'Nuclear hazard'",
                    "ja": "反転床模様「輪 (ホライゾンクルーズ)」「十字の盾 (割拠盤上　逐鹿群雄)」「核ハザード (近日公開ステージ)」追加"
                },
                {
                    "en": "Added Enemy top-right style 'Ancient' (for Relics-Fairy Tale) and '3rd Anniversary' (for Happy Birthday-Anniversary)",
                    "ja": "Enemyの右上の設定に「古代」「三周年」を追加"
                }
            ],
            "changes": [
                {
                    "en": "Small adjustment for 'Double' General line style",
                    "ja": "普通床の線「二重」を微調整"
                },
                {
                    "en": "A small adjustment is done for tile outline shapes",
                    "ja": "縁取り付きの普通床や移動床などに使われる縁を微調整"
                },
                {
                    "en": "Removed Fragile pattern 'Hexagon bubbles'",
                    "ja": "ガラス床模様「六角形の泡」を削除"
                },
                {
                    "en": "Removed Jumppad patterns 'Citrus' 'Square + circle' and 'Kanji「放浪癖」' due to being too unique to use",
                    "ja": "ユニークすぎて使いようがないのでジャンプ床模様「柑橘断面」「四角+丸」「放浪癖」を削除"
                },
                {
                    "en": "A small adjustment is done for flipper pattern placement",
                    "ja": "反転床のテクスチャ位置を微調整"
                }
            ]
        }
    },
    {
        "versionNumber": "1.1.0",
        "releaseDate": {
            "year": 2023,
            "month": 7,
            "day": 10
        },
        "changes": {
            "additions": [
                {
                    "en": "Added some customization to jump pad setting 'Spiral Patterns'",
                    "ja": "ジャンプ床模様「中国風渦巻き模様」のカスタマイズを強化"
                }
            ],
            "changes": [
                {
                    "en": "Changed active jump pad glow to look closer to original RS textures",
                    "ja": "ジャンプ床の発光具合を本家により近いものに変更"
                }
            ]
        }
    },
    {
        "versionNumber": "1.1.1",
        "releaseDate": {
            "year": 2023,
            "month": 8,
            "day": 31
        },
        "changes": {
            "additions": [
                {
                    "en": "Added Jumppad pattern 'Hexagons' (from World Cup)",
                    "ja": "ジャンプ床模様「六角形」追加"
                },
                {
                    "en": "Added 'shadow' in 'Floater' Enemy top right setting",
                    "ja": "第一テーマ領域設定「星」に「影」を追加"
                },
                {
                    "en": "Added option to change line thickness/glow of Enemy main palette sections",
                    "ja": "Enemyメインパレットの線の太さを変更するオプション追加"
                },
                {
                    "en": "Added button to swap primary/secondary palette color settings",
                    "ja": "Enemyメインパレットを入れ替えるボタン追加"
                },
                {
                    "en": "Added button to change Fragile/FragileActive opacity",
                    "ja": "Fragileの不透明度を変更するオプション追加"
                },
                {
                    "en": "Added Flip tile pattern 'Biohazard' (from Lab-Confidential) and '8' (from the upcoming 8th anniversary level)",
                    "ja": "反転床模様「バイオハザード」「8」追加"
                }
            ],
            "changes": [
                {
                    "en": "Set text size in CSS so that the site looks same regardless of browser text site settings",
                    "ja": "ブラウザの文字設定に関わらず同じように表示されるように文字サイズを設定"
                },
                {
                    "en": "Fixed colors of some parts in Dark mode",
                    "ja": "ダークモードの色を一部修正"
                }
            ]
        }
    },
    {
        "versionNumber": "1.1.2",
        "releaseDate": {
            "year": 2023,
            "month": 10,
            "day": 6
        },
        "changes": {
            "additions": [
                {
                    "en": "Added options to change glow level of jumppads (suggested by w_lll)",
                    "ja": "ジャンプ床の発光具合(起動後)を変更する設定を追加 [w_lllさんによる提案]",
                    "additionalInfo": [
                        {
                            "en": "Currently available options: Normal, None and High",
                            "ja": "現在のオプション: 通常, 発光無し, 拡張(1.0.9と同じ光り具合)"
                        },
                        {
                            "en": "Deleted 'Disable active jumppad glow' (merged with this)",
                            "ja": "それに伴い「起動時のジャンプ床面部分の発光を無効化」を廃止"
                        }
                    ]
                },
                {
                    "en": "Added options to change 'style' of linear light",
                    "ja": "ビームテクスチャの「スタイル」を指定する設定を追加",
                    "additionalInfo": [
                        {
                            "en": "Currently available options: Original and Scratch style",
                            "ja": "現在のオプション: 原作, ボールころころ風"
                        }
                    ]
                },
                {
                    "en": "Added Enemy top-right pattern 'Sunshine' (from Morning Dawn - Sunset Glow)",
                    "ja": "Enemy右上設定「陽光」追加"
                },
                {
                    "en": "Added Flip tile pattern 'Dao fu' (from Auspicious Jade Rabbit) and 'Sunshine' (from Sunset Glow spritesheets)",
                    "ja": "反転床模様「倒福」「陽光風」追加"
                },
                {
                    "en": "You can now start making Enemy top-right part from 'presets' (except for 'star' and 'crystal')",
                    "ja": "「星」「結晶」以外のEnemy右上設定に新しく「プリセット」から始める機能を追加"
                },
                {
                    "en": "Added info to help find where to extract already existing spritesheets from (current placement is temporary)",
                    "ja": "既存のテクスチャ取り出しのためのヘルプテキストを追加 (現在の場所は仮置き)"
                }
            ],
            "changes": [
                {
                    "en": "Loading saved theme file now immediately updates render",
                    "ja": "保存データを読みこんだ時に出力が即反映されるよう変更"
                }
            ]
        }
    },
    {
        "versionNumber": "1.1.3",
        "releaseDate": {
            "year": 2023,
            "month": 10,
            "day": 29
        },
        "changes": {
            "additions": [
                {
                    "en": "Added Flip tile pattern 'Cherry Blossom' (from Flower Dance - Falling Blossoms)",
                    "ja": "反転床模様「桜の花」追加"
                }
            ],
            "changes": [
                {
                    "en": "Jumppad tile pattern 'Circle+rhombus' reinstated",
                    "ja": "ジャンプ床模様「四角+〇」復活"
                }
            ]
        }
    },
    {
        "versionNumber": "1.1.4",
        "releaseDate": {
            "year": 2023,
            "month": 11,
            "day": 5
        },
        "changes": {
            "additions": [
                {
                    "en": "Added Enemy top-right pattern 'Pixel' (from 1UP - 8Bit)",
                    "ja": "Enemy右上設定「像素」(1UPと8ビット)追加"
                },
                {
                    "en": "Added Enemy secondary theme area pattern 'Halloween'",
                    "ja": "第二テーマ領域設定「ハロウィン」追加"
                }
            ],
            "changes": [
                {
                    "en": "Fixed small jump area",
                    "ja": "半ジャンプの領域設定を調整"
                },
                {
                    "en": "Changed internal system for Enemy presets",
                    "ja": "Enemy右上設定の「プリセット」に関する内部的処理システムを変更"
                },
                {
                    "en": "Fixed 1 English translation",
                    "ja": "英語翻訳を1つ修正"
                }
            ]
        }
    },
    {
        "versionNumber": "1.1.5",
        "releaseDate": {
            "year": 2023,
            "month": 12,
            "day": 19
        },
        "changes": {
            "bugfixes": [
                {
                    "en": "Fixed 3rd Anniversary top-right color setting not being saved to JSON theme files",
                    "ja": "JSONファイルに三周年系の色設定が保存されないバグを修正"
                }
            ],
            "additions": [
                {
                    "en": "Added Enemy top-right pattern 'The 4th Anniversary' (from The 4th Anniversary - Birthday Party - A Dream of 7 Years)",
                    "ja": "Enemy右上設定「四周年(t4a)」追加"
                },
                {
                    "en": "Added Enemy secondary theme area pattern 'Candy/Christmas' with unfinished previews",
                    "ja": "第二テーマ領域設定「飴・聖夜」追加(プレビュー蜜柑制)"
                }
            ]
        }
    },
    {
        "versionNumber": "1.1.6",
        "releaseDate": {
            "year": 2024,
            "month": 1,
            "day": 16
        },
        "changes": {
            "additions": [
                {
                    "en": "Added Jumppad pattern 'Mystery' (from Mystery, requested by w_lll)",
                    "ja": "ジャンプ床模様「謎」追加 [w_lllさんによる提案]"
                },
                {
                    "en": "Added Enemy top-right pattern 'Kepler' (from Kepler\'s Dream - Stars)",
                    "ja": "Enemy右上設定「ケプラー(kp)」追加"
                },
                {
                    "en": "Added options to change neonbox 'sign' colors (inspired by request by yousefhosam5969)",
                    "ja": "ネオンボックスの「マーク」の色を変える設定追加"
                },
                {
                    "en": "Added feature to download all textures and JSON theme data in a single uncompressed ZIP file",
                    "ja": "全6枚のテクスチャとJSONデータをzipにまとめてダウンロードする機能追加"
                },
                {
                    "en": "Fixed 'rhombus' Flip tile pattern and made it more customizable",
                    "ja": "反転床模様「四角模様(春節)」を修正"
                }
            ],
            "changes": [
                {
                    "en": "Changed layout of buttons in 'Save/Load' tab",
                    "ja": "「保存・読込」タブ(「保存」から改名)のボタン配列を変更"
                },
                {
                    "en": "Changed style of some form elements a bit",
                    "ja": "一部UI要素の変更"
                }
            ]
        }
    },
    {
        "versionNumber": "1.1.7",
        "releaseDate": {
            "year": 2024,
            "month": 2,
            "day": 27
        },
        "changes": {
            "additions": [
                {
                    "en": "Added flipper patterns 'Shooting stars', '☻', 'Needle'",
                    "ja": "反転床模様「流れ星」「床にTBS」「縫い針」を追加"
                },
                {
                    "en": "You can now extract-import Enemy Middle(D and E) colors from existing spritesheets",
                    "ja": "Enemy基本色(DとE)を既存のテクスチャファイルから抽出する機能を追加"
                }
            ],
            "changes": [
                {
                    "en": "Changes to the UI",
                    "ja": "UIに種々の変更",
                    "additionalInfo": [
                        {
                            "en": "Contents of the 'Save/Load' tab, 'Recent Updates' and language/theme settings moved to new toolbar at the top-right",
                            "ja": "「保存・読込」タブ, 「最近のアップデート」, 左上の言語・テーマ設定の内容を画面右上に新追加のツールバーに移動"
                        },
                        {
                            "en": "Portrait mode is now supported",
                            "ja": "縦画面UI対応"
                        },
                        {
                            "en": "You can now open/close sections of the Tile setting form",
                            "ja": "床設定のセクションを開閉可能に変更"
                        },
                        {
                            "en": "Hovering on an output canvas will show corresponding texture type name and clicking on it will open corresponding Tile setting form sections",
                            "ja": "出力ビューにマウスオーバーでファイル名を表示, クリックで対応する床設定のセクションを開く"
                        },
                        {
                            "en": "Changed button styles",
                            "ja": "ボタンの見た目を変更"
                        }
                    ]
                },
                {
                    "en": "Your theme setting is now auto-saved in Local Storage",
                    "ja": "テーマ設定がローカルストレージに保存されるようになった",
                    "additionalInfo": [
                        {
                            "en": "You can clear the saved data (and revert everything to default) from a button in the Setting window",
                            "ja": "「設定」ウィンドウからローカルストレージのテーマデータをクリア(&すべてデフォルトに戻す)できます"
                        }
                    ]
                },
                {
                    "en": "Recent update additions are now marked with 🆕",
                    "ja": "最新アップデートの追加要素に🆕が表示されるようになった"
                },
                {
                    "en": "Updated visuals of the changelog page",
                    "ja": "変更ログページのヴィジュアルを更新"
                }
            ]
        }
    },
    {
        "versionNumber": "1.1.8",
        "releaseDate": {
            "year": 2024,
            "month": 4,
            "day": 6
        },
        "changes": {
            "bugfixes": [
                {
                    "en": "Fixed portrait mode UI not being applied... hopefully",
                    "ja": "縦画面UIが適用されないバグを修正"
                }
            ],
            "additions": [
                {
                    "en": "Added flipper pattern 'Leaves'",
                    "ja": "反転床模様「四つ葉」を追加"
                }
            ],
            "changes": [
                {
                    "en": "Some code made faster by replacing <code>Array.forEach()</code> with <code>for(... of ...)</code>",
                    "ja": "<code>Array.forEach()</code>を<code>for(... of ...)</code>に置き換えて高速化"
                }
            ]
        }
    },
    {
        "versionNumber": "1.1.9",
        "releaseDate": {
            "year": 2024,
            "month": 6,
            "day": 30
        },
        "changes": {
            "bugfixes": [
                {
                    "en": "Fixed Enemy middle color extractor not working",
                    "ja": "Enemy中段の色抽出が使えない問題を修正"
                }
            ],
            "additions": [
                {
                    "en": "Added flipper patterns 'Hourglass', 'Club', 'Sparkle'",
                    "ja": "反転床模様「砂時計」「クラブ」「キラキラ」を追加"
                }
            ],
            "changes": [
                {
                    "en": "Loading JSON savedata now automatically updates theme name in save form",
                    "ja": "JSONデータを読み込んだ時に保存フォームのテーマ名欄が自動で更新されるようになった"
                },
                {
                    "en": "Flipper obverse and reverse patterns can now be chosen separately",
                    "ja": "反転床の模様が表裏別々に設定できるようになった"
                }
            ]
        }
    },
    {
        "versionNumber": "1.2.0",
        "releaseDate": {
            "year": 2024,
            "month": 7,
            "day": 26
        
        },
        "changes": {
            "bugfixes": [
                {
                    "en": "Fixed Enemy top-right presets not working",
                    "ja": "Enemyのプリセットが使えない問題を修正"
                }
            ],
            "additions": [
                {
                    "en": "Added Enemy top-right pattern \"New Generic\" (with color extraction tool)",
                    "ja": "Enemy右上設定「新汎用」を追加(色抽出機能付き)"
                },
                {
                    "en": "Added flipper patterns 'Crest' (from Kingdom War)",
                    "ja": "反転床模様「紋章」を追加"
                }
            ],
            "changes": [
                {
                    "en": "JS/CSS/image files organized into folders",
                    "ja": "JS/CSS/画像ファイルをフォルダに整理"
                },
                {
                    "en": "A small change to layout of the 'save/load' window",
                    "ja": "「保存・読込」ウインドウのレイアウトを少し変更"
                }
            ]
        }
    },
    {
        "versionNumber": "1.2.1",
        "releaseDate": {
            "year": 2024,
            "month": 8,
            "day": 19
        
        },
        "changes": {
            "bugfixes": [
                {
                    "en": "Fixed Enemy bottom-left stripe settings",
                    "ja": "Enemy下左の細い線の保存システムが壊れている問題を修正"
                },
                {
                    "en": "Fixed small jump pad side textures",
                    "ja": "小ジャンプの側面を修正"
                },
                {
                    "en": "Fixed tile edges",
                    "ja": "床タイルの端の位置を微調整"
                },
                {
                    "en": "Added almost-transparent background to transparent parts of Enemy top left",
                    "ja": "Enemy上左の透明部分にほぼ透明な色を追加"
                }
            ]
        }
    },
    {
        "versionNumber": "1.2.2",
        "releaseDate": {
            "year": 2024,
            "month": 9,
            "day": 20
        
        },
        "changes": {
            "bugfixes": [
                {
                    "en": "Fixed 'Sunshine' Enemy top-right patterns being out of place by 1-2 pxs (I fricking hate my past self)",
                    "ja": "「陽光」テーマのEnemy右上が1~2pxズレていた問題を修正(過去の自分マヅィで嫌い)"
                },
                {
                    "en": "Fixed Fragile/FragileActive/Mover/MoverAuto tile edges",
                    "ja": "踏むと落ちるタイルと移動床の端の位置を微調整"
                }
            ],
            "additions": [
                {
                    "en": "Added flipper patterns 'Eclipse', 'Sparkle II' (from Kingdom War), 'Probably Leaves' (from The Wizard of Oz)",
                    "ja": "反転床模様「蝕」「キラキラⅡ」「葉?」を追加"
                },
                {
                    "en": "Added option to use neonbox regions in \'Crystal\' Enemy top-left settings",
                    "ja": "Alone用に「結晶」Enemy右上設定にネオンボックスを使用するオプションを追加"
                }
            ],
            "changes": [
                {
                    "en": "Split flipper pattern '☻' into 'Smile'(obverse design) and 'Frown'(reverse design)",
                    "ja": "反転床模様「床にTBS」を「床にTBS」(表)と「:(」(裏)に分離"
                },
                {
                    "en": "Replaced 'Crystal' Enemy top right setting canvas previews with svg",
                    "ja": "「結晶」Enemy右上設定のプレヴューをSVGに変更"
                }
            ]
        }
    },
    {
        "versionNumber": "1.2.3",
        "releaseDate": {
            "year": 2025,
            "month": 2,
            "day": 28
        
        },
        "changes": {
            "bugfixes": [
                {
                    "en": "Fixed Enemy bottom-right region becoming transparent and uneditable when primary theme region is set to a type that uses the secondary theme region while secondary theme region is internally set to the Candy type",
                    "ja": "Enemy第二テーマ領域が飴用に設定されている状態で第二テーマ領域を使う右上設定に切り替えると右下が透明になり編集ができなくなる問題を修正"
                }
            ]
        }
    },
    {
        "versionNumber": "1.2.4",
        "releaseDate": {
            "year": 2025,
            "month": 5,
            "day": 25
        
        },
        "changes": {
            "additions": [
                {
                    "en": "Added flipper patterns 'Rhombus' (from NEWBORN) and 'Broken Rhombus' (from Breaking)",
                    "ja": "反転床模様「菱形」「壊れた菱形」を追加"//ParadeObverse, ParadeReverse, Keyhole(?) yet to be added
                }
            ]
        }
    },
    {
        "versionNumber": "1.2.5",
        "releaseDate": {
            "year": 2026,
            "month": 10,
            "day": 30
        
        },
        "changes": {
            "bugfixes": [
                {
                    "en": "Fixed text not loading at all when viewed without visiting my other pages before",
                    "ja": "ウェブサイトの別のページを既に見ていない状態で閲覧するとテキストが殆ど全て表示されない問題を修正"
                },
                {
                    "en": "Improved the design of the changelog page",
                    "ja": "変更ログのデザインを改善"
                },
                {
                    "en": "Changed the changelog display in the main page, so that only the most recent update is shown",
                    "ja": "最新のアップデートの情報のみが表示されるように、メインページの変更ログの表示を変更"
                }
            ]
        }
    }
];
