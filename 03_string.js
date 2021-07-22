const name = 'Denis'
const age = 24
//const output = 'My name is ' + name + 'and i is old '+ age
//const output = `My name is ${name} and I is ${age < 20? 'A' :'B'} years old `
//console.log (output);
/*const output = `
<div> This is div </div>
<p> this is o</p>`*/
/*console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.charAt(2));
console.log(name.indexOf('is'));
console.log(name.indexOf('!'));
console.log(name.startsWith('Den'));
console.log(name.endsWith('ass'));
console.log(name.repeat(3));
const string = '              password      '
console.log(string);
console.log(string.trim());
console.log(string.trimLeft());
console.log(string.trimRight());*/
function logPerson(s, name, age) {
    console.log(s, name, age)
    if (age < 0) {
    age = 'Don`t birth yet'        
    } 
    return `${s[0]} ${name} ${s[1]} ${age} ${s[2]}`
}
const output = logPerson `Name: ${name}Years old: ${age}!`
console.log(output);
