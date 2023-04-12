let convertPoundsToKg = (pound) =>{
    let kg=0.453592
    let result=pound * kg
    return result.toFixed(2)
}
console.log(convertPoundsToKg(56))



let convertInchesToCentimeter = (Inches) =>{
    let centimeter=2.54
    let result= Inches * centimeter
    return result
}
console.log(convertInchesToCentimeter(10))



let convertFahrenheitToCelsius = (fahrenheit) =>{
    let result= (fahrenheit - 32) * 5/9 
    return result

}
console.log(convertFahrenheitToCelsius(32))



let convertFtToMeters = (ft) =>{
    let meter=0.3048
    let result= ft * meter
    return result
}
console.log(convertFtToMeters(10))