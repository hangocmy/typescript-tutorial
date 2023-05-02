//enum Directions {
//  North = 5,
//  South, // will be 6
//  East, // 7
//  West // 8
//}

//access an enum
//enum Directions {
//  North,
//  South,
//  East,
//  West
//}

//console.log(Directions.North); // output is  0
//console.log(Directions["North"]); // output is 0
//console.log(Directions[0]); //output is North

//Declare An Enum with a string value
enum Directions {
    North = "N",
    South = "S",
    East = "E",
    West = "W"
}

console.log(Directions.North); // output is N
console.log(Directions["North"]); // output is N
console.log(Directions[0]); // output is North