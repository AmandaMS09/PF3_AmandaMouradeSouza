const calcular = document.getElementById('calcular');

function calculo(){
      let nome = document.getElementById("nome").value;
      let P = document.getElementById("P").value;
      let i = document.getElementById("i").value / 100;
      let n = document.getElementById("n").value;

      let vf = (P * (((1 + i) ** n - 1) / i)).toFixed(2);  

    if (nome !="" && P !="" && i !="" && n !="")
    {
        var result = `Olá, ${nome}! Ao aplicar um valor de R$ ${P} mensais em um intervalo de ${n} meses a uma taxa de ${i * 100}% ao mês, você acumulará uma poupança de ${vf}!`;
      
    }else
    {
        var result = "Preencha todos os campos!"
    }
    
    document.getElementById("resultado").innerHTML = result;
}

calcular.addEventListener('click',calculo);