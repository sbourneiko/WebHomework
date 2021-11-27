//Задание 1
var city1={};
city1.name="ГородN";
city1.population="10 millions";
console.log('Название города: ', city1.name);
console.log('Численность населения: ',city1.population);

//Задание 2
var city2 = {name: "ГородM", population: '1e6'};
console.log('Название города: ',city2.name);
console.log('Численность населения: ',city2.population);

//Задание 3
function getName(){
    return this.name;
}
city1.getName=getName;
city2.getName=getName;
console.log(city1.getName());
console.log(city2.getName());

//Задание 4
function exportStr() {
    return `name=${this.name}\npopulation=${this.population}\n`; 
}
city1.exportStr = exportStr;
city2.exportStr = exportStr;
console.log(city1.exportStr());
console.log(city2.exportStr());

//Задание 5
function getObj () { 
    return this 
}
city1.getCity = getObj;
city2.getCity = getObj;
console.log('Название города: ', city1.getCity().name);
console.log('Численность населения: ', city1.getCity().population);
console.log('Название города: ', city2.getCity().name);
console.log('Численность населения: ', city2.getCity().population);