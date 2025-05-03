// //-------------Access Modifires----------------//
// // public--- can be acessed from anywhere
// //private--- only from inside the class
// //protected---inside the class and extended subclasses



// class Human{
//     private firstName:string;
//     public lastName:string;
//     protected age:number;

//     constructor(firstName:string, lastName:string, age:number)
//     {
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.age=age;
//     }

//     getName()
//     {
//         return `${this.firstName} ${this.lastName} ${this.age}`;
//     }
// };

// class Person extends Human{

//  public profession: string;
//     constructor(firstName:string,lastName:string, age:number, profession:string)
//     {
//         super(firstName,lastName,age);
//         this.profession=profession;
//     }

// };

// const rafi=new Person("arman","rahman",20,"engineer");
// console.log(rafi);

// // const h1=new Human("Dani", "Olmo", 21);

// //has been accessed from outside of the class
// // console.log(h1.firstName+" "+ h1.lastName);

// //has beed accessed from inside of the class using getter function
// // console.log(h1.getName());