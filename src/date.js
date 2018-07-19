const date = new Date();

const year = date.getFullYear();
const month = date.getMonth()+1;  //1月が0、12月が11。そのため+1をする。
const day = date.getDate();

const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
const time = date.getDate();

const today = year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second+' '

document.write(today+'に取得したステージ情報は以下の通りです。');