# Funciones de mas usadas en arrays en JS

| Método | Descripción | Ejemplo |
|---|---|---|
| push() | Añade un elemento al final del array. | `const array = []; array.push(1); array.push(2); array.push(3); console.log(array); // [1, 2, 3]` |
| pop() | Elimina el último elemento del array. | `const array = [1, 2, 3]; console.log(array.pop()); // 3 console.log(array); // [1, 2]` |
| unshift() | Añade un elemento al principio del array. | `const array = []; array.unshift(1); array.unshift(2); array.unshift(3); console.log(array); // [3, 2, 1]` |
| shift() | Elimina el primer elemento del array. | `const array = [1, 2, 3]; console.log(array.shift()); // 1 console.log(array); // [2, 3]` |
| includes() | Comprueba si un elemento está presente en el array. | `const array = [1, 2, 3]; console.log(array.includes(2)); // true console.log(array.includes(4)); // false` |
| indexOf() | Devuelve el índice del primer elemento que coincide con el valor especificado. | `const array = [1, 2, 3]; console.log(array.indexOf(2)); // 1 console.log(array.indexOf(4)); // -1` |
| slice() | Devuelve una copia del array, desde el índice especificado hasta el índice especificado. | `const array = [1, 2, 3, 4, 5]; console.log(array.slice(1, 4)); // [2, 3, 4]` |
| concat() | Concatena dos o más arrays. | `const array1 = [1, 2, 3]; const array2 = [4, 5, 6]; console.log(array1.concat(array2)); // [1, 2, 3, 4, 5, 6]` |
| sort() | Ordena los elementos del array de forma ascendente. | `const array = [3, 2, 1]; array.sort(); console.log(array); // [1, 2, 3]` |
| reverse() | Invierte el orden de los elementos del array. | `const array = [1, 2, 3]; array.reverse(); console.log(array); // [3, 2, 1]` |
| forEach() | Itera sobre los elementos del array y ejecuta una función para cada elemento. | `const array = [1, 2, 3]; array.forEach((element) => { console.log(element); }); // 1 // 2 // 3` |
| map() | Crea un nuevo array con los resultados de aplicar una función a cada elemento del array original. | `const array = [1, 2, 3]; const newArray = array.map((element) => { return element * 2; }); console.log(newArray); // [2, 4, 6]` |