import { Component, OnInit } from "@angular/core";
import { YoutubeService } from "../../servicios/youtube.service";
declare const $: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  videos: any[] = [];
  videoSeleccionado: any;

  constructor(private youTubeS: YoutubeService) {}

  ngOnInit() {
    this.youTubeS.obtenerVideos().subscribe(videos => (this.videos = videos));
  }

  verVideo(video: any) {
    this.videoSeleccionado = video;
    $("#myModal").modal();
  }

  cerrarModal() {
    this.videoSeleccionado = null;
    $("#myModal").modal("hide");
  }
}
