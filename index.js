const R = require('ramda');


const id = (state) => Object.assign({},
        state
    );

const a = (state) => Object.assign({},
        state,
        { something: true }
     )

const b = (state) => Object.assign({},
        state,
        { something: false }
     )

const c = (state) => Object.assign({},
        state,
        { something: true,
            name: 'thomas'
        }
     )

const init = {}

// id

R.equals(init, id(init)); // true

// associative

const one = R.compose(R.compose(a, b), c)(init)
const two = R.compose(a, R.compose(b, c))(init)

R.equals(one, two); // true
