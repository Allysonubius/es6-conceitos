//Retorna o tamanho da string
const textSize = 'Texto'.length;
console.log('Quantidade de letras: ${textSize}');

//Retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log('\nArray com as posições separadas pelo delimitador:', splittedText);

//Busca por um valor e substitui por outro
const replaceText = 'Texto'.replace('Texto', 'txeT');
console.log('\nSubstituição de valor:', replaceText);

//Retorna a "fatia"de um valor
const lastChar = ' Texto'.slice(-1);
console.log('\nÙltima letra de uma string:', lastChar);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log('\nValor da string da primeira letra menos a última:', allWithoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log('\nValor da segunda letra até a útlima:', secondToEnd);

//Retorna N caracteres a partir de uma posição
const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2);
console.log('\nAs duas letras primeiras letras são:', twoCharsBeforeFirstPos);