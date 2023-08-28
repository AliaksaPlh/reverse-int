module.exports = function reverse (n) {
let i = 0;
let str = `${Math.abs(n)}`;
let result = ''
while (i < str.length) {
    result = `${str[i]}${result}`;
    i +=1;
};
return +result;



}
