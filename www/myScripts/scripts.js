// This is a JavaScript file
function getRando(number){
    var num = Math.round((Math.random()*number)+1);
    num = num.toString();
    if(num.length < 2){
        num = "0" + num;
    }
    return num;
}
function getPBNums(){
    document.getElementById('PB1').innerHTML = getRando(74);
    document.getElementById('PB2').innerHTML = getRando(74);
    document.getElementById('PB3').innerHTML = getRando(74);
    document.getElementById('PB4').innerHTML = getRando(74);
    document.getElementById('PB5').innerHTML = getRando(74);
    document.getElementById('PB6').innerHTML = getRando(74);
}
function getMegaNums(){
    document.getElementById('M1').innerHTML = getRando(74);
    document.getElementById('M2').innerHTML = getRando(74);
    document.getElementById('M3').innerHTML = getRando(74);
    document.getElementById('M4').innerHTML = getRando(74);
    document.getElementById('M5').innerHTML = getRando(74);
    document.getElementById('M6').innerHTML = getRando(74);
}
function get3(){
    document.getElementById('P31').innerHTML = getRando(8);
    document.getElementById('P32').innerHTML = getRando(8);
    document.getElementById('P33').innerHTML = getRando(8);
}
function get4(){
    document.getElementById('P41').innerHTML = getRando(8);
    document.getElementById('P42').innerHTML = getRando(8);
    document.getElementById('P43').innerHTML = getRando(8);
    document.getElementById('P44').innerHTML = getRando(8);
}