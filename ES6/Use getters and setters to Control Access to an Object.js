// Only change code below this line
class Thermostat {
     constructor(temperature) {
     this.temperature=(temperature-32)*5/9;
    }
    get temperature() {
        return this.temp;
    }
    set temperature(temperature) {
       this.temp =temperature ;
    }

}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console .log(temp); ////
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console .log(temp);///////////////