let years: Array<number> = [2017, 2018, 2019];

for(let i=0; i<years.length; i++){
  //console.log(years[i]);
}

for(let i in years){
  //console.log(years[i]);
}


for(let i of years){
  //console.log(i);
}

years.forEach(function(y){
  //console.log(y);
});

/*
Output:
2017
2018
2019
*/

//=====================Array Method================================
var months: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

//Length
let a1 = months.length; //12

//Reverse method
let a2 = months.reverse(); //[12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

//Sort method
let a3 = months.sort(); //[1, 10, 11, 12, 2, 3, 4, 5, 6, 7, 8, 9]

//Pop method:  cắt giá trị cuối mảng và in giá trị đó ra
let a4 = months.pop(); //12

//Shift method: cắt giá trị đầu mảng và in giá trị đó ra
let a5 = months.shift(); //1

//Push method: thêm giá trị vào cuối mảng và in giá trị đó ra
let a6 = months.push(13); //13 => Hiện tải mảng: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

//Concat method: nối 2 mảng
let array1: Array<number> = [10, 20, 30]; 			
let array2: Array<number> = [100, 200, 300];//[10, 20, 30, 100, 200, 300]



