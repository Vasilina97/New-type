import Movie from './movie';
import Cart from './cart';

const avengers = new Movie(
  'Мстители',
  2012,
  'США',
  'Avengers Assemble!',
  'фантастика, боевик, фэнтези, приключения',
  '137 мин. / 02:17'
);

const cart = new Cart();
cart.add(avengers);

console.log(avengers.getFormattedInfo());
console.log('Items in cart:', cart.getAll().length);