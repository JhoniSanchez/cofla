// const a = [1, 3, 7, 13, 50, 600]
// const b = 613
// var twoSum = function (nums, target) {
//     let i = 0;

//     let firstNumber = 0;
//     let secondNumber = 0;

//     while (i < nums.length - 1) {
//         firstNumber = nums[i];
//         let y = i + 1;


//         console.log("P", firstNumber, "S", secondNumber)

//         while (y < nums.length) {
//             secondNumber = nums[y]
//             if (firstNumber + secondNumber === target) return [i, y]
//             console.log("I es:", i, "Y es:", y)
//             y++;
//         }


//         i++;
//     }
// };
// console.log(twoSum(a, b))



// const a = [1, 3, 7, 1, 50, 600, 1000, 11800, 2000000, 4, 20]
// const b = 24

// let indice1 = 0,
//     indice2 = 0

// var twoSum =  (nums, target) => {
//     for (let i = 0; i < nums.length; i++) {
//         indice1 = i

//         for (let j = i + 1; j < nums.length; j++) {
//             indice2 = j
//             console.log(i, j)
//             if (nums[indice1] + nums[indice2] === target) return [indice1, indice2]

//         }
//     }

// }

// console.log(twoSum(a, b))


//           24
// const a = [1, 3, 7, 1, 50, 600, 1000, 11800, 2000000, 4, 20]
// const b = 24

// let indice1 = 0,
//     indice2 = 0


//     const mapa = new Map()


// var twoSum =  (nums, target) => {
//     for (let i = 0; i < nums.length; i++) {
//         indice1 = i

// let objetivo = target-nums[i]
// mapa.set(objetivo, nums[i])

// if(mapa.has(objetivo))  

//         for (let j = i + 1; j < nums.length; j++) {
//             indice2 = j
//             console.log(i, j)
//             if (nums[indice1] + nums[indice2] === target) return [indice1, indice2]

//         }
//     }

// }

// console.log(twoSum(a, b))




// let cadenaObjeto = new String("Cadena Objeto")
// let strinPrimitivo = "StringPrimitivoooooNM"
// console.log(typeof cadenaObjeto)

// console.log(typeof strinPrimitivo)

// console.log(cadenaObjeto = "mundo")

// console.log(strinPrimitivo = "coco")



// const  sym =  Symbol("Nuevo simbolo")

// console.log(String(sym))

// const ss = new String("cadena de texto para trabajar")
// // for(const x of ss){
// // console.log(x);
// // console.log(ss.at(-1));
// // }

// console.log(ss.at(2));

// console.log(ss[-1]);
// console.log(ss.slice(0, 5));
// console.log(ss.charAt(0));
// console.log("í".charCodeAt());
// console.log("Cada de campo".concat(2, 3, 4));
// console.log("Cada de campo".endsWith("am", 11));
// console.log("Cada de campo".indexOf("d"));
// console.log("Cada de campo".lastIndexOf("a"));


// const a = 'hola'; // With accents, lowercase
// const b = 'hola'
// console.log(a.localeCompare(b));



// const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
// const regex = /[a-z]/g;
// const found = paragraph.match(regex);

// console.log(found);

// const str1 = 'Breaded Mushrooms';

// console.log(str1.padStart(25, '*'));

// const filePath = String.raw`C:\Development\profile\aboutme.html`;

// console.log(`The file was uploaded from: ${filePath}`);










// const a = [1, 3, 7, 1, 50, 600, 1000, 11800, 2000000, 3, 20]
// const b = 4

// let indice1 = 0,
//     indice2 = 0

// const mapa = new Map()

// let numeroaBuscar 
// var twoSum = (nums, target) => {

//     for (let i = 0; i < nums.length; i++) {
//         indice1 = i
//          numeroaBuscar = target - nums[i]
//         mapa.set(numeroaBuscar, nums[i])



//         // for (let j = i + 1; j < nums.length; j++) {
//         //     indice2 = j
//         //     console.log(i, j)
//         //     if (nums[indice1] + nums[indice2] === target) return [indice1, indice2]

