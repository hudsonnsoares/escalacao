//reset
var reset = document.getElementById('reset');
reset.addEventListener("click",function(){
  location.reload();
})


//Lista Escalação

var selecaoCampo = document.querySelectorAll('.circleJogador');


for(i = 0; i < selecaoCampo.length; i++){
  var selecId = selecaoCampo[i].id;
  var selecPlayer = document.querySelector('#'+selecId);

  if(selecPlayer.className == 'open'){
    //console.log(selecPlayer, selecId);
    break;
  }else{
    //console.log(selecPlayer);
  }
}
// Lista Escalação

// Lista Competências
var selecaoLista = document.querySelectorAll('.lista li');

for(i = 0; i< selecaoLista.length;i++){
  selecaoLista[i].id = 'list-'+i;
  IdList = selecaoLista[i].id;
  selectElemento = document.querySelector('#'+IdList);
  addList(selectElemento);
}

function addList(idList){
  idList.addEventListener("click", function(){
    var selecaoCampo = document.querySelectorAll('.circleJogador');
    for(i = 0; i < selecaoCampo.length; i++){
      selecId = selecaoCampo[i].id;
      selecPlayer = document.querySelector("#"+selecId);

      if(selecPlayer.classList.contains('open')){
        console.log("ok "+ selecaoCampo[i].id);
        if(idList.className == 'open'){
          idList.classList.add('d-none');
          selecPlayer.classList.remove('open');
          texto = idList.textContent;
          selecPlayer.innerHTML = "<p>" + texto + "<p>";
        }
      }else{
        console.log("nada ok -> " + selecPlayer.className);
      }
    }
  });
  return idList;
}