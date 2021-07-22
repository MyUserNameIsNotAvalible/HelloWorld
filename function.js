/*function checkAge(age) {
    age = prompt ('Age check')
    if (age > 18) {
        return true;
    } else {
        return confirm('Did your pearents allowed?')
    }alert (age)
} checkAge ();*/
/*function chekAge(age) {
   age = prompt ('How old are you?');
 return (age >18) ? true : confirm ('Did your pearents allowed');
} chekAge*/
/*function chekAge1(age) {
    let age = prompt ('How old are you?');
    return (age >18) || confirm ('Did your pearents allowed');
   } chekAge1*/
   /*function checkNumb(){
 let numb1 = prompt ('Chose first number');
 let numb2 = prompt ('Chose second number');
 return (numb1 < numb2) || confirm (numb1);
 return (numb1 > numb2) || confirm (numb2);
   } checkNumb;*/
   /*function pow(pow1);{
   let x = prompt ('Choose number');
   let n = prompt ('Choose degree');
 pow1 = x**n;
 alert (pow1);
   }
   pow;*/
   /*function greet(name) {   //Function Declaration
     console.log('Hi -', name);
   }

  const greet2 = function greet2(name) {  //Function Expression
    console.log('Hi -', name);
  }
   greet2('Valera');
   greet('Vera');
   console.log(typeof greet);
   console.dir (greet);
   // Anonymus function
   let counter = 0;
   const interval = setInterval(function() {
     if (counter === 5) {
       clearInterval(interval)
     } else {
        console.log(++counter)
     }
   }, 1000)*/
   
   // Arrow function

  /* function greet(name) {
    console.log('Hi -', name);
  }
  const arrow = (name) => {
    console.log('Hi -', name);
  }
  arrow ('Denis');
  const arrow2= name => console.log('Hi -', name)
  arrow2('Den');
  const pow2 = num => num **2
  console.log(pow2(5))
  
  // Parametry po umolchaniu

  const sum = (a = 40, b = a*2 ) => a + b
  console.log(sum (41,));
  function sumAll(...all) {
   let result = 0
   for(let num of all) {
    result += num
       }
    return result
  }
  const res = sumAll(1, 2, 3, 4, 5, 6, 7)
  console.log(res);
  
  // Zamikanie

  function createMember(name) {
    return function(lastName) {
      console.log(name + lastName)
    }
  }
  const logWithLastName = createMember('Denis')
  console.log(logWithLastName(' Zaslonko'))
  console.log(logWithLastName(' DJiba'))
  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
 /* function showOk() {
    alert('You already right');
  }
  function showNo() {
    alert ('You cancer');
  }
  ask('Are you right?', showOk, showNo);*/
  /*let age = prompt ('How old are you', 18);
  if (age < 18) {
    function welcome() {
      alert('Hi!')
    }
  } else {
    function welcome() {
      alert ('Hello')
    }
  }
 welcome();*/
function ask (question, yes, no) {
  if (confirm(question)) yes ()
  else no ();
}
ask('You agree?',
//function() { alert ('You agree');},
//function() { alert ('You don`t agree')}
() => alert ('You agree'),
() => alert ('You don`t agree')
);