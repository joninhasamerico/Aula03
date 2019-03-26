var numeros = [0,1,2,3,4,5];
numeros.forEach((item) => {
    if(item % 2 === 0) {
        console.log(`${item}  é par`);
    } else {
        console.log(`${item}  é impar`);
    }
});