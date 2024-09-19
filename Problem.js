

// function reverseString(str) {
//     let value = "olleH dlroW";
//     let sting = value.split("").reverse().join("");
//     console.log(sting);
    
// }
// reverseString()

// // 3. Arrays & Loops

// function removes() {
//     let text = ["rum", "gold", "parrot food", "rum", "gold", "map"];
//     // console.log(text.splice(3, 0, "map"));
//     text.splice(3, 7, "map")
//     console.log(text);  
// }
// removes()

// 9. Arrays & Loops

// function digit() {
//     const a = ["sword", "shield", "potion"];
//     const b =  ["potion", "ring", "shield"];
//     const x = b.slice(0, 2)
//     const z = a.concat(x);
//     console.log(z);
    
// }
// digit()

function digit() {
    const a = [["sword", "shield", "potion"], ["potion", "ring", "shield"]];
    const x = a.flat().splice(0, 1, "shield", "potion");
    
    console.log(x);
    
}
digit()