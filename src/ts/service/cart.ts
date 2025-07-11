import Movie, { IMovie } from './movie';

export default class Cart {
  private items: IMovie[] = [];

  add(item: IMovie): void {
    this.items.push(item);
  }

  getAll(): IMovie[] {
    return [...this.items];
  }
}