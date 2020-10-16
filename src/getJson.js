// 使用するURLを定義
const url = {
  battle: 'https://spla2.yuu26.com/schedule',
  salmon: 'https://spla2.yuu26.com/coop/schedule'
}

function stageJsonGet(requestURL) {
  fetch(requestURL)
    .then(response => response.json())
    .then(data => console.log(data))
}

stageJsonGet(url.battle);
