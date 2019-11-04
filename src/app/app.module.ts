import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./componentes/home/home.component";
import { NavbarComponent } from "./componentes/navbar/navbar.component";
import { APP_ROUTING } from "./app.routes";
import { VideoYtPipe } from "./pipes/video-yt.pipe";

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent, VideoYtPipe],
  imports: [BrowserModule, APP_ROUTING, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
