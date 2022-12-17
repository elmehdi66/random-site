/* Operateurs arithmetiques (addition, soustraction, division, multiplication, modulo...)
var x = 3;
var y = 5;
var somme = x + y;
document.write(somme);
*/

// Operateurs de comparaison

// "<" , "<=", ">", ">=", "==", "===", "!=", "!=="
// "==" compare les valeurs
// "===" compare la valeur et le type
var y = 3;
var a = "3";
// var z = y!==a; // y et a sont de deux types differents
var z = y!==a || y===a; // true
var b = y!==a && y===a; // false
var h = z || b; // true
// document.writeln(z) + "<br>"
// document.writeln(b) + "<br>"
// document.writeln(h) + "<br>"

// Opearateurs logiques

// && => And, || => Or

// Conditions : if else / if elseif else / switch / operateurs ternaires
// var k = 3;
// var f = 2;

// var d = k>=f; // true
// var c = k==f; // false

// if(d && c) {
//     document.write("vrai");
// } else if(d || c){
//     document.write("vrai aussi");
// } else {
//     document.write("faux")
// }

// var saisi = prompt("quel age as tu ?")

// switch (saisi) {
//     case "12" : document.write("vous avez 12 ans");
//     break;
//     case "15" : document.write("vous avez 15 ans");
//     break;
//     case "23": document.write("vous avez 23ans");
//     break;
//     case "39" : document.write("vous avez 39 ans");
//     break;
//     case "43" : document.write("vous avez 43 ans");
//     break; 
//     default : document.write("aucune valeur");
// }

// Conditions ternaires ( condition ? si true : si false )

// var t = 25;
// t < 23 ? document.write("vrai") : document.write("faux")

// les boucles (while/ for / for in)

// var d = 0;
// while(d<=19){
//     document.write(d + "<br>")
//     d++;
// }

var noms = ["hanane", "lamia", "bamba", "mehdi", "omar"];
// noms.push("assade", "mohamed", 23) // ajouter vers la fin du tableau
// noms.pop() // supprimer vers la fin du tableau
// noms.shift() // supprimer vers le debut du tableau
// noms.unshift("Ghazri") // ajouter vers le debut du tableau
// document.write(noms[noms.length-1])
// var i = 0;
// while (i <= noms.length-1){
//     document.write(noms[i] + "<br>");
//     i++
// }

for (var x in noms) {
    document.write(noms[x] + "<br>")
}



