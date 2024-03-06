//al 22/02/2024

const a = [1, 3, 7, 1, 50, 600, 1000, 11800, 2000000, 3, 20]
//complement = [1, 3, 7, 1, 50, 600, 1000, 11800, -151, 20, -3]
const b = 23

var twoSum = function (nums, target) {

    let mapa = new Map()

    for (let i = 0; i < nums.length; i++) {
        let complemento = target - nums[i];
        if (mapa.has(complemento)) {
            console.log([mapa.get(complemento), i])
            return
        }
        mapa.set(nums[i], i)
    }
}

twoSum(a, b)



// 18/02/2024

let indice1 = 0,
    indice2 = 0

let numeroaBuscar 
var twoSum = (nums, target) => {

    for (let i = 0; i < nums.length; i++) {
        indice1 = i
         numeroaBuscar = target - nums[i]        

        for (let j = i + 1; j < nums.length; j++) {
            indice2 = j
            console.log(i, j)
            if (nums[indice1] + nums[indice2] === target) return [indice1, indice2]

        }
    }
 
}

console.log(twoSum(a, b))

//los numero sno tiene longitud
//los numero sno se pueden partir como si fueran cadenas o arreglos.
// longitud no es igual a numero de indice
//metodo join, debe llevar comillas para convertir arrray en text, ...todo junto
let a = 100001
var isPalindrome = function (x) {
    let t = x.toString()
           let arra = []
    for (let i = t.length - 1; i > -1; i--) {
    arra.push(t[i])
    }
    return (arra.join("") == t) ? 1 : 0 
};

isPalindrome(a)


//al 24/02/2024
// //en el caso de este problema, hay varias situaciones.
// //Al parecer solo hace el calculo en base a la primera cadena.
// //El ejercicio es poco claro.
// //Imprimir el valor final no es posible.

const s  = [ "q", "casjsete","Jhoni","casjsos","flujo", "casjsa","casjscda", "flujos", "casjson"]
consts = ["123","flor","flujo"]
var longestCommonPrefix = function(strs) {

    // Return early on empty input
    if (!strs.length) return '';

    // Loop through the letters of the first string
    for (let i = 0; i <= strs[0].length; i++) {
        console.log("long", strs[0]);
        // Loop through the other stringscon
        for (let j = 1; j < strs.length; j++) {console.log(strs[0]);
            // Check if this character is also present in the same position of each string
            if (strs[0][i] !== strs[j][i]) {;
                // If not, return the string up to and including the previous character
                console.log("123456", strs[0].slice(0, i));
                return strs[0].slice(0, i);
            }
        }
    }
console.log("valor ", strs[0])
    return strs[0];
    
};

longestCommonPrefix(s)



const p = "{"
// //}


// // var isValid = function (s) {
// //     const stack = [];
// // console.log(stack)
// //     for (let i = 0; i < s.length; i++) {
// //         switch (s[i]) {
// //             case '(': stack.push(')');
// //                 break;
// //             case '[': stack.push(']');
// //                 break;
// //             case '{': stack.push('}');
// //                 break;
// //             default:
// //                 console.log("antes", stack)
// //                 if (s[i] !== stack.pop()) {
// //                     console.log("despues", stack)
// //                     return false;
// //                 }
// //         }


// //     }
// //     console.log('Resuelto',stack)
// //     return true;
// // };

// //cierre debe ir fuera para que permabezcan los valores push, dentor del bucle se reinicia
// //al final este tambien esta mal, porque deja pasar un solo valor. Y en la pagina lo valida como bueno.
var isValid = function (s) {
    let cierre = []
    // if(s.length % 2 > 0){
    //     console.log(false, (s.length % 2 ))
    //     return false
    // }
    for (let i = 0; i < s.length; i++) {

        let ac = s[i]
        console.log("ultimo cierre2", cierre, ac, i)

        if (ac == "{") {
            cierre.push("}")
        } else if (ac == "[") {
            cierre.push("]")
        } else if (ac == "(") {
            cierre.push(")")
            
        } else if (ac !== cierre.pop()) {
            console.log(false, 213, ac)
            return false
        }
    }
    // if(cierre.length>0){
    //     return false
    // }
    console.log(true)
    return cierre.length === 0
}

