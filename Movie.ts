export default class Movie {
  constructor(
    public title: string,
    public year: number,
    public country: string,
    public tagline: string,
    public genre: string,
    public duration: string | number
  ) {}

  // Метод для отображения информации в формате, похожем на КиноПоиск
  displayInfo(): string {
    return `
# ${this.title}  [IMAX](#)

## ${this.title}

- год    ${this.year}  
- страна    ${this.country}  
- слоган    «${this.tagline}»  
- жанр    ${this.genre}  
- время    ${typeof this.duration === 'number' ? `${this.duration} мин.` : this.duration}  
    `;
  }
}