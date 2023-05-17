var divUser = document.getElementById('divUser');
function infoUser(){
  var seta = document.getElementById('icon-infuser') 
  divUser.classList.toggle('active-infos');
  seta.classList.toggle('girar')
};


var loaddiv = document.getElementById('loadingPage');
loaddiv.innerHTML = `
  <p>Elemento Sendo carregado!!</p>
  <button>Elemento Sendo carregado!!</button>
`
function loading(){
  loaddiv.style.display = 'none';
}
