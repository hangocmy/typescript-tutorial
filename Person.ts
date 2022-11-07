//Class Inheritance
class Person{
  //properties
  name: string;
  age: number;

  //constructor
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  //methods
  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

}


class Student extends Person{
  //properties
  tmarks: number;
  
  //contructor
  constructor(name: string, age: number, tmarks: number) {
    super(name, age);
    this.tmarks = tmarks;
  }
  
  getMarks(): number {
    return this.tmarks;
  }

  setMarks(tmarks: number){
    this.tmarks = tmarks;
  }
}

let _student1 = new Student('My Ha', 22, 500);
_student1.getAge();
_student1.getName();
//_student1.setMarks(100);
_student1.getMarks();


