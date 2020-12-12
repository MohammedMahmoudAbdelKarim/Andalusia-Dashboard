import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UnderDevelopmentComponent } from "./under-development/under-development.component";

const routes: Routes = [
  {
    path: "",
    component: UnderDevelopmentComponent,
  },
  {
    path: "doctors",
    component: UnderDevelopmentComponent,
  },
  {
    path: "nurses",
    component: UnderDevelopmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnderDevelopmentRoutingModule {}
