const R = require('ramda');


const id = (state) => Object.assign({}, state);

const a = (state) => Object.assign({}, state, { x: true })

const b = (state) => Object.assign({}, state, { x: false })

const c = (state) => Object.assign({}, state, { x: true, y: false })

const init = {}


// id

const x = R.compose(id, a);
const y = R.compose(a, id);

const res1 = R.equals(x(init), y(init)); // true

// associative

const one = R.compose(R.compose(a, b), c)
const two = R.compose(a, R.compose(b, c))

const res2 = R.equals(one(init), two(init)); // true
