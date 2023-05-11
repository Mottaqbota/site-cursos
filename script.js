var divUser = document.getElementById('divUser');
function infoUser(){
  divUser.classList.toggle('active-infos');
  var cubo = document.getElementById('icon-infuser') 
  cubo.classList.toggle('girar')
};


var loaddiv = document.getElementById('loadingPage');
loaddiv.innerHTML = `
  <p>Elemento Sendo carregado!!</p>
  <button>Elemento Sendo carregado!!</button>
`
function loading(){
  loaddiv.style.display = 'none';
}
