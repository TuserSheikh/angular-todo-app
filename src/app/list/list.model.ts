export class ListModel {
  name!: string;
  isFavorite!: boolean;

  constructor(name: string, isFavorite = false) {
    this.name = name;
    this.isFavorite = isFavorite;
  }

  changeFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}
