function otraFuncion(){
    serompe();
}

function serompe(){
    return 3+z;
}

function serompeAsincrona(cb){
    setTimeout(function (){
        try{
            return 5+a;
        } catch(err){
            console.error('Error en función asincróna')
            cb(err);
        }
    })
}

try{
    //serompe();
    serompeAsincrona(function(err) {
        console.log(err.message);
    });
} catch(err){
    console.error('Vaya ha sucedido un error...');
    console.error(err.message);
    console.log('Pero se ha capturado')
}

console.log('Final...')