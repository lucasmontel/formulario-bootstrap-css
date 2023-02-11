$('#form-contato').submit(function(){
alert("Sucesso!");
return false;
});
/*Selecionamos o nosso form contato*/
/*Logo após , quando o nosso formulário fazer a ação de "submit"*/
/*Faça tal coisa ( Vai chamar uma function "Callback" que realiza a tarefa desejada) */

/*"Return" false , porque quando clicar no botão submit
ele irá cancelar o "alert", e para que isso não aconteça
usamos "return false;"*/