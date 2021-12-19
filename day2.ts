import { example, input } from './day2-input';

class Sub {
  public aim = 0;
  public depth = 0;
  public horizontal = 0;
  constructor(aim: number, depth: number, horizontal: number) {
    this.depth = depth;
    this.horizontal = horizontal;
  }

  move({ movement, units }: { movement: string; units: number }) {
    if (movement === 'forward') {
      return this.propel(units);
    }
    if (movement === 'up') {
      return this.climb(units);
    }
    if (movement === 'down') {
      return this.dive(units);
    }
    return;
  }

  climb(units: number) {
    this.aim -= units;
  }

  dive(aim: number) {
    this.aim += aim;
  }

  propel(units: number) {
    this.horizontal += units;
    this.depth += this.aim * units;
  }

  getPosition() {
    return (this.depth *= this.horizontal);
  }
}

const inputSub = new Sub(0, 0, 0);
input.forEach((instruction) => {
  inputSub.move(instruction);
});

console.log(
  'aim: ',
  inputSub.aim,
  'depth: ',
  inputSub.depth,
  'horizontal: ',
  inputSub.horizontal,
  'position: ',
  inputSub.getPosition()
);

// const exampleSub = new Sub(0, 0, 0);
// example.forEach((instruction) => exampleSub.move(instruction));

// console.log(
//   'aim: ',
//   exampleSub.aim,
//   'depth: ',
//   exampleSub.depth,
//   'horizontal: ',
//   exampleSub.horizontal,
//   'position: ',
//   exampleSub.getPosition()
// );
