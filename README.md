### JS Combinatorics Perfomance Issue

This respository demonstrates a huge performance degradation in js-cobinatorics library.
It shows how long it takes to iterate through all of the combinations of selecting 3 items from a 200 items array.

To run the test simply do:
```sh
$ git clone git@github.com:shahata/combinatorics-perfromance.git
$ npm install
$ node index.js
```

The result will be something like:
```
Combinatorics 0.6.1: 392049900 (891ms)
Combinatorics 2.1.1: 392049900 (71531ms)
```

It shows how the exact same iteration takes under 1 seconds in version 0.6.1 vs more than a minute in version 2.1.1

Reported here: https://github.com/dankogai/js-combinatorics/issues/75
