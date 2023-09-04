const str = "pallavi parteti";
const reverse = str.split('');
const reverse2 = reverse.split('').map(word => word.split('').reverse.join(' '));
console.log(reverse2);