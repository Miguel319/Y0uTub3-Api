import { Injectable } from "@angular/core";
import { apiKey, endPoint, playListId } from "../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class YoutubeService {
  private nextPageToken: string = "";

  constructor(private http: HttpClient) {}

  obtenerVideos() {
    let url = `${endPoint}/playlistItems`;
    let params = new HttpParams()
      .set("part", "snippet")
      .set("maxResults", "10")
      .set("playlistId", playListId)
      .set("key", apiKey);


    return this.http.get(url, { params: params }).pipe(
      map((res: any) => {
        let videos: any[] = [];

        for (let video of res.items) {
          let snippet = video.snippet;
          videos.push(snippet);
        }

        return videos;
      })
    );
  }
}
