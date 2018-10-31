function budget(){
    event.preventDefault();

    var output = document.getElementById("output");

    var Income = parseInt(document.getElementById("income").value);

    var Rent = parseInt(document.getElementById("Rent").value);
    var Phone = parseInt(document.getElementById("Phone").value);
    var Gas = parseInt(document.getElementById("Gas").value);
    var Eletric = parseInt(document.getElementById("Eletric").value);
    var Water = parseInt(document.getElementById("Water").value);
    var Car = parseInt(document.getElementById("Car").value);
    var Insurance = parseInt(document.getElementById("Insurance").value);
    var Internet = parseInt(document.getElementById("Internet").value);
    var CreditCards = parseInt(document.getElementById("CreditCards").value);
    var Entertainment = parseInt(document.getElementById("Entertainment").value);
    var additional = parseInt(document.getElementById("additional").value);
    
    var totalexpense = (Rent + Phone ) + (Gas + Eletric ) + (Water + Car) + (Internet + CreditCards) + (Entertainment + additional + Insurance);
    var Total = Income - totalexpense; 
    output.innerHTML = Total;
}

