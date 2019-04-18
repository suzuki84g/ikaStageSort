// JSON取得
const requestURL = 'https://spla2.yuu26.com/coop/schedule'  //URL指定
const request = new XMLHttpRequest();   //XMLHttpRequest オブジェクトを生成する
request.open('GET', requestURL, false);  //HTTPメソッドとアクセスするサーバーの　URL　を指定
request.send(null);   // 実際にサーバーへリクエストを送信
const coopJson = JSON.parse(request.responseText) //jsonデータを導入してパース
console.log(coopJson)  //念の為

// ステージの表示数
const time_count = 5
const stage_count = 2

// id情報を紐付ける空Listの作成
startTime_List = []
endTime_List = []
coop_List = []
buki_List_0 = []
buki_List_1 = []
buki_List_2 = []
buki_List_3 = []

// getElementByIdのタグを指定
for ( let n =0; n < time_count; n++ ){
  startTime_List.push('startTime_'+[n])
  endTime_List.push('endTime_'+[n])
  coop_List.push('coop_'+[n])
  buki_List_0.push('buki_'+[n]+'_0')
  buki_List_1.push('buki_'+[n]+'_1')
  buki_List_2.push('buki_'+[n]+'_2')
  buki_List_3.push('buki_'+[n]+'_3')
}
console.log('buki_List[0]_1 は ' + buki_List_0[0])  //確認用

// 時間を切り出す
startStamp_List = []
endStamp_List = []
for ( let n = 0; n < time_count; n++){
  startStamp_List.push(
    +coopJson.result[n].start.substr(5, 2)  //月
    +'/'
    +coopJson.result[n].start.substr(8, 2)  //日
    +' '
    +('0'+coopJson.result[n].start.substr(11, 2)).slice(-2)+':00'  //時間
    +'('+'日月火水木金土'[new Date(coopJson.result[n].start+'+09:00').getDay()]+')'  //曜日
  )
}
for ( let n = 0; n < time_count; n++){
  endStamp_List.push(
    +coopJson.result[n].end.substr(5, 2)  //月
    +'/'
    +coopJson.result[n].end.substr(8, 2)  //日
    +' '
    +('0'+coopJson.result[n].end.substr(11, 2)).slice(-2)+':00'  //時間
    +'('+'日月火水木金土'[new Date(coopJson.result[n].end+'+09:00').getDay()]+')'  //曜日
  )
}

// 開催判定
const nowDate = new Date()
const startDate = new Date(coopJson.result[0].start+'+09:00')
console.log(nowDate)
console.log(startDate)
if(nowDate < startDate){  //今の時間がテーブル1の時間より小さい
  document.getElementById('nowOrNext').insertAdjacentHTML('afterbegin', '次回の予定')  //開催判定
  }else{  //今の時間がテーブル1の時間より大きい
  document.getElementById('nowOrNext').insertAdjacentHTML('afterbegin', 'オープン！')  //開催判定
}

// 時間入れる
for ( let n = 0; n < time_count; n++) {
  document.getElementById(startTime_List[n]).insertAdjacentHTML('afterbegin', startStamp_List[n])  //開始時間
  document.getElementById(endTime_List[n]).insertAdjacentHTML('afterbegin', endStamp_List[n])  //終了時間
}

// ステージ入れる
for ( let n = 0; n < stage_count; n++) {
  document.getElementById(coop_List[n]).insertAdjacentHTML('afterbegin', coopJson.result[n].stage.name)  //ステージ情報
  document.getElementById(buki_List_0[n]).insertAdjacentHTML('afterbegin', coopJson.result[n].weapons[0].name)  //ブキ情報
  document.getElementById(buki_List_1[n]).insertAdjacentHTML('afterbegin', coopJson.result[n].weapons[1].name)
  document.getElementById(buki_List_2[n]).insertAdjacentHTML('afterbegin', coopJson.result[n].weapons[2].name)
  document.getElementById(buki_List_3[n]).insertAdjacentHTML('afterbegin', coopJson.result[n].weapons[3].name)
}