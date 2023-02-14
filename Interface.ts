import { Playlist } from "./Playlist";

export interface IImportable {
  loadPlaylist(): Playlist
}