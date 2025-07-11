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