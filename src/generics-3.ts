// the function will receive an object. whose key must be string but value can be anything. and return will be an object {key, value}
// the const keys=Object.keys(obj) turns the object into an array of keys and randKeys chooses any of the index between the length.
//then particular things are selected as requirement

// function getRandomKeyValuePair<T>(obj: { [key: string]: T }): {
//   key: string;
//   value: T;
// } {
//   const keys = Object.keys(obj);
//   const randKey = keys[Math.floor(Math.random() * keys.length)];

//   return { key: randKey, value: obj[randKey] };
// }

// const stringObj={a:'apple',b:'banana', c:"cherry"};
// const res=getRandomKeyValuePair<string>(stringObj);

// console.log(res);