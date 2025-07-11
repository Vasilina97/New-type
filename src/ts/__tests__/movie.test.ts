import Movie from '../movie';
import Cart from '../cart';

describe('Movie Class', () => {
  const testMovie = new Movie(
    'Мстители',
    2012,
    'США',
    'Avengers Assemble!',
    'фантастика, боевик',
    '137 мин. / 02:17'
  );

  test('should create movie with correct properties', () => {
    expect(testMovie.title).toBe('Мстители');
    expect(testMovie.year).toBe(2012);
  });

  test('should format numeric duration', () => {
    const movie = new Movie('Test', 2023, 'RU', 'Test', 'Test', 125);
    expect(movie.displayInfo()).toContain('125 мин. / 02:05');
  });
});

describe('Cart Integration', () => {
  test('should add movie to cart', () => {
    const cart = new Cart();
    const movie = new Movie('Test', 2023, 'RU', 'Test', 'Test', '90 мин.');
    cart.add(movie);
    expect(cart.getAll()).toContainEqual(movie);
  });
});