//Original Interface
interface Car {
  brand: string;
  start(): void;
}

//Declaration merging
interface Car {
  model: string;
  stop(): void;
}

const myCar: Car = {
  brand: "Range Rover",
  model: "AutoBioGraphy",

  start() {
    console.log("start the car");
  },
  stop() {
    console.log("stop the car");
  }
};


myCar.start();
myCar.stop();