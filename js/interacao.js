var selecao = document.querySelectorAll('.circleJogador');

for(i = 0; i < selecao.length; i++){
  var selecId = selecao[i].id;
  var selecElemento = document.querySelector('#'+selecId);

  acaoJogador(selecElemento);
}


function acaoJogador(idElenmento){
  idElenmento.addEventListener("click", function(){
    console.log(idElenmento);
  });
  return idElenmento;
}