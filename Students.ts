class Students {
  //properties
  age: number;
  name: string;
  roll_no: number;

  //constructor
  constructor(age: number, name: string, roll_no: number) {
    this.age = age;
    this.name = name;
    this.roll_no = roll_no;
  }

  //methods
  getAge(): number {
    return this.age;
  }

  getName(): string {
    return this.name;
  }

  getRollNo(): number { 
    return this.roll_no;
  }
}

let student_details = new Students(22, "My Ha", 33);

console.log(student_details.getAge());
console.log(student_details.getName());