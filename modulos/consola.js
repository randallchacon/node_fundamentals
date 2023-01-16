console.info('info');
console.error('error');
console.warn('warning');

var tabla = [{
    a: 1,
    b: 'A'
}, {
    a: 2,
    b: 'B'
}]

console.table(tabla)

console.group('Grupo 1');
console.log('información G1');
console.log('información G1');

console.group('Sub Grupo 1');
console.log('subGrupo información G1');
console.log('subGrupo información G1');
console.log('subGrupo información G1');
console.groupEnd('Sub Grupo 1');

console.log('información G1');
console.groupEnd('Grupo 1');

console.log('Otros datos')

console.count('veces')
console.count('veces')
console.count('veces')
console.count('veces')