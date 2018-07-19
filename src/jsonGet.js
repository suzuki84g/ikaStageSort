const getJson = new XMLHttpRequest();   // XMLHttpRequest オブジェクトを生成する
getJson.open("GET", "https://spla2.yuu26.com/gachi/now", false);  // HTTPメソッドとアクセスするサーバーの　URL　を指定
getJson.send(null);   // 実際にサーバーへリクエストを送信

const jsonData = JSON.parse(getJson.responseText)   //jsonデータを導入してパース
//document.write(jsonData)

const start = jsonData.result[0].start
const rule = jsonData.result[0].rule
const map0 = jsonData.result[0].maps[0]
const map1 = jsonData.result[0].maps[1]

const startParse = start.replace(/\d{4}-\d{2}-\d{2}[T](\d{2}:\d{2}):\d{2}/ , '$1' )

/*
document.write(start)
document.write(rule)
document.write(map0)
document.write(map1)
*/

const now = document.getElementById("now")
const gachi = document.getElementById("rule")
const stage_a = document.getElementById("stage_a")
const stage_b = document.getElementById("stage_b")

now.innerHTML = startParse
gachi.innerHTML = rule
stage_a.innerHTML = map0
stage_b.innerHTML = map1