const date = new Date();

//日付取得
<<<<<<< HEAD
const year = date.getFullYear();
const month = date.getMonth()+1;  //1月が0、12月が11。そのため+1をする。
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
const time = date.getDate();

//日付作成
const print = year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second+' '

//一筆書く
const pri = document.getElementById("sentence")
pri.innerHTML = print+"に取得"
=======
const year = date.getFullYear()
const month = date.getMonth()+1  //1月が0、12月が11。そのため+1をする。
const day = date.getDate()
const hour = ("0"+date.getHours()).slice(-2)
const minute = ("0"+date.getMinutes()).slice(-2)
const second = ("0"+date.getSeconds()).slice(-2)


//日付作成
const print = year+'年'+month+'月'+day+'日 '+hour+':'+minute+':'+second

//一筆書く
document.getElementById('sentence').insertAdjacentHTML('afterbegin', '取得した時間→'+print)
>>>>>>> 前面改版
