let colors = ['#51e2f5','#9df9ef','#edf756','#ffa8B6','#a28089','#a0d2eb','#e5eaf5','#d0bdf4','#8458B3','#a28089','#ff1d58','#f75990','#fff685','#00DDFF','#0049B7','#ff1e00','#e8f9fd','#59ce8f','#f43a09','#ffb766','#c2edda','#68d388','#fbe3e8','#5cbdb9','#955251','#B565A7','#009B77','#DD4124','#D65076','#45B8AC','#EFC050','#5B5EA6','#9B2335','#DFCFBE']
let url_api = "https://type.fit/api/quotes"

async function getApi(url) {

  const response = await fetch(url);
  var data = await response.json();
  let i = Math.round((Math.random() * data.length))
  show(data[i])
  changeBackground()
}


function show(dados){
  let text = document.getElementById('text')
  let autor = document.getElementById('author')
  text.innerHTML = dados.text
  if(dados.author==null){
    autor.innerHTML = 'Unknown'
  }else{
    autor.innerHTML = dados.author
  }
  
}
function changeBackground(){
  let randomColor = colors[Math.round((Math.random() * colors.length))];
  let background = document.getElementById('main')
  let button = document.getElementById('tweet-quote')
  background.style.background = randomColor
  button.style.background = randomColor
}

getApi(url_api)