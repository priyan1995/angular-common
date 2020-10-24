import { NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { CountdownModule } from "ngx-countdown";
import { SharedModule } from "src/app/guest/_shared/shared.module";
import { VehicleEditComponent } from "./vehicle-edit/vehicle-edit.component";
import { VehicleViewComponent } from "./vehicle-view/vehicle-view.component";
import { VehicleComponent } from "./vehicle.component";
import { VehicleRoutingModule } from "./vehicle.routing";


const components = [
    VehicleComponent,
    VehicleEditComponent,
    VehicleViewComponent
];

@NgModule({
    declarations: components,
    imports: [
      VehicleRoutingModule,
      SharedModule,
      TranslateModule,
      CountdownModule  
    ],
    exports: components
})

export class VehicleModule { }