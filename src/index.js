// JSON取得
const requestURL = 'https://spla2.yuu26.com/schedule'  //URL指定
const request = new XMLHttpRequest();   //XMLHttpRequest オブジェクトを生成する
request.open('GET', requestURL, false);  //HTTPメソッドとアクセスするサーバーの　URL　を指定
request.send(null);   // 実際にサーバーへリクエストを送信
const battleJson = JSON.parse(request.responseText) //jsonデータを導入してパース
console.log(battleJson)  //念の為

// JSONデータを短縮
const regularJson = battleJson.result.regular
const gachiJson = battleJson.result.gachi
const leagueJson = battleJson.result.league

// ステージの表示数
const stage_count = 12

// id情報を紐付ける空Listの作成
startTime_List = []
endTime_List = []
regular_List = []
gachi_List = []
league_List = []
rSt_list_0 = []
gSt_list_0 = []
lSt_list_0 = []
rSt_list_1 = []
gSt_list_1 = []
lSt_list_1 = []

// getElementByIdのタグを指定
for ( let n =0; n < stage_count; n++ ){
  startTime_List.push('startTime_'+[n])
  endTime_List.push('endTime_'+[n])
  regular_List.push('regular_'+[n])
  gachi_List.push('gachi_'+[n])
  league_List.push('league_'+[n])
  rSt_list_0.push('rSt_'+[n]+'_0')
  gSt_list_0.push('gSt_'+[n]+'_0')
  lSt_list_0.push('lSt_'+[n]+'_0')
  rSt_list_1.push('rSt_'+[n]+'_1')
  gSt_list_1.push('gSt_'+[n]+'_1')
  lSt_list_1.push('lSt_'+[n]+'_1')
}
console.log('gachi_List[0] は ' + gachi_List[0])  //確認用

// insertAdjacentHTMLする
for ( let n = 0; n < stage_count; n++) {
  document.getElementById(startTime_List[n]).insertAdjacentHTML('afterbegin', regularJson[n].start.slice(11,16))  //開始時間を切り出し
  document.getElementById(endTime_List[n]).insertAdjacentHTML('afterbegin', regularJson[n].end.slice(11,16))  //終了時間を切り出し
  // document.getElementById(regular_List[n]).insertAdjacentHTML('afterbegin', regularJson[n].rule)  //バトルの文字が邪魔
  document.getElementById(regular_List[n]).insertAdjacentHTML('afterbegin', 'ナワバリ')
  document.getElementById(gachi_List[n]).insertAdjacentHTML('afterbegin', gachiJson[n].rule.replace('ガチホコバトル', 'ガチホコ'))
  document.getElementById(league_List[n]).insertAdjacentHTML('afterbegin', leagueJson[n].rule.replace('ガチホコバトル', 'ガチホコ'))
  document.getElementById(rSt_list_0[n]).insertAdjacentHTML('afterbegin', regularJson[n].maps[0])
  document.getElementById(gSt_list_0[n]).insertAdjacentHTML('afterbegin', gachiJson[n].maps[0])
  document.getElementById(lSt_list_0[n]).insertAdjacentHTML('afterbegin', leagueJson[n].maps[0])
  document.getElementById(rSt_list_1[n]).insertAdjacentHTML('afterbegin', regularJson[n].maps[1])
  document.getElementById(gSt_list_1[n]).insertAdjacentHTML('afterbegin', gachiJson[n].maps[1])
  document.getElementById(lSt_list_1[n]).insertAdjacentHTML('afterbegin', leagueJson[n].maps[1])
}