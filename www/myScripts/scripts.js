// This is a JavaScript file
function getRando(number){
    var num = Math.floor((Math.random()*number)+1);
    num = num.toString();
    if(num.length < 2){
        num = "0" + num;
    }
    return num;
}
function getPBNums(){
    document.getElementById('PB1').innerHTML = getRando(75);
    document.getElementById('PB2').innerHTML = getRando(75);
    document.getElementById('PB3').innerHTML = getRando(75);
    document.getElementById('PB4').innerHTML = getRando(75);
    document.getElementById('PB5').innerHTML = getRando(75);
    document.getElementById('PB6').innerHTML = getRando(75);
}
function getMegaNums(){
    document.getElementById('M1').innerHTML = getRando(75);
    document.getElementById('M2').innerHTML = getRando(75);
    document.getElementById('M3').innerHTML = getRando(75);
    document.getElementById('M4').innerHTML = getRando(75);
    document.getElementById('M5').innerHTML = getRando(75);
    document.getElementById('M6').innerHTML = getRando(75);
}