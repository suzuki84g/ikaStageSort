//JSON取得
const getJson = new XMLHttpRequest();   // XMLHttpRequest オブジェクトを生成する
getJson.open("GET", "https://spla2.yuu26.com/league/now", false);  // HTTPメソッドとアクセスするサーバーの　URL　を指定
getJson.send(null);   // 実際にサーバーへリクエストを送信

const jsonData = JSON.parse(getJson.responseText)   //jsonデータを導入してパース
//document.write(jsonData)







