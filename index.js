const numberGiven = document.getElementById('numberGiven')
const inputEl = document.getElementById('inputEl')
const mFt = document.getElementById('m-ft')
const cmIn = document.getElementById('cm-in')
const lGal = document.getElementById('l-gal')
const kgLb = document.getElementById('kg-lb')
const gOz = document.getElementById('g-oz')
const cF = document.getElementById('c-f')

inputEl.addEventListener('input', convert)

function convert() {

    let number = parseInt(inputEl.value)

    if(inputEl.value == ""){
        numberGiven.innerText = 0
        number = 0
    } else {
        numberGiven.innerText = inputEl.value
    }
    
    const feet = number*3.281
    const meters = number/3.281
    const inches = number/2.54
    const centimeters = number*2.54
    const gallons = number/3.785
    const liters = number*3.785
    const pounds = number*2.205
    const kilograms = number/2.205
    const ounces = number/28.35
    const grams = number*28.35
    const fahrenheit = (number*1.8)+32
    const celsius = (number-32)/1.8

    mFt.innerHTML = `${number} meters = ${feet.toFixed(2)} feet | ${number} feet = ${meters.toFixed(2)} meters`
    cmIn.innerHTML = `${number} centimeters = ${inches.toFixed(2)} inches | ${number} inches = ${centimeters.toFixed(2)} centimeters`
    lGal.innerHTML = `${number} liters = ${gallons.toFixed(2)} gallons | ${number} gallons = ${liters.toFixed(2)} liters`
    kgLb.innerHTML = `${number} kilograms = ${pounds.toFixed(2)} pounds | ${number} pounds = ${kilograms.toFixed(2)} kilograms`
    gOz.innerHTML = `${number} grams = ${ounces.toFixed(2)} ounces | ${number} ounces = ${grams.toFixed(2)} grams`
    cF.innerHTML = `${number} celsius = ${fahrenheit.toFixed(2)} fahrenheit | ${number} fahrenheit = ${celsius.toFixed(2)} celsius`

    
}