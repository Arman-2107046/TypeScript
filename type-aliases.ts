type User = {
  name: string;
  age: number;
  location: string;
};

const printUserInfo = (user: User) => {
  return `Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`;
};

// const user: User = {
//   name: "arman",
//   age: 21,
//   location: "Dhaka",
// };
const res = printUserInfo({
  name: "arman",
  age: 21,
  location: "Dhaka",
});

console.log(res);
