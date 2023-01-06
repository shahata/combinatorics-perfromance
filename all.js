import combinatorics061 from 'js-combinatorics061';
import * as combinatorics100 from 'js-combinatorics100';
import * as combinatorics110 from 'js-combinatorics110';
import * as combinatorics111 from 'js-combinatorics111';
import * as combinatorics120 from 'js-combinatorics120';
import * as combinatorics121 from 'js-combinatorics121';
import * as combinatorics122 from 'js-combinatorics122';
import * as combinatorics123 from 'js-combinatorics123';
import * as combinatorics130 from 'js-combinatorics130';
import * as combinatorics140 from 'js-combinatorics140';
import * as combinatorics141 from 'js-combinatorics141';
import * as combinatorics142 from 'js-combinatorics142';
import * as combinatorics143 from 'js-combinatorics143';
import * as combinatorics144 from 'js-combinatorics144';
import * as combinatorics145 from 'js-combinatorics145';
import * as combinatorics150 from 'js-combinatorics150';
import * as combinatorics151 from 'js-combinatorics151';
import * as combinatorics152 from 'js-combinatorics152';
import * as combinatorics153 from 'js-combinatorics153';
import * as combinatorics154 from 'js-combinatorics154';
import * as combinatorics155 from 'js-combinatorics155';
import * as combinatorics156 from 'js-combinatorics156';
import * as combinatorics157 from 'js-combinatorics157';
import * as combinatorics200 from 'js-combinatorics200';
import * as combinatorics201 from 'js-combinatorics201';
import * as combinatorics210 from 'js-combinatorics210';
import * as combinatorics211 from 'js-combinatorics211';

const libs = [
  combinatorics061, combinatorics100, combinatorics110,
  combinatorics111, combinatorics120, combinatorics121,
  combinatorics122, combinatorics123, combinatorics130,
  combinatorics140, combinatorics141, combinatorics142,
  combinatorics143, combinatorics144, combinatorics145,
  combinatorics150, combinatorics151, combinatorics152,
  combinatorics153, combinatorics154, combinatorics155,
  combinatorics156, combinatorics157, combinatorics200,
  combinatorics201, combinatorics210, combinatorics211,
];

function tryLib(lib, input) {
  let i = 0;
  if (lib.bigCombination) {
    lib.bigCombination(input, 3).forEach(x => i++);
  } else {
    for (const x of new lib.Combination(input, 3)) i++;
  }
  return i;
}

const a200 = Array(200).fill(0).map((v, i) => i);
for (const lib of libs) {
  const start = performance.now();
  const result = tryLib(lib, a200);
  const end = performance.now();
  const duration = `(${Math.round(end - start)}ms)`;
  console.log(`Combinatorics ${lib.version || lib.VERSION}:`, result, duration);
}
