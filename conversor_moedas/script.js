var taxa_de_conversão;
var reais;
var dolares;
document.getElementById("button_2").disabled = true;
document.getElementById("button_3").disabled = true;
document.getElementById("button_0").disabled = true;


function confirmacao_cliente(){

    tax_cv = document.getElementById('convertion_tax').value;

    document.getElementById("button_2").disabled = false;
    document.getElementById("button_3").disabled = false;
    document.getElementById("button_0").disabled = false;
    document.getElementById("button_1").disabled = true;

}

function clear_tax(){

    document.getElementById('convertion_tax').value='';
    document.getElementById('cv_realtodol').value='';
    document.getElementById('cv_doltoreal').value='';
    
    document.getElementById("button_0").disabled = true;
    document.getElementById("button_1").disabled = false;
    document.getElementById("button_2").disabled = true;
    document.getElementById("button_3").disabled = true;

}
function cv_doltoreal(){

    dolares = document.getElementById('convertion_doltoreal').value;
 
    reais = dolares * tax_cv;

    alert(reais);

}

    
function cv_realtodol(){

    reais  = document.getElementById('convertion_realtodol').value;

  
    dolares = reais / tax_cv;

   
    alert(dolares);

}