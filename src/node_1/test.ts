enum Direction {
  NORTH,
  SOUTH,
  EAST,
  WEST,
}

let dir: Direction = Direction.NORTH;
console.log(dir);

enum Status{
    Pending = 'pending'
    ,Success='success'
    ,Error='error'
}
let status: Status = Status.Success;
console.log(status);

enum Enum {
  A, //0
  B, //1
  C = "C", //C
  D = "D", //D
  E = 8,
  F, //9
}
let s: Enum = Enum.A;
console.log(s);
s = Enum.C;
console.log(s);
s = Enum.F;
console.log(s);
