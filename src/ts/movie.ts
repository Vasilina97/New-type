export default class Movie {
  constructor(
    public title: string,
    public year: number,
    public country: string,
    public tagline: string,
    public genre: string,
    public duration: string | number
  ) {}

  private formatDuration(): string {
    if (typeof this.duration === 'number') {
      const hours = Math.floor(this.duration / 60);
      const mins = this.duration % 60;
      return `${this.duration} мин. / ${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
    }
    return this.duration;
  }

  displayInfo(): string {
    return `
# ${this.title} [IMAX](#)

## The Avengers

- год    ${this.year}
- страна    ${this.country}
- слоган    «${this.tagline}»
- жанр    ${this.genre}
- время    ${this.formatDuration()}
    `;
  }
}