//         // }
//     }
//     for (const x of mapa) {
//         if (mapa.has(x-target)) {
//             return [x, numeroaBuscar]
//          }
//     }
// }

// console.log(twoSum(a, b))

// var twoSum = function(nums, target) {
//     let mp = new Map()

//     for (let i = 0; i < nums.length; i++) {
//         let diff = target - nums[i]

//         if (mp.has(diff)) {
//             console.log([i, mp.get(diff)]); 
//         }

//         mp.set(nums[i], i)
//     }
// };
// twoSum(a, b)

// const paragraph = "I think Ruth's dogdogdogdogdog is cuter than your dog!";

// const regex = /Dog/gi;
// console.log(paragraph.replaceAll("do", 'ferret'));


// const stringObj = new String('foo');

// console.log(typeof stringObj);
// // Expected output: String { "foo" }

// console.log(typeof stringObj.toString());
// // Expected output: "foo"


//      const a = [1, 3, 7, 1, 50, 600, 1000, 11800, 2000000, 3, 20]
// //complement = [1, 3, 7, 1, 50, 600, 1000, 11800, -151, 20, -3]
// const b = 23

// var twoSum = function(nums, target) {
//     let map = new Map;
//     for (var i = 0; i < nums.length; i++) {
//         let complement = target - nums[i];
//         if (map.has(complement)) {
//             console.log([map.get(complement), i])
//             return 
//         }
//         map.set(nums[i], i);
//     }
// }

// twoSum(a, b)


// c  ind
// 3, 1
// 4, 2
// 6, 3
// 5, 4


// const a = [1, 3, 7, 1, 50, 600, 1000, 11800, 2000000, 3, 20]
// //complement = [1, 3, 7, 1, 50, 600, 1000, 11800, -151, 20, -3]
// const b = 23

// var twoSum = function (nums, target) {

//     let mapa = new Map()

//     for (let i = 0; i < nums.length; i++) {
//         let complemento = target - nums[i];
//         if (mapa.has(complemento)) {
//             console.log([mapa.get(complemento), i], 0)
//             return
//         }
//         mapa.set(nums[i], i)
//     }
// }

// twoSum(a, b)


// let indice1 = 0,
//     indice2 = 0

// let numeroaBuscar 
// var twoSum = (nums, target) => {

//     for (let i = 0; i < nums.length; i++) {
//         indice1 = i
//          numeroaBuscar = target - nums[i]        

//         for (let j = i + 1; j < nums.length; j++) {
//             indice2 = j
//             console.log(i, j)
//             if (nums[indice1] + nums[indice2] === target) return [indice1, indice2]

//         }
//     }

// }

// console.log(twoSum(a, b))
// const s  = ["flujr","casjsos","flujo", "casjsa","casjscda", "casjsete", "flujos", "casjson"]

// var longestCommonPrefix = function (strs) {
//     if (strs.length === 0) {
//         return "";
//     }

//     let prefix = strs[0];
//     console.log("llll", prefix)
//     for (let word of strs) {
//         while (word.indexOf(prefix) !== 0) {
//             prefix = prefix.slice(0, -1);
//             if (prefix === '') return ''

//             console.log("llll", prefix)
//         }
//       console.log("llll", prefix)}

//     // return prefix;
// };


// var longestCommonPrefix = function(strs) {
//     if (strs.length === 0) {
//         return '';
//     }
//     let ans = strs[0];console.log("llll",ans)
//     for (let i = 1; i < strs.length; i++) {
//         while (strs[i].indexOf(ans) !== 0) {
//             ans = ans.substring(0, ans.length - 1);
//             if (ans === '') {
//                 return '';
//             }
//         }
//     }
//     return ans;
// };


// var longestCommonPrefix = function(arr) {
//     let i = 1;
//     let prf = arr[0];
//     while(i < arr.length){
//         if(!arr[i].startsWith(prf)){
//             prf = prf.slice(0, -1)
//         }else{
//             i++
//         }
//         console.log("llll",prf)
// }
//     return prf


// };



// var longestCommonPrefix = function (strs) {
//     // sort the array because its rearrange alphabetical order
//     strs.sort();

//     for (let i = 0; i < strs[0].length; i++) {
//         console.log("For", strs, i)

