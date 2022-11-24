//reset
var reset = document.getElementById('reset');
reset.addEventListener("click",function(){
  location.reload();
})
// Lista Competências
var selecaoLista = document.querySelectorAll('.lista li');

for(i = 0; i< selecaoLista.length;i++){
  //selecaoLista[i].id = 'list-'+i;
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

      if(selecPlayer.classList.contains('open')){
        if(idList.className == 'open'){
          idList.classList.add('d-none');
          selecPlayer.classList.remove('open');
          selecPlayer.classList.add('selecionado');
          texto = idList.textContent;
          numero = selecNumber.textContent;

          //Verifica se é fake
            if(idList.id == "fake1" || idList.id == "fake2" || idList.id == "fake3" || idList.id == "fake4" || idList.id == "fake5"){
              selecPlayer.innerHTML = "<span>"+numero+"</span><p class='selecionado fake'>" +texto+ "</p>";
            }else{
              selecPlayer.innerHTML = "<span>"+numero+"</span><p>" +texto+ "</p>";
            }
          //Verifica se é fake

            var selecionadosSelecao = document.querySelectorAll('.selecionado'); // Verificar Quantidade de Selecionados
            if(selecionadosSelecao.length == 11){
              var titleAlter = document.querySelector("#titeleSelecao h2");

              for(i=0;i<selecionadosSelecao.length;i++){
                if(selecionadosSelecao[i].classList.contains('fake')){
                  titleAlter.innerHTML = "<h2 id='tittleErro'>Sua seleção não está bem escalada!</h2>";
                  break;
                }else{
                  titleAlter.innerHTML = "<h2 id='tittleSuccess'>Sua seleção é campeã!</h2>";
                }
              }

              gramado = document.querySelector("#gramado");
              titleSelecao = document.querySelector("#titeleSelecao");
              gramado.style.filter = "blur(3px)";
              titleSelecao.classList.remove('d-none');
              //var selecao = document.querySelector("#verificaSelecao");
            }
        }
      }
    }
  });
}