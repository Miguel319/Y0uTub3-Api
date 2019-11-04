import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./componentes/home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "**", pathMatch: "full", redirectTo: "" }
];

export const APP_ROUTING = RouterModule.forRoot(routes);
