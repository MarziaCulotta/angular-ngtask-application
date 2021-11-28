import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared/shared.module";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { HomeComponent } from "./home/home.component";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    DashboardRoutingModule,
    SharedModule
  ]
})

export class DashboardModule {}
