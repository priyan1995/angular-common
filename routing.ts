import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VehicleEditComponent } from "./vehicle-edit/vehicle-edit.component";
import { VehicleViewComponent } from "./vehicle-view/vehicle-view.component";
import { VehicleComponent } from "./vehicle.component";

const routes: Routes = [
    {
        path: '',
        component: VehicleComponent
    },
    {
        path: 'vehicle-view',
        component: VehicleViewComponent
    },
    {
        path: 'vehicle-edit',
        component: VehicleEditComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class VehicleRoutingModule { }