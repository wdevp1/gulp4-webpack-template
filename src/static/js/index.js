/* eslint-disable no-unused-vars */
import 'core-js/features/promise';
import divide from './lib';

console.log(divide(4, 2));
console.log(divide(5, 2));
console.log(divide(15, 2));
console.log(divide(105, 2));
console.log(divide(125));

// eslint-disable-next-line prefer-arrow-callback
(new Promise(function(resolve, reject) {
  setTimeout(resolve, 1000);
})).then(() => {
  console.log('promise resolved');
});
