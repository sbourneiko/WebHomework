//задание 8
var list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
}
let arrayToList=function(list){
    let s=null;
    for (let i=list.length-1; i>=0; i--){
        s={
            value: list[i],
            rest: s
        }
    }
    return s;
}
let listToArray = function(list){
    let s=[];
    do{
        s.push(list.value);
        list=list.rest;
    } 
    while (list!==null)
    return s;
}
let prepend=function(a, list){
    return {
        value: a,
        rest: list
    }
}
let nth=function(list, poz) {
    if (!list) {
        return undefined;
    } else if (poz===0) {
        return list.value
    } else {
        return nth(list.rest, poz-1)
    }
}
console.log(arrayToList([1, 2]));
console.log(listToArray(arrayToList([1, 2, 3])));
console.log(prepend(1, prepend(2, null)));
console.log(nth(arrayToList([1, 2, 3]), 0));

//Задание 9
let deepEqual=function (p1, p2){
    if (p1===p2){
        return true;
    } else if ((p1!=null && typeof p1=="object") && (p2!=null && typeof p2=="object")){
        if (Object.keys(p1).length!=Object.keys(p2).length)
            return false;
        for (let q in p1) {
            if (p2.hasOwnProperty(q)){
                if (!deepEqual(p1[q], p2[q]))
                    return false;
            } else {
               return false; 
            }       
        }
        return true;
    } else {
        return false;
    }
}
let p_object = {here: {is: "an", other: "3"}, object: 2};
console.log(deepEqual(p_object, p_object));
console.log(deepEqual(p_object, {here: 1, object: 2}));
console.log(deepEqual(p_object, {here: {is: "an", other: "3"}, object: 2}));

//Задание 10
let m_m=[[1, 2], [3, 4, 5], [6, 6], [7, 8, 9, 10, 11]];
m_m=m_m.reduce(function (a, b) {return a.concat(b);});
console.log(m_m);

