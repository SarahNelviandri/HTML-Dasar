console.log("Javascript 7"); 
console.log("Hello world");

//Hallo aku sarah

//var, let, const

var nama = "mikaela"
console.log(nama);

let alamat="batuphat";
console.log(alamat);

const umur ="19";
console.log(umur);

//global scope
var nama ="zepryne";

//local scope
function salam() {
    console.log(nama);

    let alamat ="panggoi";
    console.log(alamat);

}
salam();

let bilangan  = 1;
console.log(bilangan); 

console.log (100/0); 

console.log("mikaela" /2);

//mengecek type data
console.log(typeof"mikaela");
console.log(typeof"mikaela" / 2);
console.log(typeof bilangan);

let nama2 = "mikaela";
let alamat2 ='batuphat timur';
let hobby =`main valorant`;

console.log(nama2);
console.log(alamat2);
console.log(hobby);

// penggabungan string
//+

console.log(nama2 + " dari " + alamat2 + " hobby " + hobby);

let isadmin = false;
console.log(isadmin);
console.log(typeof isadmin);

console.log(12 < 1); 


let boyfriend = null;
console.log(boyfriend);
console.log(typeof boyfriend);

let status ;
console.log(status);
console.log(typeof status);

let employee = {
    nama: "mikaela",
    umur: 19,
    hobi: "basket"
};

console.log(`Dia bernama ${employee.nama} umurnya ${employee.umur} hobinya bermain ${employee.hobi} `);

let isAdmin = false;
console.log(isAdmin);
console.log(typeof isAdmin);

let konversiAdmin = String(isAdmin);
console.log(konversiAdmin);
console.log(typeof konversiAdmin);

let bilangan1 = "3";
let bilangan2 = "5";

//concatenation
console.log(bilangan1);
console.log(typeof bilangan1);
console.log(bilangan2);
console.log(bilangan2);

let perkalian = Number(bilangan1) * Number(bilangan2);
console.log(perkalian);
console.log(typeof perkalian);

let isMarried = 3;

console.log(isMarried);
console.log(typeof isMarried);

let konversiMarried = Boolean (isMarried);
console.log(konversiMarried);
console.log(typeof konversiMarried);

console.log(77 % 8);

let a = 6 ;
console.log(a);

a+=12 ;
console.log(a);

let s = 3;
let r = 12;

console.log(s = r);
console.log(s < r);

let k = true;
let o = false;

console.log (k && o);
console.log(k || o);
console.log(!k);

let i = 311512;
let m = 345123; 

console.log(i & m);
console.log(i | m);
console.log(i ^ m);
console.log(~i);

let y = 5;
let n = 3;

console.log(y = n ? "yes" : "no");