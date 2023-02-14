import { Song } from "./Song";
import { Album } from "./Album";

export class Playlist {
  private _name: string;
  private _songs: Song[];

  constructor(name: string) {
    this._name = name;
    this._songs = [];
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get songs(): Song[] {
    return this._songs;
  }

  set songs(songs: Song[]) {
    this._songs = songs;
  }

  addAlbum(album: Album): void {
    const albumSongs: Song[] = album.songs;
    this._songs.push(...albumSongs);
  }
}
