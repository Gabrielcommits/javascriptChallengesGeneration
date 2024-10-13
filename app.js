
// ejercicio 1
// for (let i = 1; i < 8; i++) {
//   let string = ''
//   for (let j = 1; j <= i; j++) {
//     string += '#';
//   }
//   console.log(string);
// }

// Ejercicio 2
// const getSize = (size) => {
//   for (let i = 1; i <= size; i++) {
//     let string = ''
//     for (let j = 1; j <= i; j++) {
//       string += '#';
//     }
//     console.log(string);
//   }
// }

// getSize(3);


// Tablero de ajedrez
// Escribe un programa que cree una cadena que represente un tablero de 8x8, usando caracteres de salto de línea para separar las líneas. En cada posición del tablero hay un carácter de espacio o un carácter "#". Los caracteres deben formar un tablero de ajedrez.
// Al pasar esta cadena a console.log debería mostrar algo como esto:
// # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #
// Cuando tengas un programa que genere este patrón, define una variable size = 8 y cambia el programa para que funcione para cualquier size, generando un tablero con el ancho y alto dados.
// Pista:  necesitan 2 bucles anidados

// for (let i = 1; i < 9; i++) {
//     let string = []
    
//     for (let j = 1; j <= 4; j++) {
//       string.push('# ');
//     }
//     console.log(`${i} ${string}`);
// }

// const chessBoard = (size) => {
//   for (let i = 1; i <= size; i++) {
//     let string = []

//     for (let j = 1; j <= size / 2; j++) {
//       string.push('# ');
//     }

//     console.log(`${i} ${string}`);
//   }
// }

// chessBoard(9)