console.log("In my May1 file ");

class Living extends Object {
  constructor(age) {
    super();
    this.age = age;
  }
  show() {
    console.log("Living age ", this.age);
  }
  birthday(){
    this.age++;
  }
}

class Animal extends Living {
  constructor(age, name){
    super(age);
    this.name = name;
  }
  show() {
    console.log(this.name + " is " + this.age);
  }
}

let john = new Living(33);
console.log("John is ", john.age);

john.show(); // john is 33
john.birthday();
john.show(); // john is 34

let tree = new Living(100);
tree.show();  // tree is 100
tree.birthday();
tree.birthday();
tree.show(); // tree is 102

john.show();  // john is still 34

let wolf = new Animal(15, "Ted");
wolf.show();

tree.show();
john.show();