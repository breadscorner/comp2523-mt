import { IImportable } from "./Interface";
import { Playlist } from "./Playlist";

export class CloudImporter implements IImportable {
  private _url: string;

  loadPlaylist(): Playlist {
    // throw new Error("Method not implemented.");
    console.log(this._url);
    return new Playlist("fakePlaylist");
  }

  constructor(url:string) {
    this._url = url;
  }
}