const data = new Date();
const teste1 = document.getElementById(`dataHora`)


var diaSemana = data.getDay();
var dia = String(data.getDate()).padStart(2, '0');
var mes = data.getMonth();
var ano = data.getFullYear();
var hora = data.getHours();
var min = String (data.getMinutes()).padStart(2, `0`);

var meses = new Array ("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro")

var semanas = new Array ("Domingo","Segunda-Feira","Quinta-Feira","Quarta-Feira","Quinta-feira","Sexta-Feira","Sábado")


var dataAtual = `${semanas[diaSemana]}, ${dia} de ${meses[mes]} de ${ano} ${hora}:${min}`;

dataHora.textContent=dataAtual








