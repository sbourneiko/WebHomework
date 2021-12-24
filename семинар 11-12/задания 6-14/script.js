//Филина Ольга ПИ20-1
//Задание 6
console.log('Задание 6');
let obj = {}

obj.method1 = function() {
    return this
}
obj.method2 = function() {
    return this
}
obj.method3 = function() {
    return "метод 3"
}
console.log(obj.method1().method2().method3())

console.log('\n');


//Задание 7
console.log('Задание 7');

let d1 = [45, 78, 10, 3];
d1[7]=100
console.log(d1);
console.log(d1[6], d1[7]);

console.log('\n');


//Задание 8
console.log('Задание 8');
let sum2 = 0;
let d2 = [45, 78, 10, 3];
for (let i = 0; i < d2.length; i += 1) {
    sum2 += d2[i]
  }

console.log("Сумма элементов: "+ sum2);

console.log('\n');


//Задание 9
console.log('Задание 9');
let sum3 = 0;
let d3 = [45, 78, 10, 3];
d3[7]=100

for (let i in d3){
sum3 += d3[i]
}

console.log("Сумма элементов: "+ sum3);

console.log('\n');


//Задание 10
console.log('Задание 10');

let d4 = [45, 78, 10, 3];
function my(a,b){
    if (a>b) {
        return -1
    }
    if (a<b) {
        return 1
    }
    return 0
}
d4.sort(my);
console.log("Отсортированные элементы: "+ d4);

console.log('\n');


//Задание 11
console.log('Задание 11');
let d5 =[]
for (i = 0; i < 3; i++) {
    d5[i] = [];
    for (j = 0; j < 4; j++){
        d5[i][j]= 5;
    }
}
console.log(d5);

console.log('\n');

//Задание 12
console.log('Задание 12');
function Vector(x, y) {
    this.x = x;
    this.y = y;
}
Vector.prototype.plus = function plus(otherVector) {
    var x = this.x + otherVector.x;
    var y = this.y + otherVector.y;
    return new Vector(x, y);
};
Vector.prototype.minus = function minus(otherVector) {
    var x = this.x - otherVector.x;
    var y = this.y - otherVector.y;
    return new Vector(x, y);
};
Vector.prototype.length = function length() {
    return Math.sqrt(this.x*this.x+this.y*this.y)
}
// Ваш код
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// - Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// - Vector{x: -1, y: -1}
console.log("Длинна вектора: "+ new Vector(3, 4).length());
// - 5

console.log('\n');

//Задание 13
console.log('Задание 13');

function StretchCell(inner, width, height) {
	this.inner = inner;
	this.width = width;
	this.height = height;
}

function repeat(string, times) {
	let result = "";
	for (let i = 0; i < times; ++i)
		result += string;
	return result;
}

function TextCell(text) {
	this.text = text.split("\n");
}

TextCell.prototype.minWidth = function() {
	return this.text.reduce(function(width, line) { return Math.max(width, line.length); }, 0);
};
TextCell.prototype.minHeight = function() {
	return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
	let result = [];

	for (let i = 0; i < height; ++i) {
		let line = this.text[i] || "";
		result.push(line + repeat(" ", width - line.length));
	}
	return result;
};


StretchCell.prototype.minWidth = function() {
	return Math.max(this.width, this.inner.minWidth());
};
StretchCell.prototype.minHeight = function() {
	return Math.max(this.height, this.inner.minHeight());
};
StretchCell.prototype.draw = function(width, height) {
	return this.inner.draw(width, height);
}

// Ваш код.
var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// - 3
console.log(sc.minHeight());
// - 2
console.log(sc.draw(3, 2));
// - ["abc","  "]

console.log('\n');


//Задание 14
console.log('Задание 14');

function logFive (next){
    len=next.length;
    if (len>5){
        len =5;
    }
    for (var i = 0; i < len; i++) {
        console.log(next[i]);
    }
}

function ArSeq(arr){
    self.mass=[];
    for (let i in arr){
        self.mass.push(arr[i]);
        }
    return(self.mass)
    
}
function RangeSeq(from, to){
    this.from = from;
    this.to = to;
    self.mass=[];
    for (var i = from; i < to; i++){
        self.mass.push(i);
    }
    return(self.mass)
    
}

// Ваш код.
logFive(new ArSeq([1, 2]));
// - 1
// - 2
console.log('\n');
logFive(new RangeSeq(100, 1000));
// - 100
// - 101
// - 102
// - 103
// - 104
