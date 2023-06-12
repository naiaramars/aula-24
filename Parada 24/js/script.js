var div = document.getElementById("resp");

function conversor(){

    let celcius = parseInt(document.getElementById("celcius").value);
    let op = document.getElementById("operador").value;
    let text;

    switch(op){

        case "fahrenheit":
            text = `<p> ${celcius * 9/5 + 32}° Fahrenheit </p>`;
            break;
        default:
            text = `<p> ${celcius + 273.15}° Kelvin </p>`;
    }

    div.innerHTML = text;

}