let i = 0;
let intervalo = setInterval(() => {
    console.log('Hola')
    if(i === 3){
        clearInterval(intervalo);
    }
    i++;
}, 1000);

setImmediate(() => {
    console.log('Hola');
})

//required();

//console.log(process);
console.log(__dirname);

global.miVariable = 'elValor';

console.log(miVariable);