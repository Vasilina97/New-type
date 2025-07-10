import Movie from './movie';

// Создание объекта фильма
const avengers = new Movie(
  'Мстители',
  2012,
  'США',
  'Avengers Assemble!',
  'фантастика, боевик, фэнтези, приключения',
  '137 мин. / 02:17'
);

console.log(avengers.displayInfo());

// Добавление в корзину (пример)
class Cart {
  private items: Movie[] = [];

  addToCart(item: Movie): void {
    this.items.push(item);
    console.log(`"${item.title}" добавлен в корзину`);
  }
}

const cart = new Cart();
cart.addToCart(avengers);