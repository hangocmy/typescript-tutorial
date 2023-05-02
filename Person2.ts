//Access Modifiers

class Person2 {
    //properties
    protected name: string;
    protected age: number;

    //constructor
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    //methods
    private getName(): string {
        return this.name;
    }

    getDetails(): string {
        return "Name is: " + this.getName();
    }

    getAge(): number {
        return this.age;
    }

}


class Student2 extends Person2 {
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

    //getFullName(): string {
    //  return this.name;
    //}
}

let _student2 = new Student2('My Ha', 22, 500);
_student2.getMarks();
//_student2.getFullName();

//Không thể lấy _student2.getName() vì đã được private
console.log(_student2.getDetails()); //Output: Name is: My Ha


