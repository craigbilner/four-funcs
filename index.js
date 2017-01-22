// function * range(from, to) { while (from <= to) { yield from; from++; } return to; }
// function * map(xs, func) { for (let x of xs) { yield func(x); } }
// const reverseValues = (prev) => (x) => x === undefined ? prev : reverseValues((cb) => (cb(x), prev));
// const doReverse = (xs) => { let reverse = reverseValues(); for (let x of xs) { reverse = reverse(x); } return reverse(); };
// function * reverse(xs) { let next = doReverse(xs); let val; do { next = next(v => val = v); yield val; } while (next); }
// const foreach = (xs, func) => { for (let x of xs) { func(x); } };

function * range(from, to) {
  while (from <= to) {
    yield from;
    from++;
  }
  return to;
}

function * map(xs, func) {
  for (let x of xs) {
    yield func(x);
  }
}

const reverseValues = (prev) => (x) => x === undefined ? prev : reverseValues((cb) => (cb(x), prev));

const doReverse = (xs) => {
  let reverse = reverseValues();
  for (let x of xs) {
    reverse = reverse(x);
  }
  return reverse();
};

function * reverse(xs) {
  let next = doReverse(xs);
  let val;
  do {
    next = next(v => val = v);
    yield val;
  } while (next);
}

const foreach = (xs, func) => {
  for (let x of xs) {
    func(x);
  }
};

let numbers = range(1, 10);
numbers = map(numbers, function(n) {
  return n * n
});
numbers = reverse(numbers);
foreach(numbers, console.log);
