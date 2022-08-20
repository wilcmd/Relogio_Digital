

//Horario em Tempo Real 
const mostaRelogio = () =>{

    let fecha = new Date();
    let hora  = formatHora(fecha.getHours());
    let minutos = formatHora(fecha.getMinutes());
    let segundos = formatHora(fecha.getSeconds());

    document.getElementById('hora').innerHTML =`${hora}:${minutos}:${segundos}`;

    const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','outubro','Novembro','Dezembro'];
    let mes = meses[fecha.getMonth()];
    const semanas =['Dom','Seg','Ter','Qua','Qui','Sex','Sáb',];
    let semana = semanas[fecha.getDay()];
    const dia = fecha.getDay();

    let sauda =saudacao();

    document.getElementById('fecha').innerHTML =`Dia ${dia}  ${mes} ${semana}`;

    document.getElementById('caixa').classList.toggle('animado');
    document.getElementById('texto').classList.toggle('animado');

    document.getElementById('texto').innerHTML =`${sauda}`;
    
    

    
}
// Função que colocar Zero a qunado a hora for menos que 2 digitos
const formatHora =(hora) =>{
    if(hora < 10){
        hora ='0' + hora;
        return hora;
    }else{
        return hora;
    }

}

//Função de Saudação conforme horario
const saudacao = ()=>{
    let data = new Date();
    let hora = data.getHours();
   
    let sau= 'null';
    if(hora >= 6 && hora <= 12){
        return  sau ='Bom dia' ;
    }else if( hora >= 13 && hora <= 18){
        return sau = 'Boa tarde';;
    }else if(hora >=19 && hora <= 24){
        return sau ='Boa Noite';
    }else{
        return  sau ='Bom dia';
    }
   
   
    }
   





setInterval(mostaRelogio ,1000);