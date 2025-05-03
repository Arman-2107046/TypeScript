// type myType = string | number;

// function exampleFunction(value: myType): void {
//   if (typeof value === "string") {
//     console.log(value.toUpperCase());
//   } else {
//     console.log(value.toFixed(2));
//   }
// }

// exampleFunction("hello");
// exampleFunction(20);


//type narrowing using instance of operator
// class Dog {
//   bark(): void {
//     console.log("Woff Woff");
//   }
// }

// class Cat {
//   meaw(): void {
//     console.log("Meaw Meaw");
//   }
// }

// function animalSound(animal: Dog | Cat): void {
//   if (animal instanceof Dog) {
//     animal.bark();
//   } else {
//     animal.meaw();
//   }
// }

// const dog1 = new Dog();

// animalSound(dog1);



//type narrowing using interseciton types

type Employee={
    id:number;
    name:string;
}

type Manager={
    department:string;
    role:string;
}


type ManagerWithEmployeeInfo=Employee & Manager;

const man:ManagerWithEmployeeInfo={
    id:12121,
    name:"Arman Rahman Rafi",
    department:"CSE",
    role:"CEO"
}


console.log(man);