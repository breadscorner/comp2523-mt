import { IImportable } from "./Interface";

export class PlaylistImporter {
  private _importer: IImportable

  constructor(importer: IImportable) {
    this._importer = importer;
  }

  importPlaylist(): void {
    const playlist = this._importer.loadPlaylist();
    // Do something with the playlist
  }
}