isValid(aa)



const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  
  function romanToInt(s) {
    const integers = s.split('').map(c => roman[c]);
    
    return integers.reduce((acc, x, i) => x < integers[i+1] ? acc - x : acc + x, 0);
  };

  romanToInt(roman)

//estos tres ejercicios, dos de leetcode y uno creado por mi. El que es creado por mi no entiendo por que la pagina lo pone como malo
//al parecer el termino  in-place  proporcionado en el ejercicio, hace refeecencia a la condicion de que los cambios deben hacerse directamente a la varable de entrada.
//Debe tener pendiente que una cosa es la deficicion de la fucnion y otra es el tiempo cuando se llama. 
//no se porque la pagina lo tira como false, si en la consola del explorador esta como verdadero. Se estan cambiando los valores de n
// y se esta retornando la cantidad de elementos que ahy en el nuevo arreglo

//al 27/02/2024 solucionado. 
//otra vez el mismo error de selecionar un elemento del array, por quere
//coger el incie: nums[j] nbo es lo mismo que j. Uno es el lemento, 
// el otro es el indice del elemento, en este contexto
let n = [0, 1, 2, 2, 337, 0, 4, 2]
const k = 2
var removeElement = function (nums, val) {

   
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] == val) {
            nums.splice(j, 1)
            j--
            
        }
        
    }


    return nums.length;
};
console.log("Incio", n)
removeElement(n, k)
console.log("Final", n)

// var removeElement = function (nums, val) {

//     let i = 0;
//     for (let j = 0; j < nums.length; j++) {
//         if (nums[j] !== val) {
//             nums[i] = nums[j];
//             i++;
//         }
//         console.log("primero", i, j, n)
//     }


//     return i;
// };

// esta seria la solucion creda por mi




// var removeElement = function (nums, val) {
//     let count = []
//     for (let num of nums) {
//         if (num != val) {
//             count.push(num)
//         }
//     }
//     let numslength = count.length

//     for (let i = 0; i < nums.length; i++) {
//         nums[i] = count[i]

//     }
//     console.log("Reemplazo", count, nums)
//     console.log(numslength, count)

//     return numslength
// };


// let n = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 0, 4, 2]
// const k = 2

// var removeElement = function (nums, val) {
//     const z = []
//     for (const mm of nums) {
//         if (mm !== val) {
//             z.push(mm)
//         }
//     }
//     n = z
//     return z.length
// };

// console.log("Final", n, n.length)
// removeElement(n, k)
// console.log("Final", n, n.length)






//estaba confundiendo el elemento seleccionado del array, con el indice del elemento en cuestion.
//este al igual que otros mas, implica, hacer modificaciones directamente en el valor de entrada, sin reasignar
//valores, ya que los arrays se pasan por referencias.
let n = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 7, 7, 9, 9, 9, 20]
   

var removeDuplicates = function (array) {
    let a = 0
    let b = 1
    for (let i = 0; i < array.length; i = a) {
        if (array[i] != array[b]) {
            a++
            b++
            console.log(array, a, b)

        } else {
            array.splice(array.indexOf(array[b]), 1) 
          
        }
       
    }
    return array.length
}

removeDuplicates(n)
console.log(n)

//una forma mcuho mas sencilla,usando elementos desturcturasdos de un set
let n = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 7, 7, 9, 9, 9, 20]
var removeDuplicates = function (array) {
    array.splice(0, array.length, ...new Set(array))

    return array.length
}

removeDuplicates(n)
console.log( ...new Set(n))



//no estaba considerando que la cadena solo se estaba corriendo por la primera parte y la parte final estaba quedando 
//fija, por lo que nunfa se encontrabaj
//funciona con slice o substring. Sclice es mas eficiente
const a = "ipmississippi"
const b = "issip"

var strStr = function(haystack, needle) {
    for(let i = 0; i < haystack.length; i++) {
        if(haystack.slice(i,needle.length+i) == needle) {
            return i;
        }
       
    }
    return -1;
};

strStr(a, b)
