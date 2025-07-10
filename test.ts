import Movie from '../src/movie';

describe('Movie Class', () => {
  const testMovie = new Movie(
    'Мстители',
    2012,
    'США',
    'Avengers Assemble!',
    'фантастика, боевик',
    137
  );

  test('should create movie instance with correct properties', () => {
    expect(testMovie.title).toBe('Мстители');
    expect(testMovie.year).toBe(2012);
    expect(testMovie.tagline).toBe('Avengers Assemble!');
  });

  test('displayInfo should return formatted string', () => {
    const info = testMovie.displayInfo();
    expect(info).toContain('# Мстители');
    expect(info).toContain('- год    2012');
    expect(info).toContain('- страна    США');
  });

  test('should handle both string and number duration', () => {
    const movieWithStringDuration = new Movie(
      'Тест',
      2020,
      'РФ',
      'Слоган',
      'драма',
      '120 мин.'
    );
    expect(movieWithStringDuration.displayInfo()).toContain('120 мин.');
    expect(testMovie.displayInfo()).toContain('137 мин.');
  });
});