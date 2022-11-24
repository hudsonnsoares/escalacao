//reset
var reset = document.getElementById('reset');
reset.addEventListener("click",function(){
  location.reload();
})
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
      selecPlayer = document.querySelector("#" + selecId);
      selecNumber = document.querySelector("#"+selecId+" span");

      var quantidadeSelecionado = 0; 

      if(selecPlayer.classList.contains('open')){
        if(idList.className == 'open'){
          idList.classList.add('d-none');
          selecPlayer.classList.remove('open');
          texto = idList.textContent;
          numero = selecNumber.textContent;
          selecPlayer.innerHTML = "<span>"+ numero + "</span><p>" + texto + "<p>";
          if(idList == "fake"){
            fake = 1;
            console.log(fake);
          }else{
            fake = 0;
            console.log(fake + idList.id)
          }
        }else{
          console.log(selecPlayer.classList.contains('open'));
        }
      }
    }
  });
  return idList;
}

function verificarEscalacao(){
  
}