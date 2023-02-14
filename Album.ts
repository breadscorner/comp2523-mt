import { Song } from "./Song";

export class Album {
  private _albumTitle: string;
  private _artist: string;
  private _year: number;
  private _songs: Song[];
  
  constructor(title: string) {
    this._albumTitle = title;
  }

  public get albumTitle(): string {
      return this._albumTitle;
  }

  public get artist(): string {
    return this._artist;
  }

  public get year(): number {
    return this._year;
  }

  public get songs(): Song[] {
    return this._songs;
  }

  public set albumTitle(albumTitle: string) {
      this._albumTitle = albumTitle;
  }
}
