/*const num = 42
const float = 42.42
const pow = 10e3
console.log(num);
console.log(float);
console.log(pow);
console.log('MAX_SAFE_INTEGER ', Number.MAX_SAFE_INTEGER);
console.log('Math.pow', Math.pow(2, 53) -1 );
console.log('MIN_SAFE_INTEGER ', Number.MIN_SAFE_INTEGER);
console.log('MAX_VALUE', Number.MAX_VALUE);
console.log('MIN_VALUE', Number.MIN_VALUE);
console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY);
console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY);
console.log('2/0', 2/0);
console.log('NaN', Number.NaN);//Not A Number
const weird = 2 / undefined;
console.log(Number.isNaN(weird))
console.log(Number.isNaN(42))
console.log(Number.isFinite(weird))
const stringInt = '40'
const stringFloat = '40.42'
console.log(+stringInt + 2);
console.log(Number.parseInt(stringInt) + 2);
console.log(Number.parseInt(stringFloat) + 2);*/
/*console.log(0.4 + 0.2)
console.log( (2/5) + (1/5));
console.log(+(0.4 + 0.2).toFixed(1));
console.log(parseFloat((0.4 + 0.2).toFixed(1)));*/
                // BigInt
//console.log();
            //Math
 /*console.log(Math.E);
 console.log(Math.PI);
 console.log(Math.sqrt(25));
 console.log(Math.pow(5, 3));
 console.log(Math.abs(-42));
 console.log(Math.max(42, 12, 11, 23, 422));
 console.log(Math.min(42, 12, 11, 23, 422));
 console.log(Math.floor(4.9));
 console.log(Math.ceil(4.9));
 console.log(Math.round(4.9));
 console.log(Math.trunc(4.9));
 console.log(Math.random());
 function getRandomBetween (min,max){
     return Math.floor(Math.random() * (max - min + 1) + min)
 }
 getRandomBetween(10, 42);
 console.log(getRandomBetween(10, 42))*/
/* for (let i = 0; i < 10; i++) {
     if (!cond) continue;
 }*/

 /*function pow(x, n) {
     if (n < 0) {
         alert('Less then 0');
         return;
     }
     let result = 1;

     for (let i = 0; i < n; i++) {
         result *= x;
     }

     return;
 }*/

/* discrible ('pow', function() {
     it ('Возводит в степень n', function() {
         assert.equal(pow(2,3),8)
     });
 });
 let user = {
     name: "Jhon" ,
     age: 24,
     ['likes birds']: true ,
 };

 let key = prompt('What are you whant know?' ,'name')
 alert(user[key]);*/

 /*let user = {};
      user.name = 'Jhon' ;
      user.surname = "Smith" ;
    user.name = 'Pete';
 delete user.name;*/

/*function isEmpty(obj) {
    let schedule = {}
    alert( isEmpty(schedule) );
    schedule ['8:30'] = 'get up';
    alert(isEmpty(schedule) );
}*/

/*function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

let salaries = {
    Jhon: 100 ,
    Ann: 160 ,
    Pete: 130,
}*/
//let sum = num => Math.sum(salaries)

/*let sum = 0;
for (let key in salaries) {
    sum +=salaries[key];
}
alert(sum);

let menu = {
    wigth: 200 ,
    height: 300 ,
    title: 'My menu',
};

multiplyNumeric(menu);


function multiplyNumeric(obj) {
 for (let key in menu) {
     if (typeof obj[key]=== 'number')
    obj[key] *= 2;
 }
 }
multiplyNumeric
console.log(menu)*/

/*function sum1(salaries) {
    for (let key in salaries){
        return 0
    }
};
console.log(sum);*/
/*function makeUser() {
    return {
      name: "Джон",
      ref: this
    };
  };
  
  let user = makeUser();
  
  alert( user.ref.name );*/

  /*let calculator = {
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt(`b?`, 0);
    }
};
calculator.read();
alert(calculator.sum() );
alert(calculator.mul() );*/

let ladder = {
    step : 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() {
        alert(this.step);
        return this;
    }
};
ladder.up().up();
ladder.showStep();
