// JSON取得
const battleJson = new XMLHttpRequest();   //XMLHttpRequest オブジェクトを生成する
battleJson.open("GET", "https://spla2.yuu26.com/schedule", false);  //HTTPメソッドとアクセスするサーバーの　URL　を指定
battleJson.send(null);   // 実際にサーバーへリクエストを送信

// JSONを代入
const battleJsonData = JSON.parse(battleJson.responseText) //jsonデータを導入してパース

// タイムテーブル1つ目
const startTime_00 = document.getElementById("startTime_00")  //テーブル0の開始時間
const endTime_00 = document.getElementById("endTime_00")  //テーブル0の終了時間
const gachi_00 = document.getElementById("gachi_00")  //ガチのルール
const league_00 = document.getElementById("league_00")  //リーグのルール
const rSt_00 = document.getElementById("rSt_00")  //ナワバリステージ1個め
const gSt_00 = document.getElementById("gSt_00")  //ガチマステージ1個め
const lSt_00 = document.getElementById("lSt_00")  //リグマステージ1個め
const rSt_01 = document.getElementById("rSt_01")  //ナワバリステージ2個め
const gSt_01 = document.getElementById("gSt_01")  //ガチマステージ2個め
const lSt_01 = document.getElementById("lSt_01")  //リグマステージ2個め

const startTimeTmp_00 = battleJsonData.result.regular[0].start
const startTimePrint_00 = startTimeTmp_00.slice(11,16)
startTime_00.innerHTML = startTimePrint_00
const endTimeTmp_00 = battleJsonData.result.regular[0].end
const endTimePrint_00 = endTimeTmp_00.slice(11,16)
endTime_00.innerHTML = endTimePrint_00
gachi_00.innerHTML = battleJsonData.result.gachi[0].rule
league_00.innerHTML = battleJsonData.result.league[0].rule
rSt_00.innerHTML = battleJsonData.result.regular[0].maps[0]
gSt_00.innerHTML = battleJsonData.result.gachi[0].maps[0]
lSt_00.innerHTML = battleJsonData.result.league[0].maps[0]
rSt_01.innerHTML = battleJsonData.result.regular[0].maps[1]
gSt_01.innerHTML = battleJsonData.result.gachi[0].maps[1]
lSt_01.innerHTML = battleJsonData.result.league[0].maps[1]

// タイムテーブル2つ目
const startTime_10 = document.getElementById("startTime_10")  //テーブル0の開始時間
const endTime_10 = document.getElementById("endTime_10")  //テーブル0の終了時間
const gachi_10 = document.getElementById("gachi_10")  //ガチのルール
const league_10 = document.getElementById("league_10")  //リーグのルール
const rSt_10 = document.getElementById("rSt_10")  //ナワバリステージ1個め
const gSt_10 = document.getElementById("gSt_10")  //ガチマステージ1個め
const lSt_10 = document.getElementById("lSt_10")  //リグマステージ1個め
const rSt_11 = document.getElementById("rSt_11")  //ナワバリステージ2個め
const gSt_11 = document.getElementById("gSt_11")  //ガチマステージ2個め
const lSt_11 = document.getElementById("lSt_11")  //リグマステージ2個め

const startTimeTmp_10 = battleJsonData.result.regular[1].start
const startTimePrint_10 = startTimeTmp_10.slice(11,16)
startTime_10.innerHTML = startTimePrint_10
const endTimeTmp_10 = battleJsonData.result.regular[1].end
const endTimePrint_10 = endTimeTmp_10.slice(11,16)
endTime_10.innerHTML = endTimePrint_10
gachi_10.innerHTML = battleJsonData.result.gachi[1].rule
league_10.innerHTML = battleJsonData.result.league[1].rule
rSt_10.innerHTML = battleJsonData.result.regular[1].maps[0]
gSt_10.innerHTML = battleJsonData.result.gachi[1].maps[0]
lSt_10.innerHTML = battleJsonData.result.league[1].maps[0]
rSt_11.innerHTML = battleJsonData.result.regular[1].maps[1]
gSt_11.innerHTML = battleJsonData.result.gachi[1].maps[1]
lSt_11.innerHTML = battleJsonData.result.league[1].maps[1]
