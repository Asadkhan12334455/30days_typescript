let magicians: string[] = ["Alice", "David", "Chris"];

function makeGreat(magicians: string[]): string[] {
  let greatMagicians: string[] = []; // Explicitly typed as string[]
  for (let magician of magicians) {
    greatMagicians.push(`${magician} the Great`);
  }
  return greatMagicians;
}

function showMagicians(magicians: string[]) {
  for (let magician of magicians) {
    console.log(magician);
  }
}

let greatMagicians = makeGreat(magicians); // Creates a new modified array
console.log("Original magicians:");
showMagicians(magicians); // Shows original names
console.log("Great magicians:");
showMagicians(greatMagicians); // Shows modified names
