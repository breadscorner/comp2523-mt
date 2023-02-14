import { Album } from "./Album";
import { Playlist } from "./Playlist";
import { Song } from "./Song";

export class User {
  private _username: string;
  private _password: string;
  private _playlist: Playlist[];
  private _albums: Album[];

  constructor(username: string, password: string) {
    this._username = username;
    this._password = password;
    }

  addPlaylist(playlist: Playlist) {
    this._playlist.push(playlist);
  }

  addAlbum(album: Album) {
    this._albums.push(album);
  }

  getSongs(): Song[] {
  // Need to figure out this part.
  }

  getAlbums(): Album[] {
    return this._albums;
  }

  getPlaylists(): Playlist[] {
    return this._playlist;
  }

  addPlaylists(playlists: Playlist[]) {
    this._playlist = this._playlist.concat(playlists);  
  }
}

