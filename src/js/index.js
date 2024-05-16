// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

//Crea una función que reciba un array de 5 números, imprime por consola una posición aleatoria del array.

const getRandomNumber = numbers => {
  const randomNumber = Math.floor(Math.random() * numbers.length);
  console.log(numbers[randomNumber]);
};

getRandomNumber([1, 2, 3, 4, 5]);

//Crea una función que reciba un array con 3 números. La función deberá imprimir por consola.

-'La suma de todos los números es:[suma]' -
  'La media de todos los números es:[media]' -
  'El mayor es [mayor] y el menor es [menor]';

const trheeNumbers = numbers => {
  const addition = numbers[0] + numbers[1] + numbers[2];
  const average = addition / numbers.length;
  const greatest = Math.max(numbers[0], numbers[1], numbers[2]);
  const least = Math.min(numbers[0], numbers[1], numbers[2]);
  console.log(
    `La suma de todos los números es: ${addition}. La media de todos los números es: ${average}. El mayor es ${greatest} y el menor es ${least}`
  );
};
trheeNumbers([5, 9, 2]);

//- Crea una función que reciba un array con 5 números del 0 al 10 (a tu elección). Dentro de la función genera un número aleario entre 0 y 10. La función deberá decir si el array contiene ese número y en qué posición está o si no lo contiene.

const fiveNumbers = numbers => {
  const randomNumber = Math.floor(Math.random() * 11);

  if (numbers.includes(randomNumber)) {
    console.log(`El número es ${randomNumber} y está en la posición ${numbers.indexOf(randomNumber)}`);
  } else {
    console.log(`El número no está`);
  }
};
fiveNumbers([1, 4, 9, 8, 7]);

//- Crea una función que reciba un array vacío y lo devuelva con 3 números aleatorios entre 0 y 100.

const empty = number => {
    
};
empty([]);