//         if (strs[0][i] !== strs[strs.length - 1][i]) {
//               console.log("Condicion IF", strs)
//             return strs[0].substr(0, i);
//         }
//     }


//     console.log("llll", strs[0])
//     return strs[0];
// };

// // const s  = [ "q", "casjsete","Jhoni","casjsos","flujo", "casjsa","casjscda", "flujos", "casjson"]
// s = ["123","flor","flujo"]
// var longestCommonPrefix = function(strs) {

//     // Return early on empty input
//     if (!strs.length) return '';

//     // Loop through the letters of the first string
//     for (let i = 0; i <= strs[0].length; i++) {
//         console.log("long", strs[0]);
//         // Loop through the other stringscon
//         for (let j = 1; j < strs.length; j++) {console.log(strs[0]);
//             // Check if this character is also present in the same position of each string
//             if (strs[0][i] !== strs[j][i]) {;
//                 // If not, return the string up to and including the previous character
//                 console.log("123456", strs[0].slice(0, i));
//                 return strs[0].slice(0, i);
//             }
//         }
//     }
// console.log("valor ", strs[0])
//     return strs[0];

// };

// longestCommonPrefix(s)


// const p = "{"
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
// // var isValid = function (s) {
// // let cierre = []
// //     for (let i = 0; i < s.length; i++) {

// //         let ac = s[i]
// //         console.log("ultimo cierre2", cierre, ac, i)

// //         if (ac === "{") {
// //             cierre.push("}")
// //         } else if (ac === "[") {
// //             cierre.push("]")
// //         } else if (ac === "(") {
// //             cierre.push(")")
// //         } else if (ac !== cierre.at(-1)) {
// //             console.log(ac)
// //             console.log("ultimo cierre", )
// //             console.log(false)
// //             return false
// //         }
// //     }
// //     console.log(true)
// //     return true
// // }
// // isValid(p)






//para este ejercicio hay que estudiar ala slistas enlazadas.
// const a = [3, 2, 6, 1, 4]
// const b = [3, 22, 6, 111, 1, 4]

// var mergeTwoLists = function (list1, list2) {
//     const c = list1.concat(list2).sort((a, b) => a - b)
//     console.log(c)
//     return c

// };

// mergeTwoLists(a, b)

// var mergeTwoLists = function(l1, l2) {
//     let tempNode = new ListNode(0, null);
//     let currentNode = tempNode;

//     while (l1 && l2) {
//         if(l1.val < l2.val) {
//             currentNode.next = l1;
//             l1 = l1.next
//         } else {
//             currentNode.next = l2;
//             l2 = l2.next
//         }
//         currentNode = currentNode.next;
//     }
//     currentNode.next = l1 || l2;

//     return tempNode.next;
// };







//Debe tener pendiente que una cosa es la deficicion de la fucnion y otra es el tiempo cuando se llama. 
//no se porque la pagina lo tira como false, si en la consola del explorador esta como verdadero. Se estan cambiando los valores de n
// y se esta retornando la cantidad de elementos que ahy en el nuevo arreglo


// let n = [0, 1, 2, 2, 3, 0, 4, 2]
// const k = 2
// let nuevo = []
// var removeElement = function (nums, val) {

//     // let i = 0;
//     for (let j = 0; j < nums.length; j++) {
//         if (nums[j] !== val) {
//             nuevo.push(nums[j])
//             // i++;
//         }        
//     }
//     n = nuevo
//     return nuevo.length;
// };
// console.log("Final", n)
// removeElement(n, k)


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
// let n = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3]




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


// let n = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3]

// var removeDuplicates = function (nums) {
//     let p = 0;
//     nums.forEach((n) => n > nums[p] && (nums[++p] = n));
//     console.log(nums)
//     return p + 1;
// };
// removeDuplicates(n)
// console.log(n)


///los array se pasan por referencia,
// en estos casos de in place se debe modificar desde la funcion directamente el arrar, sin hacer copias.
//el respustado de esta funcion es que los primeros digitos son la modificacion del arrray

// let n = [0,1, 1, 5, 7, 7, 9, 9, 9, 20]

