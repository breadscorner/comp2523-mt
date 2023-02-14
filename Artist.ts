export class Artist {
  name: string;
  albums: string[];

  constructor(name: string) {
    this.name = name;
    this.albums = [];
  }

  addAlbum(album: string) {
    this.albums.push(album);
  }
}