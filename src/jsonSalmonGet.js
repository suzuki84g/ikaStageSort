const salmonGet = new XMLHttpRequest();   // XMLHttpRequest オブジェクトを生成する
salmonGet.open("GET", "https://spla2.yuu26.com/coop/schedule", false);  // HTTPメソッドとアクセスするサーバーの　URL　を指定
salmonGet.send(null);   // 実際にサーバーへリクエストを送信

const salmonData = JSON.parse(salmonGet.responseText)   // jsonデータを導入してパース

// サーモンラン用に値を代入
const salmonStart_t_0 = salmonData.result[0].start_t
const salmonEnd_t_0 = salmonData.result[0].end_t
const salmonStage_0 = salmonData.result[0].stage.name
const salmonWeapons_0_0 = salmonData.result[0].weapons[0].name
const salmonWeapons_0_1 = salmonData.result[0].weapons[1].name
const salmonWeapons_0_2 = salmonData.result[0].weapons[2].name
const salmonWeapons_0_3 = salmonData.result[0].weapons[3].name

// HTMLのタグ情報を定義
const salmonOpen_0 = document.getElementById("salmonOpen_0")
const salmonClose_0 = document.getElementById("salmonClose_0")
const salmonSt_0 = document.getElementById("salmonSt_0")
const salmonWp_0_0 = document.getElementById("salmonWp_0_0")
const salmonWp_0_1 = document.getElementById("salmonWp_0_1")
const salmonWp_0_2 = document.getElementById("salmonWp_0_2")
const salmonWp_0_3 = document.getElementById("salmonWp_0_3")

// HTML出力
/* テストなので一時的にコメントアウト
// salmonOpen_0.innerHTML = salmonStart_t_0
// salmonClose_0.innerHTML = salmonEnd_t_0
// salmonSt_0.innerHTML = salmonStage_0
*/
salmonWp_0_0.innerHTML = salmonWeapons_0_0
salmonWp_0_1.innerHTML = salmonWeapons_0_1
salmonWp_0_2.innerHTML = salmonWeapons_0_2
salmonWp_0_3.innerHTML = salmonWeapons_0_3



// エラーログ出し用
console.log(salmonData)