//Задание 11
let ancestry = [
    {name: "Carolus Haverbeke", sex: "m", born: 1832, died: 1905, father: "Carel Haverbeke", mother: "Maria van Brussel"},
    {name: "Emma de Milliano",sex: "f",born: 1876,died: 1956,father: "Petrus de Milliano",mother: "Sophia van Damme"},
    {name: "Maria de Rycke",sex: "f",born: 1683,died: 1724,father: "Frederik de Rycke",mother: "Laurentia van Vlaenderen"},
    {name: "Jan van Brussel",sex: "m",born: 1714,died: 1748,father: "Jacobus van Brussel",mother: "Joanna van Rooten"},
    {name: "Philibert Haverbeke",sex: "m",born: 1907,died: 1997,father: "Emile Haverbeke",mother: "Emma de Milliano"},
    {name: "Jan Frans van Brussel",sex: "m",born: 1761,died: 1833,father: "Jacobus Bernardus van Brussel",mother: null},
    {name: "Pauwels van Haverbeke",sex: "m",born: 1535,died: 1582,father: "N. van Haverbeke",mother: null},
    {name: "Clara Aernoudts",sex: "f",born: 1918,died: 2012,father: "Henry Aernoudts",mother: "Sidonie Coene"},
    {name: "Emile Haverbeke",sex: "m",born: 1877,died: 1968,father: "Carolus Haverbeke",mother: "Maria Sturm"},
    {name: "Lieven de Causmaecker",sex: "m",born: 1696,died: 1724,father: "Carel de Causmaecker",mother: "Joanna Claes"},
    {name: "Pieter Haverbeke",sex: "m",born: 1602,died: 1642,father: "Lieven van Haverbeke",mother: null},
    {name: "Livina Haverbeke",sex: "f",born: 1692,died: 1743,father: "Daniel Haverbeke",mother: "Joanna de Pape"},
    {name: "Pieter Bernard Haverbeke",sex: "m",born: 1695,died: 1762,father: "Willem Haverbeke",mother: "Petronella Wauters"},
    {name: "Lieven van Haverbeke",sex: "m",born: 1570,died: 1636,father: "Pauwels van Haverbeke",mother: "Lievijne Jans"},
    {name: "Joanna de Causmaecker",sex: "f",born: 1762,died: 1807,father: "Bernardus de Causmaecker",mother: null},
    {name: "Willem Haverbeke",sex: "m",born: 1668,died: 1731,father: "Lieven Haverbeke",mother: "Elisabeth Hercke"},
    {name: "Pieter Antone Haverbeke",sex: "m",born: 1753,died: 1798,father: "Jan Francies Haverbeke",mother: "Petronella de Decker"},
    {name: "Maria van Brussel",sex: "f",born: 1801,died: 1834,father: "Jan Frans van Brussel",mother: "Joanna de Causmaecker"},
    {name: "Angela Haverbeke",sex: "f",born: 1728,died: 1734,father: "Pieter Bernard Haverbeke",mother: "Livina de Vrieze"},
    {name: "Elisabeth Haverbeke",sex: "f",born: 1711,died: 1754,father: "Jan Haverbeke",mother: "Maria de Rycke"},
    {name: "Lievijne Jans",sex: "f",born: 1542,died: 1582,father: null,mother: null},
    {name: "Bernardus de Causmaecker",sex: "m",born: 1721,died: 1789,father: "Lieven de Causmaecker",mother: "Livina Haverbeke"},
    {name: "Jacoba Lammens",sex: "f",born: 1699,died: 1740,father: "Lieven Lammens",mother: "Livina de Vrieze"},
    {name: "Pieter de Decker",sex: "m",born: 1705,died: 1780,father: "Joos de Decker",mother: "Petronella van de Steene"},
    {name: "Joanna de Pape",sex: "f",born: 1654,died: 1723,father: "Vincent de Pape",mother: "Petronella Wauters"},
    {name: "Daniel Haverbeke",sex: "m",born: 1652,died: 1723,father: "Lieven Haverbeke",mother: "Elisabeth Hercke"},
    {name: "Lieven Haverbeke",sex: "m",born: 1631,died: 1676,father: "Pieter Haverbeke",mother: "Anna van Hecke"},
    {name: "Martina de Pape",sex: "f",born: 1666,died: 1727,father: "Vincent de Pape",mother: "Petronella Wauters"},
    {name: "Jan Francies Haverbeke",sex: "m",born: 1725,died: 1779,father: "Pieter Bernard Haverbeke",mother: "Livina de Vrieze"},
    {name: "Maria Haverbeke",sex: "m",born: 1905,died: 1997,father: "Emile Haverbeke",mother: "Emma de Milliano"},
    {name: "Petronella de Decker",sex: "f",born: 1731,died: 1781,father: "Pieter de Decker",mother: "Livina Haverbeke"},
    {name: "Livina Sierens",sex: "f",born: 1761,died: 1826,father: "Jan Sierens",mother: "Maria van Waes"},
    {name: "Laurentia Haverbeke",sex: "f",born: 1710,died: 1786,father: "Jan Haverbeke",mother: "Maria de Rycke"},
    {name: "Carel Haverbeke",sex: "m",born: 1796,died: 1837,father: "Pieter Antone Haverbeke",mother: "Livina Sierens"},
    {name: "Elisabeth Hercke",sex: "f",born: 1632,died: 1674,father: "Willem Hercke",mother: "Margriet de Brabander"},
    {name: "Jan Haverbeke",sex: "m",born: 1671,died: 1731,father: "Lieven Haverbeke",mother: "Elisabeth Hercke"},
    {name: "Anna van Hecke",sex: "f",born: 1607,died: 1670,father: "Paschasius van Hecke",mother: "Martijntken Beelaert"},
    {name: "Maria Sturm",sex: "f",born: 1835,died: 1917,father: "Charles Sturm",mother: "Seraphina Spelier"},
    {name: "Jacobus Bernardus van Brussel",sex: "m",born: 1736,died: 1809,father: "Jan van Brussel",mother: "Elisabeth Haverbeke"}
  ];

function average(array) {
    function plus(a, b) {return a+b;}
    return array.reduce(plus) / array.length;
}
var byName={};
ancestry.forEach(function(person) {
    byName[person.name]=person;
});
let differences = ancestry.filter(function (person) {return byName[person.mother]!=null;
}).map(function (person) {return person.born-byName[person.mother].born;});
console.log(average(differences).toFixed(1));

//Задание 12
function average(array) {
    function plus(a, b) { return a+b; }
    return array.reduce(plus) / array.length;
}
var stol={}
function groupBy(arr, f){ 
    var obj={};
    arr.forEach(function(p){
        var id=f(p);
        if (obj[id]===undefined) {
            obj[id]=[];
        }
        obj[id].push(p)
    });
    return obj;
}
function getstol(p) {
    return Math.ceil(p.died / 100);
}
var stol=groupBy(ancestry, getstol);
for (century in stol) {
    stol[century]=average(stol[century].map(function(p){ return p.died-p.born}));
    console.log(century, ": ", stol[century].toFixed(1));
}

//Задание 13
function every(mas, fn) {
    for (let i=0; i<mas.length; i++) {
        if (!fn(mas[i])) {
            return false
        }
    }
    return true;
}
function some(mas, fn) {
    for (let i=0; i<mas.length; i++) {
        if (fn(mas[i])) {
            return true
        }
    }
    return false;
}
console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false