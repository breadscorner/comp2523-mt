import { Album } from "./Album";
import { IImportable } from "./Interface";
import { Playlist } from "./Playlist";

export class LocalImporter implements IImportable {
  private _fileName: string;

  loadPlaylist(): Playlist {
    // throw new Error("Method not implemented.");
    console.log(this._fileName);
    const pl = new Playlist("fakePlaylist")
    pl.addAlbum(new Album("Whatever"));
    return pl;
  }

  constructor(fileName:string) {
    this._fileName = fileName;
  }
}