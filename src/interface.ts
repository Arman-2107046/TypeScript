// //------------Interface for functions---------

// // interface MathOperation{
// //     (x:number,y:number):number;
// // }

// // const add:MathOperation=(a,b)=>a+b;
// // const substract:MathOperation=(a,b)=>a-b;

// // console.log(add(3,4));
// // console.log(substract(3,4));

// //-----------Interface for class-------------

// // interface Vehicle{
// //     start():void;
// //     stop():void;
// // }

// // class Car implements Vehicle{

// //     start()
// //     {
// //         console.log("The car has started");
// //     }

// //     stop()
// //     {
// //         console.log("The car has stopped");
// //     }
// // };

// // const c=new Car();
// // c.start();
// // c.stop();

// //--------------Interface for objects---------------//
// // Example 1
// // interface Computer{
// //     name:string;
// //     ram:number;
// //     hdd:number;
// // }

// // const Asus: Computer={
// //     name:"Vivobook",
// //     ram:8,
// //     hdd:1000
// // }

// // console.log(Asus);

// // Example 2
// // interface Movie {
// //   readonly name: string;
// //   ratings: number;
// //   genre?: string;
// // }

// // const movie1: Movie = {
// //   name: "Star Wars",
// //   ratings: 8.9,
// //   genre:"Action"
// // };

// // console.log(movie1);

// //---------------Interfaces for functions----------------//
// // interface MathOperation{
// //     (x:number, y:number):number;
// // }

// // const add:MathOperation=(a,b)=>a+b;
// // const substract:MathOperation=(a,b)=>a-b;

// // console.log(add(2,3));
// // console.log(substract(2,3));

// //------------object and function-----------//

// // interface Person {
// //   firstName: string;
// //   lastName: string;
// //   age: number;
// //   sayHello(): void;
// // }

// // const person:Person={
// //     firstName:"arman",
// //     lastName:"rahman",
// //     age:21,
// //     sayHello()
// //     {
// //         console.log("Hello World");
// //     }
// // }

// // console.log(person.firstName+" "+person.lastName+" "+person.age);
// // person.sayHello();

// // interface Song {
// //     songName:string;
// //     singerName:string;
// //     printSongInfo(songName:string,singerName:string):string;
// // }

// // const song1:Song={
// //     songName:"Numb",
// //     singerName:"Chester",
// //     printSongInfo:(songName,singerName)=>
// //     {
// //         return `${songName} ${singerName}`;
// //     }
// // }

// // console.log(song1.printSongInfo( "Song Name : "+song1.songName,"Singer Name : "+ song1.singerName));

// interface MovieDetails {
//   readonly name: string;
//   ratings: number;
//   price: number;

//   printMovieInfo(name: string, price: number, ratings: number): string;
// }

// interface MovieGenre extends MovieDetails {
//   genre: string;
// }

// const m1: MovieGenre = {
//   name: "Avengers Infinity War",
//   ratings: 7,
//   price: 20,
//   genre: "action",

//   printMovieInfo(name: string, price: number, ratings: number): string {
//     return `Movie Name: ${name}
//   Movie Rating: ${ratings}
//   Movie Genre: ${this.genre}
//   Ticket Price: ${price}`;
//   },
// };

// // Example usage
// console.log(m1.printMovieInfo(m1.name, m1.price, m1.ratings));
