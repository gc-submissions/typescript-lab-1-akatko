export interface Mountain {
  name: string;
  height: number;
}

// let myArray = [1, 2, 3, 4, 5];

let mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

export function findNameOfTallestMountain(arrayOfMountains: Mountain[]) {
  let tallestHeight = 0;
  let tallestName = "";
  for (let i = 0; i < arrayOfMountains.length; i++) {
    if (arrayOfMountains[i].height > tallestHeight) {
      tallestHeight = arrayOfMountains[i].height;
      tallestName = arrayOfMountains[i].name;
    }
  }
  return tallestName;
}

console.log(findNameOfTallestMountain(mountains));
