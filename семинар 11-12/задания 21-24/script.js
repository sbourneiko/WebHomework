//Задание 22

console.log("Задание 22")

Number.prototype.isEven=function(){
    return this % 2===0;
};

Number.prototype.isOdd=function(){
    return !this.isEven();
}
console.log((5).isOdd())


console.log('\n');

//Задание 23
console.log("Задание 23")

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      console.log(this.step);
      return this;
    }
  }
  
ladder.up().up().down().up().down().showStep();


console.log('\n');

//Задание 24
console.log("Задание 24")

function Unit(x, y) {
    this.x = x;
    this.y = y;
}
Unit.prototype.Fighter=function(z) {
    return power = [this.x, this.y, z];
    
};
console.log(new Unit(1, 2).Fighter(15));
