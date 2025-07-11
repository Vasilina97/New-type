import Movie from '../src/movie';

describe('Movie Class', () => {
  const testMovie = new Movie(
    'Мстители',
    2012,
    'США',
    'Avengers Assemble!',
    'фантастика, боевик',
    '137 мин.'
  );

  test('should create movie with correct properties', () => {
    expect(testMovie.title).toBe('Мстители');
    expect(testMovie.year).toBe(2012);
    expect(testMovie.tagline).toBe('Avengers Assemble!');
  });

  test('should format info correctly', () => {
    const expectedOutput = `
# Мстители

Мстители

- год
  2012

- страна
  США

- слоган
  «Avengers Assemble!»

- жанр
  фантастика, боевик

- время
  137 мин.
    `;
    expect(testMovie.getFormattedInfo()).toBe(expectedOutput);
  });
});

describe('Cart Integration', () => {
  test('should add movie to cart', () => {
    const cart = new Cart();
    const movie = new Movie('Test', 2020, 'RU', 'Test', 'Test', '90 мин.');
    cart.add(movie);
    expect(cart.getAll()).toContain(movie);
  });
});