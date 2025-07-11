export interface IMovie {
  title: string;
  year: number;
  country: string;
  tagline: string;
  genre: string;
  duration: string;
}

export default class Movie implements IMovie {
  constructor(
    public title: string,
    public year: number,
    public country: string,
    public tagline: string,
    public genre: string,
    public duration: string
  ) {}

  getFormattedInfo(): string {
    return `
# ${this.title}

${this.title}

- год
  ${this.year}

- страна
  ${this.country}

- слоган
  «${this.tagline}»

- жанр
  ${this.genre}

- время
  ${this.duration}
    `;
  }
}

export default class Movie {
  constructor(
    public title: string,
    public year: number,
    public country: string,
    public tagline: string,
    public genre: string,
    public duration: string | number
  ) {}

  getFormattedDuration(): string {
    return typeof this.duration === 'number' 
      ? `${this.duration} мин. / ${Math.floor(this.duration/60)}:${this.duration%60}` 
      : this.duration;
  }

  displayInfo(): string {
    return `
# ${this.title} [IMAX](#)

## The Avengers

- год    ${this.year}
- страна    ${this.country}
- слоган    «${this.tagline}»
- жанр    ${this.genre}
- время    ${this.getFormattedDuration()}
    `;
  }
}