// var removeDuplicates = function (array) {

//     let aa = 0
//     let bb = 1
//     let len = array.length

//     while (bb < len) {
//         if (array[aa] != array[bb]) {
//             // console.log("Antes", aa)
//             aa++

//              console.log( "antes", array[aa],  array[bb])
//             array[aa] = array[bb]
//             console.log("des",  array[aa],  array[bb])
//         }
//         bb++
//     }

//     return aa + 1
// }

// removeDuplicates(n)
// console.log(n)


//estaba confundiendo el elemento seleccionado del array, con el indice del elemento en cuestion.
//este al igual que otros mas, implica, hacer modificaciones directamente en el valor de entrada, sin reasignar
//valores, ya que los arrays se pasan por referencias.
// let n = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 7, 7, 9, 9, 9, 20]



// var removeDuplicates = function (array) {
//     let a = 0
//     let b = 1
//     for (let i = 0; i < array.length; i = a) {
//         if (array[i] != array[b]) {
//             a++
//             b++
//             console.log(array, a, b)

//         } else {
//             array.splice(array.indexOf(array[b]), 1) 

//         }

//     }
//     return array.length
// }
// let n = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 7, 7, 9, 9, 9, 20]
// var removeDuplicates = function (array) {
//     array.splice(0, array.length, ...new Set(array))

//     return array.length
// }

// removeDuplicates(n)
// console.log( ...new Set(n))

// let dummy = new ListNode(0, 1); 
// console.log( dummy)






// //no estaba considerando que la cadena solo se estaba corriendo por la primera parte y la parte final estaba quedando 
// //fija, por lo que nunfa se encontrabaj
// //funciona con slice o substring. Sclice es mas eficiente
// const a = "ipmississippi"
// const b = "issip"

// var strStr = function(haystack, needle) {
//     for(let i = 0; i < haystack.length; i++) {
//         if(haystack.slice(i,needle.length+i) == needle) {
//             return i;
//         }

//     }
//     return -1;
// };

// strStr(a, b)




// //otra vez el mismo error de selecionar un elemento del array, por quere
// //coger el incie: nums[j] nbo es lo mismo que j. Uno es el lemento, 
// // el otro es el indice del elemento, en este contexto
// let n = [0, 1, 2, 2, 337, 0, 4, 2]
// const k = 2
// var removeElement = function (nums, val) {


//     for (let j = 0; j < nums.length; j++) {
//         if (nums[j] == val) {
//             nums.splice(j, 1)
//             j--

//         }

//     }


//     return nums.length;
// };
// console.log("Incio", n)
// removeElement(n, k)
// console.log("Final", n)





// const aa = "(("
// //           ))


// var isValid = function (s) {
//     let cierre = []
//     // if(s.length % 2 > 0){
//     //     console.log(false, (s.length % 2 ))
//     //     return false
//     // }
//     for (let i = 0; i < s.length; i++) {

//         let ac = s[i]
//         console.log("ultimo cierre2", cierre, ac, i)

//         if (ac == "{") {
//             cierre.push("}")
//         } else if (ac == "[") {
//             cierre.push("]")
//         } else if (ac == "(") {
//             cierre.push(")")

//         } else if (ac !== cierre.pop()) {
//             console.log(false, 213, ac)
//             return false
//         }
//     }
//     // if(cierre.length>0){
//     //     return false
//     // }
//     console.log(true)
//     return cierre.length === 0
// }

// isValid(aa)

// a = [2, 7, 11, 15], b = 13

// var twoSum = function (nums, target) {

//     for (let i = 0; i < nums.length; i++) {
//         let numero1 = nums[i]

//         for (let j = i + 1; j < nums.length; j++) {
//             let numero2 = nums[j]
//             if (numero1 + numero2 === target) {
//                 console.log([i, j])
//                 return [i, j]
//             }
//         }
//     }
// };

// twoSum(a, b)




a = -121

var isPalindrome = function (x) {
    const b = x.toString()
    const c = Array.from(b).toReversed().join("")
    return b == c ? true : false
    // console.log(b == c ? true : false)
};

isPalindrome(a)