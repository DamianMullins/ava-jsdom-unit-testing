import test from 'ava';
import { demo } from '../dist/demo-module';


test('can add numbers', t => {
    t.is(1 + 1, 2);
});

test('can import from demo module', t => {
    const expected = 'Hello, from demo module.';

    const result = demo();

    t.is(result, expected);
});

test('can query for DOM elements', t => {
    document.body.innerHTML = '<p>Hello, world</p>';

    const para = document.querySelector('p');

    t.is(para.innerHTML, 'Hello, world');
});
