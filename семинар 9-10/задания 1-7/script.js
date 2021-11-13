//1.Треугольник
function task1(symb){
    for (let i=1; i<8; i++){
        console.log(symb.repeat(i));
    }
}
task1('#');

//2.FizzBuzz
function task2(){
    for (let i=1; i<101; i++){
        if (i%5==0 && i%3==0){
            console.log('FizzBuzz');
            continue;
        }
        if (i%3==0 && i%5!=0){
            console.log('Fizz');
            continue;
        }
        if (i%5==0 && i%3!=0){
            console.log('Buzz');
            continue;
        }
        console.log(i)
    }
}
task2();

//3.Шахматная доска
function task3(){
    for (let i=1; i<5; i++){
        console.log('# '.repeat(4));
        console.log(" #".repeat(4));   
    }
}
task3();

//4.Минимум
function task4(number1, number2){
    if (number1 < number2){
        console.log(`Number ${number1} is less than ${number2}`);
    } else if (number2 < number1){
        console.log(`Number ${number2} is less than ${number1}`);
    }else{
        console.log(`Numbers ${number1} and ${number2} are equal`);
    }
}
task4(5, 10);
task4(10, 5);
task4(5, 5);


//5.Считаем бобы
function countBs(text){
    let counter = 0;
    for (let symb=0; symb<text.length; symb++){
        if (text[symb]=='B'){
            counter+=1;
        }
    }
    console.log(`Number of Bs: ${counter}`)   
}
countBs('Hello Boys, how is it going for you? You better Be playing Baseball!');

function countChar(text, symbol){
    let counter = 0;
    for (let symb=0; symb<text.length; symb++){
        if (text[symb]==symbol){
            counter+=1;
        }
    }
    console.log(`Number of ${symbol}s: ${counter}`)   
}
countChar('Hello Boys, how is it going for You? You better Be playing Baseball!', 'Y');

//6.Сумма диапазона
function sum(array1){
    let s=0;
    for (let i=0; i<array1.length-1; i++){
        s+=array1[i];
    }
    return s
}
function range(first, last, step=1){
    let arr = [];
    if (step>0){
        for (let i=first; i<last+1; i+=step){
            arr.push(i); 
        }
    } else{
        for (let i=first; i>last-1; i+=step){
            arr.push(i); 
        }
    }
    return arr
}
console.log(range(1,10,2));
console.log(range(5,2,-1));
console.log(`Sum: ${sum(range(15,26))}`);


//7.Обращаем массив вспять
function reverseArray(array2){
    let newarray = [];
    for (let i=array2.length-1; i>=0; i--){
        newarray.push(array2[i]);
    }
    return newarray
}

function reverseArrayInPlace(array3) {
    for (let i=0; i<Math.floor(array3.length/2); i++) {
      temp = array3[i];
      array3[i] = array3[array3.length-1-i];
      array3[array3.length-1-i] = temp;
    }
    return array3
  }
let testarr = [5,4,3,2,1]
console.log(reverseArray(testarr));
console.log(reverseArrayInPlace(testarr));