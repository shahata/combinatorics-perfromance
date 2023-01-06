import * as combinatorics211 from 'js-combinatorics211';
import * as combinatorics061 from 'js-combinatorics061';

let duration;
function timerify(fn) {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  duration = `(${Math.round(end - start)}ms)`;
  return result;
}

function try061(input) {
  let i = 0;
  combinatorics061.default.bigCombination(input, 3).forEach(x => i += x[0] + x[1] + x[2]);
  return i;
}

function try211(input) {
  let i = 0;
  for (const x of combinatorics211.Combination.of(input, 3)) i += x[0] + x[1] + x[2];
  return i;
}

const a200 = Array(200).fill(0).map((v, i) => i);
console.log(`Combinatorics 0.6.1: ${timerify(() => try061(a200))}`, duration);
console.log(`Combinatorics 2.1.1: ${timerify(() => try211(a200))}`, duration);
