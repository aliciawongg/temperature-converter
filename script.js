console.log("hello script js");

//Fahrenheit to Celsius
var cTemp = function(currentInput) {
    return ((currentInput - 32) * 5/9);
};

//Fahrenheit to Kelvin
var kTemp = function(currentInput) {
    return (((currentInput - 32) * 5/9) + 273.15);
};
/*
//Celsius to Fahrenheit
var fTemp = function(cTemp) {
    return (cTemp * 5/9) + 32;
     console.log(fTemp + ' Fahrenheit')

}
//Celsius to Kelvin
var kTemp = function(cTemp) {
    return cTemp + 273.15;
}
//Kelvin to Celsius
var cTemp = function(kTemp) {
    return kTemp - 273.15;
    }

//Kelvin to Fahrenheit
var fTemp = function(kTemp) {
    return ((fTemp - 273.15) * 9/5) + 32;

}*/